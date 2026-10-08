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
      "Implementation, audits and architecture across the Freshworks suite, configured around how your teams actually work.",
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
      "Adoption, renewals and growth, managed as a discipline, not a dashboard.",
    tag: "Growth",
    surface: "bronze",
    art: "none",
  },
];

export const steps = [
  {
    number: "01",
    title: "Listen",
    body: "We sit with your team and watch how the work actually happens. Usually it is nothing like the documentation.",
  },
  {
    number: "02",
    title: "Design",
    body: "You get a plan with numbers in it. The people who wrote it are the people who deliver it.",
  },
  {
    number: "03",
    title: "Build",
    body: "We build in your environment, not ours. You see it working every week, not at the end.",
  },
  {
    number: "04",
    title: "Run",
    body: "We do not hand you the keys and leave. We run it until nobody thinks about it.",
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
  phone: "+971 52 498 1377",
  phoneHref: "tel:+971524981377",
  /** Office address. The registered address on the licence differs. */
  address: [
    "Level 19, Sheikh Rashid Tower",
    "Dubai World Trade Centre",
    "Sheikh Zayed Road",
    "Dubai, United Arab Emirates",
  ],
  legalName: "Kelcis Technologies FZE LLC",
  registration: "Registered in the UAE",
  /** Free zone licence. Renews annually. Next expiry 28 September 2027. */
  licence: "2628421044888",
} as const;
