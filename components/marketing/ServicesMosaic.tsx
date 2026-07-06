import Link from "next/link";
import { services, type ServiceTile } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLong } from "@/components/ui/ArrowLong";
import {
  WireArcs,
  WireCapsule,
  WireCoil,
  WireFan,
  WireSphere,
} from "@/components/graphics/Wireframes";

const artMap = {
  sphere: WireSphere,
  capsule: WireCapsule,
  coil: WireCoil,
  fan: WireFan,
  arcs: WireArcs,
  none: null,
} as const;

const surfaceClasses: Record<ServiceTile["surface"], string> = {
  gradient: "grain relative bg-ember text-cream",
  ochre: "bg-ochre text-cream",
  oxblood: "bg-oxblood text-cream",
  clay: "bg-clay text-cream",
  coal: "bg-coal text-cream",
  bronze: "bg-bronze text-ink",
};

function Tile({ service, featured }: { service: ServiceTile; featured?: boolean }) {
  const Art = artMap[service.art];

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative flex flex-col justify-end overflow-hidden p-8 md:p-10 ${
        surfaceClasses[service.surface]
      } ${featured ? "min-h-[480px] md:col-span-2 md:row-span-2" : "min-h-[340px]"}`}
    >
      {service.surface === "gradient" && (
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(150deg, #17150f 0%, #2e1407 42%, #7a3d12 78%, #c8892e 110%)",
          }}
        />
      )}

      {Art && (
        <Art
          className={`pointer-events-none absolute text-cream/70 transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
            featured
              ? "-right-10 -top-10 w-2/3 max-w-[420px]"
              : "-right-8 -top-8 w-3/4 max-w-[260px] opacity-80"
          }`}
        />
      )}

      <span className="eyebrow relative mb-auto opacity-80">
        Company service
      </span>

      <span className="relative mt-24 block">
        <span
          className={`block font-sans font-bold tracking-[-0.01em] ${
            featured ? "text-4xl md:text-5xl" : "text-2xl md:text-[1.7rem]"
          }`}
        >
          {service.title}
        </span>
        <span
          className={`mt-3 block max-w-md font-serif font-light leading-snug ${
            featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
          }`}
        >
          {service.description}
        </span>
        <span className="mt-6 flex items-center gap-3">
          <span className="tag-pill">{service.tag}</span>
        </span>
        <span className="link-arrow mt-8 inline-flex font-serif text-2xl font-light">
          Read
          <ArrowLong className="w-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </span>
      </span>
    </Link>
  );
}

export function ServicesMosaic() {
  const [featured, ...rest] = services;

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <div>
              <h2 className="font-sans text-4xl font-bold tracking-[-0.01em] md:text-5xl">
                What we do
              </h2>
              <p className="mt-4 max-w-md font-serif text-xl font-light leading-snug text-ash md:text-2xl">
                Six disciplines, one standard: it works, quietly, every time.
              </p>
            </div>
            <Link
              href="/services"
              className="link-arrow font-sans text-lg font-bold"
            >
              All services
              <ArrowLong className="w-12" />
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-2 md:grid-cols-3">
            <Tile service={featured} featured />
            {rest.map((service) => (
              <Tile key={service.slug} service={service} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
