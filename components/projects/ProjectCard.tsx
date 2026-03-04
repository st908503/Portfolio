"use client";

import { cn } from "@/lib/utils/cn";
import type { Project } from "@/types/project";
import { useThemeContext } from "@/features/theme/theme-provider";

type Props = {
  project: Project;
  className?: string;
  visible?: boolean;
  delay?: number;
};

export function ProjectCard({
  project,
  className,
  visible = false,
  delay = 0,
}: Props) {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <article
      className={cn(
        "relative group flex flex-col gap-3 rounded-xl border p-5 transition-all duration-700 ease-out",
        "hover:-translate-y-1 hover:shadow-xl",
        visible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95",

        // 🌙 Dark Mode
        isDark &&
          "border-zinc-800 bg-zinc-900/60 backdrop-blur-sm hover:shadow-emerald-500/10",

        // ☀️ Light Mode (NO zinc bg)
        !isDark &&
          "border-gray-200 bg-white shadow-sm hover:shadow-emerald-500/20",

        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Hover Gradient Overlay */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          isDark
            ? "bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-400/20"
            : "bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-300/15"
        )}
      />

      {/* Header */}
      <header className="space-y-1 relative z-10">
        <h3
          className={cn(
            "text-sm font-semibold transition-colors duration-300",
            isDark
              ? "text-zinc-100 group-hover:text-emerald-400"
              : "text-gray-900 group-hover:text-emerald-600"
          )}
        >
          {project.title}
        </h3>

        {project.subtitle && (
          <p
            className={cn(
              "text-xs transition-colors duration-300",
              isDark
                ? "text-zinc-400 group-hover:text-zinc-300"
                : "text-gray-500 group-hover:text-gray-700"
            )}
          >
            {project.subtitle}
          </p>
        )}

        {project.period && (
          <p
            className={cn(
              "text-xs",
              isDark ? "text-zinc-500" : "text-gray-400"
            )}
          >
            {project.period}
          </p>
        )}
      </header>

      {/* Description */}
      <p
        className={cn(
          "text-xs leading-relaxed relative z-10",
          isDark ? "text-zinc-300" : "text-gray-600"
        )}
      >
        {project.description}
      </p>

      {/* Highlights */}
      <ul
        className={cn(
          "list-disc space-y-1 pl-4 text-xs relative z-10",
          isDark ? "text-zinc-300" : "text-gray-600"
        )}
      >
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="transition-all duration-300 hover:translate-x-1"
          >
            {highlight}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <p
        className={cn(
          "mt-auto text-xs font-mono relative z-10",
          isDark ? "text-zinc-400" : "text-gray-500"
        )}
      >
        {project.tech.join(" · ")}
      </p>
    </article>
  );
}