import { CalendarDays, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";
import { FacebookIcon } from "@/components/decor";
import { PageHero } from "@/components/page-hero";
import { textLink } from "@/components/ui";
import { accentStyles, calendarEmbedUrl, facebookUrl, fundraisers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fundraising",
  description:
    "Upcoming fundraisers for Rheo's Hut Community Center. Nothing is for sale yet. A New Year art fundraiser and Valentine's Day bags are planned.",
};

export default function FundraisingPage() {
  return (
    <>
      <PageHero eyebrow="Fundraising shop" title="Fundraisers that build the center" tint="bg-cream">
        <p>
          Every fundraiser brings Rheo&apos;s Hut closer to opening. Nothing is for sale today. When
          orders open, you&apos;ll find the item, price, deadline, and how to pay and pick up right
          here.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 pt-6">
        <ul className="grid gap-6 md:grid-cols-2">
          {fundraisers.map((fundraiser) => {
            const style = accentStyles[fundraiser.accent];
            return (
              <li
                key={fundraiser.name}
                className="flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_30px_rgba(47,27,16,0.08)]"
              >
                <div className={`flex items-center justify-between gap-4 px-7 py-5 ${style.tint}`}>
                  <span className={`inline-flex items-center gap-2 font-bold ${style.text}`}>
                    <CalendarDays className="h-5 w-5" aria-hidden />
                    {fundraiser.when}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-ink">
                    {fundraiser.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="text-3xl font-bold">{fundraiser.name}</h2>
                  <p className="mt-3 flex-1 text-lg leading-relaxed text-muted">{fundraiser.body}</p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-mist px-4 py-3 text-sm font-semibold text-muted">
                    <ShoppingBag className="h-5 w-5 shrink-0" aria-hidden />
                    Ordering opens soon. Follow us on Facebook to hear first.
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <h2 className="text-3xl font-bold sm:text-4xl">Upcoming dates</h2>
        {calendarEmbedUrl ? (
          <iframe
            src={calendarEmbedUrl}
            title="Rheo's Hut Community Center calendar"
            className="mt-6 h-[600px] w-full rounded-3xl border border-ink/10"
          />
        ) : (
          <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl border-2 border-dashed border-ink/15 p-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl leading-relaxed text-muted">
              A calendar of fundraisers, events, and important dates is on its way. Until then, the
              two fundraisers above are the ones on the books.
            </p>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${textLink} inline-flex shrink-0 items-center gap-2`}
            >
              <FacebookIcon className="h-5 w-5" />
              Get updates on Facebook
            </a>
          </div>
        )}
      </section>
    </>
  );
}
