import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectFilters } from "@/components/projects/ProjectFilters";

export default function ProjectsPage() {
  return (
    <PageContainer>
      <Section id="projects" title="Projects" eyebrow="Selected work">
        <p className="mb-4 max-w-2xl text-sm text-zinc-300">
          A few projects that showcase my experience in fintech, payment systems, and
          high-performance dashboards.
        </p>
        <ProjectFilters />
        <ProjectGrid />
      </Section>
    </PageContainer>
  );
}
