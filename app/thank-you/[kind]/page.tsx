import { CircleCheck } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Confetti, FacebookIcon } from "@/components/decor";
import { ButtonLink, buttonClass } from "@/components/ui";
import { facebookUrl } from "@/lib/site";

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false },
};

const messages = {
  volunteer: {
    title: "Thank you for volunteering!",
    body: "Your name is on our volunteer list. We'll reach out as programs and fundraisers take shape. Background checks will come later, before anyone works with children.",
  },
  sponsor: {
    title: "Thank you for wanting to partner with us!",
    body: "We received your sponsorship note and will be in touch by email soon. Partners like you help make Rheo's Hut possible.",
  },
  contact: {
    title: "Your message is on its way!",
    body: "Thanks for reaching out. We'll reply to the email address you gave us.",
  },
};

type Kind = keyof typeof messages;

export function generateStaticParams() {
  return Object.keys(messages).map((kind) => ({ kind }));
}

export default async function ThankYouPage({ params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  if (!(kind in messages)) notFound();
  const message = messages[kind as Kind];

  return (
    <section className="relative overflow-hidden bg-meadow px-5 py-20 sm:py-28">
      <Confetti />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-green-strong shadow-[0_6px_0_#005200]">
          <CircleCheck className="h-10 w-10 text-white" strokeWidth={2.4} aria-hidden />
        </span>
        <h1 className="mt-8 text-4xl font-bold sm:text-5xl">{message.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink/80">{message.body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("outline")}
          >
            <FacebookIcon className="h-5 w-5" />
            Follow our progress
          </a>
        </div>
      </div>
    </section>
  );
}
