import { PageContainer } from "./PageContainer";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/70 bg-zinc-950/70 backdrop-blur-md">
      <PageContainer className="flex h-14 items-center justify-between gap-4">
        <div className="text-sm font-semibold text-zinc-50">
          Shashank <span className="text-zinc-400">Tripathi</span>
        </div>
        <div className="flex items-center gap-4">
          <Navbar />
          <ThemeToggle />
          <MobileNav />
        </div>
      </PageContainer>
    </header>
  );
}
