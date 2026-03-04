"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export default function ProjectsPage() {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <PageContainer>
      <Section id="projects" title="Projects" eyebrow="Selected Work">
        <p
          className={`mb-10 max-w-3xl text-sm leading-relaxed ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          A collection of systems I’ve designed and built across fintech,
          payment processing, mobile engineering, and scalable frontend
          architecture. My primary focus lies in secure transaction flows,
          RBAC-based dashboards, and performance-optimized applications.
        </p>

        <FeaturedProject />
        <div className="mt-20">
          {/* <ProjectGrid /> */}
        </div>
      </Section>
    </PageContainer>
  );
}