import type { Metadata } from "next";
import { ContactCTA, PageIntro } from "@/components/portfolio/Sections";
import { ProjectExplorer } from "@/components/portfolio/ProjectExplorer";
export const metadata: Metadata = { title: "Projects & Selected Work" };
export default function ProjectsPage() {
  return <><PageIntro eyebrow="PROJECTS & SELECTED WORK" title={<>Engineering for<br /><em>real operational complexity.</em></>} description="Professional contributions across government digital services, financial operations, cross-platform mobile features, and enterprise applications. Personal projects will join the collection as they’re ready." /><ProjectExplorer /><ContactCTA /></>;
}
