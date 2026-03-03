import { cn } from "@/lib/utils/cn";

type TagProps = {
  label: string;
  tone?: "neutral" | "success" | "danger";
  className?: string;
};

export function Tag({ label, tone = "neutral", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium",
        tone === "neutral" &&
          "bg-zinc-900/70 text-zinc-300 border border-zinc-800",
        tone === "success" &&
          "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40",
        tone === "danger" &&
          "bg-red-500/10 text-red-300 border border-red-500/40",
        className
      )}
    >
      {label}
    </span>
  );
}
