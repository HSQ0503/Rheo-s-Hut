import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, HeartIcon, Hills } from "@/components/decor";
import { email, facebookUrl, memory, nav } from "@/lib/site";

export function MemoryLine() {
  return (
    <div className="flex flex-col items-center text-center">
      <HeartIcon className="h-7 w-7 text-heart" />
      <p className="mt-2 font-heading text-xl font-semibold">{memory.name}</p>
      <p className="mt-1 text-white/80">{memory.dates}</p>
      <p className="mt-1 font-reading italic text-white/90">{memory.line}</p>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20">
      <Hills fill="#005a8a" />
      <div className="bg-blue-deep px-5 pb-10 pt-6 text-white">
        <div className="mx-auto max-w-6xl">
          <MemoryLine />

          <div className="mt-12 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="rounded-2xl bg-white p-2">
                  <Image src="/logo-mark.png" alt="" width={320} height={181} className="h-10 w-auto" />
                </span>
                <span className="font-heading text-xl font-semibold">Rheo&apos;s Hut Community Center</span>
              </Link>
              <p className="mt-4 max-w-sm text-white/85">
                A safe place to learn, create, play, and belong. In development in Knoxville, Iowa,
                with a goal of opening in Fall 2028.
              </p>
            </div>

            <nav aria-label="Footer">
              <p className="font-heading text-lg font-semibold">Explore</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
                {[{ href: "/donate", label: "Donate" }, ...nav].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/85 hover:text-white hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-heading text-lg font-semibold">Get in touch</p>
              <ul className="mt-3 space-y-3 text-white/85">
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sun" aria-hidden />
                  <a href={`mailto:${email}`} className="break-all hover:text-white hover:underline">
                    {email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sun" aria-hidden />
                  <span>Knoxville, Iowa · Marion County</span>
                </li>
              </ul>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white/10 px-4 font-semibold transition-colors hover:bg-white/20"
              >
                <FacebookIcon className="h-5 w-5" />
                Follow on Facebook
              </a>
            </div>
          </div>

          <p className="mt-10 border-t border-white/15 pt-6 text-sm text-white/70">
            © {new Date().getFullYear()} Rheo&apos;s Hut Community Center. 501(c)(3) status is in
            progress, so gifts are not tax-deductible at this time.
          </p>
        </div>
      </div>
    </footer>
  );
}
