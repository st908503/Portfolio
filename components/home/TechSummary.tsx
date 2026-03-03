"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";
import { skills } from "@/lib/data/skills";

export function TechSummary() {
  const { theme } = useThemeContext();

  return (
    <section className="space-y-4 py-10">
      <h2 className={cn(
        "text-sm font-semibold uppercase tracking-wide",
        theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
      )}>
        Snapshot of my stack
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {skills.slice(0, 4).map((category) => (
          <div
            key={category.name}
            className={cn(
              "rounded-xl border p-4 transition-colors",
              theme === 'dark'
                ? "border-zinc-800 bg-zinc-900/40 backdrop-blur-sm"
                : "border-zinc-200/50 bg-white/80 shadow-sm backdrop-blur-sm"
            )}
          >
            <p className={cn(
              "text-xs font-semibold uppercase tracking-wide",
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
            )}>
              {category.name}
            </p>
            <p className={cn(
              "mt-2 text-sm",
              theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
            )}>
              {category.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
