"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export default function ExperiencePage() {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <PageContainer>
      <Section title="Experience" eyebrow="Professional Journey">
        <p
          className={`max-w-3xl text-sm leading-relaxed ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          4+ years of experience building secure, scalable frontend systems
          across fintech and enterprise environments. My work spans UPI payment
          integrations, merchant dashboards, RBAC-based architectures, mobile
          performance optimization, and compliance-driven financial workflows.
        </p>

        <div className="mt-14">
          <ExperienceTimeline />
        </div>
      </Section>
    </PageContainer>
  );
}