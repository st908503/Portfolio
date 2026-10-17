import type { Metadata } from "next";
import { ContactCTA, PageIntro, SkillsList } from "@/components/portfolio/Sections";
export const metadata: Metadata = { title: "Skills & Capabilities" };
export default function SkillsPage() {
  return <><PageIntro eyebrow="SKILLS & CAPABILITIES" title={<>Frontend foundations.<br /><em>Full stack capabilities.</em></>} description="A practical toolkit spanning React and TypeScript architecture, Node.js and databases, application quality, and AI-assisted development. Includes working experience and technical foundations from my resume." /><section className="container skills-page"><SkillsList full /></section><ContactCTA /></>;
}
