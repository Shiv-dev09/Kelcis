import { capabilities } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function Capabilities() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <p className="eyebrow mb-14 text-bronze">Selected capabilities</p>
        </Reveal>

        <div>
          {capabilities.map((capability, index) => (
            <Reveal key={capability} delay={index * 0.05}>
              <div className="flex items-baseline gap-8 border-t border-cream/10 py-7">
                <span className="w-10 shrink-0 font-sans text-sm font-bold text-sand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl font-light md:text-3xl">
                  {capability}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
