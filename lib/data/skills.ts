import type { SkillCategory } from "@/types/skill";
import { Code2, Layers3, Database, Gauge, Network, Wrench, Sparkles } from "lucide-react";

export const skills: SkillCategory[] = [
  {
    name: "Frontend & mobile",
    items: ["React.js", "TypeScript", "JavaScript (ES6+)", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Material UI"].map(label => ({ label, icon: Code2 })),
  },
  {
    name: "State & architecture",
    items: ["Redux Toolkit", "React Query", "Context API", "Custom Hooks", "Reusable Components", "DTO Mapping", "Feature-Based Architecture", "Caching"].map(label => ({ label, icon: Layers3 })),
  },
  {
    name: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth", "Webhooks", "RBAC"].map(label => ({ label, icon: Network })),
  },
  {
    name: "Databases & infrastructure",
    items: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Redis", "Kafka", "Docker"].map(label => ({ label, icon: Database })),
  },
  {
    name: "Performance & testing",
    items: ["Code Splitting", "Lazy Loading", "Rendering Optimization", "Jest", "React Testing Library", "Firebase Crashlytics"].map(label => ({ label, icon: Gauge })),
  },
  {
    name: "AI integration & development",
    items: ["LLM Integration", "Prompt Engineering", "RAG Fundamentals", "AI-Assisted Coding & Debugging"].map(label => ({ label, icon: Sparkles })),
  },
  {
    name: "Tools & delivery",
    items: ["Git", "GitLab", "GitHub", "Postman", "Jira", "Swagger", "CI/CD"].map(label => ({ label, icon: Wrench })),
  },
];
