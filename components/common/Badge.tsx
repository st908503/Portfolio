"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "solid" | "soft" | "outline";
  tone?: "neutral" | "success" | "warning" | "danger";
  className?: string;
};

export function Badge({
  children,
  variant = "soft",
  tone = "neutral",
  className,
}: BadgeProps) {
  const { theme } = useThemeContext();

  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium";

  const palette: Record<
    NonNullable<BadgeProps["tone"]>,
    {
      solid: string;
      soft: string;
      outline: string;
    }
  > = {
    neutral: {
      solid: theme === 'dark' 
        ? "bg-zinc-800 text-zinc-50" 
        : "bg-zinc-200 text-zinc-900",
      soft: theme === 'dark' 
        ? "bg-zinc-900/70 text-zinc-300 border border-zinc-800" 
        : "bg-zinc-100 text-zinc-700 border border-zinc-200",
      outline: theme === 'dark' 
        ? "border border-zinc-700 text-zinc-300" 
        : "border border-zinc-300 text-zinc-700",
    },
    success: {
      solid: "bg-emerald-500 text-zinc-950",
      soft: theme === 'dark' 
        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/40" 
        : "bg-emerald-100 text-emerald-800 border border-emerald-200",
      outline: theme === 'dark' 
        ? "border border-emerald-500 text-emerald-400" 
        : "border border-emerald-400 text-emerald-700",
    },
    warning: {
      solid: "bg-amber-500 text-zinc-950",
      soft: theme === 'dark' 
        ? "bg-amber-500/10 text-amber-400 border border-amber-500/40" 
        : "bg-amber-100 text-amber-800 border border-amber-200",
      outline: theme === 'dark' 
        ? "border border-amber-500 text-amber-400" 
        : "border border-amber-400 text-amber-700",
    },
    danger: {
      solid: "bg-red-500 text-zinc-950",
      soft: theme === 'dark' 
        ? "bg-red-500/10 text-red-400 border border-red-500/40" 
        : "bg-red-100 text-red-800 border border-red-200",
      outline: theme === 'dark' 
        ? "border border-red-500 text-red-400" 
        : "border border-red-400 text-red-700",
    },
  };

  return (
    <span
      className={cn(base, palette[tone][variant], className)}
    >
      {children}
    </span>
  );
}
