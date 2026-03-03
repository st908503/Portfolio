"use client";

import Link from "next/link";
import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";
import { ArrowUpRight } from "lucide-react"; 

type Props = React.ComponentProps<typeof Link>;

export function ExternalLink({ className, children, ...props }: Props) {
  const { theme } = useThemeContext();

  return (
    <Link
      className={cn(
        "group relative inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 border border-transparent",
        "hover:scale-[1.05] hover:shadow-lg backdrop-blur-sm",
        theme === 'dark'
          ? "text-emerald-400/90 bg-emerald-500/5 hover:bg-emerald-500/10 hover:text-emerald-300 hover:border-emerald-400/30 hover:shadow-emerald-500/10"
          : "text-emerald-600/90 bg-emerald-500/5 hover:bg-emerald-500/10 hover:text-emerald-500 hover:border-emerald-600/30 hover:shadow-emerald-500/20",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 dark:focus-visible:ring-offset-zinc-50",
        className
      )}
      target="_blank"
      rel="noreferrer noopener"
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform duration-300" />
    </Link>
  );
}
