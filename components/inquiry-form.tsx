"use client";

import { CircleAlert, Send } from "lucide-react";
import { useActionState } from "react";
import { sendInquiry, type InquiryState } from "@/app/inquiry-action";
import { buttonClass } from "@/components/ui";

const initial: InquiryState = { status: "idle", message: "" };

const labelClass = "mb-5 block font-heading text-base font-medium";
const fieldClass =
  "mt-1.5 w-full rounded-2xl border-2 border-ink/10 bg-mist px-4 py-3 font-display text-base text-ink transition-colors duration-200 outline-none placeholder:text-muted/60 focus:border-blue-strong focus:bg-white";

const titles = {
  contact: "Send us a message",
  volunteer: "Add your name to the volunteer list",
  sponsor: "Tell us about your organization",
};

export function InquiryForm({
  kind,
}: {
  kind: "contact" | "volunteer" | "sponsor";
}) {
  const [state, action, pending] = useActionState(sendInquiry, initial);

  return (
    <form
      action={action}
      className="rounded-[2rem] bg-white p-7 shadow-[0_10px_40px_rgba(47,27,16,0.1)] sm:p-9"
    >
      <h2 className="mb-6 text-2xl font-bold">{titles[kind]}</h2>
      <input type="hidden" name="kind" value={kind} />
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className={labelClass}>
        Your name
        <input name="name" required autoComplete="name" className={fieldClass} />
      </label>

      {kind === "sponsor" ? (
        <label className={labelClass}>
          Business or organization
          <input name="organization" required autoComplete="organization" className={fieldClass} />
        </label>
      ) : null}

      <div className={kind === "contact" ? "" : "grid gap-x-4 sm:grid-cols-2"}>
        <label className={labelClass}>
          Email
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>

        {kind !== "contact" ? (
          <label className={labelClass}>
            Phone <span className="text-muted">(optional)</span>
            <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
          </label>
        ) : null}
      </div>

      <label className={labelClass}>
        {kind === "contact" ? "Message" : "How you'd like to help"}
        <textarea name="message" required rows={5} className={`${fieldClass} resize-y`} />
      </label>

      <button type="submit" disabled={pending} className={`${buttonClass("green")} w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto`}>
        <Send className="h-5 w-5" aria-hidden />
        {pending ? "Sending…" : "Send"}
      </button>

      {state.status === "error" ? (
        <p
          role="alert"
          className="mt-5 flex gap-2 rounded-2xl bg-blush p-4 font-semibold text-heart-strong"
        >
          <CircleAlert className="h-5 w-5 shrink-0" aria-hidden />
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
