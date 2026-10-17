import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/siteConfig";
import { projects } from "@/lib/data/projects";
import { blogs } from "@/lib/constants/blogs";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) return [];
  const base = siteConfig.url.replace(/\/$/, "");
  return ["", "/about", "/experience", "/projects", "/skills", "/contact", "/blog", ...projects.map(p => `/projects/${p.slug}`), ...blogs.map(p => `/blog/${p.slug}`)].map(path => ({ url: `${base}${path}` }));
}
