"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export default function ExperiencePage() {
  const { theme } = useThemeContext();

  return (
    <PageContainer>
      <Section title="Experience" eyebrow="Work history">
        <ExperienceTimeline />
      </Section>
    </PageContainer>
  );
}
