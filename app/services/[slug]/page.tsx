import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLong } from "@/components/ui/ArrowLong";
import { CtaBand } from "@/components/marketing/CtaBand";
import { serviceDetails, getServiceDetail } from "@/content/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return serviceDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  return (
    <>
      <PageIntro eyebrow="Services" title={service.title} lede={service.intro} />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <p className="max-w-4xl font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-[1.2] tracking-[-0.01em]">
              {service.statement}
            </p>
          </Reveal>

          <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
            {service.points.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.1}>
                <h2 className="font-sans text-2xl font-bold tracking-[-0.01em]">
                  {point.title}
                </h2>
                <p className="mt-4 font-sans text-[15px] leading-relaxed text-ash">
                  {point.body}
                </p>
              </Reveal>
            ))}
          </div>

          {service.note && (
            <Reveal delay={0.15}>
              <p className="mt-20 max-w-2xl border-t border-oat pt-8 font-sans text-sm leading-relaxed text-ash">
                {service.note}
              </p>
            </Reveal>
          )}

          <Reveal delay={0.2}>
            <Link
              href="/services"
              className="link-arrow mt-24 inline-flex font-sans text-lg font-bold"
            >
              All services
              <ArrowLong className="w-12" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
