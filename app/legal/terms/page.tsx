import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "The terms that govern use of the Kelcis website.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Terms of use"
        lede="The short version: this site is information, not advice, and engagements are governed by their own agreements."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          <div className="max-w-2xl space-y-10 font-sans text-[15px] leading-relaxed text-ash">
            <div>
              <h2 className="mb-3 font-sans text-xl font-bold text-ink">
                About this site
              </h2>
              <p>
                This website is operated by Kelcis, Dubai, United Arab
                Emirates. Its content is provided for general information
                about our services and does not constitute professional
                advice.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-sans text-xl font-bold text-ink">
                Engagements
              </h2>
              <p>
                Consulting and managed-service engagements are governed
                exclusively by the written agreement signed for that
                engagement. Nothing on this site forms an offer or a
                commitment to deliver services.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-sans text-xl font-bold text-ink">
                Intellectual property
              </h2>
              <p>
                The Kelcis name, mark and the content of this site are our
                property. Please don&rsquo;t reproduce them without written
                permission.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-sans text-xl font-bold text-ink">
                Liability
              </h2>
              <p>
                We keep this site accurate and available with reasonable care,
                but provide it as-is. To the extent permitted by law, we
                accept no liability for loss arising from reliance on its
                content.
              </p>
            </div>
            <p className="border-t border-oat pt-8 text-sm">
              Last updated July 2026. Questions about these terms:
              hello@kelcis.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
