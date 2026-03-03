import { PageContainer } from "./PageContainer";
import { socials } from "@/lib/constants/socials";
import { ExternalLink } from "@/components/common/ExternalLink";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent border-t border-zinc-800/50 backdrop-blur-sm before:absolute before:inset-0 before:bg-zinc-900/20">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-transparent -skew-x-12 -translate-x-1/4 h-full" />
      <PageContainer className="relative z-10 flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:py-12 text-xs">
        <div className="text-center md:text-left">
          <p className="font-medium text-zinc-300 tracking-wide">
            © {new Date().getFullYear()} Shashank Tripathi. Built with Next.js & Tailwind.
          </p>
          <p className="mt-1 text-zinc-600 text-[11px]">All rights reserved.</p>
        </div>
        <hr className="w-full border-zinc-800/50 mx-6 md:hidden" />
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
