import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { AboutHero } from "@/components/about/AboutHero";
import { Timeline } from "@/components/about/Timeline";

export default function AboutPage() {
  return (
    <PageContainer>
      <Section title="About" eyebrow="Overview">
        <p className="max-w-2xl text-sm text-zinc-300">
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
