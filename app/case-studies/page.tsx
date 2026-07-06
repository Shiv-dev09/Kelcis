import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Selected engagements — service operations designed, rescued and run by Kelcis.",
};

const studies = [
  {
    client: "GCC retail group",
    sector: "Retail",
    title: "A support operation rebuilt in eight weeks",
    summary:
      "Fourteen brands, one Freshdesk instance nobody trusted. We re-architected the desk, retrained the team and cut first response from nine hours to forty minutes.",
    results: ["9h → 40m first response", "CSAT 71 → 93", "Zero attrition in year one"],
  },
  {
    client: "Regional logistics operator",
    sector: "Logistics",
    title: "Exceptions handled before customers noticed",
    summary:
      "We connected telematics, the TMS and Freshservice so delivery exceptions opened their own tickets — with context — before the first customer call.",
    results: ["68% of exceptions pre-empted", "22% fewer inbound calls", "Renewal signed early"],
  },
  {
    client: "Private healthcare network",
    sector: "Healthcare",
    title: "Patient support with clinical discipline",
    summary:
      "A bilingual patient-services desk with quality sampling on every interaction category, built and operated by Kelcis under the network's own brand.",
    results: ["100% interactions sampled", "4.9/5 patient rating", "3 clinics onboarded since"],
  },
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Case studies"
        title="The work, on the record."
        lede="Selected engagements, anonymised where clients prefer quiet. References available in conversation."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          <div className="grid gap-2 lg:grid-cols-3">
            {studies.map((study, index) => (
              <Reveal key={study.title} delay={index * 0.08} className="h-full">
                <article className="flex h-full flex-col bg-ink p-8 text-cream md:p-10">
                  <div className="mb-10 flex items-center justify-between gap-4">
                    <span className="eyebrow text-sand">{study.client}</span>
                    <span className="tag-pill">{study.sector}</span>
                  </div>
                  <h2 className="font-serif text-3xl font-light leading-tight">
                    {study.title}
                  </h2>
                  <p className="mt-5 font-sans text-[15px] leading-relaxed text-sand">
                    {study.summary}
                  </p>
                  <ul className="mt-auto space-y-3 border-t border-cream/10 pt-8">
                    {study.results.map((result) => (
                      <li
                        key={result}
                        className="font-sans text-sm font-semibold tracking-wide"
                      >
                        {result}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
