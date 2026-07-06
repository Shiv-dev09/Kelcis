export type ServiceDetail = {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  statement: string;
  points: { title: string; body: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "freshworks",
    title: "Freshworks Consulting",
    metaDescription:
      "Freshworks implementation, audits and architecture from a Dubai-based partner — Freshdesk, Freshservice, Freshsales and the full suite.",
    intro:
      "The platform was sold as simple. Making it fit your business is the craft.",
    statement:
      "We implement, audit and re-architect the Freshworks suite for companies that outgrew the default setup — or never fit it in the first place.",
    points: [
      {
        title: "Implementations",
        body: "Freshdesk, Freshservice, Freshsales and Freshchat, configured around your workflows, data and reporting — not the demo environment.",
      },
      {
        title: "Audits & rescues",
        body: "A working system nobody trusts is a failed system. We audit existing instances, find where reality diverged from intent, and repair it.",
      },
      {
        title: "Architecture",
        body: "Multi-brand desks, shared services, group structures. We design instances that survive your next reorganisation.",
      },
    ],
  },
  {
    slug: "managed-services",
    title: "Managed Services",
    metaDescription:
      "Managed service operations from Kelcis — administration, optimisation and reporting with named engineers and agreed outcomes.",
    intro: "The best managed service is the one you never think about.",
    statement:
      "Kelcis runs your service platforms as if our name were on them — because to your teams, it is.",
    points: [
      {
        title: "Administration",
        body: "Releases, users, fields, rules and routing — maintained continuously, so the platform never drifts from the business.",
      },
      {
        title: "Optimisation",
        body: "A monthly cadence of small, measured improvements. Backlogs shrink; nothing surprises anyone.",
      },
      {
        title: "Reporting",
        body: "The numbers leadership actually reads: response, resolution, satisfaction, cost per contact — with commentary, not just charts.",
      },
    ],
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    metaDescription:
      "Outsourced customer support that treats every ticket as a reputation decision — trained, measured and accountable.",
    intro: "Every ticket is a reputation decision.",
    statement:
      "We build and run support operations where tone, speed and accuracy are managed as carefully as cost.",
    points: [
      {
        title: "Front line",
        body: "Trained agents on your systems and your voice, covering the hours your customers actually keep.",
      },
      {
        title: "Quality",
        body: "Every interaction sampled against a rubric you approve. Coaching happens weekly, not annually.",
      },
      {
        title: "Escalation",
        body: "Clean paths to your specialists, with context attached. Nothing arrives at your team cold.",
      },
    ],
  },
  {
    slug: "integrations",
    title: "Bespoke Integrations",
    metaDescription:
      "Custom integrations between Freshworks and the systems your business trusts — ERPs, billing, telephony, data warehouses.",
    intro: "Your systems already work. They just don't talk.",
    statement:
      "We build the connections between the platforms you already trust — ERPs, billing, telephony, warehouses — so data moves without people carrying it.",
    points: [
      {
        title: "Design",
        body: "Contract-first: we agree what moves, when, and who owns it before a line is written.",
      },
      {
        title: "Build",
        body: "APIs, middleware and webhooks with retries, logging and alerts — engineered for the day something upstream fails.",
      },
      {
        title: "Operate",
        body: "Integrations are products, not projects. We monitor and maintain what we ship.",
      },
    ],
  },
  {
    slug: "automation",
    title: "Workflow Automation",
    metaDescription:
      "Workflow automation from Kelcis — the routine removed, with human judgement kept where it belongs.",
    intro: "The routine, removed.",
    statement:
      "We automate the work nobody should be doing by hand — routing, triage, approvals, follow-ups — and leave judgement where it belongs.",
    points: [
      {
        title: "Discovery",
        body: "We map the repetitive work by watching it happen, then rank it by hours returned.",
      },
      {
        title: "Automation",
        body: "Rules, bots and scheduled jobs that are documented, reversible and owned — never mystery scripts.",
      },
      {
        title: "Guardrails",
        body: "Every automation has a human override and an audit trail. Quiet does not mean opaque.",
      },
    ],
  },
  {
    slug: "customer-success",
    title: "Customer Success",
    metaDescription:
      "Customer success as a discipline — adoption, health and renewals managed with the same rigour as delivery.",
    intro: "Renewals should feel like formalities.",
    statement:
      "We run success programmes that make retention unremarkable — adoption tracked, risks surfaced early, value demonstrated on schedule.",
    points: [
      {
        title: "Adoption",
        body: "Onboarding journeys and health scoring that show who is actually using what you sold them.",
      },
      {
        title: "Cadence",
        body: "Business reviews worth attending: outcomes against plan, next quarter agreed, risks named.",
      },
      {
        title: "Renewal",
        body: "No surprises in month eleven. The renewal conversation starts the day after go-live.",
      },
    ],
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
