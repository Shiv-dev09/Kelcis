import { industries } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function Industries() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <p className="eyebrow mb-10 text-bronze">Industries</p>
          <p className="max-w-2xl font-sans text-[15px] leading-relaxed text-ash">
            Sector fluency, earned one operation at a time.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-12 flex flex-wrap gap-x-4 gap-y-6">
            {industries.map((industry) => (
              <li key={industry}>
                <span className="tag-pill border-ink/30 px-5 py-3 text-xs text-ink">
                  {industry}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
