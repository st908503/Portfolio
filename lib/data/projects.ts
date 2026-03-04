import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "UPI-Based Payment & Merchant Dashboard System",
    subtitle:
      "Full-stack fintech ecosystem with merchant app, admin dashboard & secure payment workflows",
    description:
      "Architected and developed a complete merchant-side fintech ecosystem including UPI deep linking, QR-based payments, settlement tracking, reconciliation flows, and RBAC-driven dashboards. The system supports real-time transaction processing, secure JWT authentication, webhook integrations, and mobile-first merchant operations.",
    period: "2023 – 2024",
    highlights: [
      "Implemented UPI deep linking & QR-based payment initiation with real-time transaction status updates.",
      "Designed RBAC-based Admin, Super-Admin & Merchant dashboards with protected route guards.",
      "Integrated secure JWT/Firebase authentication and webhook-based transaction verification.",
      "Built companion React Native merchant app with optimized bundle size and performance tuning."
    ],
    tech: [
      "React",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "JWT",
      "Webhooks",
      "Firebase"
    ],
  },
];
