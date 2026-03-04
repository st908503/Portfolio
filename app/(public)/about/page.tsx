"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { AboutHero } from "@/components/about/AboutHero";
import { Timeline } from "@/components/about/Timeline";

export default function AboutPage() {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <PageContainer>
      <Section title="About" eyebrow="Professional Overview">
        <p
          className={`max-w-3xl text-sm leading-relaxed ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          I’m a fintech-focused frontend engineer with 4+ years of experience
          building secure, scalable applications across web and mobile platforms.
          My work centers around architecting high-performance systems for
          real-world financial products — including UPI integrations, merchant
          dashboards, payment settlements, and compliance-driven workflows.
          <br />
          <br />
          I specialize in React and React Native ecosystems, with strong
          emphasis on frontend architecture, performance optimization,
          role-based access control (RBAC), secure authentication (JWT),
          and building reliable production systems that handle real transactions
          at scale.
        </p>
      </Section>

      {/* Split Layout */}
      <div className=" grid gap-16 lg:grid-cols-2">
        
        {/* Left Side - About Content */}
        <div className="lg:sticky lg:top-28 h-fit">
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