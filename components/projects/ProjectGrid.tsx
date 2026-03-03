"use client";

import { projects } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectCard";
import { useStaggerList } from "@/features/animations/useStaggerList";
import { cn } from "@/lib/utils/cn";

export function ProjectGrid() {
  const visibleIndexes = useStaggerList(projects.length, 80);

  return (
    <div className="grid gap-6 md:grid-cols-2 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.title}
          project={project}
          visible={visibleIndexes.includes(index)}
          delay={index * 80}
          className="relative overflow-hidden"
        />
      ))}
    </div>
  );
}
