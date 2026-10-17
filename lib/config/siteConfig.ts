import { profile } from "@/lib/data/profile";
export const siteConfig = {
<<<<<<< HEAD
  name: "Shashank Tripathi",
  title: "Shashank Tripathi | Frontend & React Native Developer",
  description:
    "Portfolio of Shashank Tripathi, Frontend Developer specializing in React, React Native, and fintech payment systems.",
  url: "https://your-domain.com",
=======
  name: profile.name,
  title: "Shashank Tripathi — Full Stack Engineer",
  description: profile.summary,
  url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
>>>>>>> eaacee3 (updated resume)
};
