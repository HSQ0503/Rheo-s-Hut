import { ArrowRight, CalendarDays, CircleCheck, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Confetti, HeartIcon, Hills, Sun } from "@/components/decor";
import { HelpCards } from "@/components/help-cards";
import { ProgramGroups } from "@/components/program-list";
import { ButtonLink, Eyebrow, textLink } from "@/components/ui";
import { accentStyles, comingSoon, fundraisers, roadmap, welcome } from "@/lib/site";

const mottoWords = [
  { word: "Learn,", color: "text-blue-strong" },
  { word: "Create,", color: "text-purple" },
  { word: "Play,", color: "text-orange-strong" },
  { word: "and Belong.", color: "text-green-strong" },
];

const facts = [
  { value: "5–16", label: "Ages welcome", color: "text-blue-strong" },
  { value: "16–18", label: "Teen leaders", color: "text-purple" },
  { value: "50", label: "Kids at a time", color: "text-orange-strong" },
  { value: "Meals", label: "And snacks included", color: "text-green-strong" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-sky via-white to-meadow">
        <Sun className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 opacity-90 sm:h-80 sm:w-80" />
        <Confetti className="opacity-70" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-6 pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pt-16">
          <div className="lg:order-2">
            <Image
              src="/logo.png"
              alt="Rheo's Hut Community Center logo: five children in a house under a smiling sun, with the motto A Safe Place to Learn, Create, Play, and Belong."
              width={1400}
              height={933}
              preload
              sizes="(min-width: 1024px) 560px, 100vw"
              className="mx-auto h-auto w-full max-w-lg mix-blend-multiply"
            />
          </div>
          <div className="lg:order-1">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-heading text-sm font-semibold text-blue-deep shadow-sm">
              <MapPin className="h-4 w-4" aria-hidden />
              Coming soon to Knoxville, Iowa
            </p>
            <h1 className="mt-5 text-[2.6rem] font-bold leading-[1.05] sm:text-6xl">
              A Safe Place to{" "}
              {mottoWords.map(({ word, color }) => (
                <span key={word} className={color}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85 sm:text-xl">{welcome}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/donate">Help us build it</ButtonLink>
              <ButtonLink href="/volunteer" variant="outline">
                Volunteer
              </ButtonLink>
            </div>
          </div>
        </div>
        <Hills />
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <figure className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 -rotate-6 rounded-[2.5rem] bg-sun" aria-hidden />
          <div className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-blue" aria-hidden />
          <Image
            src="/rheo.jpg"
            alt="Rheo Moon Moss as a baby, eyes closed, smiling, wrapped in a soft blue blanket."
            width={1448}
            height={1086}
            sizes="(min-width: 768px) 448px, 100vw"
            className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover object-[45%_center] shadow-xl"
          />
          <span className="absolute -bottom-5 -right-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
            <HeartIcon className="h-8 w-8 text-heart" />
          </span>
        </figure>
        <div>
          <Eyebrow className="text-heart-strong">In loving memory</Eyebrow>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Meet Rheo Moon Moss</h2>
          <p className="mt-2 text-muted">His name is said Ree-yo.</p>
          <p className="mt-6 text-lg leading-relaxed">
            Rheo was born on June 25, 2021, alongside his twin brother, and passed away at just 52
            days old. The little boy whose life inspired a place where every child can learn,
            create, play, and belong.
          </p>
          <blockquote className="mt-6 border-l-4 border-sun pl-5 font-reading text-xl italic leading-relaxed text-bark">
            &ldquo;Rheo&apos;s life was short, but his legacy doesn&apos;t have to be.&rdquo;
          </blockquote>
          <p className="mt-6 leading-relaxed text-muted">
            His mother, Kortney Moore, founded Rheo&apos;s Hut Community Center in his loving memory,
            for the children and families of Knoxville and Marion County.
          </p>
          <ButtonLink href="/story" variant="outline" className="mt-8">
            Read Rheo&apos;s Story
            <ArrowRight className="h-5 w-5" aria-hidden />
          </ButtonLink>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow className="text-green-strong">Every child belongs here</Eyebrow>
          <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] sm:text-6xl">
            Made for kids of <span className="marker marker-sun">every ability</span>,{" "}
            <span className="marker marker-sky">every background</span>, and{" "}
            <span className="marker marker-meadow">every family</span>.
          </h2>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
            <div className="max-w-xl space-y-5 text-lg leading-relaxed">
              <p>
                Rheo&apos;s Hut will welcome children ages 5 to 16 from Knoxville and surrounding
                communities, regardless of background, income, religion, or ability.
              </p>
              <p>
                Children with disabilities, including autism and other developmental differences,
                will be welcomed. We&apos;ll work with each family to understand the support and
                access their child needs.
              </p>
              <p className="text-muted">
                Faith is part of our foundation. Families never need to share our beliefs to belong
                here.
              </p>
            </div>
            <div className="relative">
              <div
                className="absolute inset-x-6 inset-y-2 rounded-[45%_55%_50%_50%/55%_50%_50%_45%] bg-cream"
                aria-hidden
              />
              <Image
                src="/kids.png"
                alt="Five children of different colors holding hands with their arms raised, from the Rheo's Hut logo."
                width={556}
                height={222}
                sizes="(min-width: 1024px) 600px, 100vw"
                className="relative w-full mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_70%,transparent_94%)]"
              />
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t-2 border-dashed border-ink/10 pt-10 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="px-2">
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className={`block font-heading text-5xl font-bold sm:text-6xl ${fact.color}`}>
                    {fact.value}
                  </span>
                  <span className="mt-1 block font-semibold text-muted">{fact.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-mist px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow className="text-purple">Planned programs</Eyebrow>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Something for every kid</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                After school, plus full days in the summer and over school breaks, once the center
                opens.
              </p>
            </div>
            <Link href="/programs" className={`${textLink} inline-flex items-center gap-1`}>
              Program details
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12">
            <ProgramGroups />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-strong px-5 py-16 text-white md:py-24">
        <Sun className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow className="text-sun">Coming soon</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Something special is coming to Knoxville</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/90">{comingSoon}</p>
            <ButtonLink href="/donate" variant="white" className="mt-8">
              Support the build
            </ButtonLink>
          </div>
          <ol className="relative space-y-4">
            {roadmap.map((step, index) => (
              <li
                key={step.label}
                className={`flex items-center gap-4 rounded-2xl p-5 ${
                  step.status === "next" ? "bg-sun text-ink" : "bg-white/10"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-lg font-bold ${
                    step.status === "done"
                      ? "bg-green text-white"
                      : step.status === "now"
                        ? "bg-white text-blue-deep"
                        : "bg-white text-ink"
                  }`}
                >
                  {step.status === "done" ? (
                    <CircleCheck className="h-6 w-6" aria-label="Done" />
                  ) : step.status === "next" ? (
                    <Sparkles className="h-5 w-5" aria-hidden />
                  ) : (
                    index + 1
                  )}
                </span>
                <span>
                  <span className="block font-heading text-xl font-semibold">{step.label}</span>
                  <span className={step.status === "next" ? "text-ink/80" : "text-white/80"}>
                    {step.detail}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow className="text-orange-strong">Get involved</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Ways to help right now</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Rheo&apos;s Hut is being built by this community. Here&apos;s how you can be part of it.
            </p>
          </div>
          <div className="mt-10">
            <HelpCards />
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-cream px-6 py-12 sm:px-12">
          <Confetti className="opacity-50" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <Eyebrow className="text-bark">Fundraisers</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Mark your calendar</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Nothing is for sale yet. Order details will be posted on the fundraising page as soon
                as they are ready.
              </p>
              <ButtonLink href="/fundraising" variant="outline" className="mt-6">
                Fundraising page
              </ButtonLink>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {fundraisers.map((fundraiser) => (
                <li key={fundraiser.name} className="rounded-3xl bg-white p-6 shadow-sm">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold ${accentStyles[fundraiser.accent].tint} ${accentStyles[fundraiser.accent].text}`}
                  >
                    <CalendarDays className="h-4 w-4" aria-hidden />
                    {fundraiser.when}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold">{fundraiser.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{fundraiser.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
