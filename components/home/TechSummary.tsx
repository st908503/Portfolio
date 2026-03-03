import { skills } from "@/lib/data/skills";

export function TechSummary() {
  return (
    <section className="space-y-4 py-10">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
        Snapshot of my stack
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {skills.slice(0, 4).map((category) => (
          <div
            key={category.name}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              {category.name}
            </p>
            <p className="mt-2 text-sm text-zinc-300">
              {category.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
