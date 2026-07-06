import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Kelcis works across financial services, healthcare, retail, logistics, real estate and professional services in the Gulf and beyond.",
};

const sectors = [
  {
    name: "Financial services",
    note: "Service desks that satisfy both customers and compliance.",
  },
  {
    name: "Healthcare",
    note: "Patient-facing support where tone and accuracy are clinical matters.",
  },
  {
    name: "Retail & e-commerce",
    note: "Peak-season volume without peak-season chaos.",
  },
  {
    name: "Logistics",
    note: "Exceptions handled before the customer notices the delay.",
  },
  {
    name: "Real estate",
    note: "Owner, tenant and facilities workflows under one operation.",
  },
  {
    name: "Professional services",
    note: "Client service run with the rigour of the work itself.",
  },
  {
    name: "Hospitality",
    note: "Guest recovery measured in minutes, not surveys.",
  },
  {
    name: "Education",
    note: "Admissions to alumni — one continuous service relationship.",
  },
] as const;

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Industries"
        title="Fluency, earned one operation at a time."
        lede="We don't claim every sector. These are the ones where we've run the numbers, met the regulators and kept the clients."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          {sectors.map((sector, index) => (
            <Reveal key={sector.name} delay={index * 0.04}>
              <div className="grid gap-3 border-t border-oat py-9 md:grid-cols-12 md:items-baseline md:gap-8">
                <h2 className="font-sans text-2xl font-bold tracking-[-0.01em] md:col-span-5 md:text-3xl">
                  {sector.name}
                </h2>
                <p className="max-w-xl font-serif text-lg font-light leading-snug text-ash md:col-span-7">
                  {sector.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
