export type Project = {
  slug: string;
  category: "Web" | "Mobile";
  context: string;
  role?: string;
  kind: "professional" | "personal";
  visual: "government" | "platform" | "mobile" | "enterprise";
  outcome: string;
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
  repo?: string;
};
