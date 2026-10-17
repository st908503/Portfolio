import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data/profile";
export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <Link href="/" className="footer-signature">Shashank Tripathi<span>Frontend depth. Full stack perspective.</span></Link>
      <div className="footer-links">
        <Link href="/blog">Notes <ArrowUpRight size={14} /></Link>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
        <a href={profile.resume} download>Resume <ArrowUpRight size={14} /></a>
      </div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Shashank Tripathi</span><span>New Delhi, India.</span><a href="#top">Back to top <ArrowUp size={13} /></a></div>
  </footer>;
}
