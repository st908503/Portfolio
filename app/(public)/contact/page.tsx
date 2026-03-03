import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";

export default function ContactPage() {
  return (
    <PageContainer>
      <Section id="contact" title="Contact" eyebrow="Let’s work together">
        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <ContactForm />
          <ContactDetails />
        </div>
      </Section>
    </PageContainer>
  );
}
