"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useThemeContext } from "@/features/theme/theme-provider";

export function MobileNav() {
  const pathname = usePathname();
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      {/* Enhanced Hamburger Button */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "group relative h-12 w-12 rounded-2xl p-3 backdrop-blur-xl transition-all duration-300 flex items-center justify-center z-50",
          "border-2 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95",
          open 
            ? "border-emerald-400/50 bg-emerald-500/10 shadow-emerald-400/30" 
            : isDark
              ? "border-zinc-700/50 bg-zinc-900/60 shadow-zinc-800/20" 
              : "border-zinc-300/50 bg-white/80 shadow-zinc-400/20"
        )}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle navigation"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div 
              key="close" 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0 }}
              className="z-50"
            >
              <X className={cn(
                "h-5 w-5 group-hover:text-emerald-500 transition-colors duration-200",
                isDark ? "text-zinc-300" : "text-zinc-600"
              )} />
            </motion.div>
          ) : (
            <motion.div 
              key="menu" 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0 }}
              className="z-50"
            >
              <Menu className={cn(
                "h-5 w-5 group-hover:text-emerald-500 transition-colors duration-200",
                isDark ? "text-zinc-300" : "text-zinc-600"
              )} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Premium Slide-down Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "fixed inset-x-0 top-16 z-40 mx-4",
              "backdrop-blur-2xl shadow-2xl shadow-black/30 rounded-3xl",
              "border",
              isDark
                ? "bg-zinc-950/95 border-zinc-800/50 shadow-zinc-900/40"
                : "bg-white/95 border-zinc-200/50 shadow-zinc-300/30"
            )}
          >
            <nav className="p-6 space-y-3">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-3 px-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3 group",
                        "hover:scale-105 hover:shadow-lg",
                        isDark
                          ? "hover:shadow-emerald-500/20 hover:shadow-zinc-800/30"
                          : "hover:shadow-emerald-400/30 hover:shadow-zinc-300/30",
                        isActive 
                          ? cn(
                              isDark
                                ? "text-emerald-400 bg-zinc-900/80 shadow-emerald-500/40 backdrop-blur-sm border border-emerald-500/40 font-bold"
                                : "text-emerald-600 bg-emerald-50/80 shadow-emerald-400/40 backdrop-blur-sm border border-emerald-400/30 font-bold"
                            )
                          : cn(
                              isDark
                                ? "text-zinc-200 hover:text-zinc-100 hover:bg-zinc-800/90 shadow-zinc-700/40 backdrop-blur-sm border border-zinc-700/40"
                                : "text-zinc-700 hover:text-zinc-900 hover:bg-white/90 shadow-zinc-300/40 backdrop-blur-sm border border-zinc-300/40"
                            )
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {isActive && (
                        <motion.div
                          className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg flex-shrink-0"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
