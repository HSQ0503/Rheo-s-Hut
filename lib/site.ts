import {
  Accessibility,
  Apple,
  BookOpen,
  CalendarHeart,
  FlaskConical,
  Gamepad2,
  House,
  Library,
  type LucideIcon,
  Music,
  Palette,
  Sprout,
  Star,
  Users,
  Wrench,
} from "lucide-react";

export const email = "rheomoon@gmail.com";

export const facebookUrl =
  "https://www.facebook.com/profile.php?id=61595596540757";

// Leave empty until the center's Venmo page exists; the donate button appears once set.
export const venmoUrl = "";

// Google Calendar "embed" URL from the center's calendar settings; the calendar shows once set.
export const calendarEmbedUrl = "";

export const founder = "Kortney Moore";
export const founderTitle = "Founder and Executive Director";

export const motto = "A Safe Place to Learn, Create, Play, and Belong.";

export const welcome =
  "Every child deserves a safe place to learn, create, play, and belong. At Rheo's Hut Community Center, we are building a welcoming, inclusive space in Knoxville, Iowa, where children of all abilities can discover their potential, build friendships, and feel valued.";

export const comingSoon =
  "We're building something special for Knoxville. Rheo's Hut Community Center is currently in development with a goal of opening in the Fall of 2028. Join us as we work to create a safe place for every child to learn, create, play and belong. Your support can help bring this dream to life.";

export const memory = {
  name: "In Loving Memory of Rheo Moon Moss",
  dates: "June 25, 2021 - August 16, 2021",
  line: "Forever Loved. Forever Our Inspiration.",
};

