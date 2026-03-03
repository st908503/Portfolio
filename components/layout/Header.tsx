"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "./PageContainer";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { cn } from '@/lib/utils/cn';

export function Header() {
  const { theme } = useThemeContext();

  return (
    <header className={cn(
      "sticky top-0 z-40 border-b bg-white/70 backdrop-blur-md transition-all",
      theme === 'dark' 
        ? "border-zinc-900/70 bg-zinc-950/70" 
        : "border-zinc-200/70 shadow-sm"
    )}>
      <PageContainer className="flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Navbar />
          <ThemeToggle />
          <MobileNav />
        </div>
      </PageContainer>
    </header>
  );
}
