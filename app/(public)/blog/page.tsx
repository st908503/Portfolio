import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/portfolio/Sections";
import { blogs } from "@/lib/constants/blogs";
export const metadata: Metadata = { title: "Engineering Notes" };
export default function BlogPage() {
  return <><PageIntro eyebrow="ENGINEERING NOTES" title={<>Ideas behind<br /><em>the interfaces.</em></>} description="Notes on frontend architecture, performance, and building software that is easier to use and maintain." /><section className="container notes-list">{blogs.map((post, index) => <Link href={`/blog/${post.slug}`} key={post.slug} className="note-row"><span className="mono">{String(index + 1).padStart(2, "0")}</span><div><h2>{post.title}</h2><p>{post.excerpt}</p></div><ArrowUpRight size={24} /></Link>)}</section></>;
}
