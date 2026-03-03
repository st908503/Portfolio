import type { SkillCategory } from "@/types/skill";

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    name: "Frontend Frameworks",
    items: ["React.js", "Next.js", "React Native", "Redux Toolkit", "Vite", "Tailwind CSS"],
  },
  {
    name: "Mobile & Platform",
    items: ["Android/iOS Build", "Deep Linking", "Push Notifications"],
  },
  {
    name: "Backend & APIs",
    items: ["Node.js", "REST APIs", "Axios", "Logging & Monitoring"],
  },
  {
    name: "Cloud / DevOps",
    items: ["Git", "GitHub", "CI/CD", "Firebase", "Jira"],
  },
  {
    name: "Testing & Debugging",
    items: ["Chrome DevTools", "Postman", "Jest", "Production Debugging"],
  },
  {
    name: "Security",
    items: ["Token-based Auth", "JWT", "OKTA", "PCI-DSS", "RBI Compliance"],
  },
];
