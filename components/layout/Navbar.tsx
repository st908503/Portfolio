"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useThemeContext } from "@/features/theme/theme-provider";
import { navigation } from "@/lib/constants/navigation";
import { cn } from '@/lib/utils/cn';

export function Navbar() {
  const pathname = usePathname();
  const { theme } = useThemeContext();

  return (
    <nav className={cn(
      "hidden items-center gap-6 text-sm md:flex",
      theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
    )}>
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-all hover:underline",
              // Theme-aware nav states
              theme === 'dark' 
                ? "hover:text-zinc-50"
                : "hover:text-zinc-900",
              isActive && cn(
                theme === 'dark'
                  ? "text-zinc-50 underline decoration-emerald-400"
                  : "text-zinc-900 underline decoration-emerald-500"
              )
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
