import { Bus, CalendarDays, Clock, Gift, MapPin, Users } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProgramGroups } from "@/components/program-list";
import { ButtonLink, Eyebrow, textLink } from "@/components/ui";
import { accentStyles, email, promises } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Planned programs at Rheo's Hut Community Center for children ages 5 to 16 in Knoxville, Iowa. The center is not open yet.",
};

const plannedRates = [
  { amount: "$25", unit: "per child, per month" },
  { amount: "$10", unit: "registration, once a year" },
  { amount: "$50", unit: "per month for families with four or more children" },
];

const details = [
  { icon: CalendarDays, title: "Opening goal", body: "Fall 2028, depending on funding, a facility, and required approvals." },
  { icon: Clock, title: "When", body: "After school, plus full days in the summer and over school breaks." },
  { icon: MapPin, title: "Where", body: "Knoxville, Iowa. We're still searching for the right building." },
  { icon: Users, title: "How many", body: "Planned room for 50 children at one time." },
  { icon: Bus, title: "Transportation", body: "Not set up yet. Options will be shared as plans are finalized." },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero eyebrow="Programs" title="Room to learn, create, play, and belong">
        <p>
          Planned programs for children ages 5 to 16, with teen leadership for ages 16 to 18.
          Schedules, registration, and staff will be announced as we get closer to opening.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-3xl font-bold sm:text-4xl">What we&apos;re planning</h2>
          <span className="rounded-full bg-cream px-3 py-1 text-sm font-bold text-bark">
            Not open yet
          </span>
        </div>
        <div className="mt-8">
          <ProgramGroups detailed />
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <Eyebrow className="text-green-strong">Who it&apos;s for</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          Every child from Knoxville and Marion County is welcome
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {promises.map(({ title, body, icon: Icon, accent }) => (
            <li key={title} className={`flex gap-4 rounded-3xl p-6 ${accentStyles[accent].tint}`}>
              <Icon className={`h-8 w-8 shrink-0 ${accentStyles[accent].text}`} aria-hidden />
              <span>
                <span className="block font-heading text-xl font-semibold">{title}</span>
                <span className="mt-1 block leading-relaxed text-ink/80">{body}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-8 px-5 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The details so far</h2>
          <dl className="mt-8 divide-y divide-ink/10 rounded-3xl border border-ink/10">
            {details.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 p-5">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-blue-strong" aria-hidden />
                <div>
                  <dt className="font-heading text-lg font-semibold">{title}</dt>
                  <dd className="mt-0.5 text-muted">{body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="self-start rounded-[2rem] bg-blue-deep p-8 text-white">
          <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-bold">
            Planned rates · not enrolling yet
          </p>
          <ul className="mt-6 space-y-5">
            {plannedRates.map((rate) => (
              <li key={rate.unit} className="flex items-baseline gap-3">
                <span className="font-heading text-4xl font-bold text-sun">{rate.amount}</span>
                <span className="text-white/90">{rate.unit}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-8 space-y-2 border-t border-white/15 pt-6 text-white/90">
            <li className="flex gap-2">
              <Gift className="mt-0.5 h-5 w-5 shrink-0 text-sun" aria-hidden />
              Meals and regular snacks included
            </li>
            <li className="flex gap-2">
              <Gift className="mt-0.5 h-5 w-5 shrink-0 text-sun" aria-hidden />
              Scholarships and financial help as funding allows
            </li>
            <li className="flex gap-2">
              <Gift className="mt-0.5 h-5 w-5 shrink-0 text-sun" aria-hidden />
              An optional canteen for extra snacks and drinks
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <div className="rounded-[2rem] bg-meadow p-8 sm:p-12">
          <h2 className="text-3xl font-bold">Want to help get it started?</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink/80">
            Questions about a future program can go to{" "}
            <a className={textLink} href={`mailto:${email}`}>
              {email}
            </a>
            . Or lend a hand today.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/volunteer" variant="green">
              Volunteer
            </ButtonLink>
            <ButtonLink href="/donate" variant="outline">
              Donate
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
