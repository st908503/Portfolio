"use client";

import { useScrollReveal } from "@/features/animations/useScrollReveal";
import { useThemeContext } from "@/features/theme/theme-provider";
import { cn } from '@/lib/utils/cn';
import { profile } from "@/lib/data/profile";

type SectionProps = React.PropsWithChildren<{
  id?: string;
  title?: string;
  eyebrow?: string;
  className?: string;
}>;

export function Section({ id, title, eyebrow, className, children }: SectionProps) {
  const { theme } = useThemeContext();
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
            <p className={cn(
              "text-xs font-semibold uppercase tracking-wide",
              theme === 'dark' 
                ? "text-emerald-400" 
                : "text-emerald-500"
            )}>
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className={cn(
              "text-2xl font-semibold tracking-tight md:text-3xl",
              theme === 'dark' 
                ? "text-zinc-50" 
                : "text-zinc-900"
            )}>
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
  const { theme } = useThemeContext();
  const { ref: badgeRef, visible: badgeVisible } = useScrollReveal<HTMLDivElement>();
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
          {
            // Dark mode
            'border-emerald-400 bg-emerald-400/10 text-emerald-300 shadow-lg shadow-emerald-500/25 translate-y-0 opacity-100':
              badgeVisible && theme === 'dark',
            'border-zinc-800 bg-zinc-900/60 text-zinc-300 shadow-none -translate-y-4 opacity-0':
              !badgeVisible && theme === 'dark',
            // Light mode  
            'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-lg shadow-emerald-400/25 translate-y-0 opacity-100':
              badgeVisible && theme === 'light',
            'border-zinc-200 bg-zinc-100/60 text-zinc-600 shadow-none -translate-y-4 opacity-0':
              !badgeVisible && theme === 'light',
          }
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
            {
              'text-zinc-200': theme === 'dark',
              'text-zinc-700': theme === 'light',
            },
            summaryVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          )}
        >
          {profile.summary}
        </p>
        
        <p
          ref={locationRef}
          className={cn(
            "text-sm transition-all duration-800 ease-out",
            {
              'text-zinc-400': theme === 'dark',
              'text-zinc-600': theme === 'light',
            },
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
