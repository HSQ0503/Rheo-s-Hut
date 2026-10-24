import { Building2, Heart, Info, Mail, Sprout, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { buttonClass, textLink } from "@/components/ui";
import { amounts, email, venmoUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Rheo's Hut Community Center. Gifts are not tax-deductible yet because 501(c)(3) status is still in progress.",
};

const uses = [
  { icon: Sprout, title: "Startup costs", body: "The essentials to get a new nonprofit on its feet." },
  { icon: Building2, title: "A home in Knoxville", body: "Finding and preparing a safe, welcoming facility." },
  { icon: Users, title: "Kids and families", body: "Programs, meals, and support for every child." },
];

export default function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Donate" title="Help build a place where every child belongs">
        <p>
          Every contribution, no matter the size, helps us get one step closer to opening Rheo&apos;s
          Hut Community Center.
        </p>
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-[2rem] bg-white p-7 shadow-[0_10px_40px_rgba(47,27,16,0.1)] sm:p-10">
          <h2 className="text-3xl font-bold">Give today</h2>
          <p className="mt-3 text-muted">Choose any amount that feels right. Suggested gifts:</p>
          <ul className="mt-6 grid grid-cols-4 gap-2 sm:gap-3">
            {amounts.map((amount) => (
              <li
                key={amount}
                className="flex min-h-14 items-center justify-center rounded-2xl bg-sky font-heading text-xl font-semibold text-blue-deep"
              >
                {amount}
              </li>
            ))}
            <li className="flex min-h-14 items-center justify-center rounded-2xl bg-meadow text-center font-heading text-base font-semibold leading-tight text-green-strong">
              Any amount
            </li>
          </ul>

          {venmoUrl ? (
            <a
              href={venmoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClass("blue")} mt-8 w-full`}
            >
              <Heart className="h-5 w-5 fill-current" aria-hidden />
              Donate with Venmo
            </a>
          ) : (
            <div className="mt-8 rounded-2xl bg-cream p-5">
              <p className="font-semibold">Our Venmo donate button is coming soon.</p>
              <p className="mt-1 text-muted">
                Until then, email us and we&apos;ll send you a way to give.
              </p>
              <a
                href={`mailto:${email}?subject=Gift%20for%20Rheo%27s%20Hut`}
                className={`${buttonClass("blue")} mt-4 w-full`}
              >
                <Mail className="h-5 w-5" aria-hidden />
                Email to give
              </a>
            </div>
          )}

          <p className="mt-6 flex gap-3 rounded-2xl border border-ink/10 p-4 text-sm leading-relaxed text-muted">
            <Info className="h-5 w-5 shrink-0 text-blue-strong" aria-hidden />
            Rheo&apos;s Hut is pursuing 501(c)(3) tax-exempt status. Until it is approved, gifts are
            not tax-deductible. We will always be clear with donors about our status.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Where your gift goes</h2>
          <ul className="mt-6 space-y-4">
            {uses.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4 rounded-3xl bg-mist p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-strong">
                  <Icon className="h-6 w-6 text-white" aria-hidden />
                </span>
                <span>
                  <span className="block font-heading text-xl font-semibold">{title}</span>
                  <span className="mt-0.5 block text-muted">{body}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-relaxed text-muted">
            Want to give supplies or services instead? Visit our{" "}
            <Link href="/sponsor" className={textLink}>
              sponsor page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
