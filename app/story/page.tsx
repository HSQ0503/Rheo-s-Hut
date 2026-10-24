import type { Metadata } from "next";
import Image from "next/image";
import { HeartIcon } from "@/components/decor";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui";
import { founder, memory, motto, story } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rheo's Story",
  description:
    "Rheo Moon Moss was born June 25, 2021, and died August 16, 2021. Rheo's Hut Community Center is being built in his memory.",
};

const pullQuote = "Rheo's life was short, but his legacy doesn't have to be.";

export default function StoryPage() {
  const [opening, ...rest] = story;

  return (
    <>
      <PageHero eyebrow="Rheo's Story" title="The Heart Behind Rheo's Hut" tint="bg-blush">
        <p>Rheo Moon Moss · His name is said Ree-yo.</p>
      </PageHero>

      <article className="mx-auto grid max-w-6xl gap-12 px-5 pt-6 lg:grid-cols-[380px_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <figure className="mx-auto max-w-sm">
            <div className="relative">
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-blue" aria-hidden />
              <Image
                src="/rheo.jpg"
                alt="Rheo Moon Moss as a baby, eyes closed, smiling, wrapped in a soft blue blanket."
                width={1448}
                height={1086}
                preload
                sizes="(min-width: 1024px) 380px, 100vw"
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-[45%_center] shadow-xl"
              />
            </div>
            <figcaption className="mt-6 text-center">
              <HeartIcon className="mx-auto h-6 w-6 text-heart" />
              <span className="mt-2 block font-heading text-xl font-semibold">Rheo Moon Moss</span>
              <span className="block text-muted">{memory.dates}</span>
            </figcaption>
          </figure>
        </aside>

        <div className="max-w-2xl font-reading text-lg leading-[1.85] sm:text-xl">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:font-heading first-letter:text-7xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-blue-strong">
            {opening}
          </p>
          {rest.map((paragraph) =>
            paragraph === pullQuote ? (
              <blockquote
                key={paragraph}
                className="my-10 rounded-3xl bg-cream px-8 py-7 font-heading text-2xl font-semibold leading-snug text-bark sm:text-3xl"
              >
                &ldquo;{paragraph}&rdquo;
              </blockquote>
            ) : (
              <p key={paragraph} className="mt-6">
                {paragraph}
              </p>
            ),
          )}
          <p className="mt-10 font-display text-base">
            <span className="block font-bold">{founder}</span>
            <span className="text-muted">Rheo&apos;s mother and founder of Rheo&apos;s Hut</span>
          </p>

          <div className="mt-12 rounded-3xl bg-sky p-8 font-display">
            <p className="font-heading text-2xl font-semibold text-blue-deep">{motto}</p>
            <p className="mt-3 text-base leading-relaxed text-ink/80">
              Help carry Rheo&apos;s legacy forward by supporting the center built in his name.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/donate">Donate</ButtonLink>
              <ButtonLink href="/volunteer" variant="outline">
                Volunteer
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
