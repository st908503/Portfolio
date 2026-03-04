"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "./PageContainer";
import { socials } from "@/lib/constants/socials";
import { ExternalLink } from "@/components/common/ExternalLink";

export function Footer() {
  const { theme } = useThemeContext();

  return (
    <footer
      className={`relative overflow-hidden border-t backdrop-blur-sm before:absolute before:inset-0 before:bg-opacity-20 ${
        theme === "dark"
          ? "bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent border-zinc-800/50"
          : "bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent border-zinc-200/50"
      }`}
    >
      <div
        className={`absolute inset-0 -skew-x-12 -translate-x-1/4 h-full ${
          theme === "dark"
            ? "bg-gradient-to-r from-emerald-900/10 to-transparent"
            : "bg-gradient-to-r from-emerald-200/10 to-transparent"
        }`}
      />

      <PageContainer className="relative z-10 flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:py-12 text-xs">
        <div className={`text-center md:text-left ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"}`}>
          <p className="font-medium tracking-wide">
            © {new Date().getFullYear()} Shashank Tripathi. Built with Next.js & Tailwind.
          </p>
          <p className={`mt-1 text-[11px] ${theme === "dark" ? "text-zinc-600" : "text-zinc-500"}`}>
            All rights reserved.
          </p>
        </div>

        <hr className={`w-full mx-6 md:hidden ${theme === "dark" ? "border-zinc-800/50" : "border-zinc-200/50"}`} />

        <div className="flex items-center gap-4 sm:gap-6">
          <ExternalLink href={socials.github} className="group">
            GitHub
          </ExternalLink>
          <ExternalLink href={socials.linkedin} className="group">
            LinkedIn
          </ExternalLink>
          <ExternalLink href={socials.twitter} className="group">
            X
          </ExternalLink>
        </div>
      </PageContainer>
    </footer>
  );
}