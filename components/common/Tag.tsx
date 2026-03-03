"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";

type TagProps = {
  label: string;
  tone?: "neutral" | "success" | "danger";
  className?: string;
};

export function Tag({ label, tone = "neutral", className }: TagProps) {
  const { theme } = useThemeContext();

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium transition-colors",
        // Neutral tags - fully theme-aware
        tone === "neutral" && cn(
          theme === 'dark'
            ? "bg-zinc-900/70 text-zinc-300 border border-zinc-800"
            : "bg-zinc-100/80 text-zinc-700 border border-zinc-200/50"
        ),
        // Success tags - theme-aware
        tone === "success" && cn(
          theme === 'dark'
            ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
            : "bg-emerald-50/80 text-emerald-700 border border-emerald-200/50"
        ),
        // Danger tags - theme-aware
        tone === "danger" && cn(
          theme === 'dark'
            ? "bg-red-500/10 text-red-300 border border-red-500/40"
            : "bg-red-50/80 text-red-700 border border-red-200/50"
        ),
        className
      )}
    >
      {label}
    </span>
  );
}
