import { Sun } from "@/components/decor";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-5 py-20 text-center">
      <Sun className="h-32 w-32" />
      <h1 className="mt-6 text-4xl font-bold sm:text-5xl">That page isn&apos;t here</h1>
      <p className="mt-4 text-lg text-muted">It may have moved, or it hasn&apos;t been built yet.</p>
      <ButtonLink href="/" className="mt-8">
        Back to Rheo&apos;s Hut
      </ButtonLink>
    </section>
  );
}
