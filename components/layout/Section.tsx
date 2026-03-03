"use client";

import { useScrollReveal } from "@/features/animations/useScrollReveal";
import { cn } from '@/lib/utils/cn';
import { profile } from "@/lib/data/profile";

type SectionProps = React.PropsWithChildren<{
  id?: string;
  title?: string;
  eyebrow?: string;
  className?: string;
}>;

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
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

// Updated HeroSection using the new Section component
export function HeroSection() {
  const { ref: badgeRef, visible: badgeVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: titleRef, visible: titleVisible } = useScrollReveal<HTMLHeadingElement>();
  const { ref: summaryRef, visible: summaryVisible } = useScrollReveal<HTMLParagraphElement>();
  const { ref: locationRef, visible: locationVisible } = useScrollReveal<HTMLParagraphElement>();

  return (
    <Section 
      id="hero"
      eyebrow="Available Now"
      title={profile.name}
      className="flex flex-col gap-6"
    >
      {/* Badge */}
      <div
        ref={badgeRef}
        className={cn(
          "inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1 text-xs font-medium transition-all duration-700 ease-out",
          badgeVisible
            ? "border-emerald-400 bg-emerald-400/10 text-emerald-300 shadow-lg shadow-emerald-500/25 translate-y-0 opacity-100"
            : "border-zinc-800 bg-zinc-900/60 text-zinc-300 shadow-none -translate-y-4 opacity-0"
        )}
      >
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-all duration-700 ease-out",
            badgeVisible ? "bg-emerald-400 scale-100" : "bg-zinc-400 scale-75"
          )}
        />
        {profile.availability}
      </div>

      {/* Summary & Location */}
      <div className="space-y-4">
        <p
          ref={summaryRef}
          className={cn(
            "text-lg transition-all duration-800 ease-out sm:text-xl",
            summaryVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          )}
        >
          {profile.summary}
        </p>
        
        <p
          ref={locationRef}
          className={cn(
            "text-sm transition-all duration-800 ease-out text-zinc-400",
            locationVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          )}
        >
          {profile.location} · Focused on React, React Native, TypeScript, and modern
          fintech architectures.
        </p>
      </div>
    </Section>
  );
}
