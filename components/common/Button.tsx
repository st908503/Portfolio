import { cn } from "@/lib/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-60",
        variant === "primary" &&
          "bg-emerald-500 text-zinc-950 hover:bg-emerald-400",
        variant === "outline" &&
          "border border-zinc-700 bg-transparent text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900",
        variant === "ghost" &&
          "text-zinc-300 hover:bg-zinc-900/60",
        size === "md" && "px-5 py-2.5",
        size === "sm" && "px-3 py-1.5 text-xs",
        className
      )}
      {...props}
    />
  );
}
