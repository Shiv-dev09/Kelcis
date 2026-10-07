import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "The experience behind Kelcis: a decade of implementations, evaluations and rescues across ITSM and CX platforms, for companies in the GCC and India.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="A decade inside the service-platform world"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <p className="max-w-4xl font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-[1.2] tracking-[-0.01em]">
              The people behind Kelcis have led and supported more than a
              hundred implementations, evaluations and rescues across ITSM and
              CX platforms, for companies in the GCC and India, in retail,
              logistics, healthcare, BFSI and the public sector.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
