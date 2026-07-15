"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { AboutHero } from "@/components/about/AboutHero";
import { Timeline } from "@/components/about/Timeline";
import { getTotalExperience } from "@/lib/utils/getTotalExperience";

export default function AboutPage() {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";
const totalExp = getTotalExperience();
  return (
    <PageContainer>
      <Section title="About" eyebrow="Professional Overview">
        <p
          className={`max-w-3xl text-sm leading-relaxed ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          I&apos;m a frontend developer with {totalExp}+ years of experience building
          secure, scalable enterprise applications across web and mobile
          platforms. My work focuses on architecting high-performance frontend
          systems for Government Digital Transformation and fintech products,
          including complex business workflows, merchant portals, payment
          systems, settlement platforms, and administrative dashboards.
          <br />
          <br />
          I specialize in React, TypeScript, Next.js, Vite, and React Native
          ecosystems, with a strong emphasis on modular frontend architecture,
          reusable component systems, performance optimization, role-based
          access control (RBAC), REST API integration, and reliable production
          applications designed for complex real-world workflows.
        </p>
      </Section>

      {/* Split Layout */}
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left Side - About Content */}
        <div className="h-fit lg:sticky lg:top-28">
          <AboutHero />
        </div>

        {/* Right Side - Timeline */}
        <div className="mb-10">
          <Timeline />
        </div>
      </div>
    </PageContainer>
  );
}