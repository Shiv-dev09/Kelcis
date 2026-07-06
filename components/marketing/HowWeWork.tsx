import { steps } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function HowWeWork() {
  return (
    <section className="border-t border-oat bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <p className="eyebrow mb-14 text-bronze">How we work</p>
        </Reveal>

        <div>
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06}>
              <div className="grid gap-4 border-t border-oat py-10 md:grid-cols-12 md:gap-8">
                <span className="font-sans text-sm font-bold text-bronze md:col-span-1">
                  {step.number}
                </span>
                <h3 className="font-serif text-3xl font-light md:col-span-3 md:text-4xl">
                  {step.title}
                </h3>
                <p className="max-w-xl font-sans text-[15px] leading-relaxed text-ash md:col-span-8 md:justify-self-end md:text-right lg:max-w-lg">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
