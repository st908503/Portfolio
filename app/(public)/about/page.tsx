"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { AboutHero } from "@/components/about/AboutHero";
import { Timeline } from "@/components/about/Timeline";

export default function AboutPage() {
  const { theme } = useThemeContext();

  return (
    <PageContainer>
      <Section title="About" eyebrow="Overview">
        <p 
          className={`
            max-w-2xl text-sm 
            ${theme === 'dark' 
              ? 'text-zinc-300' 
              : 'text-zinc-600'
            }
          `}
        >
          I am a frontend engineer focused on React, React Native, and fintech ecosystems.
          This page will detail my journey, principles, and how I approach building
          reliable products.
        </p>
      </Section>
      <AboutHero />
      <Timeline />
    </PageContainer>
  );
}
