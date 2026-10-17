import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { WorkArt } from "./WorkArt";
import type { Project } from "@/types/project";

export function WorkCard({ project, index }: { project: Project; index: number }) {
  return <article className="work-card">
    <Link href={`/projects/${project.slug}`} className="work-art-link" aria-label={`Explore ${project.title}`}><WorkArt visual={project.visual} /><span className="work-hover-arrow"><ArrowUpRight size={22} /></span></Link>
    <div className="work-card-body"><div className="work-card-meta"><span>{project.context}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
      <Link href={`/projects/${project.slug}`} className="work-title"><h3>{project.title}</h3><ArrowUpRight size={22} /></Link>
      <p className="work-description">{project.description}</p>
      <div className="tags">{project.tech.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div>
      <Link href={`/projects/${project.slug}`} className="work-read-more">View contribution<ArrowRight size={17} /></Link>
    </div>
  </article>;
}
