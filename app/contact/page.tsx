import { Clock, MapPin, UserRound } from "lucide-react";
import type { Metadata } from "next";
import { FacebookIcon } from "@/components/decor";
import { FormPage } from "@/components/form-page";
import { facebookUrl, founder, founderTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kortney Moore at Rheo's Hut Community Center in Knoxville, Iowa. The center is not open to the public yet.",
};

export default function ContactPage() {
  return (
    <FormPage
      kind="contact"
      eyebrow="Contact"
      title="We'd love to hear from you"
      intro="Questions, ideas, or a kind word. Every message is read by our founder."
      points={[
        { icon: UserRound, title: founder, body: founderTitle },
        {
          icon: MapPin,
          title: "Knoxville, Iowa",
          body: "No public address yet. We're searching for a suitable facility in Knoxville.",
        },
        {
          icon: Clock,
          title: "Hours",
          body: "Not yet open to the public. Hours will be announced closer to opening.",
        },
      ]}
    >
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#1877f2] px-5 font-heading text-lg font-semibold text-white transition-opacity hover:opacity-90"
      >
        <FacebookIcon className="h-5 w-5" />
        Follow Rheo&apos;s Hut on Facebook
      </a>
    </FormPage>
  );
}
