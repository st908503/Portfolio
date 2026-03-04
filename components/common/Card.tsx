"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";

type CardProps = React.PropsWithChildren<{
  className?: string;
  title?: string;
}>;

export function Card({ className, children, title }: CardProps) {
  const { theme } = useThemeContext();

  return (
    <div
      className={cn(
        "relative rounded-xl border p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl",
        "backdrop-blur-sm", // subtle blur effect
        theme === "dark"
          ? "border-zinc-800 bg-gradient-to-br from-zinc-900/70 to-zinc-800/60 text-zinc-100"
          : "border-zinc-200/50 bg-white/90 shadow-sm text-zinc-800",
        className
      )}
    >
      {title && (
        <h3
          className={cn(
            "text-lg font-semibold mb-2",
            theme === "dark" ? "text-zinc-100" : "text-zinc-900"
          )}
        >
          {title}
        </h3>
      )}
      <div className="text-sm leading-relaxed">{children}</div>

      {/* subtle hover overlay for dark mode */}
      {theme === "dark" && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent to-zinc-900/30 pointer-events-none"></div>
      )}
    </div>
  );
}