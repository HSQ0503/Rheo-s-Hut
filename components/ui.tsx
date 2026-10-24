import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "blue" | "green" | "outline" | "white";

// Each button sits on a solid "ledge" shadow; pressing drops it onto the ledge for a physical 3D click.
const variants: Record<ButtonVariant, string> = {
  blue: "bg-blue-strong text-white shadow-[0_5px_0_#004a75] hover:bg-[#0062ba]",
  green: "bg-green-strong text-white shadow-[0_5px_0_#005200] hover:bg-[#007400]",
  outline: "border-2 border-ink/15 bg-white text-ink shadow-[0_5px_0_rgba(47,27,16,0.15)] hover:border-blue-strong hover:text-blue-strong",
  white: "bg-white text-blue-deep shadow-[0_5px_0_rgba(0,40,80,0.35)] hover:bg-cream",
};

export const pressable =
  "transition-[transform,box-shadow,background-color,border-color,color] duration-100 ease-out hover:-translate-y-0.5 active:translate-y-[5px] active:shadow-none";

export function buttonClass(variant: ButtonVariant = "blue") {
  return `inline-flex min-h-12 cursor-pointer select-none items-center justify-center gap-2 rounded-full px-6 font-heading text-lg font-semibold ${pressable} ${variants[variant]}`;
}

export function ButtonLink({
  variant = "blue",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return <Link {...props} className={`${buttonClass(variant)} ${className}`} />;
}

export function Eyebrow({
  children,
  className = "text-blue-strong",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`font-heading text-sm font-semibold uppercase tracking-[0.14em] ${className}`}>
      {children}
    </p>
  );
}

export const textLink =
  "font-semibold text-blue-deep underline decoration-blue/40 decoration-2 underline-offset-4 transition-colors hover:decoration-blue-deep";
