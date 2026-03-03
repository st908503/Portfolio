// components/common/Badge.tsx
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
      solid: "bg-zinc-800 text-zinc-50",
      soft: "bg-zinc-900/70 text-zinc-300 border border-zinc-800",
      outline: "border border-zinc-700 text-zinc-300",
    },
    success: {
      solid: "bg-emerald-500 text-zinc-950",
      soft: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40",
      outline: "border border-emerald-500 text-emerald-300",
    },
    warning: {
      solid: "bg-amber-500 text-zinc-950",
      soft: "bg-amber-500/10 text-amber-300 border border-amber-500/40",
      outline: "border border-amber-500 text-amber-300",
    },
    danger: {
      solid: "bg-red-500 text-zinc-950",
      soft: "bg-red-500/10 text-red-300 border border-red-500/40",
      outline: "border border-red-500 text-red-300",
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
