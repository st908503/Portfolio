"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useScrollReveal } from "@/features/animations/useScrollReveal";
import { cn } from '@/lib/utils/cn';
import { profile } from "@/lib/data/profile";

type SectionProps = React.PropsWithChildren<{
  id?: string;
  title?: string;
  eyebrow?: string;
  className?: string;
}>;

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Initial load: read from localStorage or system preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme") as Theme | null;

    let nextTheme: Theme;
    if (stored === "light" || stored === "dark") {
      nextTheme = stored;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      nextTheme = prefersDark ? "dark" : "light";
    }

    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Whenever theme changes, sync DOM + localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return ctx;
}

export function Section({ id, title, eyebrow, className, children }: SectionProps) {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();

  return (
    <section 
      id={id} 
      className={cn("space-y-4 py-10", className)}
    >
      {(eyebrow || title) && (
        <header 
          ref={headerRef}
          className={cn(
            "space-y-2 transition-all duration-800 ease-out",
            headerVisible 
              ? "translate-y-0 opacity-100" 
              : "-translate-y-6 opacity-0"
          )}
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400 dark:text-emerald-300">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl dark:text-zinc-100">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

export { ThemeProvider, useThemeContext };
