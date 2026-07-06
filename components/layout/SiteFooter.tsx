import Link from "next/link";
import { company } from "@/content/site";

const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "LinkedIn", href: company.linkedin },
      { label: company.email, href: `mailto:${company.email}` },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms of use", href: "/legal/terms" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-16 md:grid-cols-2">
          <p className="max-w-md font-sans text-lg font-semibold leading-snug">
            Kelcis is a technology consultancy based in Dubai, United Arab
            Emirates.
          </p>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <p className="eyebrow mb-6 text-sand">{column.heading}</p>
                <ul className="space-y-4">
                  {column.links.map((link) =>
                    link.href.startsWith("/") ? (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="font-serif text-lg font-light transition-colors hover:text-sand"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          rel="noopener noreferrer"
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          className="font-serif text-lg font-light transition-colors hover:text-sand"
                        >
                          {link.label}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-10 border-t border-cream/10 pt-10 md:flex-row md:items-end">
          <p className="font-serif text-4xl font-light italic md:text-5xl">
            Quiet execution.
          </p>
          <p className="eyebrow text-sand">
            © {new Date().getFullYear()} Kelcis · Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
