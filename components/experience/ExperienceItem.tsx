"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";
import type { ExperienceItem as ExperienceItemType } from "@/types/experience";
import { formatDateLabel } from "@/lib/utils/formatDate";

type Props = {
  item: ExperienceItemType;
};

export function ExperienceItem({ item }: Props) {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";
  const isCurrent = item.end === "Present";

  return (
    <li
      className={cn(
        "rounded-2xl border p-6 transition-all duration-300",
        isDark
          ? "border-zinc-800 bg-zinc-900/60"
          : "border-zinc-200 bg-white shadow-sm",
        isCurrent &&
          (isDark
            ? "border-emerald-500/40"
            : "border-emerald-500/60")
      )}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3
            className={cn(
              "text-base font-semibold",
              isDark ? "text-zinc-50" : "text-zinc-900"
            )}
          >
            {item.role}
          </h3>

          <p
            className={cn(
              "text-sm font-medium",
              isDark ? "text-emerald-400" : "text-emerald-600"
            )}
          >
            {item.company}
          </p>

          {item.location && (
            <p className="text-xs text-zinc-500">
              {item.location}
            </p>
          )}
        </div>

        <div className="text-right">
          <p className="text-xs text-zinc-500">
            {formatDateLabel(item.start, item.end)}
          </p>
          {isCurrent && (
            <span
              className={cn(
                "mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold",
                isDark
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-emerald-100 text-emerald-700"
              )}
            >
              Current
            </span>
          )}
        </div>
      </div>

      {/* Impact Bullets */}
      <ul
        className={cn(
          "mt-4 space-y-2 text-sm leading-relaxed",
          isDark ? "text-zinc-300" : "text-zinc-700"
        )}
      >
        {item.bullets.map((b) => (
          <li key={b} className="relative pl-4">
            <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {b}
          </li>
        ))}
      </ul>

      {/* Tech Badges */}
      <div className="mt-5 flex flex-wrap gap-2">
        {item.tech.map((tech) => (
          <span
            key={tech}
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-medium",
              isDark
                ? "bg-zinc-800 text-zinc-300"
                : "bg-zinc-100 text-zinc-700"
            )}
          >
            {tech}
          </span>
        ))}
      </div>
    </li>
  );
}