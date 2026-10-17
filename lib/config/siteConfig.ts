import { profile } from "@/lib/data/profile";
export const siteConfig = {
  name: profile.name,
  title: "Shashank Tripathi — Full Stack Engineer",
  description: profile.summary,
  url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
};
