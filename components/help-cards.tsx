import { ArrowRight, Handshake, HandHeart, Heart } from "lucide-react";
import Link from "next/link";
import { FacebookIcon } from "@/components/decor";
import { facebookUrl } from "@/lib/site";

const cards = [
  {
    href: "/donate",
    title: "Donate",
    body: "Help with startup costs and finding a home for the center. Every gift counts.",
    action: "Give today",
    icon: Heart,
    color: "bg-blue-strong",
  },
  {
    href: "/volunteer",
    title: "Volunteer",
    body: "Leave your name now. We'll reach out as programs take shape.",
    action: "Sign up",
    icon: HandHeart,
    color: "bg-green-strong",
  },
  {
    href: "/sponsor",
    title: "Partner with us",
    body: "Businesses, churches, and organizations can sponsor and be recognized.",
    action: "Become a sponsor",
    icon: Handshake,
    color: "bg-purple",
  },
];

export function HelpCards() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ href, title, body, action, icon: Icon, color }) => (
        <li key={href}>
          <Link
            href={href}
            className={`group flex h-full flex-col rounded-3xl p-6 text-white transition-transform duration-200 hover:-translate-y-1 ${color}`}
          >
            <Icon className="h-9 w-9" strokeWidth={2} aria-hidden />
            <span className="mt-5 font-heading text-2xl font-semibold">{title}</span>
            <span className="mt-2 flex-1 text-white/90">{body}</span>
            <span className="mt-5 inline-flex items-center gap-2 font-bold">
              {action}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        </li>
      ))}
      <li>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col rounded-3xl bg-sun p-6 text-ink transition-transform duration-200 hover:-translate-y-1"
        >
          <FacebookIcon className="h-9 w-9" />
          <span className="mt-5 font-heading text-2xl font-semibold">Follow along</span>
          <span className="mt-2 flex-1">
            Fundraisers, news, and every step toward opening day, on Facebook.
          </span>
          <span className="mt-5 inline-flex items-center gap-2 font-bold">
            Follow us
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        </a>
      </li>
    </ul>
  );
}
