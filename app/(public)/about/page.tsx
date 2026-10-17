import type { Metadata } from "next";
import { AboutSection, ContactCTA, Impact, PageIntro } from "@/components/portfolio/Sections";
export const metadata: Metadata = { title: "About" };
export default function AboutPage() {
  return <><PageIntro eyebrow="ABOUT SHASHANK" title={<>Frontend expertise.<br /><em>A broader engineering perspective.</em></>} description="I’m a senior frontend-focused full stack engineer based in New Delhi, currently working as a Senior Technical Consultant at EY India." /><AboutSection full /><Impact /><ContactCTA /></>;
}
