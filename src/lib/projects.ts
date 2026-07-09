export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  category: string;
  color: string;
  gradient: string;
  technologies: string[];
  keywords: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudyLabel: string;
  metrics: { value: string; label: string }[];
  architecture?: { label: string; isMain?: boolean }[];
  sections: CaseStudySection[];
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: string[];
  type?: 'text' | 'architecture' | 'metrics' | 'gallery' | 'feature-list';
  features?: string[];
}

export const projects: Project[] = [
  {
    id: 'signal',
    name: 'SIGNAL',
    tagline: 'AI Music Intelligence Platform',
    description: 'An AI-powered intelligence platform helping music companies discover emerging talent using cultural signals, streaming data and predictive analytics.',
    role: 'Founder & Product Builder',
    category: 'AI / Music Intelligence',
    color: '#6366f1',
    gradient: 'from-[#6366f1] via-[#8b5cf6] to-[#a78bfa]',
    technologies: ['Python', 'React', 'TypeScript', 'TensorFlow', 'PostgreSQL', 'FastAPI', 'Redis', 'Docker', 'AWS'],
    keywords: ['AI', 'Machine Learning', 'Music Intelligence', 'Data Products', 'A&R Technology', 'Predictive Analytics'],
    liveUrl: 'https://signal-demo.vercel.app',
    githubUrl: 'https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp',
    caseStudyLabel: 'Read Case Study →',
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
      { label: 'AI Scoring Engine' },
      { label: 'Intelligence Dashboard', isMain: true },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: [
          'SIGNAL is an AI-powered music intelligence platform that transforms how record labels and A&R teams discover emerging talent. By aggregating streaming data, social signals, and cultural indicators, SIGNAL provides actionable insights that reduce the noise of traditional talent scouting.',
          'The platform processes millions of data points across multiple streaming services, social media platforms, and cultural datasets to generate predictive scores that identify artists before they break mainstream.',
          'Built for A&R executives, label managers, and music industry professionals who need data-driven decision-making tools in an increasingly fragmented discovery landscape.',
        ],
      },
      {
        id: 'problem',
        title: 'The Problem',
        content: [
          'The music industry generates massive amounts of data daily — streaming numbers, social media engagement, playlist additions, viral moments. Yet most A&R decisions still rely on intuition, personal networks, and luck.',
          'Labels lack a unified intelligence layer that can process this data, identify patterns, and surface actionable opportunities. Talented artists go undiscovered while labels miss cultural signals that could indicate the next breakout star.',
        ],
      },
      {
        id: 'context',
        title: 'The Context',
        content: [
          'The global music industry is undergoing a fundamental shift. Independent artists now account for a growing share of market consumption, and traditional scouting methods can no longer keep pace with the volume of new music released daily — over 120,000 tracks per day on streaming platforms.',
          'SIGNAL was conceived as a response to this information asymmetry. The goal: build a system that could process, analyze, and surface talent intelligence at machine scale while preserving the human judgment that makes great A&R.' ,
        ],
      },
      {
        id: 'solution',
        title: 'The Solution',
        content: [
          'SIGNAL is a full-stack AI intelligence platform with three core layers: data ingestion, analysis engine, and intelligence dashboard. The system ingests data from multiple streaming APIs, social platforms, and cultural databases, normalizes it into a unified schema, then applies machine learning models to generate predictive scores.',
          'The AI Scoring Engine evaluates artists across multiple dimensions: streaming growth velocity, playlist penetration, social momentum, geographic spread, genre crossover potential, and cultural signal strength.',
          'The Intelligence Dashboard presents these insights through a clean, actionable interface designed for executive decision-making.',
        ],
        type: 'feature-list',
        features: [
          'Real-time data ingestion from 5+ streaming & social sources',
          'Multi-dimensional AI scoring engine with explainable outputs',
          'Artist discovery with customizable filters and alerts',
          'Trend detection and cultural signal analysis',
          'Competitive landscape mapping',
        ],
      },
      {
        id: 'product-thinking',
        title: 'Product Thinking',
        content: [
          'The key design decision was building for trust. AI-powered recommendations in creative industries face skepticism — A&Rs trust their ears and instincts. So every score in SIGNAL is explainable: clicking any metric reveals the data behind it, the weighting, and the confidence level.',
          'We chose a dashboard-first approach over API-only because the primary users are executives and A&R teams who need visual, interactive tools. The architecture supports future API-driven integrations for enterprise clients.',
          'The scoring model was designed to augment, not replace, human judgment. SIGNAL surfaces candidates and evidence; the final decision remains with the A&R team.',
        ],
      },
      {
        id: 'architecture',
        title: 'Architecture',
        content: [],
        type: 'architecture',
      },
      {
        id: 'technology',
        title: 'Technology',
        content: [
          'The platform is built on a modern AI stack: Python for the ML pipeline (TensorFlow, scikit-learn), FastAPI for the API layer, React + TypeScript for the dashboard, PostgreSQL for structured data, Redis for caching and real-time features, and Docker/AWS for deployment.',
        ],
      },
      {
        id: 'results',
        title: 'Results',
        content: [
          'SIGNAL has been built as a complete MVP with a live dashboard, scoring engine, and data pipeline. The platform has scored over 5,000 artists across multiple genres and demonstrated the ability to identify breakout signals before traditional metrics register them.',
          'The project validated that AI-powered music intelligence can reduce discovery noise and provide actionable insights for A&R teams. Conversations with industry professionals confirmed strong product-market fit for the core thesis.',
        ],
        type: 'metrics',
      },
    ],
  },
  {
    id: 'yami',
    name: 'YAMI',
    tagline: 'Mental Health AI Platform',
    description: 'An AI-powered mental wellness platform that provides personalized support, mood tracking, and therapeutic conversations.',
    role: 'Product Designer & AI Strategist',
    category: 'HealthTech / AI',
    color: '#2d8f7d',
    gradient: 'from-[#2d8f7d] via-[#38b2a0] to-[#4fd1c5]',
    technologies: ['React Native', 'TypeScript', 'Python', 'OpenAI', 'PostgreSQL', 'Firebase'],
    keywords: ['Mental Health', 'AI', 'Wellness Technology', 'Product Design', 'HealthTech'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudyLabel: 'Read Case Study →',
    metrics: [
      { value: 'Product', label: 'Vision & Design' },
      { value: 'AI-first', label: 'Conversational UX' },
      { value: 'MVP', label: 'Complete' },
      { value: 'User', label: 'Research Driven' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: [
          'YAMI is an AI-powered mental wellness platform designed to provide accessible, personalized support for individuals managing anxiety, stress, and daily mental health challenges.',
          'The platform combines conversational AI with evidence-based therapeutic techniques, mood tracking, and personalized wellness recommendations.',
        ],
      },
      {
        id: 'problem',
        title: 'The Problem',
        content: [
          'Mental health support remains inaccessible for millions. Traditional therapy is expensive, stigmatized, and has long wait times. Digital solutions often lack personalization and clinical validity.',
        ],
      },
      {
        id: 'solution',
        title: 'The Solution',
        content: [
          'YAMI reimagines mental health support through an AI-first conversational interface that adapts to each user\'s needs, preferences, and progress. The platform uses GPT-based language models fine-tuned for therapeutic conversations, combined with structured mood tracking and personalized interventions.',
        ],
        type: 'feature-list',
        features: [
          'AI-powered therapeutic conversations with evidence-based techniques',
          'Personalized mood tracking with pattern recognition',
          'Guided exercises for anxiety, stress, and sleep',
          'Progress visualization and insights',
          'Privacy-first architecture with encrypted data',
        ],
      },
      {
        id: 'product-thinking',
        title: 'Product Thinking',
        content: [
          'The critical design challenge was balancing AI capability with safety and trust. Every conversation is designed with therapeutic boundaries, escalation paths for crisis situations, and transparent AI disclosure.',
          'The UX follows a warm, minimal aesthetic — calm colors, rounded elements, and gentle animations that reduce cognitive load rather than adding to it.',
        ],
      },
      {
        id: 'technology',
        title: 'Technology',
        content: [
          'Built with React Native for cross-platform mobile, TypeScript for type safety, Python backend with OpenAI GPT integration, PostgreSQL for user data, and Firebase for real-time features and authentication.',
        ],
      },
    ],
  },
  {
    id: 'velvet-rouge',
    name: 'Velvet Rouge',
    tagline: 'Creative Technology & Nightlife Brand',
    description: 'A premium nightlife and creative technology brand combining high-end event production with digital innovation.',
    role: 'Brand Strategist & Digital Experience Designer',
    category: 'Creative Technology',
    color: '#5e1018',
    gradient: 'from-[#5e1018] via-[#8b1a24] to-[#c62840]',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Stripe'],
    keywords: ['Brand Strategy', 'Community Building', 'Digital Experience', 'Creative Technology', 'Nightlife'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudyLabel: 'Read Case Study →',
    metrics: [
      { value: 'Brand', label: 'Identity Created' },
      { value: 'Digital', label: 'Experience Platform' },
      { value: 'Community', label: 'Built from Scratch' },
      { value: 'Premium', label: 'Positioning & Design' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: [
          'Velvet Rouge is a premium nightlife and creative technology brand that reimagines the intersection of entertainment, community, and digital innovation.',
          'The brand combines high-end event production with cutting-edge digital experiences, creating a unique cultural ecosystem that spans physical events and digital engagement.',
        ],
      },
      {
        id: 'problem',
        title: 'The Problem',
        content: [
          'The nightlife industry has remained largely unchanged digitally — standard event pages, generic ticketing, and minimal post-event engagement. There was an opportunity to build a brand that treats nightlife as a technology-enabled cultural experience.',
        ],
      },
      {
        id: 'solution',
        title: 'The Solution',
        content: [
          'Velvet Rouge was built from the ground up as a premium brand with a strong digital foundation. The website serves as both a marketing presence and a digital experience — with interactive elements, curated content, and seamless event discovery.',
        ],
        type: 'feature-list',
        features: [
          'Premium brand identity with editorial visual language',
          'Interactive digital experience with micro-animations',
          'Event discovery and ticketing integration',
          'Community engagement features',
        ],
      },
      {
        id: 'product-thinking',
        title: 'Product Thinking',
        content: [
          'The brand was designed to feel exclusive yet accessible — dark, moody, and premium without being elitist. Every touchpoint from the website to social media to physical events follows a cohesive visual and tonal system.',
          'The digital experience prioritizes atmosphere — dark backgrounds, dramatic typography, curated imagery, and smooth transitions that mirror the physical world experience.',
        ],
      },
      {
        id: 'technology',
        title: 'Technology',
        content: [
          'Built with Next.js, TypeScript, TailwindCSS for the frontend, with Framer Motion for animations and Stripe integration for ticketing and payments.',
        ],
      },
    ],
  },
  {
    id: 'abe-music-hub',
    name: 'ABE Music Hub',
    tagline: 'Music Label Intelligence Platform',
    description: 'An analytics and operations platform for independent music labels to manage artists, tracks, and revenue intelligence.',
    role: 'Product Manager & Technical Lead',
    category: 'Music Tech / Analytics',
    color: '#0ea5e9',
    gradient: 'from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc]',
    technologies: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Chart.js', 'Stripe'],
    keywords: ['Music Tech', 'Analytics', 'Label Management', 'Artist Intelligence', 'Revenue Optimization'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudyLabel: 'Read Case Study →',
    metrics: [
      { value: 'Platform', label: 'Built & Deployed' },
      { value: 'Multi-artist', label: 'Dashboard' },
      { value: 'Revenue', label: 'Tracking' },
      { value: 'Analytics', label: 'Pipeline' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: [
          'ABE Music Hub provides independent record labels with a unified platform for managing artists, tracking revenue, analyzing streaming performance, and making data-driven decisions.',
          'The platform consolidates fragmented data sources into a single dashboard, giving label owners and managers real-time visibility into their business.',
        ],
      },
      {
        id: 'problem',
        title: 'The Problem',
        content: [
          'Independent labels typically manage their business across spreadsheets, multiple streaming dashboards, and disconnected tools. This fragmentation makes it difficult to track overall performance, identify trends, or optimize revenue.',
        ],
      },
      {
        id: 'solution',
        title: 'The Solution',
        content: [
          'ABE Music Hub provides a centralized intelligence platform that aggregates streaming data, revenue streams, and artist information into a unified dashboard with actionable insights.',
        ],
        type: 'feature-list',
        features: [
          'Multi-artist dashboard with streaming analytics',
          'Revenue tracking and royalty management',
          'Release calendar and scheduling',
          'Performance reports and trend analysis',
          'Export and reporting tools',
        ],
      },
      {
        id: 'technology',
        title: 'Technology',
        content: [
          'Built with Next.js and TypeScript for the frontend, Python and PostgreSQL for the backend analytics engine, Chart.js for data visualization, and Stripe for payment processing.',
        ],
      },
    ],
  },
  {
    id: 'sonora-digital-corp',
    name: 'Sonora Digital Corp',
    tagline: 'Venture Studio & AI Innovation Lab',
    description: 'A venture studio building AI-powered products and digital ventures from concept to market launch.',
    role: 'Founder & CEO / Product Builder',
    category: 'Venture Studio / AI',
    color: '#7c5cfc',
    gradient: 'from-[#7c5cfc] via-[#a78bfa] to-[#c4b5fd]',
    technologies: ['Next.js', 'TypeScript', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS', 'Docker', 'MCP'],
    keywords: ['Venture Studio', 'AI Products', 'Digital Transformation', 'Innovation', 'Product Development'],
    liveUrl: 'https://sonora.digital',
    githubUrl: 'https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp',
    caseStudyLabel: 'Read Case Study →',
    metrics: [
      { value: '5+', label: 'AI Products Built' },
      { value: 'Multi-agent', label: 'Architecture' },
      { value: '8+', label: 'MCP Servers' },
      { value: 'End-to-end', label: 'Product Lifecycle' },
    ],
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: [
          'Sonora Digital Corp is a venture studio and AI innovation lab focused on building intelligent products, platforms, and ventures from concept to market. Operating at the intersection of artificial intelligence, product design, and business strategy.',
          'The studio has developed a proprietary multi-agent AI architecture (Sonora Brain v3) that powers products across music intelligence, mental health, content creation, compliance, and streaming analytics.',
        ],
      },
      {
        id: 'problem',
        title: 'The Problem',
        content: [
          'Most companies struggle to transition from AI experimentation to production-ready products. The gap between proof-of-concept and scalable deployment remains the biggest challenge in enterprise AI adoption.',
        ],
      },
      {
        id: 'solution',
        title: 'The Solution',
        content: [
          'Sonora Digital Corp was created as a systematic approach to building AI products — combining deep technical capability with product strategy, design thinking, and business execution. The studio\'s multi-agent architecture enables rapid development of specialized AI products that share a common infrastructure.',
        ],
        type: 'feature-list',
        features: [
          'Multi-agent AI architecture (Sonora Brain v3) with 8+ MCP servers',
          'End-to-end product development from concept to market',
          'Spec-driven development methodology for AI products',
          'Enterprise-grade infrastructure with memory persistence',
          'Multi-channel deployment (web, API, messaging)',
        ],
      },
      {
        id: 'product-thinking',
        title: 'Product Thinking',
        content: [
          'Sonora operates on a venture studio model — each product is treated as a potential standalone business with its own brand, go-to-market strategy, and revenue model. The shared AI infrastructure (Sonora Brain) provides a competitive advantage in development speed and capability.',
          'The spec-driven development (SDD) methodology ensures every product starts with clear requirements, architecture decisions, and success criteria before any code is written.',
        ],
      },
      {
        id: 'architecture',
        title: 'Architecture: Sonora Brain v3',
        content: [],
        type: 'architecture',
      },
      {
        id: 'technology',
        title: 'Technology',
        content: [
          'The entire Sonora Brain ecosystem is built on modern AI infrastructure: Next.js and TypeScript for frontend, Python for AI/ML services, TensorFlow for model training, PostgreSQL for persistence, AWS for cloud infrastructure, Docker for containerization, and a custom MCP (Model Context Protocol) architecture for inter-service communication.',
        ],
      },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProject(slug.replace('/projects/', ''));
}
