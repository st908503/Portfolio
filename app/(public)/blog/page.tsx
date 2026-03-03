"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";

export default function BlogPage() {
  const { theme } = useThemeContext();

  return (
    <PageContainer>
      <Section id="blog" title="Blog" eyebrow="Writing">
        <p className={`
          max-w-2xl text-sm 
          ${theme === 'dark' 
            ? 'text-zinc-300' 
            : 'text-zinc-600'
          }
        `}>
          I plan to share notes on building fintech systems, frontend architecture, and
          performance here.
        </p>
        <p className={`
          mt-2 text-xs 
          ${theme === 'dark' 
            ? 'text-zinc-500' 
            : 'text-zinc-500'
          }
        `}>
          Posts coming soon. In the meantime, you can reach out through the contact page.
        </p>
      </Section>
    </PageContainer>
  );
}
