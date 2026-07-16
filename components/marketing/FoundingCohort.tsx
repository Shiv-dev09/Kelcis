import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLong } from "@/components/ui/ArrowLong";

export function FoundingCohort() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
        <Reveal>
          <p className="eyebrow mb-12 text-bronze">Founding cohort</p>
          <p className="max-w-4xl font-serif text-[clamp(1.75rem,3.6vw,2.9rem)] font-light leading-[1.2]">
            We are taking five founding clients — our most senior people on
            every engagement, at terms that reflect a firm earning its first
            public references.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            href="/experience"
            className="link-arrow mt-12 inline-flex font-sans text-lg font-bold md:text-xl"
          >
            New firm. Not new to the work.
            <ArrowLong className="w-12" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
