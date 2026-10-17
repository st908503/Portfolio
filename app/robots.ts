import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/siteConfig";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, ...(siteConfig.url ? { sitemap: `${siteConfig.url.replace(/\/$/, "")}/sitemap.xml` } : {}) };
}
