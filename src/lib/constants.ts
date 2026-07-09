import type { NavItem, Article, Capability, RecruiterInfo, EngineeringPrinciple, GitHubRepo, CurrentlyBuilding, HowWorkStep, FounderMetric, FounderTimelineEvent } from '@/types';

export const SITE = {
  name: 'Noel Nichols',
  title: 'Founder / AI Product Builder / Founding Engineer',
  description:
    'I build companies that solve real problems with AI. Multi-agent architectures, production systems, and ventures launched from zero.',
  url: 'https://noel-nichols.vercel.app',
  email: 'noelnichols00@gmail.com',
  social: {
    github: 'https://github.com/nikkiai809',
    linkedin: 'https://linkedin.com/in/noelnichols',
  },
} as const;

export const RECRUITER_INFO: RecruiterInfo[] = [
  { label: 'Role', value: 'Founder / AI Product Builder / Founding Engineer' },
  { label: 'Focus', value: 'AI Ventures, Multi-Agent Systems, Product Engineering' },
  { label: 'Stack', value: 'Python, TypeScript, Next.js, MCP, RAG, LLMs' },
  { label: 'Location', value: 'Remote / Americas' },
  { label: 'Availability', value: 'Open — Founding Engineer, AI Product, Product Engineering' },
  { label: 'GitHub', value: 'github.com/nikkiai809' },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Ventures', href: '/projects' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

/* ─── FOUNDER METRICS ─── */

export const FOUNDER_METRICS: FounderMetric[] = [
  { label: 'Startups Founded', value: '4' },
  { label: 'AI Platforms Built', value: '5+' },
  { label: 'Industries Entered', value: '5' },
  { label: 'End-to-End Products', value: '7+' },
  { label: 'MCP Servers Built', value: '8+' },
  { label: 'Automated Tests', value: '382+' },
];

/* ─── CAPABILITIES (Founder-Framed) ─── */

export const CAPABILITIES: Capability[] = [
  {
    title: 'Venture Creation',
    description:
      'Opportunity discovery, market research, product strategy, business modeling, and go-to-market execution for AI-powered ventures from zero.',
  },
  {
    title: 'AI Engineering & Architecture',
    description:
      'Multi-agent architectures, LLM integration, RAG pipelines, MCP servers, vector databases, and production AI systems built from scratch.',
  },
  {
    title: 'Product Engineering',
    description:
      'End-to-end product ownership: Next.js, TypeScript, Python, APIs, data pipelines, and cloud infrastructure for AI applications that ship.',
  },
  {
    title: 'Founder-Level Execution',
    description:
      'Brand strategy, UX/UI, pitch decks, technical planning, team building, and continuous iteration — everything required to launch and grow a venture.',
  },
];

/* ─── FOUNDER NARRATIVE ─── */

export const FOUNDER_NARRATIVE: FounderTimelineEvent[] = [
  {
    era: '2020',
    title: 'Engineering Foundations',
    description: 'Built automation systems that replaced manual processes at scale. Discovered how code transforms business operations.',
    type: 'technology',
  },
  {
    era: '2021',
    title: 'First AI Products',
    description: 'Developed predictive models and recommendation engines. First generation of AI-powered applications deployed to production.',
    type: 'product',
  },
  {
    era: '2022',
    title: 'Product Strategy',
    description: 'Transitioned from engineering execution to product ownership. Led full-stack product development from opportunity identification to launch.',
    type: 'founder',
  },
  {
    era: '2023',
    title: 'Multi-Agent Architectures',
    description: 'Architected multi-agent AI systems using MCP, RAG, and memory persistence. Built infrastructure for coordinated AI product ecosystems.',
    type: 'technology',
  },
  {
    era: '2024',
    title: 'Founded Sonora Digital Corp',
    description: 'Launched a venture studio building AI products across music intelligence, health, content, and analytics. 8+ MCP servers in production.',
    type: 'company',
  },
  {
    era: '2025+',
    title: 'Multiple Ventures',
    description: 'Building a portfolio of AI ventures: SIGNAL (music intelligence), YAMI (health), Sonora Brain (infrastructure), and next-generation AI products.',
    type: 'company',
  },
];

/* ─── FOUNDER PROCESS ─── */

export const FOUNDER_PROCESS = [
  {
    step: '01',
    title: 'Market Discovery',
    description: 'Opportunity identification, market sizing, competitive analysis, and problem validation before any product decisions are made.',
  },
  {
    step: '02',
    title: 'Product Strategy',
    description: 'Vision definition, business model design, roadmap planning, and success criteria. Strategy drives architecture, not the other way around.',
  },
  {
    step: '03',
    title: 'AI Architecture',
    description: 'System design for AI: data pipelines, model selection, agent coordination, memory systems, API boundaries, and infrastructure decisions.',
  },
  {
    step: '04',
    title: 'Rapid Execution',
    description: 'Build the core value first. Tests from day one, CI/CD from commit one, deployment to production before feature completeness.',
  },
  {
    step: '05',
    title: 'Launch & Iterate',
    description: 'Ship, measure, learn, repeat. Real usage data drives every iteration. Products are living systems that improve with every cycle.',
  },
  {
    step: '06',
    title: 'Next Venture',
    description: 'Apply accumulated learnings to the next opportunity. Each venture builds on the technology, market, and operational experience of the last.',
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

export const TRUST_SIGNALS = [
  { label: 'Startups Founded', value: '4' },
  { label: 'AI Platforms Shipped', value: '5+' },
  { label: 'MCP Servers Built', value: '8+' },
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

/* ─── CURRENTLY BUILDING ─── */

export const CURRENTLY_BUILDING: CurrentlyBuilding[] = [
  {
    product: 'SIGNAL',
    description: 'AI Music Intelligence — multi-provider scoring, Feature Store, explainable engine.',
    status: 'active',
  },
  {
    product: 'Sonora Brain v3',
    description: 'Multi-agent AI architecture — 8+ MCP servers, orchestration, persistent memory.',
    status: 'active',
  },
  {
    product: 'YAMI',
    description: 'AI Mental Health — multi-agent conversational support, long-term memory.',
    status: 'active',
  },
  {
    product: 'AI Agent Workflows',
    description: 'Automated multi-agent coordination patterns for production AI systems.',
    status: 'active',
  },
  {
    product: 'MCP Server SDK',
    description: 'Tooling and SDKs for building MCP-compatible AI servers and agents.',
    status: 'exploring',
  },
  {
    product: 'LLM Evaluation Framework',
    description: 'Systematic evaluation pipelines for LLM outputs, latency, and reliability.',
    status: 'exploring',
  },
];

/* ─── HOW I WORK ─── */

export const HOW_WORK_STEPS: HowWorkStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Business problem mapping, opportunity sizing, technical feasibility assessment, and success criteria definition.',
  },
  {
    step: '02',
    title: 'Architecture',
    description: 'System design: data flow, AI integration points, API boundaries, infrastructure decisions mapped before any code is written.',
  },
  {
    step: '03',
    title: 'Rapid Prototyping',
    description: 'Fast iteration on core value: build the risky parts first, validate assumptions, then expand into the full system.',
  },
  {
    step: '04',
    title: 'AI Integration',
    description: 'Model selection, prompt engineering, RAG pipeline construction, agent coordination, and memory system design.',
  },
  {
    step: '05',
    title: 'Testing & QA',
    description: 'Automated tests from day one: unit, integration, end-to-end. 382+ tests on SIGNAL alone. CI/CD gates every deployment.',
  },
  {
    step: '06',
    title: 'Production & Iteration',
    description: 'Deploy, monitor, measure, iterate. Real usage data drives the roadmap. Products are living systems, not static deliverables.',
  },
];
