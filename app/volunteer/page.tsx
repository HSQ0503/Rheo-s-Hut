import { CalendarHeart, ClipboardList, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { FormPage } from "@/components/form-page";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Leave your name to volunteer with Rheo's Hut Community Center in Knoxville, Iowa. Background checks come later.",
};

export default function VolunteerPage() {
  return (
    <FormPage
      kind="volunteer"
      eyebrow="Volunteer"
      title="Lend a hand, make a difference"
      intro="We're collecting names now, before there is a building or a program schedule. Be one of the first people to help Rheo's Hut come to life."
      tint="bg-meadow"
      points={[
        {
          icon: ClipboardList,
          title: "Leave your name",
          body: "Tell us a little about yourself and how you'd like to help. Tutoring, events, building, organizing: it all counts.",
        },
        {
          icon: CalendarHeart,
          title: "Help at fundraisers",
          body: "There are fundraisers on the way, and many hands make them easier.",
        },
        {
          icon: ShieldCheck,
          title: "Safety comes first",
          body: "Background checks will happen later, before anyone works with children.",
        },
      ]}
    />
  );
}
