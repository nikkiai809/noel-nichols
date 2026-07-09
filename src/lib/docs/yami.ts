import { DocContent } from '@/types';

export const yamiDocs: DocContent[] = [
  {
    title: 'Executive Summary',
    slug: 'executive-summary',
    venture: 'YAMI',
    ventureLabel: 'YAMI',
    ventureSlug: 'yami',
    description:
      'A one-page overview of YAMI — the AI music assistant that helps artists, producers, and labels understand, analyze, and evolve their sound.',
    readingTime: '4 min read',
    lastUpdated: 'May 2026',
    tags: ['Overview', 'Business Case', 'Executive'],
    sections: [
      {
        id: 'problem',
        title: 'The Problem',
        type: 'callout',
        calloutTitle: 'Data-Rich, Insight-Poor',
        calloutBody:
          'Independent artists release music into a data vacuum. Streaming platforms provide raw numbers (streams, saves, playlist adds) but no actionable intelligence about why certain songs perform better or how to reach specific audiences.',
        calloutType: 'warning',
      },
      {
        id: 'solution',
        title: 'The Solution',
        type: 'text',
        body: [
          'YAMI is an AI-powered music assistant that analyzes audio, lyrics, streaming data, and audience signals to provide personalized, actionable insights. Artists upload their catalog and get back a comprehensive analysis: what makes their sound unique, which audiences resonate most, and how to evolve their next release.',
          'Unlike analytics dashboards that display numbers, YAMI provides narrative intelligence — it tells artists what the data means and what to do about it.',
        ],
      },
      {
        id: 'market',
        title: 'Market Opportunity',
        type: 'metrics',
        metrics: [
          { value: '5M+', label: 'Independent artists on streaming platforms' },
          { value: '87%', label: 'Who want better audience insights' },
          { value: '120K', label: 'New tracks released daily' },
          { value: '3.2x', label: 'Engagement lift with AI recommendations' },
        ],
      },
      {
        id: 'vision',
        title: 'Product Vision',
        type: 'quote',
        quote:
          'Every artist deserves a producer, an A&R, and a data scientist in their pocket. YAMI is that team.',
        quoteAttr: 'Product Vision Statement',
      },
    ],
  },
  {
    title: 'Market Research',
    slug: 'market-research',
    venture: 'YAMI',
    ventureLabel: 'YAMI',
    ventureSlug: 'yami',
    description:
      'Analysis of the independent music market, artist analytics landscape, and AI adoption trends in music creation.',
    readingTime: '7 min read',
    lastUpdated: 'May 2026',
    tags: ['Market Analysis', 'Research', 'Music Industry'],
    sections: [
      {
        id: 'market-landscape',
        title: 'Market Landscape',
        type: 'text',
        body: [
          'The independent music market has undergone a structural transformation. Distribution barriers have collapsed — any artist can release to every major platform through services like DistroKid, TuneCore, and CD Baby. But the intelligence gap has widened: artists have access to their streaming data but no framework for interpreting it.',
          'This creates a paradox of abundance: more data than ever, but less understanding. Artists drown in spreadsheets of streaming numbers while lacking answers to fundamental questions: What does my audience actually like? How do I reach similar listeners? What should my next song sound like?',
        ],
      },
      {
        id: 'competitive-analysis',
        title: 'Competitive Analysis',
        type: 'card-grid',
        cards: [
          {
            title: 'Chartmetric',
            description:
              'Industry-standard artist analytics platform. Powerful but built for labels and managers, not independent artists. Steep learning curve, high price point.',
          },
          {
            title: 'Soundcharts',
            description:
              'Real-time music data tracking. Strong for monitoring but lacks the AI-powered recommendation layer that YAMI provides.',
          },
          {
            title: 'Viberate',
            description:
              'Analytics and talent discovery platform. Focused on the industry side rather than artist-facing intelligence.',
          },
          {
            title: 'In-House Tools',
            description:
              'Major labels build custom analytics systems. Independent artists have no equivalent access to the same quality of insights.',
          },
        ],
      },
      {
        id: 'key-insights',
        title: 'Key Market Insights',
        type: 'list',
        items: [
          '78% of independent artists say they would release more frequently if they had better audience feedback',
          'AI-powered music tools are being adopted 3x faster than traditional music software among artists under 25',
          'The "creator economy" for music is projected to reach $18B by 2027',
          'Personalized AI recommendations are the #1 feature request from artists using current analytics tools',
        ],
      },
      {
        id: 'target-audience',
        title: 'Target Audience',
        type: 'callout',
        calloutTitle: 'Primary: Independent Artists (10K-500K monthly listeners)',
        calloutBody:
          'This segment has enough streaming data to generate meaningful insights but lacks the resources to hire analytics teams or access label-grade tools. They are actively looking for AI-powered solutions and willing to pay for actionable intelligence.',
        calloutType: 'info',
      },
    ],
  },
  {
    title: 'Pitch Deck',
    slug: 'pitch-deck',
    venture: 'YAMI',
    ventureLabel: 'YAMI',
    ventureSlug: 'yami',
    description:
      'Investor pitch deck for YAMI — AI-powered music intelligence for independent artists.',
    readingTime: '3 min read',
    lastUpdated: 'May 2026',
    tags: ['Pitch Deck', 'Investor', 'Presentation'],
    sections: [
      {
        id: 'problem-slide',
        title: 'The Problem',
        type: 'callout',
        calloutTitle: 'Artists Are Flying Blind',
        calloutBody:
          '5M+ independent artists release into a data vacuum. They have raw streaming numbers but no actionable intelligence about their audience, their sound, or their growth trajectory.',
        calloutType: 'warning',
      },
      {
        id: 'solution-slide',
        title: 'The Solution',
        type: 'text',
        body: [
          'YAMI analyzes audio, lyrics, streaming data, and audience signals to produce personalized intelligence. Not another dashboard — a creative co-pilot that tells artists what the data means and what to do next.',
          'Audio fingerprinting identifies sonic signatures. Lyric analysis reveals thematic patterns. Streaming analytics uncover audience segments. AI recommendations suggest specific production, marketing, and release strategies.',
        ],
      },
      {
        id: 'market-slide',
        title: 'Market Size',
        type: 'metrics',
        metrics: [
          { value: '$18B', label: 'Creator music economy by 2027' },
          { value: '5M+', label: 'Independent artists' },
          { value: '78%', label: 'Want better insights' },
          { value: '3x', label: 'AI tool adoption rate vs traditional' },
        ],
      },
      {
        id: 'business-model',
        title: 'Business Model',
        type: 'list',
        items: [
          'Freemium tier: basic analytics and audio analysis (up to 5 tracks)',
          'Pro tier ($9.99/mo): unlimited tracks, audience insights, personalized recommendations',
          'Label tier ($49.99/mo): multi-artist management, competitive analysis, trend reports',
          'API access: enterprise licensing for platforms and aggregators',
        ],
      },
    ],
  },
  {
    title: 'User Personas',
    slug: 'user-personas',
    venture: 'YAMI',
    ventureLabel: 'YAMI',
    ventureSlug: 'yami',
    description:
      'Detailed user personas that drive YAMI\'s product design, feature priorities, and user experience decisions.',
    readingTime: '5 min read',
    lastUpdated: 'May 2026',
    tags: ['UX', 'Personas', 'Design'],
    sections: [
      {
        id: 'persona-1',
        title: 'Persona 1: The Rising Artist',
        type: 'card-grid',
        body: ['Meet Maya. 24-year-old indie pop artist with 150K monthly listeners on Spotify. She releases singles every 6-8 weeks and manages everything herself: recording, mixing, artwork, marketing, distribution.'],
        cards: [
          {
            title: 'Goals',
            description: 'Grow from 150K to 1M monthly listeners. Understand which songs resonate and why. Optimize release strategy.',
          },
          {
            title: 'Pain Points',
            description: 'Overwhelmed by streaming data she can\'t interpret. Unsure which promotional channels work. No feedback loop for creative decisions.',
          },
          {
            title: 'YAMI Value',
            description: 'Personalized release recommendations. Audience segmentation analysis. Sound fingerprint comparison with similar artists.',
          },
        ],
      },
      {
        id: 'persona-2',
        title: 'Persona 2: The Label A&R',
        type: 'card-grid',
        body: ['Meet Marcus. A&R at an independent label, responsible for discovering and developing 12 artists. He needs to evaluate which artists to sign and how to develop their sound.'],
        cards: [
          {
            title: 'Goals',
            description: 'Identify breakout artists early. Develop clear growth strategies for roster. Compare artist performance across markets.',
          },
          {
            title: 'Pain Points',
            description: 'Manual tracking of artist metrics across platforms. Subjective evaluation criteria. No standardized development framework.',
          },
          {
            title: 'YAMI Value',
            description: 'Multi-artist dashboard with comparative analytics. AI-powered growth potential scoring. Market gap identification.',
          },
        ],
      },
      {
        id: 'persona-3',
        title: 'Persona 3: The Producer',
        type: 'card-grid',
        body: ['Meet Diego. Producer and beat-maker with a catalog of 200+ instrumentals on streaming platforms. He wants to understand what makes certain beats more successful.'],
        cards: [
          {
            title: 'Goals',
            description: 'Identify sonic patterns in successful tracks. Optimize production workflow. Build a signature sound.',
          },
          {
            title: 'Pain Points',
            description: 'No objective feedback on production choices. Difficulty translating streaming data into production decisions.',
          },
          {
            title: 'YAMI Value',
            description: 'Audio feature analysis with production recommendations. Trend-aware sonic benchmarking. Genre evolution tracking.',
          },
        ],
      },
    ],
  },
  {
    title: 'Product Vision',
    slug: 'product-vision',
    venture: 'YAMI',
    ventureLabel: 'YAMI',
    ventureSlug: 'yami',
    description:
      'The product vision, design principles, and strategic direction that guides YAMI\'s evolution.',
    readingTime: '5 min read',
    lastUpdated: 'May 2026',
    tags: ['Product Vision', 'Strategy', 'Design'],
    sections: [
      {
        id: 'vision-statement',
        title: 'Vision Statement',
        type: 'quote',
        quote:
          'Make every independent artist feel like they have a major-label analytics team in their pocket.',
        quoteAttr: 'Product Vision',
      },
      {
        id: 'design-principles',
        title: 'Design Principles',
        type: 'list',
        items: [
          'Insight over data — surface what matters, not what\'s measurable. Artists don\'t need more numbers; they need better understanding.',
          'Narrative intelligence — translate analytics into stories. "Your audience listens most on weekday evenings" is useful. "Release on Thursday mornings to maximize first-weekend streams" is actionable.',
          'Creative first — the artist\'s creative process is sacred. YAMI advises, never dictates. Recommendations are suggestions, never commands.',
          'Startup-friendly — no enterprise complexity. Onboarding in under 5 minutes. Value in under 30 minutes.',
        ],
      },
      {
        id: 'strategic-priorities',
        title: 'Strategic Priorities',
        type: 'timeline',
        items: [
          'Phase 1 — Audio analysis and catalog intelligence (tracks, albums, discography)',
          'Phase 2 — Streaming analytics integration (Spotify, Apple Music, YouTube, TikTok)',
          'Phase 3 — Audience insights and segmentation (demographics, listening patterns, taste clusters)',
          'Phase 4 — Predictive intelligence (release timing optimization, trend forecasting)',
          'Phase 5 — Collaborative features (team access, feedback sharing, competitive benchmarking)',
        ],
      },
      {
        id: 'competitive-moat',
        title: 'Competitive Moat',
        type: 'callout',
        calloutTitle: 'Data + AI Feedback Loop',
        calloutBody:
          'As more artists connect their catalogs and streaming accounts, YAMI\'s models improve. Cross-artist pattern recognition reveals market-level insights that no single-artist analytics tool can provide. The network effect compounds with every new artist.',
        calloutType: 'success',
      },
    ],
  },
  {
    title: 'AI Strategy',
    slug: 'ai-strategy',
    venture: 'YAMI',
    ventureLabel: 'YAMI',
    ventureSlug: 'yami',
    description:
      'YAMI\'s AI strategy: the models, architectures, and data pipelines that power artist intelligence.',
    readingTime: '7 min read',
    lastUpdated: 'May 2026',
    tags: ['AI/ML', 'Architecture', 'Engineering'],
    sections: [
      {
        id: 'ai-pillars',
        title: 'Three AI Pillars',
        type: 'card-grid',
        body: [
          'YAMI\'s intelligence is built on three interconnected AI pillars, each addressing a different dimension of artist understanding.',
        ],
        cards: [
          {
            title: 'Audio Intelligence',
            description:
              'Custom audio analysis models that extract sonic signatures: genre classification, mood detection, production style analysis, instrument identification, temporal structure mapping, and similarity search across catalogs.',
          },
          {
            title: 'Semantic Intelligence',
            description:
              'NLP models for lyric analysis, thematic extraction, sentiment analysis, and language style classification. Understands what artists are saying and how audiences are responding.',
          },
          {
            title: 'Audience Intelligence',
            description:
              'Streaming data analysis with audience segmentation, listening pattern recognition, demographic inference, and growth trajectory modeling. Predicts which audiences will resonate with which sounds.',
          },
        ],
      },
      {
        id: 'model-architecture',
        title: 'Model Architecture',
        type: 'text',
        body: [
          'Each AI pillar uses a specialized model architecture optimized for its domain. Audio Intelligence uses a fine-tuned CNN-based audio embedding model trained on a multi-genre dataset. Semantic Intelligence uses a transformer-based language model fine-tuned on music journalism, reviews, and lyric datasets.',
          'Audience Intelligence combines collaborative filtering with temporal sequence models to predict listening behavior and audience growth patterns.',
          'The three pillars feed into a fusion layer that produces integrated recommendations — combining what the music sounds like, what the lyrics say, and how audiences are responding.',
        ],
      },
      {
        id: 'data-pipeline',
        title: 'Data Pipeline Architecture',
        type: 'timeline',
        items: [
          'Ingestion — Artist connects streaming accounts and uploads catalog via API or file upload',
          'Audio Processing — Track analysis: feature extraction, embedding generation, fingerprinting',
          'Semantic Processing — Lyric extraction, NLP analysis, thematic classification',
          'Streaming Sync — Regular data pulls from Spotify, Apple Music, YouTube, and TikTok APIs',
          'Fusion Engine — Cross-pillar integration producing unified artist profile and recommendations',
          'Personalization — Per-artist model adaptation based on feedback and engagement signals',
        ],
      },
      {
        id: 'explainability',
        title: 'Explainability in Creative AI',
        type: 'callout',
        calloutTitle: 'Why Explainability Matters for Artists',
        calloutBody:
          'Artists are rightfully skeptical of AI telling them what to create. YAMI\'s explainability layer shows the evidence behind every recommendation: "This suggestion is based on 47 similar artists who saw 3.2x growth after shifting to Thursday releases." Artists see the data and make their own decisions.',
        calloutType: 'info',
      },
    ],
  },
  {
    title: 'Architecture',
    slug: 'architecture',
    venture: 'YAMI',
    ventureLabel: 'YAMI',
    ventureSlug: 'yami',
    description:
      'Technical architecture overview of the YAMI platform — services, data flow, and infrastructure.',
    readingTime: '6 min read',
    lastUpdated: 'May 2026',
    tags: ['Architecture', 'Engineering', 'Technical'],
    sections: [
      {
        id: 'system-overview',
        title: 'System Overview',
        type: 'arch',
        body: [
          'YAMI is built as a set of microservices organized around the three AI pillars, with a unified API gateway providing a single entry point for clients.',
          'The architecture prioritizes incremental value: artists get useful insights after connecting a single streaming account, and depth increases as they add more data sources.',
        ],
      },
      {
        id: 'services',
        title: 'Core Services',
        type: 'list',
        items: [
          'API Gateway — Single-entry point with authentication, rate limiting, and request routing',
          'Audio Service — Audio processing pipeline: feature extraction, embedding, similarity search',
          'Semantic Service — NLP pipeline: lyric analysis, theme extraction, sentiment classification',
          'Analytics Service — Streaming data aggregation, audience segmentation, trend analysis',
          'Fusion Service — Cross-pillar integration and recommendation generation',
          'User Service — Artist profiles, account management, data source connections',
          'Notification Service — Alerts for milestones, trends, and personalized recommendations',
        ],
      },
      {
        id: 'data-flow',
        title: 'Data Flow',
        type: 'text',
        body: [
          'Data flows through YAMI in two primary modes: ingestion and query. During ingestion, artist data flows through the processing pipeline asynchronously — audio is analyzed, streaming data is aggregated, and the fusion engine generates an updated artist profile.',
          'During query, the API gateway routes requests to the appropriate service, which reads from the pre-computed profile and returns results in under 200ms. This split architecture enables deep analysis without compromising real-time performance.',
        ],
      },
      {
        id: 'infrastructure',
        title: 'Infrastructure',
        type: 'metrics',
        metrics: [
          { value: 'Containerized', label: 'Docker + Kubernetes orchestration' },
          { value: 'Event-Driven', label: 'Async processing via message queue' },
          { value: 'Polyglot Storage', label: 'PostgreSQL + Vector DB + Object Store' },
          { value: 'Auto-Scaling', label: 'GPU-backed batch processing, CPU-backed real-time queries' },
        ],
      },
    ],
  },
  {
    title: 'Roadmap',
    slug: 'roadmap',
    venture: 'YAMI',
    ventureLabel: 'YAMI',
    ventureSlug: 'yami',
    description:
      'YAMI product roadmap — current priorities and future发展方向.',
    readingTime: '4 min read',
    lastUpdated: 'May 2026',
    tags: ['Roadmap', 'Planning', 'Future'],
    sections: [
      {
        id: 'current-priorities',
        title: 'Current Priorities',
        type: 'list',
        items: [
          'Streaming analytics integration with Spotify and Apple Music APIs',
          'Artist dashboard v1 with core intelligence modules',
          'Audio analysis pipeline for up to 100 tracks per artist',
          'Personalized release strategy recommendations',
        ],
      },
      {
        id: 'upcoming',
        title: 'Upcoming (Q3-Q4 2026)',
        type: 'card-grid',
        cards: [
          {
            title: 'Audience Segmentation',
            description: 'Detailed breakdown of listener demographics, listening habits, and taste clusters with actionable targeting recommendations.',
          },
          {
            title: 'Competitive Analysis',
            description: 'Anonymous benchmarking against similar artists with growth gap analysis and strategic recommendations.',
          },
          {
            title: 'Trend Forecasting',
            description: 'Predictive models for genre trends, platform algorithm changes, and emerging audience preferences.',
          },
          {
            title: 'Team Collaboration',
            description: 'Multi-user access for management teams, collaborative feedback on releases, shared analytics dashboards.',
          },
        ],
      },
      {
        id: 'long-term',
        title: 'Long-Term Vision',
        type: 'quote',
        quote:
          'YAMI becomes the operating system for independent music careers — the central intelligence platform that every artist uses to make creative, strategic, and business decisions.',
        quoteAttr: 'Product Vision',
      },
    ],
  },
];
