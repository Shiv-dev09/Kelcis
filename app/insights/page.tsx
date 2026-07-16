import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLong } from "@/components/ui/ArrowLong";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on service operations, platforms and the discipline of quiet execution — published when there is something worth your time.",
  robots: { index: false },
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Notes from the quiet side."
        lede="Writing on service operations, platforms and the discipline of boring — published when we have something worth your time."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          <Reveal>
            <p className="max-w-2xl border-t border-oat pt-10 font-serif text-2xl font-light leading-snug text-ash">
              Nothing is published yet. The first pieces are being written —
              slowly, on purpose.
            </p>
            <Link
              href="/"
              className="link-arrow mt-12 inline-flex font-sans text-lg font-bold"
            >
              Back to the work
              <ArrowLong className="w-12" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
