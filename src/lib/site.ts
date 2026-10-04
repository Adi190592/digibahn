export const SITE = {
  name: "Digibahn",
  legalName: "Digibahn",
  domain: "https://digibahn.com",
  tagline: "Engineering the AI-Native Enterprise",
  description:
    "Digibahn is a technology integrator, AI-native product studio and AI engineering lab. We integrate enterprise technology, engineer intelligent systems and build AI-native products.",
  descriptor: "Technology Integrator / AI Product Studio / AI Engineering Lab",
  email: "hello@digibahn.com",
  social: {
    linkedin: "https://www.linkedin.com/company/digibahn",
    github: "https://github.com/digibahn",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "AI Lab", href: "/ai-lab" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];
