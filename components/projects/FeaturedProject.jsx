"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils/cn";

export function FeaturedProject() {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  const project = projects[0]; // your flagship project

  return (
    <div
      className={cn(
        "rounded-3xl border p-8 transition-all duration-300",
        isDark
          ? "border-emerald-500/30 bg-zinc-900/70"
          : "border-emerald-500/40 bg-white shadow-lg"
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-widest mb-2",
          isDark ? "text-emerald-400" : "text-emerald-600"
        )}
      >
        Featured Project
      </p>

      <h2
        className={cn(
          "text-xl font-bold",
          isDark ? "text-zinc-50" : "text-zinc-900"
        )}
      >
        {project.title}
      </h2>

      <p
        className={cn(
          "mt-2 text-sm",
          isDark ? "text-zinc-400" : "text-zinc-600"
        )}
      >
        {project.subtitle}
      </p>

      <p
        className={cn(
          "mt-4 text-sm leading-relaxed max-w-3xl",
          isDark ? "text-zinc-300" : "text-zinc-700"
        )}
      >
        {project.description}
      </p>

      {/* Highlights */}
      <ul
        className={cn(
          "mt-6 space-y-2 text-sm",
          isDark ? "text-zinc-300" : "text-zinc-700"
        )}
      >
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech Badges */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium",
              isDark
                ? "bg-zinc-800 text-zinc-300"
                : "bg-zinc-100 text-zinc-700"
            )}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}