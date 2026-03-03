"use client";

import { useScrollReveal } from "@/features/animations/useScrollReveal";
import { profile } from "@/lib/data/profile";

export function HeroSection() {
  // Now properly typed for each element
  const { ref: sectionRef, visible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: badgeRef, visible: badgeVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: titleRef, visible: titleVisible } = useScrollReveal<HTMLHeadingElement>();
  const { ref: summaryRef, visible: summaryVisible } = useScrollReveal<HTMLParagraphElement>();
  const { ref: locationRef, visible: locationVisible } = useScrollReveal<HTMLParagraphElement>();

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col gap-6 py-10"
    >
      {/* Badge - div ref */}
      <div
        ref={badgeRef}
        className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1 text-xs font-medium transition-all duration-700 ease-out ${
          badgeVisible
            ? "border-emerald-400 bg-emerald-400/10 text-emerald-300 shadow-lg shadow-emerald-500/25 translate-y-0 opacity-100"
            : "border-zinc-800 bg-zinc-900/60 text-zinc-300 shadow-none -translate-y-4 opacity-0"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full transition-all duration-700 ease-out ${
            badgeVisible ? "bg-emerald-400 scale-100" : "bg-zinc-400 scale-75"
          }`}
        />
        {profile.availability}
      </div>

      <div className="space-y-4">
        {/* Title - h1 ref */}
        <h1
          ref={titleRef}
          className={`text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl transition-all duration-1000 ease-out ${
            titleVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          {profile.name}
        </h1>
        
        {/* Summary - p ref */}
        <p
          ref={summaryRef}
          className={`text-lg transition-all duration-800 ease-out sm:text-xl ${
            summaryVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          {profile.summary}
        </p>
        
        {/* Location - p ref */}
        <p
          ref={locationRef}
          className={`text-sm transition-all duration-800 ease-out text-zinc-400 ${
            locationVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          {profile.location} · Focused on React, React Native, TypeScript, and modern
          fintech architectures.
        </p>
      </div>
    </section>
  );
}
