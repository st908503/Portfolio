"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectFilters } from "@/components/projects/ProjectFilters";

export default function ProjectsPage() {
  const { theme } = useThemeContext();

  return (
    <PageContainer>
      <Section id="projects" title="Projects" eyebrow="Selected work">
        <p className={`
          mb-4 max-w-2xl text-sm 
          ${theme === 'dark' 
            ? 'text-zinc-300' 
            : 'text-zinc-600'
          }
        `}>
          A few projects that showcase my experience in fintech, payment systems, and
          high-performance dashboards.
        </p>
        <ProjectFilters />
        <ProjectGrid />
      </Section>
    </PageContainer>
  );
}
