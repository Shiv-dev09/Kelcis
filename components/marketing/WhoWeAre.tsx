import { Reveal } from "@/components/motion/Reveal";

export function WhoWeAre() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
        <Reveal>
          <p className="eyebrow mb-10 text-bronze">Who we are</p>
          <p className="max-w-4xl font-serif text-[clamp(1.75rem,3.6vw,2.9rem)] font-light leading-[1.18] tracking-[-0.01em]">
            We are the partner companies keep. Kelcis takes on fewer
            engagements than it could, and staffs each one with the people who
            scoped it — from first workshop to final handover.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
