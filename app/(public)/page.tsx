import { PageContainer } from "@/components/layout/PageContainer";
import { HighlightsGrid } from "@/components/home/HighlightsGrid";
import { TechSummary } from "@/components/home/TechSummary";

export default function HomePage() {
  return (
    <PageContainer>
      <HighlightsGrid />
      <TechSummary />
    </PageContainer>
  );
}
