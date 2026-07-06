import { Reveal } from "@/components/motion/Reveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  dark?: boolean;
};

export function PageIntro({ eyebrow, title, lede, dark }: PageIntroProps) {
  return (
    <section
      className={dark ? "bg-ink text-cream" : "border-b border-oat bg-cream"}
    >
      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-36">
        <Reveal>
          <p className="eyebrow mb-8 text-bronze">{eyebrow}</p>
          <h1 className="max-w-4xl font-sans text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.02em]">
            {title}
          </h1>
          {lede && (
            <p
              className={`mt-8 max-w-2xl font-serif text-xl font-light leading-snug md:text-2xl ${
                dark ? "text-sand" : "text-ash"
              }`}
            >
              {lede}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
