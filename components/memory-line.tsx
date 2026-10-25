"use client";

import { usePathname } from "next/navigation";
import { HeartIcon } from "@/components/decor";
import { memory } from "@/lib/site";

// The founder asked to keep the memorial off the home and programs pages.
const hiddenOn = ["/", "/programs"];

export function MemoryLine() {
  const pathname = usePathname();
  if (hiddenOn.includes(pathname)) return null;

  return (
    <div className="mb-10 flex flex-col items-center border-b border-white/15 pb-10 text-center">
      <HeartIcon className="h-7 w-7 text-heart" />
      <p className="mt-2 font-heading text-xl font-semibold">{memory.name}</p>
      <p className="mt-1 text-white/80">{memory.dates}</p>
      <p className="mt-1 font-reading italic text-white/90">{memory.line}</p>
    </div>
  );
}
