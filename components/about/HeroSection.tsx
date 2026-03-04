"use client";

import Image from "next/image";
import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";
import { getTotalExperience } from "@/lib/utils/getTotalExperience";
import { motion, useInView, useAnimation, MotionProps } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const { theme } = useThemeContext();
  const totalExp = getTotalExperience("2021-08-12");
  const isDark = theme === "dark";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  const profileInitial = { scale: 0.8, rotate: -10 };
  const profileAnimate = { scale: 1, rotate: 0 };
  const profileWhileHover = { scale: 1.05, rotateY: 5 };
  const profileWhileTap = { scale: 0.98 };

  return (
    <section
      ref={ref}
      className={cn(
        "relative mb-24 space-y-12 overflow-hidden py-20 text-center",
        isDark
          ? "bg-gradient-to-br from-zinc-950/90 via-zinc-900/80 to-black/50"
          : "bg-gradient-to-br from-zinc-50/80 via-white to-emerald-50/60",
      )}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={cn(
            "absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20",
            isDark ? "bg-emerald-500/10" : "bg-emerald-400/20",
          )}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className={cn(
            "absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 blur-xl",
            isDark ? "bg-emerald-400/10" : "bg-emerald-500/20",
          )}
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 container mx-auto px-4"
      >
        {/* Profile Image with Glassmorphism & Hover Effects */}
        <motion.div
          variants={itemVariants}
          initial={profileInitial}
          animate={profileAnimate}
          whileHover={profileWhileHover}
          whileTap={profileWhileTap}
          className={cn(
            "group relative mx-auto mb-12 flex h-44 w-44 items-center justify-center rounded-3xl border-4 shadow-2xl backdrop-blur-xl sm:h-56 sm:w-56",
            isDark
              ? "border-emerald-500/30 bg-zinc-900/50 shadow-emerald-500/10"
              : "border-emerald-400/40 bg-white/70 shadow-emerald-400/20",
          )}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <Image
            src="/profile.jpeg"
            alt="Shashank Tripathi"
            width={250}
            height={250}
            className={cn(
              "h-full w-full rounded-2xl object-cover ring-2 transition-all duration-500 group-hover:brightness-110",
              isDark ? "ring-emerald-400/30" : "ring-emerald-500/40",
            )}
            priority
          />
          {/* Profile Glow Effect */}
          <motion.div
            className={cn(
              "absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-400/30 via-emerald-500/20 to-transparent opacity-0",
              isDark ? "from-emerald-400/40" : "from-emerald-500/50",
            )}
            animate={{ opacity: [0, 0.3, 0], scale: [1, 1.2, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Animated Designation */}
        <motion.h1
          variants={itemVariants}
          className={cn(
            "relative text-3xl font-black tracking-tight sm:text-5xl md:text-6xl",
            isDark
              ? "bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent"
              : "bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent",
          )}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Frontend Developer
          <motion.span
            className="inline-block w-1 bg-emerald-400 ml-2"
            animate={{
              opacity: [1, 1, 0, 0],
              scaleY: [1, 1, 1, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </motion.h1>

        {/* Enhanced Introduction */}
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl px-4">
          <p
            className={cn(
              "text-normal leading-relaxed sm:text-2xl md:text-2.5xl",
              isDark
                ? "text-zinc-100 drop-shadow-lg"
                : "text-zinc-800 drop-shadow-md",
            )}
          >
            Frontend Developer with 4+ years of experience building secure,
            scalable applications using React and React Native in fintech
            environments. Specialized in architecting high-performance
            solutions, scalable distributed systems, and complex payment
            workflows across web and mobile platforms. Strong focus on frontend
            architecture, performance engineering, API-driven design,
            application reliability, and delivering secure and seamless user
            experiences.
          </p>
        </motion.div>

        {/* <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 py-8"
        >
          {[
            { value: totalExp, label: "Experience", icon: "📅" },
            { value: "10+", label: "Projects", icon: "🚀" },
            { value: "React", label: "Expert", icon: "⚡" }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 cursor-pointer sm:p-8 hover:shadow-2xl hover:shadow-emerald-500/10"
              whileHover={{
                y: -10,
                scale: 1.05
              }}
              transition={{ duration: 0.3 }}
              style={{ 
                borderImage: isDark 
                  ? 'linear-gradient(45deg, #10b981, #0ea5e9) 1' 
                  : 'linear-gradient(45deg, #059669, #0369a1) 1' 
              }}
            >
              <motion.div
                className="text-3xl mb-2 opacity-60 group-hover:opacity-100 transition-opacity"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.icon}
              </motion.div>
              
              <span className={cn(
                "block font-mono text-3xl md:text-4xl font-black mb-1",
                isDark ? "text-zinc-50 drop-shadow-lg" : "text-zinc-900 drop-shadow-md"
              )}>
                {stat.value}
              </span>
              
              <span className={cn(
                "uppercase tracking-widest font-medium text-sm",
                isDark ? "text-emerald-300" : "text-emerald-600"
              )}>
                {stat.label}
              </span>
              
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>
    </section>
  );
}
