"use client";

import { useTheme } from "@/features/theme/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`
        inline-flex h-10 w-10 items-center justify-center
        rounded-full border text-sm font-medium
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400
        ${theme === "dark"
          ? "border-zinc-700 bg-zinc-900/70 text-zinc-300 hover:border-emerald-500 hover:text-emerald-400"
          : "border-zinc-200 bg-white/80 text-zinc-700 hover:border-emerald-500 hover:text-emerald-600"
        }
        shadow-sm hover:shadow-md
      `}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☼" : "☾"}
    </button>
  );
}
