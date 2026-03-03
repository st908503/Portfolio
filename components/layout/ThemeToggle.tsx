"use client";

import { useTheme } from "@/features/theme/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-300 hover:border-zinc-600 hover:text-zinc-50"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☾" : "☼"}
    </button>
  );
}
