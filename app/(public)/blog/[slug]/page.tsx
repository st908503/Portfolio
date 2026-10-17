import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogs } from "@/lib/constants/blogs";
export function generateStaticParams() { return blogs.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find(post => post.slug === slug);
  return { title: post?.title ?? "Note not found", description: post?.excerpt };
}
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find(post => post.slug === slug);
  if (!post) notFound();
  return <article className="container article-page"><Link href="/blog" className="article-back"><ArrowLeft size={14} />All notes</Link><p className="eyebrow">ENGINEERING NOTES</p><h1>{post.title}</h1><p className="article-excerpt">{post.excerpt}</p><div className="article-body">{post.content.trim().split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph.trim()}</p>)}</div><Link href="/contact" className="text-link">Continue the conversation<ArrowUpRight size={16} /></Link></article>;
}
