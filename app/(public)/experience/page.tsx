import type { Metadata } from "next";
import { Download } from "lucide-react";
import { ContactCTA, ExperienceList, PageIntro } from "@/components/portfolio/Sections";
import { profile } from "@/lib/data/profile";
export const metadata: Metadata = { title: "Experience" };
export default function ExperiencePage() {
  return <><PageIntro eyebrow="PROFESSIONAL EXPERIENCE" title={<>Built across industries.<br /><em>Grounded in engineering.</em></>} description="4.5+ years across public-sector digital systems, fintech, enterprise applications, and banking workflows. From frontend modules to connected full stack features." /><section className="container experience-page"><div className="experience-page-top"><span className="eyebrow">EY INDIA / MOBILEPE / TCS / NEWGEN</span><a className="text-link" href={profile.resume} download>Download full resume<Download size={17} /></a></div><ExperienceList full /></section><ContactCTA /></>;
}
