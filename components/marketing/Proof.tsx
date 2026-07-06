import { quote } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function Proof() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
        <Reveal>
          <p className="eyebrow mb-12 text-bronze">Customer success</p>
          <blockquote className="max-w-4xl">
            <p className="font-serif text-[clamp(1.75rem,3.6vw,2.9rem)] font-light italic leading-[1.2]">
              &ldquo;{quote.text}&rdquo;
            </p>
            <footer className="eyebrow mt-10 text-sand">
              {quote.attribution}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
