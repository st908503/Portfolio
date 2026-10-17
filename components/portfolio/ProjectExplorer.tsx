"use client";
import { useState } from "react";
import { ArrowUpRight, FolderPlus } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { WorkCard } from "./WorkCard";
import { profile } from "@/lib/data/profile";

export function ProjectExplorer() {
  const [filter, setFilter] = useState("All work");
  const filtered = projects.filter(project => filter === "All work" || project.category === filter);
  const personal = projects.filter(project => project.kind === "personal");
  return <div className="container projects-content">
    <div className="project-toolbar"><div className="filter-group" role="group" aria-label="Filter projects by platform">{["All work", "Web", "Mobile"].map(label => <button key={label} type="button" onClick={() => setFilter(label)} aria-pressed={filter === label}>{label}<span>{projects.filter(p => label === "All work" || p.category === label).length}</span></button>)}</div><span className="mono project-count" role="status">{String(filtered.length).padStart(2, "0")} SELECTED {filtered.length === 1 ? "PROJECT" : "PROJECTS"}</span></div>
    <div className="work-grid project-explorer-grid">{filtered.map((project, index) => <WorkCard key={project.slug} project={project} index={index} />)}</div>
    {personal.length === 0 && <div className="future-projects"><FolderPlus size={30} strokeWidth={1.2} /><div><p className="eyebrow">PERSONAL PROJECTS</p><h2>A collection that will keep growing.</h2><p>Personal projects and experiments will be added here alongside my professional work.</p></div><a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-link">Follow on GitHub<ArrowUpRight size={17} /></a></div>}
    <p className="projects-disclaimer">Professional work is summarized from my experience. Illustrations represent workflows; they are not product screenshots.</p>
  </div>;
}
