import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Download, Github, Linkedin, MapPin, Plus } from "lucide-react";
import { profile } from "@/lib/data/profile";
import { experience } from "@/lib/data/experience";
import { projects } from "@/lib/data/projects";
import { skills } from "@/lib/data/skills";
import { Reveal } from "./Reveal";
import { WorkCard } from "./WorkCard";

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow hero-enter"><span className="status-dot" />{profile.currentRole} · {profile.currentCompany}</p>
        <h1 id="hero-heading" className="hero-enter delay-1">Shashank<br />Tripathi<span className="heading-period">.</span></h1>
        <p className="hero-role hero-enter delay-2">Frontend depth.<br /><span>Full stack perspective.</span></p>
        <p className="hero-description hero-enter delay-2">I build dependable web and mobile applications, with a focus on reusable architecture, thoughtful interfaces, and the systems that connect them.</p>
        <div className="hero-buttons hero-enter delay-3">
          <Link href="#projects" className="button button-primary">Explore my work <ArrowUpRight size={19} /></Link>
          <a href={profile.resume} download className="button button-secondary">Download resume <Download size={18} /></a>
        </div>
        <div className="hero-socials hero-enter delay-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} />GitHub<ArrowUpRight size={13} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} />LinkedIn<ArrowUpRight size={13} /></a>
          <span><MapPin size={16} />{profile.location}</span>
        </div>
      </div>
      <div className="hero-portrait hero-enter delay-2">
        <div className="portrait-frame">
          <Image src="/profile.jpeg" alt="Shashank Tripathi, frontend-focused full stack engineer" width={800} height={800} priority sizes="(max-width: 700px) 90vw, 400px" className="portrait-image" />
          <div className="portrait-index">ST / 01</div>
        </div>
        <div className="portrait-caption"><div className="ey-mark">EY<span /></div><div><span>CURRENTLY BUILDING AT</span><strong>Ernst & Young India</strong><p>Government digital systems</p></div><ArrowUpRight size={24} /></div>
        <p className="portrait-footnote"><span className="status-dot" />React · TypeScript · Next.js · Node.js</p>
      </div>
      <div className="hero-bottom"><a href="#projects">SELECTED WORK <ArrowDown size={16} /></a><span>Public sector / Fintech / Enterprise / Mobile</span></div>
    </section>
  );
}

export function SectionHeading({ number, label, title, description, href, linkLabel }: { number: string; label: string; title: React.ReactNode; description?: string; href?: string; linkLabel?: string }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow"><span className="section-number">{number}</span>{label}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>
      {href && <Link href={href} className="text-link">{linkLabel || "Explore more"}<ArrowUpRight size={18} /></Link>}
    </div>
  );
}

export function Impact() {
  return <section className="impact-band" aria-label="Career at a glance"><div className="container impact-inner">
    <Reveal className="impact-stat"><strong>{profile.experience}<span>years</span></strong><div><h2>Building for production</h2><p>Enterprise, fintech, and mobile applications.</p></div></Reveal>
    <Reveal className="impact-stat" delay={60}><strong>{String(experience.length).padStart(2, "0")}<span>teams</span></strong><div><h2>A broad engineering perspective</h2><p>EY India, MobilePe, TCS, and Newgen.</p></div></Reveal>
    <Reveal className="impact-stat" delay={120}><strong>25<span>%</span></strong><div><h2>Fewer application crashes</h2><p>Contributed to reliability improvements at MobilePe.</p></div></Reveal>
  </div></section>;
}

export function AboutSection({ full = false }: { full?: boolean }) {
  return <section id="about" className="section container about-section">
    {!full && <Reveal><SectionHeading number="03" label="ABOUT" title="Engineering with context." href="/about" linkLabel="More about me" /></Reveal>}
    <div className="about-grid">
      <Reveal><p className="about-lead">The interface is where the experience begins. The architecture is what keeps it working.</p><div className="about-signature"><span className="signature-line" /><span>Shashank Tripathi<br /><small>{profile.title}</small></span></div></Reveal>
      <Reveal delay={80} className="about-body">
        <p>I’m a senior frontend-focused full stack engineer based in New Delhi. Over 4.5+ years, I’ve worked on government service workflows, financial platforms, enterprise applications, and cross-platform mobile features.</p>
        <p>At EY India, I build modular React and TypeScript interfaces for a Government Digital System. My work brings together reusable components, predictable state, shared data models, and consistent REST API integration.</p>
        {full && <><p>Previously at MobilePe, I worked across React, Next.js, React Native, and Node.js, building merchant onboarding, payment, reconciliation, and settlement experiences. Earlier roles at TCS and Newgen grounded my work in enterprise and banking applications.</p><p>My frontend experience is complemented by backend and database knowledge in the MERN ecosystem. I also work with AI-assisted coding and debugging, with knowledge of LLM integration, prompt engineering, and RAG fundamentals.</p></>}
        <div className="about-facts"><span><MapPin size={17} />{profile.location}</span><span><BriefcaseBusiness size={17} />{profile.currentCompany}</span></div>
      </Reveal>
    </div>
    {full && <Reveal><div className="education-row"><span className="eyebrow">EDUCATION</span><div><h3>{profile.education.institution}</h3><p>{profile.education.degree}</p><p>{profile.education.location} · {profile.education.score}</p></div><span className="mono">{profile.education.period}</span></div></Reveal>}
  </section>;
}

