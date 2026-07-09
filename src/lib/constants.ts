import type { NavItem, Article, Capability, RecruiterInfo, EngineeringPrinciple, GitHubRepo } from '@/types';

export const SITE = {
  name: 'Noel Nichols',
  title: 'AI Product Builder / AI Engineer',
  description:
    'Production AI systems — multi-agent architectures, MCP servers, RAG pipelines, data pipelines, and full-stack AI products built from concept to deployment.',
  url: 'https://noel-nichols.vercel.app',
  email: 'noelnichols00@gmail.com',
  social: {
    github: 'https://github.com/nikkiai809',
    linkedin: 'https://linkedin.com/in/noelnichols',
  },
} as const;

export const RECRUITER_INFO: RecruiterInfo[] = [
  { label: 'Role', value: 'AI Product Builder / AI Engineer' },
  { label: 'Focus', value: 'AI Systems, Automation, Product Engineering' },
  { label: 'Stack', value: 'Python, TypeScript, Next.js, MCP, RAG, LLMs' },
  { label: 'Location', value: 'Remote / Americas' },
  { label: 'Availability', value: 'Open — Founding Engineer, AI Product, Product Engineering' },
  { label: 'GitHub', value: 'github.com/nikkiai809' },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const CAPABILITIES: Capability[] = [
  {
    title: 'AI Engineering',
    description:
      'Multi-agent architectures, LLM integration, RAG pipelines, MCP servers, vector databases, and production AI systems built from scratch.',
  },
  {
    title: 'Full-Stack Product Development',
    description:
      'End-to-end product engineering: Next.js, TypeScript, Python, APIs, data pipelines, and cloud infrastructure for AI-powered applications.',
  },
  {
    title: 'Technical Architecture',
    description:
      'System design for AI products: data ingestion, feature stores, model serving, API design, and scalable cloud deployment.',
  },
  {
    title: 'Product Strategy & Execution',
    description:
      'From opportunity identification to shipped product. Roadmap planning, MVP delivery, and iterative development with founder-level ownership.',
  },
];

export const ARTICLES: Article[] = [
  {
    title: 'Building a Multi-Agent AI Architecture with MCP',
    excerpt:
      'How Sonora Brain v3 uses MCP servers, memory persistence, and spec-driven development to coordinate multiple AI agents in production.',
    date: '2026-06',
  },
  {
    title: 'SIGNAL: Building an AI Music Intelligence Platform',
    excerpt:
      'Designing a multi-provider AI platform with explainable scoring, feature stores, and real-time data pipelines for the music industry.',
    date: '2026-05',
  },
  {
    title: 'The Product Builder Approach to AI',
    excerpt:
      'Why combining engineering depth with product thinking is the most effective way to build AI products that ship.',
    date: '2026-04',
  },
  {
    title: 'RAG, Agents, and Production AI Patterns',
    excerpt:
      'Lessons learned building retrieval-augmented generation, multi-agent coordination, and memory systems for real users.',
    date: '2026-03',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Architect',
    description:
      'System design before code. Data flow, API boundaries, AI integration points, and infrastructure decisions mapped before implementation begins.',
  },
  {
    step: '02',
    title: 'Engineer',
    description:
      'Build with tests from day one. Modular architecture, typed APIs, CI/CD pipelines, and production-ready code that ships.',
  },
  {
    step: '03',
    title: 'Ship & Scale',
    description:
      'Deploy fast, measure everything, iterate based on real usage. Products are living systems — built for continuous improvement.',
  },
];

export const NARRATIVE_STEPS = [
  {
    era: '2020',
    label: 'Engineering Foundations',
    description: 'Automation systems at scale: Python, APIs, and data pipelines that replaced manual processes with reliable, testable code.',
  },
  {
    era: '2021',
    label: 'AI Engineering',
    description: 'Machine learning and AI products: predictive models, recommendation engines, and first-generation AI applications deployed to production.',
  },
  {
    era: '2022',
    label: 'Full-Stack Product Building',
    description: 'Owned product engineering end-to-end. Architecture, design, backend, frontend, and deployment of AI platforms from concept to launch.',
  },
  {
    era: '2023',
    label: 'Multi-Agent Systems',
    description: 'Architected multi-agent AI systems with MCP, RAG, and memory persistence. Built the infrastructure for coordinated AI product ecosystems.',
  },
  {
    era: '2024+',
    label: 'Founder & AI Product Builder',
    description: 'Founded Sonora Digital Corp. Building production AI products across music intelligence, health, content, compliance, and streaming analytics.',
  },
];

export const TRUST_SIGNALS = [
  { label: 'AI Products Shipped', value: '5+' },
  { label: 'MCP Servers Built', value: '8+' },
  { label: 'GitHub Repositories', value: '10+' },
  { label: 'Automated Tests', value: '382+' },
];

export const TECH_STACK_HOME = [
  {
    category: 'AI & LLMs',
    items: ['OpenAI', 'Claude', 'MCP', 'LangGraph', 'RAG', 'AI Agents', 'Vector DBs'],
  },
  {
    category: 'Languages',
    items: ['TypeScript', 'Python', 'Node.js'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend & APIs',
    items: ['FastAPI', 'PostgreSQL', 'REST APIs', 'WebSockets', 'Redis'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'CI/CD'],
  },
];

/* ─── ENGINEERING PRINCIPLES ─── */

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    title: 'Production-First Development',
    description:
      'Code is only valuable when it ships. Every feature is built with deployment, monitoring, and iteration in mind — not just local development.',
  },
  {
    title: 'Explainable AI Over Black-Box',
    description:
      'AI decisions must be auditable. Every model output reveals its source data, weighting, and confidence level — designed for trust from day one.',
  },
  {
    title: 'Automation Before Manual Processes',
    description:
      'If a task can be automated, it should be. Tests, deployment, data pipelines, and infrastructure are codified, not handled manually.',
  },
  {
    title: 'Data-Driven Product Decisions',
    description:
      'Products improve through measurement. Usage patterns, performance metrics, and user behavior inform every iteration and roadmap decision.',
  },
  {
    title: 'Scalable Architectures from Day One',
    description:
      'Architecture decisions anticipate growth. Modular design, clean interfaces, and loose coupling ensure systems evolve without rewrites.',
  },
  {
    title: 'User-Centered AI Systems',
    description:
      'AI augments human judgment — it does not replace it. Interfaces surface AI insights with context, evidence, and user control over final decisions.',
  },
];

/* ─── GITHUB REPOS ─── */

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    name: 'Sonora Brain v3',
    description: 'Multi-agent AI architecture: MCP-based orchestration, persistent memory, spec-driven development, and 8+ MCP servers for production AI products.',
    url: 'https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp',
  },
  {
    name: 'Engram Memory Server',
    description: 'MCP server for persistent AI memory: vector search, RAG, knowledge graphs, and cross-session context management.',
    url: 'https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp',
  },
  {
    name: 'GBrain Orchestrator',
    description: 'Multi-agent orchestration layer: Cortex planner + Thalamus router for coordinating specialized AI agents through MCP.',
    url: 'https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp',
  },
  {
    name: 'OpenClaw Gateway',
    description: 'Dual-mode MCP + HTTP gateway for AI products. Routes messages, manages channels, and provides REST API access to AI systems.',
    url: 'https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp',
  },
  {
    name: 'SIGNAL Intelligence',
    description: 'AI music intelligence: multi-provider data pipeline, feature store, explainable scoring engine, 382+ automated tests.',
    url: 'https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp',
  },
];
