"use client";

import { cn } from "@/lib/utils/cn";
import type { Project } from "@/types/project";

type Props = {
  project: Project;
  className?: string;
  visible?: boolean;
  delay?: number;
};

export function ProjectCard({ 
  project, 
  className, 
  visible = false,
  delay = 0 
}: Props) {
  return (
    <article 
      className={cn(
        "group flex flex-col gap-3 rounded-xl border bg-zinc-900/40 p-4 transition-all duration-700 ease-out hover:shadow-xl hover:shadow-emerald-500/10",
        className,
        visible 
          ? "translate-y-0 opacity-100 scale-100" 
          : "translate-y-8 opacity-0 scale-95"
      )}
      style={{ 
        transitionDelay: `${delay}ms` 
      }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <header className="space-y-1 relative z-10">
        <h3 className="text-sm font-semibold text-zinc-50 group-hover:text-emerald-400 transition-colors duration-300">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
            {project.subtitle}
          </p>
        )}
        {project.period && (
          <p className="text-xs text-zinc-500">{project.period}</p>
        )}
      </header>

      <p className="text-xs text-zinc-300 relative z-10 leading-relaxed">
        {project.description}
      </p>

      <ul className="list-disc space-y-1 pl-4 text-xs text-zinc-300 relative z-10">
        {project.highlights.map((highlight, index) => (
          <li key={highlight} className="transition-all duration-300 hover:translate-x-1">
            {highlight}
          </li>
        ))}
      </ul>

      <p className="mt-auto text-xs text-zinc-400 relative z-10 font-mono">
        {project.tech.join(" · ")}
      </p>
    </article>
  );
}
