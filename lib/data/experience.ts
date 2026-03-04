import type { ExperienceItem } from "@/types/experience";

export const experience: ExperienceItem[] = [
  // Cash Friend Fintech Private Limited
  {
    company: "Cash Friend Fintech Private Limited",
    role: "Frontend Developer",
    location: "Noida, India",
    start: "Oct 2023",
    end: "Present",
    bullets: [
      "Led end-to-end development of merchant payments, UPI, BBPS, settlement flows, and transaction processing with secure authentication, webhook integration, and REST APIs.",
      "Architected and delivered a scalable React Native merchant application, reducing production crashes by 25% through lazy loading, end-to-end encryption, real-time monitoring (Crashlytics), and Jest-based unit testing.",
      "Architected frontend-level RBAC using centralized permission mapping and protected route guards, enabling dynamic component rendering and fine-grained feature access control across fintech applications.",
      "Built complete fintech ecosystem (Admin, Super-Admin, Merchant Apps) using micro-frontend architecture and reusable UI modules, improving deployment speed and maintainability.",
      "Implemented critical fintech compliance workflows — KYC verification, merchant onboarding, fraud detection, payment reconciliation, transaction analytics — using advanced caching, rate limiting & throttling.",
      "Optimized React Native bundle size by 35% using code splitting, lazy loading, and dynamic imports, reducing startup time from 3.2s to 2.1s.",
      "Ensured enterprise-grade security using RBI compliance, PCI-DSS, JWT, secure API gateway practices, and end-to-end encryption."
    ],
    tech: [
      "React",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "REST APIs",
      "JWT/OAuth",
      "Microservices",
      "Webhooks",
      "Jest",
      "PCI DSS",
      "CI/CD",
      "MySQL",
      "MongoDB",
      "UPI/Fintech APIs",
      "Monitoring & Logging"
    ],
  },
  // Tata Consultancy Services
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    location: "Bangalore, India",
    start: "Aug 2021",
    end: "Oct 2023",
    bullets: [
      "Designed reusable frontend modules — authentication, modal systems, shared components — improving code reusability, UI consistency, and team development velocity.",
      "Improved UX and performance using DOM optimization and form validations, reducing major UI defects by 30%.",
      "Integrated REST APIs with secure flows and resolved production issues using Chrome DevTools, improving stability and error-resolution time.",
      "Implemented performance improvements with bundle size optimization, virtual scrolling, and lazy loading, enhancing load performance for high-traffic screens."
    ],
    tech: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Chrome DevTools",
      "Web Performance",
      "Responsive Design",
      "Virtual Scrolling",
      "Git",
      "CI/CD",
      "Agile"
    ],
  },
  // Newgen Software
  {
    company: "Newgen Software",
    role: "Software Engineer",
    location: "Noida, India",
    start: "Apr 2021",
    end: "Aug 2021",
    bullets: [
      "Built secure, high-accuracy ICICI Bank financial forms using validation workflows, DOM manipulation, and data-driven rules, enhancing data integrity for critical financial processes.",
      "Automated large-scale data operations using OmniExtract for data transformation, reducing manual effort and improving operational accuracy.",
      "Supported deployment and release cycles through testing, debugging, and post-deployment verification, ensuring rollout stability and delivery quality."
    ],
    tech: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Form Validation",
      "DOM Manipulation",
      "OmniExtract",
      "Deployment Support",
      "Release Management",
      "Performance Optimization"
    ],
  },
];
