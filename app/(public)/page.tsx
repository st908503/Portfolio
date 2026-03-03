import { PageContainer } from "@/components/layout/PageContainer";
import { HeroSection } from "@/components/home/HeroSection";
import { HighlightsGrid } from "@/components/home/HighlightsGrid";
import { TechSummary } from "@/components/home/TechSummary";

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSection />
      <HighlightsGrid />
      <TechSummary />
    </PageContainer>
  );
}
