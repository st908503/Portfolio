"use client";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/features/theme/theme-provider";
export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();
  return <button type="button" className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
    <Sun size={18} className="sun-icon" /><Moon size={18} className="moon-icon" />
  </button>;
}
