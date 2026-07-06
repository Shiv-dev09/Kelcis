import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Kelcis collects, uses and protects personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Privacy policy"
        lede="What we collect, why we collect it, and the short list of things we will never do with it."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          <div className="max-w-2xl space-y-10 font-sans text-[15px] leading-relaxed text-ash">
            <div>
              <h2 className="mb-3 font-sans text-xl font-bold text-ink">
                What we collect
              </h2>
              <p>
                When you contact us, we receive the details you choose to share
                — your name, email address and message. Our website collects
                standard, anonymised analytics: pages visited, approximate
                region, device type.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-sans text-xl font-bold text-ink">
                How we use it
              </h2>
              <p>
                To reply to you, to deliver work you engage us for, and to
                understand how the site is used. Nothing else.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-sans text-xl font-bold text-ink">
                What we never do
              </h2>
              <p>
                We do not sell personal information. We do not share it with
                third parties beyond the processors needed to operate this
                site and our email. We do not add you to a mailing list you
                did not ask to join.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-sans text-xl font-bold text-ink">
                Your rights
              </h2>
              <p>
                Ask us what we hold about you and we will tell you. Ask us to
                delete it and we will, unless a contract or law requires
                otherwise. Write to hello@kelcis.com for either.
              </p>
            </div>
            <p className="border-t border-oat pt-8 text-sm">
              Last updated July 2026. Material changes to this policy will be
              posted on this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
