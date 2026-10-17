import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { WorkArt } from "@/components/portfolio/WorkArt";
import { ContactCTA } from "@/components/portfolio/Sections";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  return {
    title: project?.title ?? "Project not found",
    description: project?.description,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <>
      <article className="container project-detail">
        <Link href="/projects" className="back-link">
          <ArrowLeft size={15} />
          All projects
        </Link>
        <p className="eyebrow">{project.context}</p>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <div className="project-meta-grid">
          <div>
            <span>PLATFORM</span>
            <p>{project.category}</p>
          </div>
          <div>
            <span>PERIOD</span>
            <p>{project.period}</p>
          </div>
          <div>
            <span>CONTRIBUTION</span>
            <p>{project.role || "Software development"}</p>
          </div>
        </div>
        <WorkArt visual={project.visual} />
        <div className="project-detail-body">
          <aside>
            <p className="eyebrow">FOCUS & CONTRIBUTION</p>
            <h2>{project.outcome}</h2>
            <div className="tags">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {(project.link || project.repo) && (
              <div className="project-resource-links">
                {project.link && (
                  <a
                    href={project.link}
                    className="text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live project
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    className="text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source code
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            )}
          </aside>
          <div>
            <p className="eyebrow">OVERVIEW</p>
            <p className="project-overview">{project.description}</p>
            <h2>My contributions</h2>
            <ul className="contribution-list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>
                  <Check size={18} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <p className="projects-disclaimer">
              This overview describes my professional contributions. The visual
              is a conceptual illustration of the workflow.
            </p>
          </div>
        </div>
        <Link href={`/projects/${next.slug}`} className="next-project">
          <span>
            <span className="eyebrow">NEXT PROJECT</span>
            <strong>{next.title}</strong>
          </span>
          <ArrowUpRight size={32} />
        </Link>
      </article>
      <ContactCTA />
    </>
  );
}
