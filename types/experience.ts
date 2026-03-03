export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string | "Present";
  bullets: string[];
  tech: string[];
};
