import Link from "next/link";
import { Clock } from "@/components/ui/Clock";
import { ArrowLong } from "@/components/ui/ArrowLong";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(112deg, #0b0b0a 0%, #0b0b0a 34%, #2e1407 56%, #7a3d12 76%, #c8892e 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[88svh] max-w-[1440px] flex-col justify-center px-6 py-28 md:px-12">
        <div className="absolute right-6 top-28 md:right-12">
          <Clock className="text-cream/90" />
        </div>

        <Reveal>
          <h1 className="max-w-5xl font-sans text-[clamp(2.75rem,7.5vw,6.25rem)] font-bold leading-[0.98] tracking-[-0.02em]">
            Precise systems.
            <br />
            Dependable service.
            <br />
            Quiet execution.
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-xl font-serif text-xl font-light leading-snug text-cream/90 md:text-2xl">
            Kelcis is a Dubai-based technology consultancy. We design, run and
            refine the service operations of ambitious companies — on
            Freshworks, and far beyond it.
          </p>
        </Reveal>

        <div className="mt-16 flex justify-end md:mt-6">
          <Link
            href="/contact"
            className="link-arrow font-sans text-xl font-bold md:text-2xl"
          >
            Start a conversation
            <ArrowLong className="w-14" />
          </Link>
        </div>
      </div>
    </section>
  );
}
