"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";
import { getTotalExperience } from "@/lib/utils/getTotalExperience";

export function HighlightsGrid() {
  const { theme } = useThemeContext();
  const totalExp = getTotalExperience("2021-04-01");

  return (
    <section className={cn(
      "grid gap-4 text-sm",
      theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600',
      "sm:grid-cols-3"
    )}>
      <div className={cn(
        "rounded-xl border p-4 transition-colors",
        theme === 'dark'
          ? "border-zinc-800 bg-zinc-900/40 backdrop-blur-sm"
          : "border-zinc-200/50 bg-white/80 shadow-sm backdrop-blur-sm"
      )}>
        <h2 className={cn(
          "mb-2 text-xs font-semibold uppercase tracking-wide",
          theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
        )}>
          Experience
        </h2>
        <p>{totalExp} across fintech, enterprise, and banking products.</p>
      </div>
      
      <div className={cn(
        "rounded-xl border p-4 transition-colors",
        theme === 'dark'
          ? "border-zinc-800 bg-zinc-900/40 backdrop-blur-sm"
          : "border-zinc-200/50 bg-white/80 shadow-sm backdrop-blur-sm"
      )}>
        <h2 className={cn(
          "mb-2 text-xs font-semibold uppercase tracking-wide",
          theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
        )}>
          Fintech & payments
        </h2>
        <p>UPI, BBPS, KYC, merchant onboarding, settlements, fraud detection.</p>
      </div>
      
      <div className={cn(
        "rounded-xl border p-4 transition-colors",
        theme === 'dark'
          ? "border-zinc-800 bg-zinc-900/40 backdrop-blur-sm"
          : "border-zinc-200/50 bg-white/80 shadow-sm backdrop-blur-sm"
      )}>
        <h2 className={cn(
          "mb-2 text-xs font-semibold uppercase tracking-wide",
          theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
        )}>
          Architecture & quality
        </h2>
        <p>RBAC, micro-frontends, performance optimization, monitoring, secure APIs.</p>
      </div>
    </section>
  );
}
