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
        "w-full flex flex-col px-6 py-10 md:px-8 lg:px-10", // Removed mx-auto max-w-5xl
        // Full-width theme-aware background
        theme === 'dark' 
          ? 'bg-zinc-950/50 backdrop-blur-sm' 
          : 'bg-zinc-50/50 backdrop-blur-sm',
        className
      )}
    >
      {children}
    </div>
  );
}
