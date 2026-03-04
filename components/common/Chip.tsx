"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";

type ChipProps = {
  label: string;
  variant?: "default" | "success" | "warning";
  className?: string;
};

export function Chip({ label, variant = "default", className }: ChipProps) {
  const { theme } = useThemeContext();

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-colors",
        variant === "default" && cn(
          theme === 'dark'
            ? "border-zinc-800 bg-zinc-900/60 text-zinc-300"
            : "border-zinc-200/50 bg-zinc-50/80 text-zinc-700"
        ),
        variant === "success" && cn(
          theme === 'dark'
            ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-300"
            : "border-emerald-300/60 bg-emerald-50/80 text-emerald-700"
        ),
        variant === "warning" && cn(
          theme === 'dark'
            ? "border-amber-500/60 bg-amber-500/10 text-amber-300"
            : "border-amber-400/60 bg-amber-50/80 text-amber-700"
        ),
        className
      )}
    >
      {label}
    </span>
  );
}
