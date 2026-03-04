"use client";

import Image from "next/image";
import Link from "next/link";
import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from "@/lib/utils/cn";
import { getTotalExperience } from "@/lib/utils/getTotalExperience";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
   <section
  ref={ref}
  className={cn(
    "relative overflow-hidden py-20 md:py-24 text-center w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]", // Full viewport width
    isDark
      ? "bg-gradient-to-br from-zinc-950 via-zinc-900 to-black"
      : "bg-gradient-to-br from-white via-zinc-50 to-emerald-50/40",
  )}
>
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate={controls}
    className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16" // Content padding only
  >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 shadow-2xl sm:h-48 sm:w-48"
        >
          <Image
            src="/profile.jpeg"
            alt="Shashank Tripathi"
            width={200}
            height={200}
            className="rounded-full h-full w-full object-cover"
            priority
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
  variants={itemVariants}
  className={cn(
    "text-xl font-black tracking-tight sm:text-2xl md:text-3xl tracking-wide sm:tracking-wider",
    isDark
      ? "bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
      : "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent",
  )}
>
  Frontend Developer
</motion.h1>


        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className={cn(
            "mt-4 text-lg font-medium sm:text-xl",
            isDark ? "text-zinc-300" : "text-zinc-700",
          )}
        >
          {totalExp}+ years building secure UPI systems, Merchant and Admin dashboards &
          high-performance Mobile applications.
        </motion.p>

        {/* Short Description */}
        <motion.p
          variants={itemVariants}
          className={cn(
            "mx-auto mt-5 max-w-3xl text-base leading-relaxed sm:text-lg",
            isDark ? "text-zinc-400" : "text-zinc-600",
          )}
        >
          Specialized in architecting scalable ecosystems across web and mobile
          platforms — focusing on performance engineering, RBAC systems, secure
          authentication, payment workflows, and production reliability.
        </motion.p>

        {/* Impact Stats */}
        <motion.div
          variants={containerVariants}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            { value: totalExp + "+", label: "Years Experience" },
            // { value: "UPI & Payments", label: "Fintech Systems" },
            { value: "Web & Mobile", label: "Cross-Platform Systems" },
            { value: "High Performance", label: "Optimized Apps" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className={cn(
                "rounded-2xl border p-6 backdrop-blur-md transition-all",
                isDark
                  ? "border-zinc-800 bg-zinc-900/60"
                  : "border-zinc-200 bg-white/70",
              )}
            >
              <div
                className={cn(
                  "text-3xl font-black",
                  isDark ? "text-emerald-400" : "text-emerald-600",
                )}
              >
                {stat.value}
              </div>
              <div
                className={cn(
                  "mt-1 text-sm uppercase tracking-widest",
                  isDark ? "text-zinc-400" : "text-zinc-600",
                )}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/about"
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
           Professional Overview
          </Link>

          <Link
            href="/contact"
            className={cn(
              "rounded-xl border px-6 py-3 font-semibold transition",
              isDark
                ? "border-zinc-700 text-zinc-200 hover:bg-zinc-800"
                : "border-zinc-300 text-zinc-800 hover:bg-zinc-100",
            )}
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
