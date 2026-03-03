"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from '@/lib/utils/cn';

type PageContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

export function PageContainer({ children, className }: PageContainerProps) {
  const { theme } = useThemeContext();

  return (
    <div
      className={cn(
        // Full width with responsive padding only
        "w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16",
        // Subtle theme-aware backgrounds
        theme === 'dark' 
          ? 'bg-zinc-950/80' 
          : 'bg-zinc-50/80',
        "backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
