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

  return (
    <li className={cn(
      "space-y-2 rounded-xl border p-4 transition-colors",
      theme === 'dark'
        ? "border-zinc-800 bg-zinc-900/40 backdrop-blur-sm"
        : "border-zinc-200/50 bg-white/80 shadow-sm backdrop-blur-sm"
    )}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className={`
            text-sm font-semibold
            ${theme === 'dark' ? 'text-zinc-50' : 'text-zinc-900'}
          `}>
            {item.role}
          </p>
          <p className={`
            text-xs
            ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}
          `}>
            {item.company}
          </p>
          {item.location && (
            <p className={`
              text-xs
              ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'}
            `}>
              {item.location}
            </p>
          )}
        </div>
        <p className={`
          text-xs
          ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'}
        `}>
          {formatDateLabel(item.start, item.end)}
        </p>
      </div>
      <ul className={cn(
        "list-disc space-y-1 pl-4 text-xs",
        theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
      )}>
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p className={`
        text-xs
        ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}
      `}>
        {item.tech.join(" · ")}
      </p>
    </li>
  );
}
