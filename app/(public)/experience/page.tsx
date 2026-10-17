<<<<<<< HEAD
"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { getTotalExperience } from "@/lib/utils/getTotalExperience";
export default function ExperiencePage() {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";
 const totalExp = getTotalExperience();
  return (
    <PageContainer>
      <Section title="Experience" eyebrow="Professional Journey">
        <p
          className={`max-w-3xl text-sm leading-relaxed ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          {totalExp}+ years of experience building secure, scalable frontend systems
          across fintech and enterprise environments. My work spans UPI payment
          integrations, merchant dashboards, RBAC-based architectures, mobile
          performance optimization, and compliance-driven financial workflows.
        </p>

        <div className="mt-14">
          <ExperienceTimeline />
        </div>
      </Section>
    </PageContainer>
  );
}
=======
import type { Metadata } from "next";
import { Download } from "lucide-react";
import { ContactCTA, ExperienceList, PageIntro } from "@/components/portfolio/Sections";
import { profile } from "@/lib/data/profile";
export const metadata: Metadata = { title: "Experience" };
export default function ExperiencePage() {
  return <><PageIntro eyebrow="PROFESSIONAL EXPERIENCE" title={<>Built across industries.<br /><em>Grounded in engineering.</em></>} description="4.5+ years across public-sector digital systems, fintech, enterprise applications, and banking workflows. From frontend modules to connected full stack features." /><section className="container experience-page"><div className="experience-page-top"><span className="eyebrow">EY INDIA / MOBILEPE / TCS / NEWGEN</span><a className="text-link" href={profile.resume} download>Download full resume<Download size={17} /></a></div><ExperienceList full /></section><ContactCTA /></>;
}
>>>>>>> eaacee3 (updated resume)
