"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { profile } from "@/lib/data/profile";

export function AboutHero() {
  const { theme } = useThemeContext();

  return (
    <div className="space-y-6">
    

      <p
        className={`max-w-3xl text-sm leading-relaxed ${
          theme === "dark" ? "text-zinc-300" : "text-zinc-600"
        }`}
      >
        My journey began with building secure financial form systems and
        enterprise-grade interfaces, where I developed strong fundamentals in
        structured frontend engineering and data-driven validation workflows.
      </p>

      <p
        className={`max-w-3xl text-sm leading-relaxed ${
          theme === "dark" ? "text-zinc-300" : "text-zinc-600"
        }`}
      >
        Over time, I transitioned into large-scale enterprise applications,
        focusing on reusable component systems, performance optimization,
        and production debugging. This foundation later evolved into building
        complete fintech ecosystems — including merchant apps, admin panels,
        and payment processing systems.
      </p>

      <p
        className={`max-w-3xl text-sm leading-relaxed ${
          theme === "dark" ? "text-zinc-300" : "text-zinc-600"
        }`}
      >
        Today, I work on architecting end-to-end fintech products involving UPI
        integrations, BBPS flows, KYC workflows, settlement systems, webhook
        handling, and secure authentication layers — ensuring scalability,
        compliance, and high availability across web and mobile platforms.
      </p>
    </div>
  );
}