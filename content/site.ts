export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;

export type ServiceTile = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  surface: "gradient" | "ochre" | "oxblood" | "clay" | "coal" | "bronze";
  art: "sphere" | "fan" | "coil" | "capsule" | "arcs" | "none";
};

export const services: ServiceTile[] = [
  {
    slug: "freshworks",
    title: "Freshworks Consulting",
    description:
      "Implementation, audits and architecture across the Freshworks suite — configured around how your teams actually work.",
    tag: "Consulting",
    surface: "gradient",
    art: "sphere",
  },
  {
    slug: "managed-services",
    title: "Managed Services",
    description:
      "Your service operation, run and refined by people who own the outcome.",
    tag: "Operations",
    surface: "ochre",
    art: "coil",
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    description:
      "Front-line support that treats every ticket as a reputation decision.",
    tag: "Service",
    surface: "oxblood",
    art: "capsule",
  },
  {
    slug: "integrations",
    title: "Bespoke Integrations",
    description:
      "Custom connections between the systems your business already trusts.",
    tag: "Engineering",
    surface: "clay",
    art: "fan",
  },
  {
    slug: "automation",
    title: "Workflow Automation",
    description: "The routine, removed. Processes that run themselves.",
    tag: "Automation",
    surface: "coal",
    art: "arcs",
  },
  {
    slug: "customer-success",
    title: "Customer Success",
    description:
      "Adoption, renewals and growth, managed as a discipline — not a dashboard.",
    tag: "Growth",
    surface: "bronze",
    art: "none",
  },
];

export const steps = [
  {
    number: "01",
    title: "Listen",
    body: "We start with how your teams actually work — not how the software assumes they do. Short, structured, on site where it matters.",
  },
  {
    number: "02",
    title: "Design",
    body: "A plan measured in outcomes, priced by the people who will deliver it. No handoff between the sellers and the builders.",
  },
  {
    number: "03",
    title: "Build",
    body: "Configuration, integration and automation in short, visible cycles. You see progress weekly, in your own environment.",
  },
  {
    number: "04",
    title: "Run",
    body: "We stay accountable after go-live — operating, measuring and quietly improving until boring is the default.",
  },
] as const;

export const capabilities = [
  "Freshdesk & Freshservice implementation",
  "Freshsales & CRM architecture",
  "API & middleware integrations",
  "Process & workflow automation",
  "Support desk operations",
  "Success & renewal programmes",
] as const;

export const industries = [
  "Financial services",
  "Healthcare",
  "Retail & e-commerce",
  "Logistics",
  "Real estate",
  "Professional services",
  "Hospitality",
  "Education",
] as const;

export const company = {
  email: "hello@kelcis.com",
  region: "Serving the GCC",
} as const;