export function ProjectsSection() {
  return <section id="projects" className="section work-section"><div className="container">
    <Reveal><SectionHeading number="01" label="SELECTED WORK" title="Complex workflows. Clear interfaces." description="Professional contributions across government services, financial platforms, and mobile applications." href="/projects" linkLabel="View all work" /></Reveal>
    <div className="work-grid home-work-grid">{projects.slice(0, 3).map((project, index) => <Reveal key={project.slug} delay={index * 70}><WorkCard project={project} index={index} /></Reveal>)}</div>
    <div className="work-note"><span>Experience-led work overviews, with room for future personal projects.</span><Link href="/projects" className="text-link">Explore the collection<ArrowRight size={17} /></Link></div>
  </div></section>;
}

export function ExperienceList({ full = false }: { full?: boolean }) {
  return <div className="experience-list">{experience.map((item, index) => <Reveal key={item.company}>
    <details className="experience-row" open={full || index === 0}>
      <summary><span className="experience-date mono">{item.start} — {item.end}{item.end === "Present" && <span className="current-label"><span className="status-dot" />CURRENT ROLE</span>}</span><span className="experience-title"><h3>{item.company}</h3><span>{item.role}<i />{item.location}</span></span><span className="experience-expand"><Plus size={22} /></span></summary>
      <div className="experience-detail"><ul>{(full ? item.bullets : item.bullets.slice(0, 3)).map(bullet => <li key={bullet}>{bullet}</li>)}</ul><div className="tags">{(full ? item.tech : item.tech.slice(0, 6)).map(tech => <span key={tech}>{tech}</span>)}</div></div>
    </details>
  </Reveal>)}</div>;
}

export function ExperienceSection() {
  return <section id="experience" className="section container"><Reveal><SectionHeading number="02" label="EXPERIENCE" title="Where I’ve built." description="From banking workflows to public-sector digital services. Each role has added a new perspective." href="/experience" linkLabel="Full career history" /></Reveal><ExperienceList /></section>;
}

export function SkillsList({ full = false }: { full?: boolean }) {
  return <div className="skills-grid">{(full ? skills : skills.slice(0, 6)).map((category, index) => {
    const Icon = category.items[0].icon;
    return <Reveal key={category.name} delay={(index % 3) * 50}><div className="skill-group"><div className="skill-group-heading"><span className="skill-icon"><Icon size={24} strokeWidth={1.6} /></span><span className="mono">{String(index + 1).padStart(2, "0")}</span></div><h3>{category.name}</h3><ul>{category.items.map(item => <li key={item.label}>{item.label}</li>)}</ul></div></Reveal>;
  })}</div>;
}

export function SkillsSection() {
  return <section id="skills" className="section skills-section"><div className="container"><Reveal><SectionHeading number="04" label="CAPABILITIES" title="A practical engineering toolkit." description="Frontend expertise, backend experience, and AI foundations. Tools chosen to support the work." href="/skills" linkLabel="Explore all skills" /></Reveal><SkillsList /></div></section>;
}

export function ContactCTA() {
  return <section className="contact-cta"><Reveal className="container contact-cta-inner"><div><p className="eyebrow">LET’S CONNECT</p><h2>Good work starts with<br /><span>a conversation.</span></h2><p>Have a role, a product challenge, or an idea to explore?<br className="desktop-break" /> I’d be happy to hear about it.</p><Link href="/contact" className="button button-light">Get in touch<ArrowUpRight size={19} /></Link></div><div className="contact-cta-aside"><span className="cta-monogram">ST<span>.</span></span><a href={`mailto:${profile.email}`} className="text-link">{profile.email}<ArrowUpRight size={18} /></a><span>{profile.location}</span></div></Reveal></section>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return <div className="page-intro-wrap"><div className="container page-intro"><Link href="/" className="back-link"><ArrowRight size={15} />Back to home</Link><p className="eyebrow hero-enter">{eyebrow}</p><h1 className="hero-enter delay-1">{title}</h1><p className="page-description hero-enter delay-2">{description}</p></div></div>;
}
