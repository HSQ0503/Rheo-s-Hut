"use client";

import { Heart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FacebookIcon } from "@/components/decor";
import { pressable } from "@/components/ui";
import { facebookUrl, nav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-[0_1px_0_rgba(47,27,16,0.08)] backdrop-blur">
      <div className="bg-blue-deep px-5 py-2 text-center text-sm text-white">
        <span className="font-semibold">Coming Fall 2028 to Knoxville, Iowa.</span>{" "}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden underline decoration-white/50 underline-offset-4 hover:decoration-white sm:inline"
        >
          Follow our progress
        </a>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo-mark.png"
            alt=""
            width={320}
            height={181}
            preload
            className="hidden h-11 w-auto sm:block"
          />
          <span className="whitespace-nowrap leading-none">
            <span className="block font-heading text-2xl font-bold">
              <span className="text-blue">Rheo&apos;s</span>{" "}
              <span className="text-green">Hut</span>
            </span>
            <span className="mt-0.5 block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-bark">
              Community Center
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-3 py-2 font-heading text-[1.05rem] font-medium transition-colors duration-200 ${
                  active ? "bg-sky text-blue-deep" : "text-ink hover:bg-mist hover:text-blue-strong"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/donate"
            className={`inline-flex min-h-11 select-none items-center gap-2 rounded-full bg-blue-strong px-5 font-heading text-base font-semibold text-white shadow-[0_5px_0_#004a75] hover:bg-[#0062ba] ${pressable}`}
          >
            <Heart className="h-4 w-4 fill-current" aria-hidden />
            Donate
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-ink/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-ink/10 bg-white px-5 pb-6 lg:hidden"
        >
          <ul className="mx-auto max-w-6xl divide-y divide-ink/10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`flex min-h-13 items-center font-heading text-xl font-medium ${
                    pathname === item.href ? "text-blue-strong" : "text-ink"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-blue-deep"
          >
            <FacebookIcon className="h-5 w-5" />
            Follow us on Facebook
          </a>
        </nav>
      ) : null}
    </header>
  );
}
