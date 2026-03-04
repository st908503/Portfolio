"use client";

import Link from "next/link";
import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "./PageContainer";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { cn } from '@/lib/utils/cn';
import { motion } from "framer-motion";

export function Header() {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <motion.header 
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-2xl transition-all duration-500",
        isDark 
          ? "border-zinc-900/50 bg-zinc-950/80 shadow-black/20" 
          : "border-zinc-200/50 bg-white/80 shadow-lg shadow-zinc-200/50"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <PageContainer className="flex h-16 items-center justify-between gap-6 relative px-4">
        {/* Left: Logo - Click to go to home */}
        <div className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200">
          <Link href="/">
            <motion.span 
              className={cn(
                "font-black text-2xl tracking-tight bg-gradient-to-r",
                isDark 
                  ? "from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent shadow-emerald-400/25" 
                  : "from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent shadow-emerald-500/30"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ST
            </motion.span>
          </Link>
        </div>

        {/* Center: Navbar */}
        <div className="flex-1 flex justify-center max-w-md">
          <Navbar />
        </div>

        {/* Right: Theme Toggle + Mobile */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <ThemeToggle />
          <MobileNav />
        </div>
      </PageContainer>
    </motion.header>
  );
}
