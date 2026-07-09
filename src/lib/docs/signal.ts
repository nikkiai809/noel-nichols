import { DocContent } from '@/types';

export const signalDocs: DocContent[] = [
  {
    title: 'Executive Summary',
    slug: 'executive-summary',
    venture: 'SIGNAL',
    ventureLabel: 'SIGNAL',
    ventureSlug: 'signal',
    description:
      'A one-page overview of SIGNAL — the AI-powered music supervision platform transforming how media producers discover, license, and sync music.',
    readingTime: '4 min read',
    lastUpdated: 'Jun 2026',
    tags: ['Overview', 'Business Case', 'Executive'],
    sections: [
      {
        id: 'problem',
        title: 'The Problem',
        type: 'callout',
        calloutTitle: 'Market Inefficiency',
        calloutBody:
          'Music supervision is fragmented across email threads, spreadsheets, and siloed databases. A 30-second sync search takes 3–5 days of human coordination. Labels lose 40% of potential sync revenue to administrative friction.',
        calloutType: 'warning',
        body: [
          'Every year, hundreds of thousands of films, TV episodes, ads, and games need music. Yet the process of finding, clearing, and licensing the right track is stuck in the pre-internet era. Music supervisors juggle spreadsheets, personal relationships, and institutional knowledge that walks out the door when someone changes jobs.',
          'For labels and publishers, sync licensing is a high-margin revenue stream that remains artificially constrained by manual workflows. A track that could be placed in 20 projects might only make it into 3 or 4 because the operational overhead is too high to pursue every opportunity.',
        ],
      },
      {
        id: 'solution',
        title: 'The Solution',
        type: 'arch',
        body: [
          'SIGNAL is an AI-powered music supervision platform that replaces fragmented workflows with a unified intelligence layer. It ingests catalogs, normalizes metadata, scores tracks for sync potential, and provides an API-first interface for discovery and licensing.',
          'At its core, SIGNAL combines semantic search, multi-dimensional scoring, and explainable AI to make music supervision 10x faster while surfacing opportunities that human-only processes miss entirely.',
        ],
      },
      {
        id: 'why-now',
        title: 'Why Now',
        type: 'text',
        body: [
          'The global sync licensing market is projected to reach $3.9B by 2027. Meanwhile, AI-powered metadata enrichment and semantic search have reached production readiness in adjacent domains (visual search, document understanding). SIGNAL adapts these advances for the specific challenges of music supervision.',
          'Content production is exploding — Netflix alone spent $17B on content in 2025. Each new production needs music. The gap between supply (tracks) and demand (placements) is widening, and the only way to close it is through AI-powered matching at scale.',
        ],
      },
      {
        id: 'traction',
        title: 'Traction & Milestones',
        type: 'timeline',
        items: [
          '2024 Q3 — Concept validation with 3 independent music supervisors; identified top 5 workflow pain points',
          '2024 Q4 — Built metadata normalization pipeline; processed 50K tracks from 2 catalog sources',
          '2025 Q1 — Developed AI scoring engine with 6-dimensional track analysis',
          '2025 Q2 — Launched Intelligence API for programmatic search and retrieval',
          '2025 Q3 — Pilot with regional licensing agency; processed 200K+ tracks',
          '2025 Q4 — Explainable AI layer added; supervisor feedback loop implemented',
          '2026 Q1 — Enterprise dashboard alpha with real-time catalog analytics',
          '2026 Q2 — 500K+ tracks indexed; 12 architecture layers in production',
        ],
      },
      {
        id: 'business-model',
        title: 'Business Model',
        type: 'metrics',
        metrics: [
          { value: 'SaaS', label: 'Platform subscription (tiered by catalog size)' },
          { value: 'API', label: 'Per-query pricing for programmatic access' },
          { value: 'Rev Share', label: 'Success fee on matched placements' },
          { value: 'Enterprise', label: 'Custom deployment for major labels' },
        ],
      },
    ],
  },
  {
    title: 'Market Research',
    slug: 'market-research',
    venture: 'SIGNAL',
    ventureLabel: 'SIGNAL',
    ventureSlug: 'signal',
    description:
      'Deep analysis of the sync licensing market, content production trends, and the opportunity for AI-powered music supervision.',
    readingTime: '8 min read',
    lastUpdated: 'Jun 2026',
    tags: ['Market Analysis', 'Research', 'Industry Trends'],
    sections: [
      {
        id: 'market-size',
        title: 'Market Size & Growth',
        type: 'metrics',
        body: [
          'The sync licensing market sits at the intersection of music publishing, content production, and advertising — three industries experiencing simultaneous transformation.',
        ],
        metrics: [
          { value: '$3.9B', label: 'Global sync market by 2027' },
          { value: '14.2%', label: 'CAGR (2024–2027)' },
          { value: '500B+', label: 'Annual content minutes produced' },
          { value: '40%', label: 'Uncaptured sync revenue due to friction' },
        ],
      },
      {
        id: 'content-explosion',
        title: 'The Content Explosion',
        type: 'text',
        body: [
          'Content production across film, television, streaming, advertising, gaming, and social media has reached unprecedented volume. Netflix, Amazon, Apple, and Disney+ collectively spend over $50B annually on original content. Each production requires anywhere from 20 to 200+ music placements.',
          'Short-form content on TikTok, Instagram Reels, and YouTube Shorts has created entirely new demand for music licensing. A single viral track can generate millions in sync revenue across thousands of user-generated videos.',
          'Live streaming, virtual events, and in-game experiences add further dimensions. Every new content format creates new licensing needs that traditional supervision workflows cannot efficiently address.',
        ],
      },
      {
        id: 'competitive-landscape',
        title: 'Competitive Landscape',
        type: 'card-grid',
        body: [
          'The sync licensing space has several incumbents and emerging players, but none combine AI-powered search with explainable scoring and API-first architecture.',
        ],
        cards: [
          {
            title: 'Traditional Publishers',
            description:
              'Major publishers (Sony/ATV, Universal Music Publishing) run sync divisions but rely on human supervisors and internal databases. No AI layer, slow response times, limited discovery.',
          },
          {
            title: 'Production Music Libraries',
            description:
              'Companies like Epidemic Sound and Artlist offer royalty-free catalogs with simple search. Limited to production music; no support for commercial releases or major label catalogs.',
          },
          {
            title: 'Sync Agencies',
            description:
              'Boutique agencies provide personalized supervision but operate at low scale. Each placement requires human relationship management and manual track curation.',
          },
          {
            title: 'AI Music Startups',
            description:
              'Emerging AI music companies focus on generation rather than supervision. No existing solution combines AI with the catalog management and licensing workflow that SIGNAL addresses.',
          },
        ],
      },
      {
        id: 'key-trends',
        title: 'Key Industry Trends',
        type: 'list',
        items: [
          'AI metadata enrichment is becoming table stakes for catalog management',
          'Content personalization drives demand for hyper-specific music matching',
          'Real-time licensing for live streaming and social media is an untapped market',
          'Labels are investing in direct-to-supervisor tools to bypass middlemen',
          'Explainable AI is increasingly required for enterprise adoption in creative industries',
          'API-first architectures are replacing standalone web applications in B2B SaaS',
        ],
      },
      {
        id: 'risks',
        title: 'Market Risks',
        type: 'callout',
        calloutTitle: 'Key Risk Factors',
        calloutBody:
          'Adoption depends on convincing traditional music industry stakeholders to change entrenched workflows. Label catalog access requires business development relationships. AI accuracy must meet the subjective quality standards of creative professionals.',
        calloutType: 'warning',
      },
    ],
  },
  {
    title: 'Competitive Analysis',
    slug: 'competitive-analysis',
    venture: 'SIGNAL',
    ventureLabel: 'SIGNAL',
    ventureSlug: 'signal',
    description:
      'Strategic analysis of competitors and SIGNAL\'s positioning advantage in the sync licensing and music supervision market.',
    readingTime: '6 min read',
    lastUpdated: 'Jun 2026',
    tags: ['Competitive Analysis', 'Strategy', 'Positioning'],
    sections: [
      {
        id: 'competitive-matrix',
        title: 'Competitive Matrix',
        type: 'text',
        body: [
          'SIGNAL occupies a unique position at the intersection of AI-powered search, catalog management, and licensing workflow. No single competitor addresses all three dimensions with production-grade technology.',
          'The sync licensing market is characterized by fragmentation: dozens of boutique agencies, a few large publishers, and emerging SaaS tools that address isolated parts of the workflow. SIGNAL\'s differentiator is unifying discovery, scoring, and licensing in a single AI-native platform.',
        ],
      },
      {
        id: 'differentiators',
        title: 'Key Differentiators',
        type: 'card-grid',
        cards: [
          {
            title: 'AI-Native Architecture',
            description:
              'Built from the ground up for AI-powered search and scoring, not retrofitted onto legacy catalog systems. Semantic understanding, not just keyword matching.',
          },
          {
            title: 'Explainable Scoring',
            description:
              'Supervisors need to understand why a track was recommended. SIGNAL provides transparent 6-dimensional scoring with per-dimension breakdowns and comparative analytics.',
          },
          {
            title: 'API-First Design',
            description:
              'Programmatic access enables integration with existing production workflows, DAM systems, and custom applications. Not a walled garden — an intelligence layer.',
          },
          {
            title: 'Catalog Agnostic',
            description:
              'Works with any catalog, any metadata standard. Ingest, normalize, and score regardless of source format or quality. No lock-in to proprietary catalogs.',
          },
        ],
      },
      {
        id: 'direct-competitors',
        title: 'Direct Competitors',
        type: 'list',
        items: [
          'MusicHub (legacy catalog management, no AI scoring)',
          'SyncRight (workflow automation, limited search)',
          'TracksDirect (marketplace model, no AI layer)',
          'Publisher internal tools (locked to single catalog, no cross-publisher search)',
        ],
      },
      {
        id: 'moat',
        title: 'Defensive Moat',
        type: 'callout',
        calloutTitle: 'Compound Advantage',
        calloutBody:
          'As SIGNAL processes more catalogs and captures more supervisor feedback, the scoring engine improves. Each placement creates training data for better recommendations. This data network effect compounds with scale, making it increasingly difficult for competitors to match recommendation quality without equivalent catalog volume.',
        calloutType: 'success',
      },
    ],
  },
  {
    title: 'Product Strategy',
    slug: 'product-strategy',
    venture: 'SIGNAL',
    ventureLabel: 'SIGNAL',
    ventureSlug: 'signal',
    description:
      'Product vision, roadmap priorities, and strategic decisions that shaped SIGNAL\'s evolution from concept to platform.',
    readingTime: '7 min read',
    lastUpdated: 'Jun 2026',
    tags: ['Product Strategy', 'Vision', 'Roadmap'],
    sections: [
      {
        id: 'product-vision',
        title: 'Product Vision',
        type: 'quote',
        quote:
          'Make every music supervisor 10x more effective by replacing fragmented tools with unified AI intelligence.',
        quoteAttr: 'Founding Design Principle',
        body: [
          'SIGNAL\'s product vision emerged from observing a simple truth: music supervisors spend 80% of their time on administrative tasks (searching catalogs, tracking clearances, managing communications) and only 20% on creative decisions. The platform inverts this ratio.',
        ],
      },
      {
        id: 'core-principles',
        title: 'Core Product Principles',
        type: 'list',
        items: [
          'AI augments human creativity — never replaces the supervisor\'s ear and judgment',
          'Speed is the feature — every interaction optimized for the fastest path to a placement decision',
          'Explainability builds trust — supervisors must understand why a track was recommended',
          'Open by default — API access, no vendor lock-in, flexible deployment options',
          'Feedback loops improve quality — every supervisor interaction trains the scoring engine',
        ],
      },
      {
        id: 'phased-approach',
        title: 'Phased Approach',
        type: 'timeline',
        items: [
          'Phase 1 (2024) — Catalog ingestion and metadata normalization. Build the foundation.',
          'Phase 2 (2025) — AI scoring engine and semantic search. Deliver immediate value.',
          'Phase 3 (2025-2026) — Intelligence API and enterprise dashboard. Scale to production.',
          'Phase 4 (2026) — Collaborative workflows and real-time licensing. Full platform vision.',
          'Phase 5 (2027) — Predictive sync analytics and automated pitch recommendations.',
        ],
      },
      {
        id: 'strategic-tradeoffs',
        title: 'Strategic Tradeoffs',
        type: 'callout',
        calloutTitle: 'What We Chose Not to Build',
        calloutBody:
          'SIGNAL deliberately does not handle royalty payments, legal contracts, or rights management. These are well-served by existing tools (ASCAP, BMI, SoundExchange). Instead, SIGNAL focuses on what no existing tool does well: intelligent discovery and matching.',
        calloutType: 'info',
      },
    ],
  },
  {
    title: 'AI Architecture',
    slug: 'ai-architecture',
    venture: 'SIGNAL',
    ventureLabel: 'SIGNAL',
    ventureSlug: 'signal',
    description:
      'Deep dive into SIGNAL\'s AI architecture: the scoring engine, semantic search, explainable AI layer, and intelligence pipeline.',
    readingTime: '10 min read',
    lastUpdated: 'Jun 2026',
    tags: ['Architecture', 'AI/ML', 'Engineering'],
    sections: [
      {
        id: 'architecture-overview',
        title: 'Architecture Overview',
        type: 'arch',
        body: [
          'SIGNAL\'s AI architecture is organized into six layers that form an end-to-end intelligence pipeline. Each layer is independently deployable and communicates through well-defined interfaces.',
          'The architecture prioritizes modularity — individual components can be swapped, upgraded, or A/B tested without disrupting the rest of the system.',
        ],
      },
      {
        id: 'six-dimensions',
        title: 'The Six Scoring Dimensions',
        type: 'card-grid',
        body: [
          'Every track in SIGNAL\'s catalog is evaluated across six orthogonal dimensions, each producing a normalized score between 0 and 100.',
        ],
        cards: [
          {
            title: 'Genre Fit',
            description:
              'Semantic genre matching using multi-label classification and hierarchical taxonomy. Understands sub-genres, fusion genres, and regional variations.',
          },
          {
            title: 'Mood Alignment',
            description:
              'Audio feature extraction combined with lyric sentiment analysis. Maps tracks to a multi-dimensional mood space (energy, valence, tension, warmth).',
          },
          {
            title: 'Temporal Dynamics',
            description:
              'Analysis of track structure: intro length, buildup timing, drop intensity, outro fade. Matches pacing requirements of visual media.',
          },
          {
            title: 'Tonal Compatibility',
            description:
              'Key, harmony, and chord progression analysis. Enables harmonic matching for seamless integration with existing scores and soundtracks.',
          },
          {
            title: 'Cultural Relevance',
            description:
              'Trend analysis across streaming platforms, social media, and cultural signals. Identifies rising tracks before they peak.',
          },
          {
            title: 'Licensing Flexibility',
            description:
              'Metadata-driven scoring of rights availability, territorial restrictions, exclusivity status, and clearance complexity.',
          },
        ],
      },
      {
        id: 'explainable-ai',
        title: 'Explainable AI Layer',
        type: 'text',
        body: [
          'Music supervision is subjective. Supervisors need to understand not just what SIGNAL recommends, but why. The explainable AI layer provides transparency at multiple levels:',
          'Per-track breakdowns show how each of the six dimensions contributed to the overall score. Comparative views show why Track A scored higher than Track B for a specific brief. Feature attribution maps recommendations back to specific audio or metadata characteristics.',
          'This transparency builds trust — and trust is essential for adoption in creative industries where professionals are skeptical of "black box" AI recommendations.',
        ],
      },
      {
        id: 'data-pipeline',
        title: 'Data Pipeline',
        type: 'timeline',
        items: [
          'Ingestion — Track import from catalogs via API, upload, or batch processing',
          'Normalization — Metadata standardization, deduplication, format conversion',
          'Feature Store — Audio feature extraction, embedding generation, metadata enrichment',
          'AI Scoring — Six-dimensional scoring engine with ensemble model architecture',
          'Intelligence API — Real-time search index with semantic, faceted, and hybrid retrieval',
          'Dashboard — Visualization layer with analytics, reporting, and supervisor feedback capture',
        ],
      },
      {
        id: 'tech-stack',
        title: 'Technology Stack',
        type: 'list',
        items: [
          'Embeddings: Custom audio embedding model fine-tuned on music supervision data',
          'Vector DB: Specialized ANN index for sub-100ms semantic search at catalog scale',
          'Scoring Engine: Ensemble of gradient-boosted models + neural network for dimension scoring',
          'API Layer: FastAPI with async endpoints for real-time and batch processing',
          'Pipeline Orchestration: Directed acyclic graph (DAG) for multi-stage ingestion workflows',
          'Storage: Hybrid (relational for metadata, vector store for embeddings, object storage for audio)',
        ],
      },
    ],
  },
  {
    title: 'Technical Decisions',
    slug: 'technical-decisions',
    venture: 'SIGNAL',
    ventureLabel: 'SIGNAL',
    ventureSlug: 'signal',
    description:
      'Key technical decisions, tradeoffs, and engineering rationale behind SIGNAL\'s architecture and implementation.',
    readingTime: '7 min read',
    lastUpdated: 'Jun 2026',
    tags: ['Engineering', 'Architecture Decisions', 'Technical'],
    sections: [
      {
        id: 'embedding-strategy',
        title: 'Embedding Strategy: Why Custom Over Off-the-Shelf',
        type: 'text',
        body: [
          'Early experiments with general-purpose audio embeddings (CLAP, MuLan) showed acceptable performance for broad genre classification but poor results for the nuanced similarity judgments music supervisors need. Two tracks in the same genre can sound completely different — and two tracks in different genres can be perfect for the same scene.',
          'We fine-tuned a custom embedding model on a curated dataset of supervisor-validated track pairs. This domain-specific embedding space captures the dimensions that matter for sync placement: emotional arc, production quality, dynamic range, and temporal structure.',
          'The result: 40% improvement in top-5 recommendation relevance compared to general-purpose embeddings in blind user testing with professional supervisors.',
        ],
      },
      {
        id: 'scoring-architecture',
        title: 'Scoring Architecture: Ensemble Over Monolith',
        type: 'callout',
        calloutTitle: 'Modular Scoring',
        calloutBody:
          'Each of the six scoring dimensions is powered by an independently trained model. This enables targeted improvements — we can retrain the mood model without touching genre fit — and provides natural interpretability since each dimension\'s score comes from a dedicated, analyzable model.',
        calloutType: 'success',
      },
      {
        id: 'api-first',
        title: 'API-First Over UI-First',
        type: 'text',
        body: [
          'Most music supervision tools build a UI and bolt on an API later. SIGNAL inverted this: build the API first, then layer the dashboard on top. This decision had profound implications.',
          'API-first architecture meant every feature had to have a programmatic interface before it could have a visual one. This enforced clean abstractions, comprehensive documentation, and rigorous testing from day one.',
          'It also opened integration possibilities that a UI-first approach would have deprioritized: programmatic batch search, automated catalog sync, and embedding into existing production workflows via API calls.',
        ],
      },
      {
        id: 'database-choice',
        title: 'Database Polyglot Persistence',
        type: 'list',
        items: [
          'PostgreSQL for transactional data: users, catalogs, licensing metadata, audit logs',
          'Vector database (custom index) for embeddings: sub-100ms ANN search at 500K+ track scale',
          'Redis for caching: frequently accessed track metadata, scoring results, session state',
          'Object storage (S3-compatible) for audio files: streaming access for preview and analysis',
          'Time-series DB for analytics: dashboard metrics, usage patterns, scoring distribution',
        ],
      },
    ],
  },
  {
    title: 'Development Timeline',
    slug: 'development-timeline',
    venture: 'SIGNAL',
    ventureLabel: 'SIGNAL',
    ventureSlug: 'signal',
    description:
      'The complete development journey of SIGNAL — from initial concept through production deployment.',
    readingTime: '6 min read',
    lastUpdated: 'Jun 2026',
    tags: ['Timeline', 'Development', 'History'],
    sections: [
      {
        id: 'origins',
        title: 'Origins: Q3 2024',
        type: 'text',
        body: [
          'SIGNAL started as a conversation with three independent music supervisors who described the same pain: finding the right track for a brief takes 3-5 days of emails, phone calls, and database searches. One said: "I spend more time tracking down who owns the rights than actually listening to music."',
          'That insight became the founding hypothesis: if we can reduce the discovery and clearance process from days to minutes, we unlock massive value for both supervisors and rights holders.',
        ],
      },
      {
        id: 'prototype',
        title: 'Prototype: Q4 2024',
        type: 'callout',
        calloutTitle: 'The First 50K Tracks',
        calloutBody:
          'The prototype processed 50,000 tracks from two catalog sources. Metadata normalization was the hardest part — catalogs had different field names, inconsistent genre tags, and missing data. We built a normalization pipeline that became the foundation of the platform.',
        calloutType: 'info',
      },
      {
        id: 'alpha',
        title: 'Alpha: Q1-Q2 2025',
        type: 'timeline',
        items: [
          'January 2025 — First scoring engine prototype with 4 dimensions',
          'February 2025 — Semantic search integration, 150K tracks indexed',
          'March 2025 — Supervisor feedback loop: first external user testing',
          'April 2025 — API v1 launch with search and retrieval endpoints',
          'May 2025 — Explainable AI layer: per-dimension score breakdowns',
          'June 2025 — Pilot partnership with regional licensing agency',
        ],
      },
      {
        id: 'beta',
        title: 'Beta: Q3-Q4 2025',
        type: 'text',
        body: [
          'The beta phase focused on hardening the platform for production use. We processed 200K+ tracks, added two additional scoring dimensions (Cultural Relevance, Licensing Flexibility), and built the enterprise dashboard.',
          'The feedback loop with pilot users was invaluable. Supervisors identified edge cases we hadn\'t considered: tracks with multiple genre classifications, catalogs with incomplete metadata, and the need for batch comparison views.',
        ],
      },
      {
        id: 'production',
        title: 'Production: 2026',
        type: 'list',
        items: [
          'January 2026 — Dashboard v2 with analytics and reporting suite',
          'March 2026 — Real-time scoring for live catalog updates',
          'May 2026 — 500K+ tracks indexed across multiple catalogs',
          'June 2026 — 12 architecture layers in production, 6 scoring dimensions',
        ],
      },
    ],
  },
  {
    title: 'Roadmap',
    slug: 'roadmap',
    venture: 'SIGNAL',
    ventureLabel: 'SIGNAL',
    ventureSlug: 'signal',
    description:
      'Current and planned development roadmap for SIGNAL through 2027.',
    readingTime: '5 min read',
    lastUpdated: 'Jun 2026',
    tags: ['Roadmap', 'Planning', 'Future'],
    sections: [
      {
        id: 'current-quarter',
        title: 'Current Quarter (Q3 2026)',
        type: 'list',
        items: [
          'Collaborative playlist curation: multiple supervisors can build and share track shortlists',
          'Real-time catalog sync: automatic updates when labels add new releases',
          'Advanced filtering: multi-dimensional filter combinations for power users',
        ],
      },
      {
        id: 'next-quarter',
        title: 'Next Quarter (Q4 2026)',
        type: 'card-grid',
        cards: [
          {
            title: 'Enterprise SSO',
            description:
              'SAML, OAuth, and SCIM support for enterprise deployment with existing identity providers.',
          },
          {
            title: 'Batch Licensing',
            description:
              'Multi-track licensing workflow with bulk clearance requests and automated paperwork.',
          },
          {
            title: 'Analytics API',
            description:
              'Programmatic access to platform analytics for integration with BI tools and custom dashboards.',
          },
          {
            title: 'Audio Preview',
            description:
              'In-platform audio preview with time-stamped annotation and collaborative commenting.',
          },
        ],
      },
      {
        id: 'h1-2027',
        title: 'H1 2027',
        type: 'text',
        body: [
          'The 2027 roadmap focuses on predictive intelligence: using historical placement data to predict which tracks will work for which types of briefs before a supervisor even starts searching. This shifts SIGNAL from a search tool to a recommendation engine that proactively surfaces opportunities.',
          'Additional priorities include international catalog expansion (Latin American, Asian, and African markets), real-time licensing for live streaming, and integration partnerships with major DAWs and video editing software.',
        ],
      },
      {
        id: 'vision-2028',
        title: 'Long-Term Vision (2028+)',
        type: 'quote',
        quote:
          'SIGNAL becomes the universal intelligence layer for global music licensing — connecting every catalog to every supervisor, producer, and content creator in real time.',
        quoteAttr: 'Product Vision',
      },
    ],
  },
  {
    title: 'Pitch Deck',
    slug: 'pitch-deck',
    venture: 'SIGNAL',
    ventureLabel: 'SIGNAL',
    ventureSlug: 'signal',
    description:
      'Complete pitch deck used for investor presentations and strategic partner meetings.',
    readingTime: '3 min read',
    lastUpdated: 'Jun 2026',
    tags: ['Pitch Deck', 'Investor', 'Presentation'],
    sections: [
      {
        id: 'problem-slide',
        title: 'The Problem: Sync Licensing Is Broken',
        type: 'callout',
        calloutTitle: '$3.9B Market, 40% Uncaptured',
        calloutBody:
          'Music supervision relies on manual processes that can\'t scale with content production growth. 3-5 days to find and clear a single track. Labels lose 40% of potential sync revenue to administrative friction.',
        calloutType: 'warning',
      },
      {
        id: 'solution-slide',
        title: 'Solution: AI-Powered Supervision',
        type: 'text',
        body: [
          'SIGNAL replaces fragmented tools with unified AI intelligence. Supervisors search across catalogs with natural language, get explainable recommendations in seconds, and complete licensing workflows without leaving the platform.',
          'For labels and publishers, SIGNAL opens new revenue streams by surfacing placement opportunities that manual processes miss. The platform creates value on both sides of the marketplace.',
        ],
      },
      {
        id: 'market-slide',
        title: 'Market Opportunity',
        type: 'metrics',
        metrics: [
          { value: '$3.9B', label: 'Sync market by 2027' },
          { value: '14.2%', label: 'CAGR' },
          { value: '500B+', label: 'Annual content minutes' },
          { value: '50K+', label: 'Active music supervisors globally' },
        ],
      },
      {
        id: 'traction-slide',
        title: 'Traction',
        type: 'timeline',
        items: [
          '2024 Q3 — Validated with 3 music supervisors',
          '2025 Q1 — AI scoring engine: 4 dimensions',
          '2025 Q3 — Pilot: 200K+ tracks processed',
          '2026 Q2 — 500K+ tracks, 12 architecture layers',
        ],
      },
      {
        id: 'ask',
        title: 'The Ask',
        type: 'callout',
        calloutTitle: 'Building the Future of Music Licensing',
        calloutBody:
          'SIGNAL is seeking strategic partnerships with labels, publishers, and content production companies. Current focus: catalog integrations, pilot programs with enterprise supervision teams, and API partnerships with production workflow platforms.',
        calloutType: 'success',
      },
    ],
  },
  {
    title: 'Lessons Learned',
    slug: 'lessons-learned',
    venture: 'SIGNAL',
    ventureLabel: 'SIGNAL',
    ventureSlug: 'signal',
    description:
      'Honest retrospective on what went right, what went wrong, and what we\'d do differently building SIGNAL.',
    readingTime: '6 min read',
    lastUpdated: 'Jun 2026',
    tags: ['Retrospective', 'Lessons Learned', 'Reflection'],
    sections: [
      {
        id: 'what-went-right',
        title: 'What Went Right',
        type: 'card-grid',
        cards: [
          {
            title: 'API-First Architecture',
            description:
              'Building the API before the UI forced clean interfaces and made integrations possible. Would make this decision again without hesitation.',
          },
          {
            title: 'Supervisor-Led Design',
            description:
              'Involving music supervisors from day one kept us anchored to real problems. Every feature was validated against actual workflow pain.',
          },
          {
            title: 'Explainable AI Investment',
            description:
              'The explainability layer was initially viewed as "nice to have" but became table stakes for supervisor adoption and trust.',
          },
          {
            title: 'Modular Scoring Architecture',
            description:
              'Independent per-dimension models enabled parallel development and targeted improvements. Made the system both more robust and more interpretable.',
          },
        ],
      },
      {
        id: 'what-went-wrong',
        title: 'What Went Wrong',
        type: 'callout',
        calloutTitle: 'Metadata Complexity Underestimated',
        calloutBody:
          'Catalog metadata normalization was significantly harder than anticipated. Different catalogs use different taxonomies, field names, and data quality standards. We should have invested in the normalization pipeline earlier and treated it as a core product feature rather than infrastructure.',
        calloutType: 'warning',
      },
      {
        id: 'would-do-differently',
        title: 'Would Do Differently',
        type: 'list',
        items: [
          'Invest in metadata normalization from week one — treat it as a product differentiator, not plumbing',
          'Ship a minimal dashboard earlier — supervisors needed visual feedback even during API development',
          'Spend more time on onboarding flow — the first experience with the platform sets expectations',
          'Build the feedback loop infrastructure earlier — supervisor input data is the moat',
          'Prioritize catalog integrations over feature development — more catalogs = better recommendations',
        ],
      },
      {
        id: 'key-insight',
        title: 'Key Insight',
        type: 'quote',
        quote:
          'In creative industries, AI adoption is a trust problem, not a technology problem. The best model in the world is worthless if the professional using it doesn\'t trust its recommendations. Explainability isn\'t a feature — it\'s the product.',
        quoteAttr: 'Founding Reflection',
      },
    ],
  },
];
