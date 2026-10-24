import { Mail, RotateCcw, TriangleAlert } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink, buttonClass, textLink } from "@/components/ui";
import { email } from "@/lib/site";

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Message not sent",
  robots: { index: false },
};

const forms = {
  volunteer: { href: "/volunteer", subject: "Volunteering with Rheo's Hut" },
  sponsor: { href: "/sponsor", subject: "Sponsoring Rheo's Hut" },
  contact: { href: "/contact", subject: "Message for Rheo's Hut" },
};

type Kind = keyof typeof forms;

export function generateStaticParams() {
  return Object.keys(forms).map((kind) => ({ kind }));
}

export default async function NotSentPage({ params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  if (!(kind in forms)) notFound();
  const form = forms[kind as Kind];

  return (
    <section className="bg-blush px-5 py-20 sm:py-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-strong shadow-[0_6px_0_#a12d00]">
          <TriangleAlert className="h-10 w-10 text-white" strokeWidth={2.4} aria-hidden />
        </span>
        <h1 className="mt-8 text-4xl font-bold sm:text-5xl">Your message didn&apos;t go through</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink/80">
          Something went wrong on our end, so your note wasn&apos;t sent. Please try again, or email
          us directly at{" "}
          <a className={textLink} href={`mailto:${email}`}>
            {email}
          </a>
          . It reaches the same inbox.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href={form.href}>
            <RotateCcw className="h-5 w-5" aria-hidden />
            Try again
          </ButtonLink>
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(form.subject)}`}
            className={buttonClass("outline")}
          >
            <Mail className="h-5 w-5" aria-hidden />
            Email us instead
          </a>
        </div>
      </div>
    </section>
  );
}
