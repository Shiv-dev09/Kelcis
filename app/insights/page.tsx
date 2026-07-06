import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on service operations, Freshworks and the discipline of quiet execution — from the Kelcis team.",
};

const posts = [
  {
    date: "Coming soon",
    title: "Why your Freshdesk instance stopped being trusted",
    excerpt:
      "Systems don't fail loudly. They fail one workaround at a time, until the spreadsheet next to the desk becomes the real system.",
  },
  {
    date: "Coming soon",
    title: "The renewal conversation starts on day one",
    excerpt:
      "Customer success isn't a quarterly meeting. It's a paper trail of promises kept, built deliberately from go-live.",
  },
  {
    date: "Coming soon",
    title: "Automation needs an off switch",
    excerpt:
      "Every automation we ship has a human override and an audit trail. Quiet should never mean opaque.",
  },
] as const;

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
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.05}>
              <article className="grid gap-3 border-t border-oat py-10 md:grid-cols-12 md:items-baseline md:gap-8">
                <span className="eyebrow text-bronze md:col-span-2">
                  {post.date}
                </span>
                <h2 className="font-serif text-2xl font-light leading-tight md:col-span-5 md:text-3xl">
                  {post.title}
                </h2>
                <p className="max-w-xl font-sans text-[15px] leading-relaxed text-ash md:col-span-5">
                  {post.excerpt}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
