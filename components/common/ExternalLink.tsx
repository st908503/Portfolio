"use client";

import Link from "next/link";
import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";

type Props = React.ComponentProps<typeof Link>;

export function ExternalLink({ className, children, ...props }: Props) {
  const { theme } = useThemeContext();

  return (
    <Link
      className={cn(
        "inline-flex items-center text-xs font-medium transition-colors",
        theme === 'dark'
          ? "text-emerald-400 hover:text-emerald-300 hover:underline"
          : "text-emerald-600 hover:text-emerald-500 hover:underline",
        className
      )}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </Link>
  );
}
