"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";

type TooltipProps = React.PropsWithChildren<{
  content: string;
  className?: string;
}>;

export function Tooltip({ content, className, children }: TooltipProps) {
  const { theme } = useThemeContext();

  return (
    <span className={cn("group relative inline-flex", className)}>
      {children}
      <span
        className={cn(
          "pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-[10px] shadow-lg transition-all group-hover:opacity-100 opacity-0",
          // Theme-aware tooltip
          theme === 'dark'
            ? "bg-zinc-900/95 text-zinc-100 border border-zinc-800/50 backdrop-blur-sm"
            : "bg-zinc-50/95 text-zinc-900 border border-zinc-200/50 backdrop-blur-sm"
        )}
        role="tooltip"
      >
        {content}
      </span>
    </span>
  );
}
