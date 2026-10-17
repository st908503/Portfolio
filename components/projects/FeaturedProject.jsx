import { projects } from "@/lib/data/projects";
import { WorkCard } from "@/components/portfolio/WorkCard";
export function FeaturedProject() {
  const project = projects[0];
  return project ? <WorkCard project={project} index={0} /> : null;
}
