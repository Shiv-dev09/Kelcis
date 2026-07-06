import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLong } from "@/components/ui/ArrowLong";
import { CtaBand } from "@/components/marketing/CtaBand";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freshworks consulting, managed services, customer support, integrations, automation and customer success — six disciplines, one standard.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Six disciplines. One standard."
        lede="Everything we offer exists to make your service operation dependable enough to forget about."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.04}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid gap-4 border-t border-oat py-10 transition-colors md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <span className="font-sans text-sm font-bold text-bronze md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-3xl font-bold tracking-[-0.01em] transition-colors group-hover:text-bronze md:col-span-5 md:text-4xl">
                  {service.title}
                </span>
                <span className="max-w-md font-serif text-lg font-light leading-snug text-ash md:col-span-5">
                  {service.description}
                </span>
                <span className="hidden justify-self-end md:col-span-1 md:block">
                  <ArrowLong className="w-10 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
