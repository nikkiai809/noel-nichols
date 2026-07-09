import type { Project } from '@/types';

export const projects: Project[] = [
  /* ─── SIGNAL — Flagship AI Product ─── */
  {
    id: 'signal',
    name: 'SIGNAL',
    tagline: 'AI Music Intelligence Platform',
    summary:
      'A multi-provider AI intelligence platform that helps record labels and A&R teams discover emerging talent using streaming data, cultural signals, and predictive analytics.',
    role: 'Founder & AI Product Builder',
    category: 'AI / Music Intelligence',
    technologies: [
      'Python',
      'React',
      'TypeScript',
      'TensorFlow',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
    ],
    techCategories: [
      { label: 'AI & ML', items: ['TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'Feature Store'] },
      { label: 'Backend & APIs', items: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'REST API'] },
      { label: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Dashboard UI'] },
      { label: 'Data Pipeline', items: ['Streaming Ingestion', 'ETL', 'Normalization Layer', 'Real-time'] },
      { label: 'Infrastructure', items: ['Docker', 'AWS', 'Vercel', 'CI/CD'] },
    ],
    keywords: [
      'AI',
      'Machine Learning',
      'Music Intelligence',
      'Data Products',
      'A&R Technology',
      'Predictive Analytics',
      'Feature Store',
      'Explainable AI',
    ],
    url: 'https://signal-demo.vercel.app',
    repo: 'https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp',
    metrics: [
      { value: '382+', label: 'Automated Tests' },
      { value: '5+', label: 'Integrated Data Sources' },
      { value: '5K+', label: 'Artists Scored' },
      { value: 'Real-time', label: 'Data Pipeline' },
    ],
    architecture: [
      { label: 'Spotify API' },
      { label: 'YouTube API' },
      { label: 'TikTok API' },
      { label: 'Normalization Layer' },
      { label: 'Feature Store', primary: true },
      { label: 'AI Scoring Engine' },
      { label: 'Intelligence API' },
      { label: 'Dashboard' },
    ],
    screenshots: [
      {
        label: 'Intelligence Dashboard',
        caption: 'Main AI dashboard: artist scoring, discovery filters, and real-time intelligence feeds.',
        color: 'from-amber-900/20 to-amber-700/5',
      },
      {
        label: 'Architecture Pipeline',
        caption: 'Multi-provider data pipeline: streaming ingestion → normalization → feature store → AI scoring → API → dashboard.',
        color: 'from-amber-800/15 to-amber-600/5',
      },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Business Problem & Product Vision',
        body: [
          'The music industry generates massive amounts of data daily — streaming numbers, social engagement, playlist additions, viral moments. Yet most A&R decisions still rely on intuition, personal networks, and luck. Over 120,000 tracks are released daily on streaming platforms. Labels lack a unified intelligence layer that can process this data, identify patterns, and surface actionable opportunities.',
          'SIGNAL was conceived as the solution: an AI-powered intelligence platform that aggregates streaming data, social signals, and cultural indicators to deliver actionable insights for A&R teams. The vision was to build a system that could process, analyze, and surface talent intelligence at machine scale while preserving the human judgment that makes great A&R.',
        ],
      },
      {
        id: 'ai-architecture',
        title: 'AI Architecture',
        body: [
          'SIGNAL is a multi-provider intelligence platform built on a three-layer architecture: data ingestion, analysis engine, and intelligence delivery.',
          'The Data Ingestion Layer connects to Spotify, YouTube, and TikTok APIs — normalizing disparate data schemas into a unified format. Each platform returns data in radically different structures: Spotify provides track-level audio features and streaming metrics, YouTube gives engagement and audience data, TikTok surfaces trend velocity and cultural signals.',
          'The Feature Store sits at the center of the architecture, providing a unified repository of pre-computed features that both the batch scoring pipeline and real-time inference endpoints share. This enables consistent artist scoring whether running a full catalog update or scoring a newly discovered artist on demand.',
          'The AI Scoring Engine evaluates artists across multiple dimensions: streaming growth velocity, playlist penetration, social momentum, geographic spread, genre crossover potential, and cultural signal strength.',
        ],
      },
      {
        id: 'explainable-ai',
        title: 'Explainable Scoring Engine',
        body: [
          'AI recommendations in creative industries face legitimate skepticism — A&Rs trust their ears and instincts. Every score in SIGNAL is explainable: clicking any metric reveals the source data, the weighting, and the confidence level.',
          'The scoring model was designed to augment, not replace, human judgment. SIGNAL surfaces candidates and evidence; the final decision remains with the A&R team. This design decision was critical for adoption — building explainability after the fact would have been significantly harder than designing for it upfront.',
        ],
      },
      {
        id: 'data-pipeline',
        title: 'Data Pipeline & Feature Engineering',
        body: [
          'The data pipeline handles ingesting, normalizing, and enriching data from multiple streaming providers. The normalization layer maps each provider\'s schema into a unified artist model while preserving provider-specific signals.',
          'Feature engineering transforms raw data into ML-ready features: streaming growth velocity (rate of change over time), playlist penetration (percentage of total streams from algorithmic playlists), social momentum (engagement rate growth), geographic spread (market diversity index), and cultural signal strength (trending frequency weighted by platform relevance).',
          'The Feature Store architecture supports both batch scoring (full catalog updates on a schedule) and real-time inference (on-demand scoring for new discoveries). Sharing feature definitions across both modes required careful abstraction.',
        ],
        variant: 'features',
        features: [
          'Multi-provider data ingestion (Spotify, YouTube, TikTok) with extensible adapter pattern',
          'Unified normalization layer that preserves provider-specific signals',
          'Feature Store for consistent batch and real-time feature serving',
          'Explainable AI scoring with per-metric transparency',
          'Intelligence API for programmatic access by enterprise clients',
        ],
      },
      {
        id: 'architecture',
        title: 'System Architecture',
        body: [],
        variant: 'architecture',
      },
      {
        id: 'api',
        title: 'Intelligence API',
        body: [
          'The Intelligence API provides programmatic access to SIGNAL\'s scoring engine and data products. Built with FastAPI, it exposes endpoints for artist search, score retrieval, trend analysis, and bulk catalog processing.',
          'While the primary user interface is the dashboard (built for executive decision-making), the API layer enables enterprise integrations and automated workflows. This dual-delivery approach — dashboard-first, API-second — allowed validation of the product before building for enterprise integration.',
        ],
      },
      {
        id: 'engineering-challenges',
        title: 'Engineering Challenges',
        body: [],
        variant: 'challenges',
        challenges: [
          {
            title: 'Cross-Provider Data Normalization',
            body: 'Each streaming platform returns data in radically different schemas. Spotify provides track-level audio features. YouTube gives engagement metrics. TikTok surfaces trend velocity. Building a unified schema that preserved the signal from each source required an extensible normalization layer with provider-specific adapters.',
          },
          {
            title: 'Explainability in ML Scoring',
            body: 'Building trust in AI recommendations requires transparency from day one. Every score needed to reveal its source data, weighting, and confidence level. The explainability system was designed as a core architectural component, not an afterthought.',
          },
          {
            title: 'Real-time + Batch Dual-Path Architecture',
            body: 'The Feature Store needed to support both batch scoring (full catalog updates) and real-time inference (on-demand artist discovery). Designing a dual-path architecture that shared feature definitions across both modes required careful abstraction of the feature computation layer.',
          },
          {
            title: 'Comprehensive Test Infrastructure',
            body: 'With 382+ automated tests covering data ingestion, feature computation, scoring models, and API endpoints, maintaining test velocity while adding new data sources required careful test architecture and mocking strategies.',
          },
        ],
      },
      {
        id: 'outcomes',
        title: 'Product Roadmap & Outcomes',
        body: [
          'SIGNAL has scored over 5,000 artists across multiple genres and demonstrated the ability to identify breakout signals before traditional metrics register them. The project validated that AI-powered music intelligence can reduce discovery noise and provide actionable insights for A&R teams.',
          'A comprehensive test suite with 382+ automated tests ensures pipeline reliability across data source changes and model updates. Industry conversations confirmed strong product-market fit.',
          'The product roadmap includes additional data source integrations, refined scoring models based on feedback from A&R professionals, and enterprise API tier for label-wide deployment.',
        ],
      },
      {
        id: 'lessons',
        title: 'Engineering & Product Lessons',
        body: [],
        variant: 'lessons',
        lessons: [
          {
            title: 'Feature Stores scale across use cases',
            body: 'Investing in a Feature Store architecture early paid dividends when adding new data sources and enabling real-time inference. The abstraction made both batch and online serving possible from a shared feature definition.',
          },
          {
            title: 'Explainability must be built in, not bolted on',
            body: 'AI products in creative industries require trust. Building the explainability layer as a core architectural component — not an afterthought — was critical for adoption.',
          },
          {
            title: 'Dashboard-first, API-second validates faster',
            body: 'Starting with a visual dashboard for executive users allowed us to validate the product hypothesis before investing in enterprise API infrastructure. The API layer was then designed based on real usage patterns.',
          },
        ],
      },
    ],
  },

  /* ─── YAMI ─── */
  {
    id: 'yami',
    name: 'YAMI',
    tagline: 'Mental Health AI Platform',
    summary:
      'A multi-agent AI platform providing personalized mental health support through conversational AI, context management, and long-term memory.',
    role: 'AI Product Designer & Engineer',
    category: 'HealthTech / AI',
    technologies: ['React Native', 'TypeScript', 'Python', 'OpenAI', 'PostgreSQL', 'Firebase'],
    techCategories: [
      { label: 'AI Architecture', items: ['Multi-Agent', 'RAG', 'LangGraph', 'Embeddings'] },
      { label: 'Backend', items: ['Python', 'PostgreSQL', 'Firebase', 'OpenAI API'] },
      { label: 'Frontend', items: ['React Native', 'TypeScript'] },
      { label: 'Memory', items: ['Long-term Memory', 'Context Management', 'Vector Store'] },
    ],
    keywords: ['Mental Health', 'AI', 'Multi-Agent', 'RAG', 'Conversational AI', 'HealthTech'],
    url: '#',
    repo: '#',
    metrics: [
      { value: 'Multi-agent', label: 'AI Architecture' },
      { value: 'Long-term', label: 'Memory System' },
      { value: 'RAG', label: 'Retrieval Pipeline' },
      { value: 'Context', label: 'Management Engine' },
    ],
    screenshots: [
      {
        label: 'AI Assistant Interface',
        caption: 'Multi-agent AI assistant with context management and long-term memory for personalized support.',
        color: 'from-teal-900/20 to-teal-700/5',
      },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Business Problem & Product Vision',
        body: [
          'Mental health support remains inaccessible for millions globally. Traditional therapy is expensive, stigmatized, and has long wait times. Digital solutions often lack personalization, clinical validity, and genuine empathy.',
          'YAMI was designed as a multi-agent AI platform that combines conversational AI with evidence-based therapeutic techniques, mood tracking, and personalized wellness recommendations.',
        ],
      },
      {
        id: 'ai-architecture',
        title: 'Multi-Agent AI Architecture',
        body: [
          'YAMI uses a multi-agent architecture where specialized agents handle different therapeutic modalities, connected through a context management engine that maintains conversation state across sessions.',
          'Long-term memory enables the platform to build a comprehensive understanding of each user over time. RAG pipelines pull relevant therapeutic techniques and user history into each conversation, ensuring responses are both personalized and clinically grounded.',
        ],
        variant: 'features',
        features: [
          'Multi-agent architecture for specialized therapeutic modalities',
          'Long-term memory system for cross-session context persistence',
          'RAG pipeline for relevant therapeutic technique retrieval',
          'Context management engine for conversation state tracking',
          'Privacy-first architecture with encrypted data storage',
        ],
      },
      {
        id: 'challenges',
        title: 'Engineering Challenges',
        body: [],
        variant: 'challenges',
        challenges: [
          {
            title: 'Safety & Crisis Detection',
            body: 'Every conversation must follow therapeutic boundaries with escalation paths for crisis situations. Building a system that could recognize crisis signals and respond appropriately was the primary safety engineering challenge.',
          },
          {
            title: 'Context Persistence at Scale',
            body: 'Maintaining meaningful context across sessions while respecting privacy constraints required careful architectural decisions about what to store, how to index it, and when to forget.',
          },
        ],
      },
    ],
  },

  /* ─── Sonora Digital Corp ─── */
  {
    id: 'sonora-digital-corp',
    name: 'Sonora Digital Corp',
    tagline: 'Venture Studio & AI Innovation Lab',
    summary:
      'A venture studio building AI-powered products with a proprietary multi-agent architecture. 8+ MCP servers, spec-driven development, and end-to-end product engineering.',
    role: 'Founder & AI Product Builder',
    category: 'Venture Studio / AI',
    technologies: [
      'Next.js',
      'TypeScript',
      'Python',
      'TensorFlow',
      'PostgreSQL',
      'AWS',
      'Docker',
      'MCP',
    ],
    techCategories: [
      { label: 'AI Architecture', items: ['MCP', 'Multi-Agent', 'RAG', 'LangGraph', 'Vector DB'] },
      { label: 'Backend & APIs', items: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs'] },
      { label: 'Frontend', items: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'] },
      { label: 'Infrastructure', items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'] },
      { label: 'Protocol', items: ['MCP (Model Context Protocol)', 'HTTP', 'WebSocket'] },
    ],
    keywords: [
      'Venture Studio',
      'AI Products',
      'Multi-Agent',
      'MCP',
      'Product Development',
      'AI Architecture',
    ],
    url: 'https://sonora.digital',
    repo: 'https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp',
    metrics: [
      { value: '5+', label: 'AI Products Built' },
      { value: '8+', label: 'MCP Servers' },
      { value: 'Multi-agent', label: 'AI Architecture' },
      { value: 'End-to-end', label: 'Product Engineering' },
    ],
    architecture: [
      { label: 'Client Apps' },
      { label: 'OpenClaw Gateway' },
      { label: 'GBrain Orchestrator', primary: true },
      { label: 'Engram Memory' },
      { label: 'MCP Tool Servers' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'Sonora Digital Corp is a venture studio and AI innovation lab. We build production AI products using a proprietary multi-agent architecture (Sonora Brain v3) that powers products across music intelligence, health, content, compliance, and streaming analytics.',
          'The core innovation is an MCP-based multi-agent architecture with persistent memory, spec-driven development, and automated testing — enabling rapid development of specialized AI products that share a common infrastructure.',
        ],
      },
      {
        id: 'architecture',
        title: 'Architecture: Sonora Brain v3',
        body: [],
        variant: 'architecture',
      },
      {
        id: 'challenges',
        title: 'Engineering Challenges',
        body: [],
        variant: 'challenges',
        challenges: [
          {
            title: 'Multi-Agent Coordination',
            body: 'Coordinating multiple AI agents with specialized roles required building an orchestration layer (GBrain) that could route tasks, manage state, and handle failures without losing context across agent boundaries.',
          },
          {
            title: 'Persistent Memory at Scale',
            body: 'Building a memory system (Engram) that supports vector search, RAG, and knowledge graphs through a unified MCP interface required careful abstraction of storage and retrieval semantics.',
          },
        ],
      },
    ],
  },

  /* ─── ABE Music Hub ─── */
  {
    id: 'abe-music-hub',
    name: 'ABE Music Hub',
    tagline: 'Label Intelligence Platform',
    summary:
      'An analytics and operations platform for independent music labels to manage artists, track revenue, and optimize streaming performance.',
    role: 'Product Manager & Technical Lead',
    category: 'Music Tech / Analytics',
    technologies: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Chart.js', 'Stripe'],
    techCategories: [
      { label: 'Frontend', items: ['Next.js', 'TypeScript', 'Chart.js', 'Dashboard'] },
      { label: 'Backend', items: ['Python', 'PostgreSQL', 'REST API'] },
      { label: 'Business', items: ['Stripe', 'Revenue Analytics', 'Reporting'] },
    ],
    keywords: ['Music Tech', 'Analytics', 'Label Management', 'Revenue Optimization', 'Data'],
    url: '#',
    repo: '#',
    metrics: [
      { value: 'Platform', label: 'Built & Deployed' },
      { value: 'Multi-artist', label: 'Dashboard' },
      { value: 'Live', label: 'Revenue Tracking' },
      { value: 'Data', label: 'Pipeline' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'ABE Music Hub provides independent record labels with a unified platform for managing artists, tracking revenue, analyzing streaming performance, and making data-driven decisions.',
          'The platform consolidates fragmented data sources into a central dashboard — replacing spreadsheets and disconnected tools with real-time visibility.',
        ],
        variant: 'features',
        features: [
          'Multi-artist dashboard with real-time streaming analytics',
          'Revenue tracking and royalty management',
          'Release calendar and automated scheduling',
          'Performance reports with trend analysis',
        ],
      },
    ],
  },

  /* ─── Velvet Rouge ─── */
  {
    id: 'velvet-rouge',
    name: 'Velvet Rouge',
    tagline: 'Creative Brand & Digital Experience',
    summary:
      'A premium nightlife and creative technology brand combining event production with digital innovation, community building, and brand strategy.',
    role: 'Brand Strategist & Digital Designer',
    category: 'Creative Technology',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Stripe'],
    techCategories: [
      { label: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
      { label: 'Design', items: ['Framer Motion', 'Brand Identity', 'UX Design'] },
      { label: 'Business', items: ['Stripe', 'Community Strategy'] },
    ],
    keywords: ['Brand Strategy', 'Digital Experience', 'Creative Technology'],
    url: '#',
    repo: '#',
    metrics: [
      { value: 'Brand', label: 'Identity & Positioning' },
      { value: 'Digital', label: 'Experience Platform' },
      { value: 'Community', label: 'Growth Strategy' },
      { value: 'Design', label: 'Direction & UX' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'Velvet Rouge is a premium nightlife and creative technology brand built with a strong digital foundation: brand identity, interactive website, curated content, event discovery, ticketing integration, and community engagement.',
        ],
        variant: 'features',
        features: [
          'Brand identity with editorial visual language',
          'Digital experience platform with immersive design',
          'Community building strategy and execution',
          'Event discovery and integrated ticketing',
        ],
      },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.id);
}
