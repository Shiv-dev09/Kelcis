import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLong } from "@/components/ui/ArrowLong";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Kelcis is newly founded. Its consultants have spent the last decade inside the service-platform world — implementations, evaluations and rescues across the GCC and India.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="New firm. Not new to the work."
        lede="Kelcis is new. We would rather say that plainly than dress it up."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <p className="max-w-4xl font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-[1.2] tracking-[-0.01em]">
              Kelcis was founded this year. The people behind it have spent the
              last decade inside the service-platform world — leading and
              supporting more than a hundred implementations, evaluations and
              rescues across ITSM and CX platforms, for companies in the GCC
              and India, in retail, logistics, healthcare, BFSI and the public
              sector.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-xl font-sans text-base leading-relaxed text-ash">
              What we do not yet have is a public reference under the Kelcis
              name. That is a matter of time, not capability — and our founding
              terms price it accordingly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
          <Reveal>
            <p className="eyebrow mb-10 text-bronze">Founding cohort</p>
            <h2 className="max-w-4xl font-sans text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              Five founding clients. 2026.
            </h2>
            <p className="mt-10 max-w-2xl font-serif text-xl font-light leading-snug text-sand md:text-2xl">
              We are taking a maximum of five founding engagements this year,
              at founding-client terms: priority access to our most senior
              people, and pricing that reflects a simple truth — we are earning
              our first public references.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="link-arrow mt-14 inline-flex font-sans text-xl font-bold md:text-2xl"
            >
              Start a conversation
              <ArrowLong className="w-14" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
