// lib/constants/seo.ts
import { siteConfig } from "@/lib/config/siteConfig";

export const defaultSEO = {
  title: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.url,
  ogImage: `${siteConfig.url}/og-image.png`,
};

export function buildMeta({
  title,
  description,
  url,
}: {
  title?: string;
  description?: string;
  url?: string;
}) {
  return {
    title: title ?? defaultSEO.title,
    description: description ?? defaultSEO.description,
    openGraph: {
      title: title ?? defaultSEO.title,
      description: description ?? defaultSEO.description,
      url: url ?? defaultSEO.url,
      images: [
        {
          url: defaultSEO.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? defaultSEO.title,
      description: description ?? defaultSEO.description,
      images: [defaultSEO.ogImage],
    },
  };
}
