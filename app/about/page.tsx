import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kelcis is a Dubai-based technology consultancy built around a simple belief: the best operations are boring.",
};

const values = [
  {
    title: "Fewer clients, deeper work",
    body: "Capacity is a design constraint, not a sales target. We take on what we can do properly and decline the rest.",
  },
  {
    title: "Named people, not a queue",
    body: "You know who is doing the work before you sign. The same people stay from first workshop to final handover.",
  },
  {
    title: "Say no early",
    body: "A scope we can't deliver well is a scope we decline — before it costs you a quarter.",
  },
  {
    title: "Boring is the goal",
    body: "The highest compliment an operation can earn is that nobody talks about it. That is what we build toward.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A consultancy built to be kept."
        lede="Kelcis was founded in Dubai on a simple observation: companies don't lack software — they lack partners who stay accountable for how it runs."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <p className="max-w-4xl font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-[1.2] tracking-[-0.01em]">
              Today we design, run and refine service operations for companies
              across the Gulf. Tomorrow, the same discipline goes into the
              software we build ourselves.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <p className="eyebrow mb-14 text-bronze">What we hold to</p>
          </Reveal>
          <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <h2 className="font-sans text-2xl font-bold tracking-[-0.01em] md:text-3xl">
                  {value.title}
                </h2>
                <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-sand">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
