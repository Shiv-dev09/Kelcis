import type { Metadata } from "next";
import { Archivo, Newsreader, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-grotesk",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kelcis.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kelcis — Quiet execution",
    template: "%s — Kelcis",
  },
  description:
    "Kelcis is a Dubai-based technology consultancy. We design, run and refine service operations — Freshworks consulting, managed services, integrations and automation.",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "Kelcis",
    title: "Kelcis — Quiet execution",
    description:
      "A Dubai-based technology consultancy for companies that take service seriously.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${newsreader.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
