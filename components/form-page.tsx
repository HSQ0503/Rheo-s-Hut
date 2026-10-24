import type { LucideIcon } from "lucide-react";
import { Mail } from "lucide-react";
import type { ReactNode } from "react";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { textLink } from "@/components/ui";
import { email } from "@/lib/site";

export function FormPage({
  kind,
  eyebrow,
  title,
  intro,
  tint,
  points,
  children,
}: {
  kind: "contact" | "volunteer" | "sponsor";
  eyebrow: string;
  title: string;
  intro: string;
  tint?: string;
  points: { icon: LucideIcon; title: string; body: string }[];
  children?: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} tint={tint}>
        <p>{intro}</p>
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pt-6 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <ul className="space-y-6">
            {points.map(({ icon: Icon, title: pointTitle, body }) => (
              <li key={pointTitle} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky">
                  <Icon className="h-6 w-6 text-blue-strong" aria-hidden />
                </span>
                <span>
                  <span className="block font-heading text-xl font-semibold">{pointTitle}</span>
                  <span className="mt-1 block leading-relaxed text-muted">{body}</span>
                </span>
              </li>
            ))}
          </ul>
          {children}
          <p className="mt-10 flex items-center gap-2 text-muted">
            <Mail className="h-5 w-5 shrink-0" aria-hidden />
            <span>
              Prefer email?{" "}
              <a className={textLink} href={`mailto:${email}`}>
                {email}
              </a>
            </span>
          </p>
        </div>
        <InquiryForm kind={kind} />
      </section>
    </>
  );
}
