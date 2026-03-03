"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";

type CardProps = React.PropsWithChildren<{
  className?: string;
}>;

export function Card({ className, children }: CardProps) {
  const { theme } = useThemeContext();

  return (
    <div
      className={cn(
        "rounded-xl border p-4 transition-colors",
        // Theme-aware card styles
        theme === 'dark' 
          ? "border-zinc-800 bg-zinc-900/40 backdrop-blur-sm" 
          : "border-zinc-200/50 bg-white/80 shadow-sm backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
