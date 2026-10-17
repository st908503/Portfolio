import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "@/components/portfolio/Sections";
import { ContactForm } from "@/components/contact/ContactForm";
import { profile } from "@/lib/data/profile";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() {
  return <><PageIntro eyebrow="LET’S CONNECT" title={<>Let’s start<br /><em>a conversation.</em></>} description="For engineering opportunities, product challenges, or a conversation about building dependable software, get in touch." /><section className="container contact-layout"><aside className="contact-info"><p className="eyebrow">FIND ME HERE</p><a className="contact-info-item" href={`mailto:${profile.email}`}><Mail size={19} /><span><small>EMAIL</small>{profile.email}</span><ArrowUpRight size={18} /></a><a className="contact-info-item" href={`tel:${profile.phone}`}><Phone size={19} /><span><small>PHONE</small>+91 83192 98374</span><ArrowUpRight size={18} /></a><div className="contact-info-item"><MapPin size={19} /><span><small>BASED IN</small>{profile.location}</span></div><div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={16} /></a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={16} /></a></div><div className="contact-note"><span className="status-dot" /><p>Frontend architecture, full stack features, and reliable web and mobile experiences.</p></div></aside><ContactForm /></section></>;
}
