"use client";

import { useThemeContext } from "@/features/theme/theme-provider";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";

export default function ContactPage() {
  const { theme } = useThemeContext();

  return (
    <PageContainer>
      <Section id="contact" title="Contact" eyebrow="Let's work together">
        <div className={`
          grid gap-8 md:grid-cols-[2fr,1fr]
          ${theme === 'dark' 
            ? 'divide-zinc-800/50' 
            : 'divide-zinc-200/50'
          }
        `}>
          <ContactForm />
          <ContactDetails />
        </div>
      </Section>
    </PageContainer>
  );
}
