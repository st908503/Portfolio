"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { profile } from "@/lib/data/profile";

export function AboutHero() {
  const { theme } = useThemeContext();

  return (
    <div className="space-y-4">
      <h1 className={`
        text-2xl font-semibold tracking-tight md:text-3xl
        ${theme === 'dark' 
          ? 'text-zinc-50' 
          : 'text-zinc-900'
        }
      `}>
        About {profile.name}
      </h1>
      <p className={`
        max-w-2xl text-sm 
        ${theme === 'dark' 
          ? 'text-zinc-300' 
          : 'text-zinc-600'
        }
      `}>
        I'm a frontend engineer focused on React, React Native, and fintech ecosystems.
        I enjoy building secure payment flows, RBAC-driven dashboards, and high-performance
        apps that handle real money and real users at scale.
      </p>
    </div>
  );
}
