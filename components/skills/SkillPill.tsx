"use client";

import type { ComponentType } from "react";
import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";

type SkillPillProps = {
  label: string;
  icon: ComponentType<{ className?: string; size?: number }>;
};

export function SkillPill({ label, icon: Icon }: SkillPillProps) {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
        "border backdrop-blur-sm",
        isDark
          ? "border-zinc-700 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-600"
          : "border-zinc-200 bg-white text-zinc-700 shadow-sm hover:bg-zinc-100 hover:border-zinc-300"
      )}
    >
      <Icon
        className={cn(
          "h-3.5 w-3.5 flex-shrink-0",
          isDark ? "text-zinc-400" : "text-zinc-500"
        )}
      />
      {label}
    </span>
  );
}