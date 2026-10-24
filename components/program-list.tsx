import { programGroups, programs } from "@/lib/site";

export function ProgramGroups({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
      {programGroups.map((group, index) => (
        <li
          key={group.name}
          className={`relative overflow-hidden rounded-[2rem] p-7 text-white ${group.color} ${
            index % 2 === 1 ? "lg:mt-12" : ""
          }`}
        >
          <span
            className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10"
            aria-hidden
          />
          <h3 className="relative text-5xl font-bold tracking-tight">{group.name}</h3>
          <p className="relative mt-2 text-white/85">{group.blurb}</p>
          <ul className="relative mt-6 space-y-3 border-t border-white/20 pt-6">
            {programs
              .filter((program) => program.group === group.name)
              .map(({ name, icon: Icon, description }) => (
                <li key={name} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                  </span>
                  <span className="pt-2 leading-snug">
                    <span className="block font-heading text-lg font-semibold leading-tight">{name}</span>
                    {detailed ? (
                      <span className="mt-1 block text-sm text-white/85">{description}</span>
                    ) : null}
                  </span>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
