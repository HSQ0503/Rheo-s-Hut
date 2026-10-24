"use server";

import { createHash } from "node:crypto";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { email as publicEmail } from "@/lib/site";

export type InquiryKind = "contact" | "volunteer" | "sponsor";

export type InquiryState = {
  status: "idle" | "error";
  message: string;
};

function readField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const subjects: Record<InquiryKind, string> = {
  contact: "Message from the Rheo's Hut website",
  volunteer: "Volunteer note from the Rheo's Hut website",
  sponsor: "Sponsor note from the Rheo's Hut website",
};

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const kind = readField(formData, "kind");
  if (kind !== "contact" && kind !== "volunteer" && kind !== "sponsor") {
    return { status: "error", message: "That form could not be sent. Email us instead." };
  }

  // Bots that fill the hidden field get the normal thank-you so they don't retry.
  if (readField(formData, "company")) {
    redirect(`/thank-you/${kind}`);
  }

  const name = readField(formData, "name").slice(0, 200);
  const sender = readField(formData, "email").slice(0, 200);
  const phone = readField(formData, "phone").slice(0, 40);
  const organization = readField(formData, "organization").slice(0, 200);
  const message = readField(formData, "message").slice(0, 5000);

  if (!name || !looksLikeEmail(sender) || !message) {
    return {
      status: "error",
      message: "Add your name, a real email, and a note, then send it again.",
    };
  }

  if (kind === "sponsor" && !organization) {
    return { status: "error", message: "Add the organization name, then send it again." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.INQUIRY_TO || publicEmail;

  if (!apiKey || !from) {
    redirect(`/not-sent/${kind}`);
  }

  const body = [
    `Name: ${name}`,
    organization ? `Organization: ${organization}` : null,
    `Email: ${sender}`,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const idempotencyKey = `inquiry/${createHash("sha256")
    .update(`${kind}|${sender}|${message}`)
    .digest("hex")
    .slice(0, 48)}`;

  let sent = false;
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send(
      {
        from,
        to: [to],
        replyTo: sender,
        subject: subjects[kind],
        text: body,
      },
      { idempotencyKey },
    );
    sent = !error;
    if (error) console.error("Resend rejected inquiry email", error);
  } catch (error) {
    console.error("Inquiry email failed", error);
  }

  // redirect() throws to navigate, so it must stay outside the try block.
  redirect(sent ? `/thank-you/${kind}` : `/not-sent/${kind}`);
}
