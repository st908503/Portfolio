"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
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
  const { theme } = useThemeContext();

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
        // Theme-aware focus ring offset
        theme === 'dark' 
          ? "focus:ring-offset-zinc-950" 
          : "focus:ring-offset-zinc-50",
        
        // Primary (unchanged - universal emerald)
        variant === "primary" &&
          "bg-emerald-500 text-zinc-950 hover:bg-emerald-400",
        
        // Outline - fully theme-aware
        variant === "outline" && cn(
          theme === 'dark' 
            ? "border border-zinc-700 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900" 
            : "border border-zinc-300 text-zinc-900 hover:border-zinc-400 hover:bg-zinc-100"
        ),
        
        // Ghost - fully theme-aware  
        variant === "ghost" && cn(
          theme === 'dark' 
            ? "text-zinc-300 hover:bg-zinc-900/60" 
            : "text-zinc-700 hover:bg-zinc-100/60"
        ),
        
        // Disabled (universal)
        "disabled:opacity-60",
        
        // Sizes
        size === "md" && "px-5 py-2.5",
        size === "sm" && "px-3 py-1.5 text-xs",
        
        className
      )}
      {...props}
    />
  );
}
