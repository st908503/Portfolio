import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/siteConfig";
export const defaultSEO = { title: siteConfig.title, description: siteConfig.description, url: siteConfig.url };
export function buildMeta({ title, description, url }: { title?: string; description?: string; url?: string } = {}): Metadata {
  return { title: title ?? defaultSEO.title, description: description ?? defaultSEO.description, openGraph: { title: title ?? defaultSEO.title, description: description ?? defaultSEO.description, ...(url || defaultSEO.url ? { url: url ?? defaultSEO.url } : {}) }, twitter: { card: "summary", title: title ?? defaultSEO.title, description: description ?? defaultSEO.description } };
}
