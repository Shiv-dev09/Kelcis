import { Reveal } from "@/components/motion/Reveal";

const reasons = [
  {
    title: "Partner-led",
    body: "The people who scope your engagement deliver it. No handover from sales to a delivery bench, no rotating cast mid-project.",
  },
  {
    title: "Built to hand over",
    body: "Everything we configure is documented and explainable. If you can run it without us one day, we did our job.",
  },
  {
    title: "Measured in outcomes",
    body: "Response times, resolution rates, renewal health. We agree on the numbers before we start — and report against them.",
  },
] as const;

export function WhyKelcis() {
  return (
    <section className="border-t border-oat bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <p className="max-w-3xl font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-[1.2] tracking-[-0.01em]">
            Consultancies scale by adding layers. We scale by declining work we
            can&rsquo;t do properly.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.1}>
              <h3 className="font-sans text-2xl font-bold tracking-[-0.01em] md:text-3xl">
                {reason.title}
              </h3>
              <p className="mt-5 font-sans text-[15px] leading-relaxed text-ash">
                {reason.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
