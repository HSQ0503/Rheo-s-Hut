import { CalendarDays, Check, Mail, ShoppingBag } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { FacebookIcon } from "@/components/decor";
import { PageHero } from "@/components/page-hero";
import { textLink } from "@/components/ui";
import { accentStyles, calendarEmbedUrl, email, facebookUrl, fundraisers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fundraising",
  description:
    "Preorder Holiday Painting Kits from Rheo's Hut Community Center and see upcoming fundraisers.",
};

export default function FundraisingPage() {
  return (
    <>
      <PageHero eyebrow="Fundraising shop" title="Fundraisers that build the center" tint="bg-cream">
        <p>
          Every fundraiser brings Rheo&apos;s Hut closer to opening. New Year, New Art preorders are
          open now, while our Valentine&apos;s Day bags are still coming soon.
        </p>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 pt-6">
        <ul className="space-y-6">
          {fundraisers.map((fundraiser) => {
            const style = accentStyles[fundraiser.accent];
            const orderDetails = fundraiser.orderDetails;
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
                  <p className="mt-3 text-lg leading-relaxed text-muted">{fundraiser.body}</p>

                  {orderDetails ? (
                    <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
                      <figure className="overflow-hidden rounded-3xl border border-ink/10 bg-mist shadow-sm">
                        <Image
                          src={orderDetails.flyer.src}
                          alt={orderDetails.flyer.alt}
                          width={1260}
                          height={1548}
                          sizes="(min-width: 1024px) 510px, calc(100vw - 5rem)"
                          className="h-auto w-full"
                        />
                      </figure>

                      <div>
                        <h3 className="text-2xl font-bold">{orderDetails.offerName}</h3>
                        <p className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-meadow px-4 py-3 font-semibold text-green-strong">
                          <ShoppingBag className="h-5 w-5 shrink-0" aria-hidden />
                          Preorders are open
                        </p>

                        <div className="mt-7 grid gap-7 sm:grid-cols-2">
                          <section>
                            <h4 className="text-xl font-bold">Kits include</h4>
                            <ul className="mt-3 space-y-2">
                              {orderDetails.included.map((item) => (
                                <li key={item} className="flex gap-2 leading-relaxed text-muted">
                                  <Check
                                    className="mt-1 h-4 w-4 shrink-0 text-green-strong"
                                    aria-hidden
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </section>

                          <section>
                            <h4 className="text-xl font-bold">Pricing</h4>
                            <dl className="mt-3 space-y-2">
                              {orderDetails.pricing.map((price) => (
                                <div
                                  key={price.quantity}
                                  className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-2"
                                >
                                  <dt className="text-muted">{price.quantity}</dt>
                                  <dd className="font-bold">{price.price}</dd>
                                </div>
                              ))}
                            </dl>
                            <p className="mt-3 font-semibold text-purple">
                              {orderDetails.additionalKitPrice}
                            </p>
                          </section>
                        </div>

                        <section className="mt-7 rounded-3xl bg-mist p-5">
                          <h4 className="text-xl font-bold">How to order</h4>
                          <p className="mt-2 leading-relaxed text-muted">
                            Place your order through either option:
                          </p>
                          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                            <a
                              href={facebookUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${textLink} inline-flex items-center gap-2`}
                            >
                              <FacebookIcon className="h-5 w-5" />
                              Rheo&apos;s Hut Community Center on Facebook
                            </a>
                            <a
                              href={`mailto:${email}`}
                              className={`${textLink} inline-flex items-center gap-2`}
                            >
                              <Mail className="h-5 w-5" aria-hidden />
                              {email}
                            </a>
                          </div>

                          <h4 className="mt-6 font-bold">Include with your order</h4>
                          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-muted">
                            {orderDetails.orderFields.map((field) => (
                              <li key={field}>• {field}</li>
                            ))}
                          </ul>
                          <p className="mt-5 font-bold text-purple">{orderDetails.available}</p>
                        </section>
                      </div>
                    </div>
                  ) : (
                    <p className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-mist px-4 py-3 text-sm font-semibold text-muted">
                      <ShoppingBag className="h-5 w-5 shrink-0" aria-hidden />
                      Ordering opens soon. Follow us on Facebook to hear first.
                    </p>
                  )}
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
