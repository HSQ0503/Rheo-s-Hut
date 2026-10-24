import type { ReactNode } from "react";
import { Confetti, Hills } from "@/components/decor";
import { Eyebrow } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  children,
  tint = "bg-sky",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  tint?: string;
}) {
  return (
    <section className={`relative ${tint}`}>
      <Confetti className="opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-14 sm:pt-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.1] text-ink sm:text-6xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/85 sm:text-xl">
            {children}
          </div>
        ) : null}
      </div>
      <Hills />
    </section>
  );
}
