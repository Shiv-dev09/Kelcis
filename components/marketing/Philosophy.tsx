import { Reveal } from "@/components/motion/Reveal";

export function Philosophy() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
        <Reveal>
          <p className="eyebrow mb-10 text-bronze">Our philosophy</p>
          <p className="max-w-4xl font-serif text-[clamp(1.75rem,3.6vw,2.9rem)] font-light leading-[1.18] tracking-[-0.01em]">
            The best operations are boring. Tickets answered before they age.
            Integrations that never make the news. Renewals that feel like
            formalities.
          </p>
          <p className="mt-10 max-w-xl font-sans text-base leading-relaxed text-sand">
            We build toward that kind of quiet — deliberately, measurably, and
            on the record. Nothing ships until it works every time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
