import Link from "next/link";
import { ArrowLong } from "@/components/ui/ArrowLong";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBand() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
        <Reveal>
          <p className="max-w-xl font-serif text-xl font-light leading-snug text-ash md:text-2xl">
            Tell us what isn&rsquo;t working — or what should work better.
            We&rsquo;ll tell you honestly whether we&rsquo;re the right firm
            for it.
          </p>
          <Link
            href="/contact"
            className="link-arrow mt-10 inline-flex font-sans text-[clamp(2.25rem,6vw,4.5rem)] font-bold tracking-[-0.02em]"
          >
            Start a conversation
            <ArrowLong className="w-20 md:w-28" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
