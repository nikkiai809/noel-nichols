import type { Project } from '@/types';

export const projects: Project[] = [
  /* ─── SIGNAL — Flagship AI Product ─── */
  {
    id: 'signal',
    name: 'SIGNAL',
    tagline: 'AI Music Intelligence Venture',
    summary:
      'SIGNAL predicts emerging artists through explainable AI scoring across multiple streaming platforms. A multi-provider intelligence platform connecting Spotify, YouTube, and TikTok data through a Feature Store architecture with real-time data pipelines.',
    ventureType: 'AI Venture / Music Intelligence',
    ventureRoles: [
      { area: 'Founder', description: 'End-to-end venture creation from opportunity identification to product launch' },
      { area: 'Product Strategy', description: 'Market research, vision definition, roadmap, business model design' },
      { area: 'AI Architecture', description: 'Multi-provider data pipeline, Feature Store, explainable scoring engine design' },
      { area: 'Market Research', description: 'Music industry analysis, A&R workflow study, competitive intelligence' },
      { area: 'Technical Direction', description: 'System architecture, technology selection, infrastructure decisions' },
      { area: 'Business Model', description: 'Monetization strategy, enterprise pricing, go-to-market planning' },
      { area: 'Go-to-Market', description: 'Industry partnerships, launch strategy, enterprise sales approach' },
      { area: 'Engineering', description: 'Full-stack implementation, data pipelines, API design, 382+ tests' },
    ],
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
      { label: 'Data Pipeline', items: ['Streaming Ingestion', 'ETL', 'Normalization Layer', 'Real-time Inference'] },
      { label: 'Infrastructure', items: ['Docker', 'AWS', 'Vercel', 'CI/CD', 'GitHub Actions'] },
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
      { value: '3', label: 'Pipeline Stages' },
      { value: 'Real-time', label: 'Data Pipeline' },
      { value: '8+', label: 'MCP Servers in Stack' },
    ],
    architecture: [
      { label: 'Spotify API' },
      { label: 'YouTube API' },
      { label: 'TikTok API' },
      { label: 'Social Feeds' },
      { label: 'Cultural Signals' },
      { label: 'Normalization Layer' },
      { label: 'Feature Store', primary: true },
      { label: 'Batch Scorer' },
      { label: 'Real-time Scorer' },
      { label: 'Explainability Engine' },
      { label: 'Intelligence API' },
      { label: 'Dashboard' },
    ],
    screenshots: [
      {
        label: 'Intelligence Dashboard',
        caption: 'Main AI dashboard: artist scoring, discovery filters, and real-time intelligence feeds across 5K+ scored artists.',
        color: 'from-amber-900/20 to-amber-700/5',
      },
      {
        label: 'Explainable Score Breakdown',
        caption: 'Every score reveals its source data, metric weighting, and confidence level — designed for trust, not black-box predictions.',
        color: 'from-amber-800/15 to-amber-600/5',
      },
      {
        label: 'Architecture Pipeline',
        caption: 'Multi-provider data pipeline: streaming ingestion → normalization → feature store → AI scoring → API → dashboard.',
        color: 'from-amber-900/20 to-amber-700/5',
      },
      {
        label: 'Feature Store Explorer',
        caption: 'Central feature repository enabling both batch scoring and real-time inference from a shared feature definition layer.',
        color: 'from-amber-800/15 to-amber-600/5',
      },
    ],
    sections: [
      {
        id: 'product-vision',
        title: 'Product Vision',
        body: [
          'SIGNAL is an AI-powered music intelligence platform that helps record labels and A&R teams discover emerging talent before the competition. It processes streaming data, social signals, and cultural indicators from multiple platforms — then surfaces actionable insights through an explainable AI scoring engine.',
          'The vision: reduce discovery noise by processing 120,000+ daily track releases through an AI layer that identifies breakout signals before traditional metrics register them. SIGNAL does not replace A&R intuition — it amplifies it with machine-scale data processing.',
        ],
        variant: 'feature-cards',
        featureCards: [
          {
            title: 'Multi-Provider Intelligence',
            description: 'Connects Spotify, YouTube, TikTok, and social feeds into a unified analysis pipeline. Each platform contributes unique signals that no single source can provide.',
          },
          {
            title: 'Explainable AI Scores',
            description: 'Every artist score reveals exactly why it was calculated — source data, metric weights, confidence levels. Built for trust in creative industry decision-making.',
          },
          {
            title: 'Real-Time Discovery',
            description: 'New artists scored on demand through the real-time inference pipeline. No waiting for batch updates when a potential discovery surfaces.',
          },
          {
            title: 'Feature Store Architecture',
            description: 'Shared feature repository enables consistent scoring across batch and real-time modes. Feature definitions computed once, served everywhere.',
          },
        ],
      },
      {
        id: 'business-problem',
        title: 'Business Problem',
        body: [
          'The music industry generates massive amounts of data daily — streaming numbers, social engagement, playlist additions, viral moments. Yet most A&R decisions still rely on intuition, personal networks, and luck. Over 120,000 tracks are released daily on streaming platforms. Labels lack a unified intelligence layer that can process this data, identify patterns, and surface actionable opportunities.',
          'The core problem is not a lack of data — it is a lack of signal. Raw streaming numbers alone do not reveal which artists have sustainable growth trajectories versus viral one-hit wonders. The industry needed a system that could distinguish between noise and genuine breakout potential.',
        ],
      },
      {
        id: 'solution',
        title: 'Solution',
        body: [
          'SIGNAL aggregates streaming data from Spotify, YouTube, and TikTok — normalizing disparate schemas into a unified artist profile. The AI scoring engine evaluates artists across multiple dimensions: streaming growth velocity, playlist penetration, social momentum, geographic spread, genre crossover potential, and cultural signal strength.',
          'The result is a ranked intelligence feed that surfaces high-potential artists with explainable reasoning for every score. A&R teams can filter by genre, region, growth trajectory, and signal strength — reducing thousands of daily releases to a manageable, prioritized discovery queue.',
        ],
        variant: 'features',
        features: [
          'Multi-provider data ingestion with extensible adapter pattern (Spotify, YouTube, TikTok + social feeds)',
          'Unified normalization layer preserving provider-specific signals in a consistent schema',
          'Feature Store for consistent batch and real-time feature serving across all scoring modes',
          'Explainable AI scoring with per-metric transparency and confidence indicators',
          'Intelligence API for programmatic access by enterprise clients and automated workflows',
          'Interactive dashboard with discovery filters, trend analysis, and export capabilities',
        ],
      },
      {
        id: 'ai-architecture',
        title: 'AI Architecture',
        body: [
          'SIGNAL is built on a three-layer architecture designed for scale, explainability, and extensibility.',
          'The Data Ingestion Layer connects to streaming platform APIs — normalizing disparate data schemas into a unified format. Each platform returns data in radically different structures: Spotify provides track-level audio features and streaming metrics, YouTube gives engagement and audience data, TikTok surfaces trend velocity and cultural signals.',
          'The Feature Store sits at the center of the architecture, providing a unified repository of pre-computed features that both the batch scoring pipeline and real-time inference endpoints share. This enables consistent artist scoring whether running a full catalog update or scoring a newly discovered artist on demand.',
          'The AI Scoring Engine evaluates artists across multiple dimensions: streaming growth velocity (rate of change over time), playlist penetration (percentage of total streams from algorithmic playlists), social momentum (engagement rate growth), geographic spread (market diversity index), and cultural signal strength (trending frequency weighted by platform relevance).',
        ],
        variant: 'arch-blocks',
        archBlocks: [
          {
            layer: 'Data Ingestion',
            components: ['Spotify API Connector', 'YouTube API Connector', 'TikTok API Connector', 'Social Feed Parser', 'Cultural Signal Scraper'],
            description: 'Extensible adapter pattern for multi-provider data ingestion. Each provider has a dedicated connector that transforms its unique schema into the unified artist model.',
          },
          {
            layer: 'Normalization & Enrichment',
            components: ['Schema Mapper', 'Deduplication Engine', 'Artist Resolution', 'Signal Enricher', 'Quality Gate'],
            description: 'Cross-provider data normalization layer that maps disparate schemas into a consistent artist profile while preserving provider-specific signals for downstream analysis.',
          },
          {
            layer: 'Feature Store',
            components: ['Feature Definitions', 'Batch Computer', 'Online Serving Layer', 'Feature Registry', 'Versioning'],
            description: 'Central feature repository. Feature definitions are declared once and served in both batch and real-time modes, ensuring consistent scoring across the entire system.',
          },
          {
            layer: 'AI Scoring Engine',
            components: ['Growth Velocity Model', 'Playlist Penetration', 'Social Momentum', 'Geographic Spread', 'Cultural Signal', 'Ensemble Scorer'],
            description: 'Multi-dimensional scoring evaluating artists across six signal categories. Each dimension produces an interpretable sub-score with full transparency into calculation.',
          },
          {
            layer: 'Explainability',
            components: ['Source Attribution', 'Weight Visualizer', 'Confidence Indicator', 'Drill-Down Explorer', 'Audit Trail'],
            description: 'Every score is fully explainable. Clicking any metric reveals the source data, the weighting applied, and the confidence level of each signal component.',
          },
          {
            layer: 'Delivery',
            components: ['Intelligence API', 'Dashboard UI', 'Export Engine', 'Alert System', 'Enterprise Integration'],
            description: 'Dual delivery: interactive dashboard for executive decision-making and REST API for enterprise integration and automated workflows.',
          },
        ],
      },
      {
        id: 'data-pipeline',
        title: 'Data Pipeline & Feature Engineering',
        body: [
          'The data pipeline handles ingesting, normalizing, and enriching data from multiple streaming providers. The normalization layer maps each provider schema into a unified artist model while preserving provider-specific signals that differentiate the intelligence output.',
          'Feature engineering transforms raw data into ML-ready features through a series of computation stages. Each feature is designed to capture a specific signal dimension that correlates with artist breakout potential.',
        ],
        variant: 'timeline',
        features: [
          'Raw Ingestion: Streaming data collected from Spotify, YouTube, and TikTok APIs on configurable schedules',
          'Schema Normalization: Provider-specific data mapped to unified artist model with signal preservation tags',
          'Feature Computation: Raw data transformed into ML-ready features: velocity, penetration, momentum, spread, signal strength',
          'Feature Store Write: Computed features stored in the central Feature Store with version control and metadata',
          'Batch Scoring: Full catalog scoring run on schedule — all artists evaluated across all dimensions',
          'Real-Time Inference: On-demand scoring for newly discovered artists through the online Feature Store serving layer',
        ],
      },
      {
        id: 'explainable-ai',
        title: 'Explainable Scoring Engine',
        body: [
          'AI recommendations in creative industries face legitimate skepticism — A&Rs trust their ears and instincts. Every score in SIGNAL is explainable: clicking any metric reveals the source data, the weighting, and the confidence level.',
          'The scoring model was designed to augment, not replace, human judgment. SIGNAL surfaces candidates and evidence; the final decision remains with the A&R team. This design decision was critical for adoption — building explainability after the fact would have been significantly harder than designing for it upfront.',
        ],
        variant: 'feature-cards',
        featureCards: [
          {
            title: 'Source Attribution',
            description: 'Every score component traces back to its source data. A&R teams can see exactly which platform and metric contributed to each signal.',
          },
          {
            title: 'Weight Visualization',
            description: 'Scoring weights are transparent and adjustable. Users see how different signal dimensions combine into the final score.',
          },
          {
            title: 'Confidence Indicators',
            description: 'Not all signals are equally reliable. Confidence levels communicate data quality and signal strength at every level of the scoring hierarchy.',
          },
          {
            title: 'Drill-Down Explorer',
            description: 'Click from an overall score down to individual metrics, source data points, and trend charts. Full transparency from top to bottom.',
          },
        ],
      },
      {
        id: 'intelligence-api',
        title: 'Intelligence API',
        body: [
          'The Intelligence API provides programmatic access to SIGNAL scoring engine and data products. Built with FastAPI, it exposes endpoints for artist search, score retrieval, trend analysis, and bulk catalog processing.',
          'While the primary user interface is the dashboard (built for executive decision-making), the API layer enables enterprise integrations and automated workflows. This dual-delivery approach — dashboard-first, API-second — allowed validation of the product before building for enterprise integration.',
        ],
        variant: 'api-examples',
        apiExamples: [
          {
            endpoint: 'GET /api/v1/artists/search',
            method: 'search',
            description: 'Search scored artists by name, genre, or signal characteristics. Returns ranked results with full score breakdowns.',
          },
          {
            endpoint: 'GET /api/v1/artists/{id}/score',
            method: 'score',
            description: 'Retrieve complete score breakdown for a specific artist across all signal dimensions with explainability data.',
          },
          {
            endpoint: 'GET /api/v1/trends/emerging',
            method: 'trends',
            description: 'Returns emerging artist signals ranked by growth velocity, highlighting artists with above-threshold momentum across multiple platforms.',
          },
          {
            endpoint: 'POST /api/v1/artists/score',
            method: 'score-on-demand',
            description: 'On-demand artist scoring through the real-time inference pipeline. Submit artist identifiers and receive scored results with full explainability.',
          },
        ],
      },
      {
        id: 'architecture-diagram',
        title: 'System Architecture',
        body: [],
        variant: 'architecture',
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
            body: 'AI products in creative industries require trust. Building the explainability layer as a core architectural component — not an afterthought — was critical for adoption by A&R teams.',
          },
          {
            title: 'Dashboard-first, API-second validates faster',
            body: 'Starting with a visual dashboard for executive users allowed validation of the product hypothesis before investing in enterprise API infrastructure. The API layer was then designed based on real usage patterns.',
          },
        ],
      },
      {
        id: 'roadmap',
        title: 'Product Roadmap & Outcomes',
        body: [
          'SIGNAL has scored over 5,000 artists across multiple genres and demonstrated the ability to identify breakout signals before traditional metrics register them. A comprehensive test suite with 382+ automated tests ensures pipeline reliability across data source changes and model updates.',
        ],
        variant: 'roadmap',
        roadmap: [
          {
            phase: 'Phase 1',
            title: 'Core Platform Launch',
            description: 'Multi-provider ingestion, Feature Store, explainable scoring engine, and intelligence dashboard. 382+ automated tests ensuring pipeline reliability.',
            status: 'completed',
          },
          {
            phase: 'Phase 2',
            title: 'Real-Time Intelligence',
            description: 'On-demand artist scoring pipeline, real-time inference endpoints, and expanded data source coverage (TikTok, social feeds, cultural signals).',
            status: 'completed',
          },
          {
            phase: 'Phase 3',
            title: 'Enterprise API & Integrations',
            description: 'REST API for enterprise clients, automated alerting on breakout signals, and custom scoring models for label-specific discovery criteria.',
            status: 'in-progress',
          },
          {
            phase: 'Phase 4',
            title: 'Predictive Analytics & Market Intelligence',
            description: 'Genre trend forecasting, market gap analysis, competitive landscape intelligence, and automated A&R reporting.',
            status: 'planned',
          },
        ],
      },
    ],
  },

  /* ─── YAMI ─── */
  {
    id: 'yami',
    name: 'YAMI',
    tagline: 'AI Mental Health Venture',
    summary:
      'YAMI provides personalized mental health support through multi-agent conversational AI, evidence-based therapeutic techniques, and long-term memory that understands each user across sessions.',
    ventureType: 'AI Venture / HealthTech',
    ventureRoles: [
      { area: 'Founder', description: 'Venture creation, product vision, and end-to-end execution' },
      { area: 'Research', description: 'Mental health domain research, therapeutic technique analysis, clinical safety' },
      { area: 'Product Vision', description: 'Product definition, user experience design, evidence-based feature roadmap' },
      { area: 'AI Systems', description: 'Multi-agent architecture, RAG pipeline, long-term memory system design' },
      { area: 'Automation', description: 'Conversation flows, crisis detection, escalation paths, privacy infrastructure' },
      { area: 'Technical Planning', description: 'Architecture decisions, technology selection, compliance planning' },
    ],
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
        caption: 'Multi-agent AI assistant with context management and long-term memory for personalized support across sessions.',
        color: 'from-teal-900/20 to-teal-700/5',
      },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Product Vision & Business Problem',
        body: [
          'Mental health support remains inaccessible for millions globally. Traditional therapy is expensive, stigmatized, and has long wait times. Digital solutions often lack personalization, clinical validity, and genuine empathy.',
          'YAMI combines multi-agent conversational AI with evidence-based therapeutic techniques, mood tracking, personalized wellness recommendations, and long-term memory that builds a comprehensive understanding of each user over time.',
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

  /* ─── Sonora Digital Corp (Venture Studio) ─── */
  {
    id: 'sonora-digital-corp',
    name: 'Sonora Digital Corp',
    tagline: 'AI Venture Studio',
    summary:
      'Sonora Digital Corp builds production AI products with a proprietary multi-agent architecture (Sonora Brain v3) — 8+ MCP servers, spec-driven development, persistent memory, and end-to-end product engineering.',
    ventureType: 'Venture Studio / AI Infrastructure',
    ventureRoles: [
      { area: 'Founder', description: 'Company creation, vision, strategy, and operational leadership' },
      { area: 'Ecosystem Strategy', description: 'Multi-product portfolio strategy, cross-venture infrastructure, platform thinking' },
      { area: 'Platform Architecture', description: 'Sonora Brain v3: MCP-based multi-agent architecture, spec-driven development' },
      { area: 'AI Infrastructure', description: '8+ MCP servers, Engram memory, GBrain orchestration, OpenClaw gateway' },
      { area: 'Product Direction', description: 'Venture pipeline management, product-market fit, resource allocation' },
    ],
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

  /* ─── ABE Music Hub / Sonora Music Creative Hub ─── */
  {
    id: 'abe-music-hub',
    name: 'Sonora Music Creative Hub',
    tagline: 'Artist Development Ecosystem',
    summary:
      'A 360° physical ecosystem where artists are discovered, developed, produced, launched, and monetized under one roof. 11 interconnected spaces spanning creative production, brand development, and business operations.',
    ventureType: 'Music Infrastructure / Creative Ecosystem',
    ventureRoles: [
      { area: 'Founder', description: 'Ecosystem vision, business model, and strategic direction' },
      { area: 'Product Strategy', description: '11-space architecture, artist journey design, revenue model' },
      { area: 'Creative Direction', description: 'Brand identity, spatial design, editorial aesthetic' },
      { area: 'Technical Lead', description: 'Digital platform architecture, booking system, analytics' },
    ],
    role: 'Founder & Product Strategist',
    category: 'Music Infrastructure',
    technologies: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Tailwind CSS'],
    techCategories: [
      { label: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Python', 'PostgreSQL', 'REST API'] },
      { label: 'Infrastructure', items: ['11 Spaces', '6-Stage Pipeline', '8 Revenue Streams'] },
    ],
    keywords: ['Artist Development', 'Creative Ecosystem', 'Music Infrastructure', '360° Services'],
    url: 'https://abe-music-hub.vercel.app',
    repo: '#',
    metrics: [
      { value: '11', label: 'Interconnected Spaces' },
      { value: '6', label: 'Stage Artist Journey' },
      { value: '40%', label: 'Cost Reduction' },
      { value: '8', label: 'Revenue Streams' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'Sonora Music Creative Hub is a 360° physical ecosystem for artist development — from discovery through global scale. 11 interconnected spaces under one roof: recording studios, beat labs, an academy, marketing and legal departments, A&R, executive offices, and a courtyard for events.',
          'The hub replaces the fragmented music infrastructure model (10+ separate vendors) with a unified ecosystem, reducing costs by 40% and cutting time-to-market in half. Every stage of the artist journey — discovery, formation, production, branding, launch, and scaling — is orchestrated within a single facility.',
        ],
        variant: 'features',
        features: [
          '11 spaces: Artist Loft, Studio A, Beat Lab, Academy, Rehearsal Room, Strategy Room, Marketing & Branding, Legal Affairs, A&R, Executive Office, Velvet Courtyard',
          '6-stage artist journey with integrated pipeline from scouting to global scale',
          '8 diversified revenue streams: production, academy, coworking, events, merch, management, consulting, sync licensing',
          'Velvet Rouge Nights: exclusive showcase events for A&R, investors, and tastemakers',
        ],
      },
    ],
  },

  /* ─── Velvet Rouge ─── */
  {
    id: 'velvet-rouge',
    name: 'Velvet Rouge',
    tagline: 'Global Creative Network',
    summary:
      'An invitation-only global creative network connecting six of the world\'s most creative capitals — Mexico City, Tokyo, Seoul, Berlin, Los Angeles, and Shanghai — through cultural observation and editorial dispatches.',
    ventureType: 'Creative Network',
    ventureRoles: [
      { area: 'Founder', description: 'Network creation, editorial vision, and creative direction' },
      { area: 'Editorial Direction', description: 'Publication voice, night observation framework, archival methodology' },
      { area: 'Creative Direction', description: 'Visual identity, typography system, poetic aesthetic across six languages' },
      { area: 'Cultural Strategy', description: 'City selection, curator network, coordinate-based expansion' },
    ],
    role: 'Founder & Editorial Director',
    category: 'Creative Network / Publishing',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    techCategories: [
      { label: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
      { label: 'Design', items: ['Framer Motion', 'Editorial Design', 'Typography'] },
    ],
    keywords: ['Creative Network', 'Editorial', 'Cultural Observation', 'City Dispatches'],
    url: 'https://velvet-rouge.vercel.app',
    repo: '#',
    metrics: [
      { value: '6', label: 'Global Cities' },
      { value: '4', label: 'Continents' },
      { value: 'Vol. II', label: 'Publication' },
      { value: 'Invitation', label: 'Network Access' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'Velvet Rouge is not a brand, not an event, not a place. It is a private network drawn between six cities — a single coordinate of culture that moves, once a year, across the globe. Nothing is announced. Everything is implied.',
          'It exists as a global creative network connecting Mexico City, Tokyo, Seoul, Berlin, Los Angeles, and Shanghai through nocturnal observations, cultural dispatches, and editorial fragments. The network does not report. It observes — and lets you overhear.',
        ],
        variant: 'features',
        features: [
          'Six-city creative network with rotating annual coordinate',
          'Night Notes: editorial dispatches from the margin of the publication',
          'The Archive: collected observations with reference codes',
          'Night Collection: running inventory of windows still lit past midnight',
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
