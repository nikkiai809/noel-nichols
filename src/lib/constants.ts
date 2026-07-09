import type { NavItem, Article, Capability } from '@/types';

/* ─── Site ─── */
export const SITE = {
  name: 'Noel Nichols',
  title: 'AI Product Builder & Founder',
  description:
    'I design, build and launch AI-powered products and digital ventures from idea to execution.',
  url: 'https://noel-nichols.vercel.app',
  email: 'hello@noelnichols.com',
  social: {
    github: 'https://github.com/nikkiai809',
    linkedin: 'https://linkedin.com/in/noelnichols',
  },
} as const;

/* ─── Navigation ─── */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/#about' },
  { label: 'Writing', href: '/#writing' },
  { label: 'Contact', href: '/#contact' },
];

/* ─── Capabilities ─── */
export const CAPABILITIES: Capability[] = [
  {
    title: 'AI Product Development',
    description:
      'Full-stack AI platforms, LLM integration, ML pipelines, and intelligent systems built for production.',
  },
  {
    title: 'Product Strategy',
    description:
      'Opportunity identification, market validation, roadmap planning, and go-to-market execution.',
  },
  {
    title: 'Technical Architecture',
    description:
      'System design, API architecture, data pipelines, and infrastructure for scalable products.',
  },
  {
    title: 'Venture Building',
    description:
      'Concept validation, team assembly, MVP delivery, and launch strategy for new digital ventures.',
  },
];

/* ─── Articles ─── */
export const ARTICLES: Article[] = [
  {
    title: 'Building a Multi-Agent AI Architecture',
    excerpt:
      'How Sonora Brain v3 uses MCP servers, memory persistence, and spec-driven development to ship AI products systematically.',
    date: '2026-06',
  },
  {
    title: 'The Product Builder\'s Creed',
    excerpt:
      'Why the most effective people in AI are those who bridge strategy, design, and technical execution.',
    date: '2026-05',
  },
  {
    title: 'SIGNAL: AI in Music Intelligence',
    excerpt:
      'Building an AI platform that helps record labels discover emerging talent using streaming data and predictive analytics.',
    date: '2026-04',
  },
  {
    title: 'AI × Music: The New Creative Frontier',
    excerpt:
      'How artificial intelligence is reshaping music discovery, creation, and artist–audience relationships.',
    date: '2026-03',
  },
];

/* ─── Process Steps ─── */
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Start with the problem, not the solution. Research, user interviews, market analysis, and opportunity validation.',
  },
  {
    step: '02',
    title: 'Design & Build',
    description:
      'Architecture, UX, and engineering in parallel. Systems that scale and interfaces that feel intuitive.',
  },
  {
    step: '03',
    title: 'Launch & Iterate',
    description:
      'Ship fast, measure everything, iterate constantly. Products are living systems, not static artifacts.',
  },
] as const;
