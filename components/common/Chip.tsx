import { cn } from "@/lib/utils/cn";

type ChipProps = {
  label: string;
  variant?: "default" | "success" | "warning";
  className?: string;
};

export function Chip({ label, variant = "default", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
        variant === "default" &&
          "border-zinc-800 bg-zinc-900/60 text-zinc-300",
        variant === "success" &&
          "border-emerald-500/60 bg-emerald-500/10 text-emerald-300",
        variant === "warning" &&
          "border-amber-500/60 bg-amber-500/10 text-amber-300",
        className
      )}
    >
      {label}
    </span>
  );
}
