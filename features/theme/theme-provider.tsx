"use client";
import { createContext, useContext, useSyncExternalStore } from "react";
type Theme = "light" | "dark";
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | undefined>(undefined);
const subscribe = (callback: () => void) => {
  window.addEventListener("portfolio-theme", callback);
  window.addEventListener("storage", callback);
  return () => { window.removeEventListener("portfolio-theme", callback); window.removeEventListener("storage", callback); };
};
const getSnapshot = (): Theme => document.documentElement.classList.contains("dark") ? "dark" : "light";
const getServerSnapshot = (): Theme => "light";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  function toggleTheme() {
    const next = getSnapshot() === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("portfolio-theme", next); } catch { /* Storage is optional. */ }
    window.dispatchEvent(new Event("portfolio-theme"));
  }
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeProvider is required");
  return context;
}
