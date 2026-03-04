"use client";

import { useThemeContext } from "@/features/theme/theme-provider";

export function Timeline() {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  const items = [
    {
      period: "Oct 2023 – Present",
      title: "Frontend Developer · Cash Friend Fintech (Noida)",
      body:
        "Leading development of merchant payment systems including UPI and BBPS flows. Architected React Native merchant applications, implemented RBAC-based dashboards, optimized bundle size by 35%, reduced production crashes by 25%, and ensured PCI-DSS/RBI-compliant security standards.",
    },
    {
      period: "Aug 2021 – Oct 2023",
      title: "Software Engineer · Tata Consultancy Services (Bangalore)",
      body:
        "Designed reusable authentication systems, shared UI modules, and optimized frontend performance for enterprise web applications. Improved UI stability and reduced major defects by 30% through DOM optimization, debugging, and production issue resolution.",
    },
    {
      period: "Apr 2021 – Aug 2021",
      title: "Software Engineer · Newgen Software (Noida)",
      body:
        "Built secure financial form systems and implemented rule-based validation workflows for banking clients. Strengthened expertise in structured frontend engineering and data-driven UI systems.",
    },
    {
      period: "2017 – 2021",
      title:
        "B.Tech (Computer Science) · GL Bajaj Institute of Technology & Management",
      body:
        "Graduated with 78.24%. Developed strong fundamentals in data structures, algorithms, and system design principles.",
    },
  ];

  return (
    <div className="relative mt-16">
      {/* Vertical Line */}
      <div
        className={`absolute left-4 top-0 h-full w-px ${
          isDark ? "bg-zinc-800" : "bg-zinc-200"
        }`}
      />

      <ol className="space-y-12">
        {items.map((item, index) => (
          <li key={item.title} className="relative pl-14">
            {/* Dot */}
            <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center">
              <div
                className={`relative h-4 w-4 rounded-full ${
                  isDark ? "bg-emerald-400" : "bg-emerald-600"
                }`}
              >
                {/* Pulse Ring */}
                {index === 0 && (
                  <span
                    className={`absolute inset-0 animate-ping rounded-full ${
                      isDark ? "bg-emerald-400/40" : "bg-emerald-600/40"
                    }`}
                  />
                )}
              </div>
            </div>

            {/* Content Card */}
            <div
              className={`rounded-xl border p-5 transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? "border-zinc-800 bg-zinc-900/60 hover:shadow-emerald-500/10"
                  : "border-zinc-200 bg-white hover:shadow-emerald-600/10"
              }`}
            >
              <p className="text-xs font-medium text-zinc-500">
                {item.period}
              </p>

              <h3
                className={`mt-1 text-sm font-semibold ${
                  isDark ? "text-zinc-50" : "text-zinc-900"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-2 text-xs leading-relaxed ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}