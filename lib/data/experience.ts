import type { ExperienceItem } from "@/types/experience";

export const experience: ExperienceItem[] = [
  {
    company: "Ernst & Young (EY) India LLP",
    role: "Senior Technical Consultant",
    location: "New Delhi, India",
    start: "Jun 2026",
    end: "Present",
    bullets: [
      "Developing a Government Digital System with React, TypeScript, Vite, and Redux Toolkit, building responsive interfaces for complex public-sector workflows.",
      "Building modular frontend architecture with reusable components, shared DTOs, mappers, API services, Redux slices, and custom hooks.",
      "Implementing dynamic forms, multi-step workflows, data-driven tables, and field-level validation with predictable state management.",
      "Integrating REST APIs through centralized service layers, standardized data mapping, and consistent error handling to improve data reliability.",
      "Optimizing component rendering and state updates, and using AI-assisted coding and debugging to investigate defects and improve code quality.",
    ],
    tech: ["React", "TypeScript", "Redux Toolkit", "Vite", "Material UI", "Tailwind CSS", "REST APIs", "GitLab"],
  },
  {
    company: "MobilePe Fintech Pvt. Ltd.",
    role: "Full Stack Developer",
    location: "Noida, India",
    start: "Oct 2023",
    end: "Jun 2026",
    bullets: [
      "Developed payment gateways, BBPS applications, merchant portals, settlements, and admin dashboards with React, Next.js, React Native, and Node.js.",
      "Built merchant onboarding, transaction monitoring, reconciliation, and settlement workflows with REST APIs and role-based access controls.",
      "Developed cross-platform mobile features with React Native, reusable UI components, and REST API integration.",
      "Implemented React Query caching, background synchronization, and optimistic updates; collaborated on Node.js services, API contracts, and transaction workflows.",
      "Contributed to a 25% reduction in application crashes through performance improvements and production issue analysis using Firebase Crashlytics, supported by AI-assisted debugging.",
    ],
    tech: ["React", "Next.js", "React Native", "Node.js", "TypeScript", "Redux Toolkit", "React Query", "REST APIs"],
  },
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    location: "Bangalore, India",
    start: "Aug 2021",
    end: "Nov 2022",
    bullets: [
      "Developed enterprise web features with React, JavaScript, HTML, and CSS, building reusable components and responsive layouts.",
      "Implemented dynamic forms, protected routes, and authentication UI flows, integrating REST APIs for data-driven screens and consistent navigation.",
      "Resolved frontend defects through systematic debugging, API validation, and collaboration with backend and QA teams to improve reliability and prevent regressions.",
    ],
    tech: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs", "Git"],
  },
  {
    company: "Newgen Software",
    role: "Software Engineer Intern",
    location: "Noida, India",
    start: "Apr 2021",
    end: "Jul 2021",
    bullets: [
      "Developed banking workflow UI modules with JavaScript, HTML, and CSS, including dynamic forms, client-side validation, and structured input handling.",
      "Resolved UI defects and supported functional testing and deployment, improving usability and reliability across banking workflow modules.",
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
  },
];
