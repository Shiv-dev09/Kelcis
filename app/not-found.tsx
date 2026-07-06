import Link from "next/link";
import { KelcisMark } from "@/components/brand/KelcisMark";
import { ArrowLong } from "@/components/ui/ArrowLong";

export default function NotFound() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto flex min-h-[70svh] max-w-[1440px] flex-col items-start justify-center px-6 py-28 md:px-12">
        <KelcisMark className="mb-12 h-12 w-12 text-bronze" />
        <p className="eyebrow mb-6 text-sand">404</p>
        <h1 className="max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1]">
          This page kept quiet — a little too quiet.
        </h1>
        <Link
          href="/"
          className="link-arrow mt-12 inline-flex font-sans text-lg font-bold"
        >
          Back to the front page
          <ArrowLong className="w-12" />
        </Link>
      </div>
    </section>
  );
}
