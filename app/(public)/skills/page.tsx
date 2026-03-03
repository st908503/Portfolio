import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { SkillMatrix } from "@/components/skills/SkillMatrix";

export default function SkillsPage() {
  return (
    <PageContainer>
      <Section id="skills" title="Skills" eyebrow="Tech stack">
        <p className="mb-4 max-w-2xl text-sm text-zinc-300">
          A snapshot of the languages, frameworks, and tools I use to build secure,
          performant fintech and product experiences.
        </p>
        <SkillMatrix />
      </Section>
    </PageContainer>
  );
}
