import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { Clock } from "@/components/ui/Clock";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Kelcis — a technology consultancy serving the GCC, for companies that take service seriously.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start a conversation."
        lede="Tell us what isn't working — or what should work better. We reply within one business day, usually sooner."
      />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-12 md:pl-12">
              <div>
                <p className="eyebrow mb-4 text-bronze">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="font-serif text-2xl font-light transition-colors hover:text-bronze"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-4 text-bronze">Region</p>
                <p className="font-serif text-2xl font-light">
                  {company.region}
                </p>
              </div>
              <div>
                <p className="eyebrow mb-4 text-bronze">Gulf standard time</p>
                <Clock className="text-ink" />
              </div>
              <div>
                <p className="eyebrow mb-4 text-bronze">Response</p>
                <p className="font-serif text-2xl font-light">
                  We reply within one business day.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
