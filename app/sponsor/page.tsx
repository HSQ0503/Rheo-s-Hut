import { Gift, HandCoins, Megaphone, Wrench } from "lucide-react";
import type { Metadata } from "next";
import { FormPage } from "@/components/form-page";

export const metadata: Metadata = {
  title: "Become a Sponsor",
  description:
    "Sponsor Rheo's Hut Community Center. Businesses can be recognized on the website, on social media, and at fundraisers.",
};

export default function SponsorPage() {
  return (
    <FormPage
      kind="sponsor"
      eyebrow="Become a sponsor"
      title="Partner with us for Knoxville's kids"
      intro="We welcome sponsorships from local businesses, organizations, churches, and community supporters who believe every child deserves a safe place to belong."
      tint="bg-lilac"
      points={[
        {
          icon: HandCoins,
          title: "Give financially",
          body: "Help cover startup and facility costs as the center takes shape.",
        },
        {
          icon: Gift,
          title: "Donate supplies or sponsor an event",
          body: "Supplies, prizes, and event sponsorships all make a real difference.",
        },
        {
          icon: Wrench,
          title: "Offer professional services",
          body: "Your skills, from construction to accounting, can help us open sooner.",
        },
        {
          icon: Megaphone,
          title: "Get recognized",
          body: "Sponsors can be thanked on our website, social media, fundraising materials, and at fundraising events.",
        },
      ]}
    />
  );
}