export const nav = [
  { href: "/story", label: "Rheo's Story" },
  { href: "/programs", label: "Programs" },
  { href: "/fundraising", label: "Fundraising" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/contact", label: "Contact" },
] as const;

export type Accent = "blue" | "purple" | "sun" | "green" | "orange" | "heart";

// Full class strings so Tailwind can see them at build time.
export const accentStyles: Record<
  Accent,
  { tint: string; solid: string; text: string; border: string }
> = {
  blue: { tint: "bg-sky", solid: "bg-blue", text: "text-blue-strong", border: "border-blue" },
  purple: { tint: "bg-lilac", solid: "bg-purple", text: "text-purple", border: "border-purple" },
  sun: { tint: "bg-cream", solid: "bg-sun", text: "text-bark", border: "border-sun" },
  green: { tint: "bg-meadow", solid: "bg-green", text: "text-green-strong", border: "border-green" },
  orange: { tint: "bg-blush", solid: "bg-orange", text: "text-orange-strong", border: "border-orange" },
  heart: { tint: "bg-blush", solid: "bg-heart", text: "text-heart-strong", border: "border-heart" },
};

export type ProgramGroup = "Learn" | "Create" | "Play" | "Belong";

export const programGroups: { name: ProgramGroup; blurb: string; color: string }[] = [
  { name: "Learn", blurb: "Curiosity, confidence, and help with homework.", color: "bg-blue-strong" },
  { name: "Create", blurb: "Room to make, build, and express yourself.", color: "bg-purple" },
  { name: "Play", blurb: "Games, friends, and fun together.", color: "bg-orange-strong" },
  { name: "Belong", blurb: "Caring adults, full bellies, and family.", color: "bg-green-strong" },
];

export type Program = {
  name: string;
  icon: LucideIcon;
  group: ProgramGroup;
  description: string;
};

export const programs: Program[] = [
  { name: "Tutoring", icon: BookOpen, group: "Learn", description: "Homework help and one-on-one support after school." },
  { name: "Reading", icon: Library, group: "Learn", description: "Story time, reading practice, and books for every level." },
  { name: "STEM", icon: FlaskConical, group: "Learn", description: "Hands-on science, building, and problem solving." },
  { name: "Life skills", icon: Wrench, group: "Learn", description: "Practical, everyday skills for growing up." },
  { name: "Arts and crafts", icon: Palette, group: "Create", description: "Painting, crafting, and making something of your own." },
  { name: "Music", icon: Music, group: "Create", description: "Singing, rhythm, and trying out instruments." },
  { name: "Gaming and recreation", icon: Gamepad2, group: "Play", description: "Games, active play, and time with friends." },
  { name: "Family events", icon: CalendarHeart, group: "Play", description: "Community gatherings that bring families together." },
  { name: "Mentorship", icon: Users, group: "Belong", description: "Caring adults who show up for kids week after week." },
  { name: "Nutritious meals", icon: Apple, group: "Belong", description: "Nutritious meals and regular snacks, included." },
  { name: "Family support", icon: House, group: "Belong", description: "Support and connection for the whole family." },
  { name: "Teen leadership", icon: Star, group: "Belong", description: "Leadership opportunities for teens ages 16 to 18." },
];

export const promises: { title: string; body: string; icon: LucideIcon; accent: Accent }[] = [
  {
    title: "Children of all abilities",
    body: "Children with disabilities, including autism and other developmental differences, will be welcomed. We'll work with each family on the support their child needs.",
    icon: Accessibility,
    accent: "blue",
  },
  {
    title: "Every background",
    body: "Open to children regardless of background, income, religion, or ability. Faith is part of our foundation, and everyone is welcome.",
    icon: Users,
    accent: "purple",
  },
  {
    title: "Meals included",
    body: "Nutritious meals and regular snacks are planned as part of every program day.",
    icon: Apple,
    accent: "orange",
  },
  {
    title: "Ages 5 to 16",
    body: "Programs for children ages 5 to 16, with teen leadership opportunities for ages 16 to 18.",
    icon: Sprout,
    accent: "green",
  },
];

export const roadmap: { label: string; detail: string; status: "done" | "now" | "next" }[] = [
  { label: "Incorporated in Iowa", detail: "October 2026", status: "done" },
  { label: "Fundraising and 501(c)(3) application", detail: "In progress", status: "now" },
  { label: "Finding a home in Knoxville", detail: "Searching for a facility", status: "now" },
  { label: "Doors open", detail: "Goal: Fall 2028", status: "next" },
];

export const story = [
  "Rheo Moon Moss was born on June 25, 2021, alongside his twin brother. On August 16, 2021, our family experienced an unimaginable loss when Rheo passed away at just 52 days old.",
  "Although Rheo's time here was short, his life left a love that will last forever.",
  "As Rheo's mother, I wanted to find a way to turn that love into something meaningful. I wanted his name to stand for more than our family's heartbreak. I wanted it to represent hope, kindness, opportunity, and belonging.",
  "When our family came to Knoxville, Iowa, this community welcomed us. Rheo's Hut is also my way of giving something back to the place that has welcomed my family.",
  "My dream is to build a community center where children can receive educational support, explore their creativity, develop friendships, enjoy nutritious meals, and simply be children. A place where differences are celebrated, families feel supported, and no child is made to feel like they don't belong.",
  "Rheo may never have had the opportunity to experience all the things I dream of providing through this center, but through Rheo's Hut, I hope countless other children will.",
  "Rheo's life was short, but his legacy doesn't have to be.",
  "Rheo's Hut Community Center is being built in his memory, with love, for the children and families of our community.",
];

export const amounts = ["$5", "$10", "$25", "$50", "$100", "$250", "$500"];

export const fundraisers = [
  {
    name: "New Year, New Art",
    when: "December 2026",
    status: "Coming soon",
    accent: "purple" as Accent,
    body: "An art fundraiser to ring in the new year. Items, prices, and how to order will be posted here when orders open.",
  },
  {
    name: "Valentine's Day bags",
    when: "Delivery February 11, 2027",
    status: "Coming soon",
    accent: "heart" as Accent,
    body: "Simple bags are $5, with more packages and classroom options to come. Payment will go through the center's Venmo.",
  },
];
