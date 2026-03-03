import { PageContainer } from "./PageContainer";
import { socials } from "@/lib/constants/socials";
import { ExternalLink } from "@/components/common/ExternalLink";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900/70 bg-zinc-950">
      <PageContainer className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-zinc-500 md:flex-row">
        <p>© {new Date().getFullYear()} Shashank Tripathi. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-3">
          <ExternalLink href={socials.github}>GitHub</ExternalLink>
          <ExternalLink href={socials.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={socials.twitter}>X</ExternalLink>
        </div>
      </PageContainer>
    </footer>
  );
}
