import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'signal',
    name: 'SIGNAL',
    tagline: 'AI Music Intelligence Platform',
    summary:
      'An AI-powered intelligence platform helping record labels and A&R teams discover emerging talent using streaming data, cultural signals, and predictive analytics.',
    role: 'Founder & Product Builder',
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
    keywords: [
      'AI',
      'Machine Learning',
      'Music Intelligence',
      'Data Products',
      'A&R Technology',
      'Predictive Analytics',
    ],
    url: 'https://signal-demo.vercel.app',
    repo: 'https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp',
    metrics: [
      { value: 'MVP', label: 'Built & Launched' },
      { value: '5K+', label: 'Artists Scored' },
      { value: '3', label: 'Pipeline Stages' },
      { value: 'Real-time', label: 'Data Processing' },
    ],
    architecture: [
      { label: 'Data Sources' },
      { label: 'Normalization Layer' },
      { label: 'Feature Extraction' },
      { label: 'AI Scoring Engine', primary: true },
      { label: 'Intelligence Dashboard' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'SIGNAL is an AI-powered music intelligence platform that transforms how record labels and A&R teams discover emerging talent. By aggregating streaming data, social signals, and cultural indicators, SIGNAL delivers actionable insights that cut through the noise of traditional talent scouting.',
          'The platform processes millions of data points across streaming services, social platforms, and cultural datasets to generate predictive scores that identify breakout artists months before traditional metrics register them.',
          'Built for A&R executives, label managers, and music industry professionals who need data-driven decision-making tools in a fragmented discovery landscape.',
        ],
      },
      {
        id: 'problem',
        title: 'The Problem',
        body: [
          'The music industry generates massive amounts of data — streaming numbers, social engagement, playlist additions, viral moments. Yet most A&R decisions still rely on intuition, personal networks, and luck.',
          'Labels lack a unified intelligence layer that can process this data, identify patterns, and surface actionable opportunities. Over 120,000 tracks are released daily on streaming platforms. Talented artists go undiscovered while labels miss cultural signals that indicate the next breakout star.',
        ],
      },
      {
        id: 'approach',
        title: 'The Approach',
        body: [
          'SIGNAL was designed as a full-stack intelligence platform with three core layers: data ingestion, analysis engine, and intelligence dashboard. The system ingests data from multiple streaming APIs, social platforms, and cultural databases, normalizes it into a unified schema, then applies machine learning models to generate predictive scores.',
          'The AI scoring engine evaluates artists across multiple dimensions: streaming growth velocity, playlist penetration, social momentum, geographic spread, genre crossover potential, and cultural signal strength.',
        ],
        variant: 'features',
        features: [
          'Real-time ingestion from 5+ streaming and social sources',
          'Multi-dimensional AI scoring with explainable outputs',
          'Customizable discovery filters and intelligent alerts',
          'Trend detection and cultural signal analysis',
          'Competitive landscape mapping',
        ],
      },
      {
        id: 'architecture',
        title: 'Architecture',
        body: [],
        variant: 'architecture',
      },
      {
        id: 'thinking',
        title: 'Product Thinking',
        body: [
          'The critical design decision was building for trust. AI-powered recommendations in creative industries face skepticism — A&Rs trust their ears and instincts. Every score in SIGNAL is explainable: clicking any metric reveals the source data, weighting, and confidence level.',
          'We chose a dashboard-first approach over API-only because primary users are executives and A&R teams who need visual, interactive tools. The architecture supports future API-driven integrations for enterprise clients.',
          'The scoring model was designed to augment, not replace, human judgment. SIGNAL surfaces candidates and evidence; the final decision remains with the A&R team.',
        ],
      },
      {
        id: 'technology',
        title: 'Technology',
        body: [
          'The platform is built on a modern AI stack: Python and TensorFlow for ML pipelines, FastAPI for the API layer, React with TypeScript for the dashboard, PostgreSQL for structured data, Redis for caching and real-time features, and Docker with AWS for deployment and scaling.',
        ],
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        body: [
          'SIGNAL has scored over 5,000 artists across multiple genres and demonstrated the ability to identify breakout signals before traditional metrics register them. The project validated that AI-powered music intelligence can reduce discovery noise and provide actionable insights for A&R teams.',
          'Industry conversations confirmed strong product-market fit, and the platform continues to evolve with additional data sources and refined scoring models.',
        ],
        variant: 'metrics',
      },
    ],
  },
  {
    id: 'yami',
    name: 'YAMI',
    tagline: 'Mental Health AI Platform',
    summary:
      'An AI-powered mental wellness platform providing personalized support, mood tracking, and therapeutic conversations.',
    role: 'Product Designer & AI Strategist',
    category: 'HealthTech / AI',
    technologies: ['React Native', 'TypeScript', 'Python', 'OpenAI', 'PostgreSQL', 'Firebase'],
    keywords: ['Mental Health', 'AI', 'Wellness Technology', 'Conversational UX', 'HealthTech'],
    url: '#',
    repo: '#',
    metrics: [
      { value: 'Product', label: 'Vision & Design' },
      { value: 'AI-first', label: 'Conversational UX' },
      { value: 'MVP', label: 'Complete' },
      { value: 'Research', label: 'User Driven' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'YAMI is an AI-powered mental wellness platform designed to make personalized mental health support accessible to everyone. The platform combines conversational AI with evidence-based therapeutic techniques, mood tracking, and personalized wellness recommendations.',
          'Built for individuals managing anxiety, stress, and daily mental health challenges, YAMI provides a private, judgment-free space for support and growth.',
        ],
      },
      {
        id: 'problem',
        title: 'The Problem',
        body: [
          'Mental health support remains inaccessible for millions globally. Traditional therapy is expensive, stigmatized, and has long wait times. Digital solutions often lack personalization, clinical validity, or genuine empathy.',
        ],
      },
      {
        id: 'approach',
        title: 'The Approach',
        body: [
          'YAMI reimagines mental health support through an AI-first conversational interface that adapts to each user\'s needs, preferences, and progress. The platform uses fine-tuned language models for therapeutic conversations, combined with structured mood tracking and personalized interventions.',
        ],
        variant: 'features',
        features: [
          'AI-guided conversations using evidence-based techniques',
          'Personalized mood tracking with pattern recognition',
          'Guided exercises for anxiety, stress, and sleep',
          'Progress visualization and personal insights',
          'Privacy-first architecture with end-to-end encryption',
        ],
      },
      {
        id: 'thinking',
        title: 'Product Thinking',
        body: [
          'The critical design challenge was balancing AI capability with safety and trust. Every conversation follows therapeutic boundaries with escalation paths for crisis situations and transparent AI disclosure.',
          'The UX follows a warm, minimal aesthetic — calm colors, rounded elements, and gentle animations that reduce cognitive load. The interface is designed to feel like a safe space, not a clinical tool.',
        ],
      },
    ],
  },
  {
    id: 'velvet-rouge',
    name: 'Velvet Rouge',
    tagline: 'Creative Brand & Nightlife Experience',
    summary:
      'A premium nightlife and creative technology brand combining high-end event production with digital innovation.',
    role: 'Brand Strategist & Digital Designer',
    category: 'Creative Technology',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Stripe'],
    keywords: ['Brand Strategy', 'Community', 'Digital Experience', 'Creative Technology'],
    url: '#',
    repo: '#',
    metrics: [
      { value: 'Brand', label: 'Identity Created' },
      { value: 'Digital', label: 'Experience Built' },
      { value: 'Community', label: 'Grown Organically' },
      { value: 'Premium', label: 'Positioning' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'Velvet Rouge is a premium nightlife and creative technology brand that reimagines the intersection of entertainment, community, and digital innovation. The brand combines high-end event production with digital experiences, creating a unique cultural ecosystem.',
        ],
      },
      {
        id: 'problem',
        title: 'The Problem',
        body: [
          'The nightlife industry has remained digitally stagnant — standard event pages, generic ticketing, and minimal post-event engagement. There was a clear opportunity to build a brand that treats nightlife as a technology-enabled cultural experience.',
        ],
      },
      {
        id: 'approach',
        title: 'The Approach',
        body: [
          'Velvet Rouge was built as a premium brand with a strong digital foundation — an interactive website, curated content, seamless event discovery, and a cohesive visual system spanning physical and digital touchpoints.',
        ],
        variant: 'features',
        features: [
          'Premium brand identity with editorial visual language',
          'Interactive digital experience with micro-animations',
          'Event discovery and integrated ticketing',
          'Community engagement and retention features',
        ],
      },
      {
        id: 'thinking',
        title: 'Product Thinking',
        body: [
          'The brand was designed to feel exclusive yet accessible — dark, moody, and premium without being elitist. Every touchpoint, from the website to social media to physical events, follows a cohesive visual and tonal system.',
          'The digital experience prioritizes atmosphere: dark backgrounds, dramatic typography, curated imagery, and smooth transitions that mirror the physical world experience.',
        ],
      },
    ],
  },
  {
    id: 'abe-music-hub',
    name: 'ABE Music Hub',
    tagline: 'Label Intelligence Platform',
    summary:
      'An analytics and operations platform for independent music labels to manage artists, track revenue, and optimize performance.',
    role: 'Product Manager & Technical Lead',
    category: 'Music Tech / Analytics',
    technologies: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Chart.js', 'Stripe'],
    keywords: ['Music Tech', 'Analytics', 'Label Management', 'Revenue Optimization', 'Data'],
    url: '#',
    repo: '#',
    metrics: [
      { value: 'Platform', label: 'Built & Deployed' },
      { value: 'Multi-artist', label: 'Dashboard' },
      { value: 'Revenue', label: 'Tracking Live' },
      { value: 'Analytics', label: 'Data Pipeline' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'ABE Music Hub provides independent record labels with a unified platform for managing artists, tracking revenue, analyzing streaming performance, and making data-driven decisions.',
          'The platform consolidates fragmented data sources into a single dashboard, giving label owners and managers real-time visibility into their business.',
        ],
      },
      {
        id: 'problem',
        title: 'The Problem',
        body: [
          'Independent labels typically manage their business across spreadsheets, multiple streaming dashboards, and disconnected tools. This fragmentation makes it difficult to track overall performance, identify trends, or optimize revenue.',
        ],
      },
      {
        id: 'approach',
        title: 'The Approach',
        body: [
          'ABE Music Hub provides a centralized intelligence platform that aggregates streaming data, revenue streams, and artist information into a unified dashboard with actionable insights.',
        ],
        variant: 'features',
        features: [
          'Multi-artist dashboard with real-time streaming analytics',
          'Revenue tracking and royalty management',
          'Release calendar and automated scheduling',
          'Performance reports with trend analysis',
          'Export and reporting for stakeholders',
        ],
      },
    ],
  },
  {
    id: 'sonora-digital-corp',
    name: 'Sonora Digital Corp',
    tagline: 'Venture Studio & AI Innovation Lab',
    summary:
      'A venture studio building AI-powered products and digital ventures from concept to market launch.',
    role: 'Founder & CEO / Product Builder',
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
    keywords: [
      'Venture Studio',
      'AI Products',
      'Innovation Lab',
      'Product Development',
      'Multi-agent AI',
    ],
    url: 'https://sonora.digital',
    repo: 'https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp',
    metrics: [
      { value: '5+', label: 'AI Products Built' },
      { value: '8+', label: 'MCP Servers' },
      { value: 'Multi-agent', label: 'Architecture' },
      { value: 'End-to-end', label: 'Product Lifecycle' },
    ],
    architecture: [
      { label: 'Client Apps' },
      { label: 'API Gateway' },
      { label: 'Agent Orchestrator', primary: true },
      { label: 'Memory Layer' },
      { label: 'Tool Servers' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'Sonora Digital Corp is a venture studio and AI innovation lab focused on building intelligent products from concept to market. Operating at the intersection of artificial intelligence, product design, and business strategy.',
          'The studio developed Sonora Brain v3 — a proprietary multi-agent AI architecture — that powers products across music intelligence, mental health, content creation, compliance, and streaming analytics.',
        ],
      },
      {
        id: 'problem',
        title: 'The Problem',
        body: [
          'Most companies struggle to transition from AI experimentation to production-ready products. The gap between proof-of-concept and scalable deployment remains the biggest challenge in enterprise AI adoption.',
        ],
      },
      {
        id: 'approach',
        title: 'The Approach',
        body: [
          'Sonora Digital Corp was created as a systematic approach to building AI products — combining deep technical capability with product strategy, design thinking, and business execution.',
        ],
        variant: 'features',
        features: [
          'Multi-agent AI architecture (Sonora Brain v3) with 8+ MCP servers',
          'End-to-end product development from concept to market',
          'Spec-driven development methodology for AI products',
          'Enterprise infrastructure with persistent memory layer',
          'Multi-channel deployment across web, API, and messaging',
        ],
      },
      {
        id: 'architecture',
        title: 'Architecture: Sonora Brain v3',
        body: [],
        variant: 'architecture',
      },
      {
        id: 'thinking',
        title: 'Product Thinking',
        body: [
          'Sonora operates on a venture studio model — each product is treated as a potential standalone business with its own brand, go-to-market strategy, and revenue model. The shared AI infrastructure provides a competitive advantage in development speed and capability.',
          'The spec-driven development (SDD) methodology ensures every product starts with clear requirements, architecture decisions, and success criteria before any code is written.',
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
