"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useThemeContext } from "@/features/theme/theme-provider";
import { navigation } from "@/lib/constants/navigation";
import { cn } from '@/lib/utils/cn';
import { motion } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className={cn(
      "relative hidden items-center gap-1 md:flex",
      "backdrop-blur-xl",
      isDark 
        ? "bg-zinc-900/80 " 
        : "bg-white/80",
      "px-3 py-2 rounded-2xl",
      " transition-all duration-500"
    )}>
    
      
      {navigation.map((item, index) => {
        const isActive = pathname === item.href;
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={item.href}
            className="relative"
            whileHover={{ 
              scale: 1.08, 
              y: -2 
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={item.href}
              className={cn(
                "relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-1.5",
                
                // Base states - FIXED
                isDark ? "text-zinc-200" : "text-zinc-700",
                
                // Active state - FIXED
                isActive && cn(
                  isDark 
                    ? "text-emerald-300 bg-zinc-800/80 shadow-emerald-400/40 backdrop-blur-sm border border-emerald-500/30" 
                    : "text-emerald-600 bg-emerald-50/80 shadow-emerald-400/40 backdrop-blur-sm border border-emerald-400/30"
                ),
                
                // Hovered non-active state - FIXED
                isHovered && !isActive && cn(
                  isDark 
                    ? "text-zinc-50 bg-zinc-800/90 shadow-zinc-500/40 backdrop-blur-sm border border-zinc-600/40" 
                    : "text-zinc-900 bg-white/90 shadow-zinc-300/40 backdrop-blur-sm border border-zinc-300/40"
                ),
                
                // Hover shadow
                "hover:shadow-lg",
                isDark ? "hover:shadow-emerald-400/20" : "hover:shadow-emerald-500/30"
              )}
            >
              {/* Status indicator dot - FIXED */}
              <motion.div
                className={cn(
                  "w-2 h-2 rounded-full shadow-sm flex-shrink-0",
                  isActive 
                    ? "bg-gradient-to-r from-emerald-400 to-teal-400 shadow-emerald-400/60" 
                    : isDark 
                      ? "bg-zinc-500/60" 
                      : "bg-zinc-400/60"
                )}
                animate={isActive ? { 
                  scale: [1, 1.3, 1],
                  boxShadow: isDark 
                    ? ["0 0 0 3px rgba(16,185,129,0.4)", "0 0 12px rgba(16,185,129,0.7)", "0 0 0 3px rgba(16,185,129,0.4)"]
                    : ["0 0 0 3px rgba(6,150,105,0.5)", "0 0 15px rgba(6,150,105,0.8)", "0 0 0 3px rgba(6,150,105,0.5)"]
                } : {}}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              <span className="relative z-10">{item.label}</span>
            </Link>

            {/* Dynamic underline - FIXED */}
            <motion.div
              className={cn(
                "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full shadow-sm",
                isActive 
                  ? "bg-gradient-to-r from-emerald-400 to-teal-400 shadow-emerald-400/60" 
                  : "bg-gradient-to-r from-emerald-400/60 to-teal-400/60"
              )}
              animate={{
                scaleX: isActive || isHovered ? 1 : 0,
                opacity: isActive || isHovered ? 1 : 0
              }}
              transition={{ duration: 0.25 }}
              style={{ originX: 0.5 }}
            />
          </motion.div>
        );
      })}
    </nav>
  );
}
