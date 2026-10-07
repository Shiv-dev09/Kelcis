import Link from "next/link";
import { company } from "@/content/site";

type FooterLink = { label: string; href: string };

type FooterColumn = {
  heading: string;
  links: readonly FooterLink[];
  /** Icon-only link rendered after the text links. */
  social?: { label: string; href: string };
};

/** Official LinkedIn "in" mark. Inherits link colour via currentColor. */
function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const footerColumns: readonly FooterColumn[] = [
  {
    heading: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Experience", href: "/experience" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: company.email, href: `mailto:${company.email}` },
    ],
    social: {
      label: "Kelcis on LinkedIn",
      href: "https://www.linkedin.com/company/146594637",
    },
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms of use", href: "/legal/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-16 md:grid-cols-2">
          <p className="max-w-md font-sans text-lg font-semibold leading-snug">
            Kelcis is a technology consultancy serving the GCC.
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
                  {column.social && (
                    <li>
                      <a
                        href={column.social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={column.social.label}
                        className="inline-flex transition-colors hover:text-sand"
                      >
                        <LinkedInIcon />
                      </a>
                    </li>
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
            © {new Date().getFullYear()} {company.legalName} ·{" "}
            {company.registration} ·{" "}
            <a
              href={`mailto:${company.email}`}
              className="transition-colors hover:text-cream"
            >
              {company.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
