import { DocContent } from '@/types';

export const sonoraDocs: DocContent[] = [
  {
    title: 'Market Research',
    slug: 'market-research',
    venture: 'Sonora Music Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      'Market analysis for the AI-powered music production and distribution platform for independent artists.',
    readingTime: '7 min read',
    lastUpdated: 'Apr 2026',
    tags: ['Market Analysis', 'Research', 'Music Industry'],
    sections: [
      {
        id: 'market-overview',
        title: 'Market Overview',
        type: 'text',
        body: [
          'The music production and distribution landscape is undergoing its most significant transformation since the shift to streaming. Three converging trends create a unique market opportunity: the democratization of production tools, the fragmentation of distribution channels, and the rise of AI-powered creative assistance.',
          'Independent artists now have access to professional-grade production software (Logic Pro, Ableton, FL Studio), affordable recording equipment, and global distribution through platforms like DistroKid and TuneCore. Yet the gap between creating music and building a sustainable career has never been wider.',
        ],
      },
      {
        id: 'market-size',
        title: 'Market Size & Growth',
        type: 'metrics',
        metrics: [
          { value: '$31B', label: 'Global recorded music revenue (2025)' },
          { value: '12.4%', label: 'Independent artist share growth YoY' },
          { value: '$4.7B', label: 'Artist services market' },
          { value: '60%', label: 'Artists using AI tools by 2026' },
        ],
      },
      {
        id: 'market-gaps',
        title: 'Critical Market Gaps',
        type: 'callout',
        calloutTitle: 'The Intelligence Gap',
        calloutBody:
          'Tools for production and distribution are commoditized. The competitive advantage is shifting to intelligence: understanding what to create, when to release, how to reach audiences, and how to build sustainable careers. This is the gap Sonora Music Hub addresses.',
        calloutType: 'warning',
      },
      {
        id: 'competitive-landscape',
        title: 'Competitive Landscape',
        type: 'card-grid',
        cards: [
          {
            title: 'DistroKid / TuneCore',
            description:
              'Distribution-only. No production tools, no AI intelligence, no career development features. Commoditized pricing race to the bottom.',
          },
          {
            title: 'Landr',
            description:
              'AI mastering and distribution. Strong on production quality but limited intelligence layer — no audience insights or career analytics.',
          },
          {
            title: 'BandLab',
            description:
              'Social music creation platform, popular with emerging artists. Lacks the professional production and business intelligence capabilities.',
          },
          {
            title: 'SoundBetter / AirGigs',
            description:
              'Freelance marketplace models connecting artists with producers. Transactional, no platform for ongoing career development.',
          },
        ],
      },
      {
        id: 'key-trends',
        title: 'Key Industry Trends',
        type: 'list',
        items: [
          'AI-powered production tools are being adopted at 3x the rate of traditional DAWs among artists under 25',
          'Direct-to-fan revenue (merch, subscriptions, tip jars) growing 2.5x faster than streaming revenue',
          'Short-form video (TikTok, Reels, Shorts) is the primary music discovery channel for Gen Z',
          'Artists are demanding all-in-one platforms instead of stitching together 5-10 separate tools',
        ],
      },
    ],
  },
  {
    title: 'Industry Analysis',
    slug: 'industry-analysis',
    venture: 'Sonora Music Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      'Deep industry analysis of the music technology sector, including Porter\'s Five Forces and strategic implications.',
    readingTime: '6 min read',
    lastUpdated: 'Apr 2026',
    tags: ['Industry Analysis', 'Strategy', 'Research'],
    sections: [
      {
        id: 'industry-structure',
        title: 'Industry Structure',
        type: 'text',
        body: [
          'The music technology industry is structured around four layers: creation tools (DAWs, plugins, virtual instruments), distribution services (aggregators, streaming platforms), promotion and marketing (playlisting, social media, PR), and monetization (royalty collection, licensing, merchandise).',
          'Historically, these layers operated as independent markets. The trend toward vertical integration means companies that can offer multiple layers in a unified experience have significant competitive advantages.',
        ],
      },
      {
        id: 'five-forces',
        title: 'Strategic Analysis (Porter\'s Five Forces)',
        type: 'card-grid',
        body: ['Analysis of competitive dynamics in the independent artist tools market.'],
        cards: [
          {
            title: 'Threat of New Entrants: High',
            description:
              'Low barriers to building a single-feature tool (e.g., another distribution service or mastering plugin). High barriers to building an integrated platform spanning production, distribution, and intelligence.',
          },
          {
            title: 'Bargaining Power of Buyers: Moderate',
            description:
              'Artists have many individual tool choices but limited integrated platform options. Switching costs increase with platform depth. Price sensitivity is high at the low end.',
          },
          {
            title: 'Bargaining Power of Suppliers: Low',
            description:
              'Cloud infrastructure, AI models, and streaming APIs are widely available from multiple providers. No single supplier has significant leverage.',
          },
          {
            title: 'Threat of Substitutes: Moderate',
            description:
              'Artists can piece together 5-10 individual tools instead of using an integrated platform. The substitute is the status quo of fragmentation.',
          },
          {
            title: 'Competitive Rivalry: Moderate',
            description:
              'Fragmented market with few direct competitors at the integrated platform level. Competitive intensity expected to increase as consolidation accelerates.',
          },
        ],
      },
      {
        id: 'strategic-implications',
        title: 'Strategic Implications',
        type: 'callout',
        calloutTitle: 'Integration Is the Moat',
        calloutBody:
          'The winner in this space will be the platform that combines production tools, distribution, AI intelligence, and career development in a seamless experience. Standalone tools face increasing pressure as artists demand integrated solutions that reduce complexity.',
        calloutType: 'success',
      },
    ],
  },
  {
    title: 'Business Model',
    slug: 'business-model',
    venture: 'Sonora Music Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      'Sonora Music Hub\'s business model, revenue streams, and unit economics.',
    readingTime: '5 min read',
    lastUpdated: 'Apr 2026',
    tags: ['Business Model', 'Strategy', 'Monetization'],
    sections: [
      {
        id: 'revenue-streams',
        title: 'Revenue Streams',
        type: 'metrics',
        body: [
          'Sonora Music Hub generates revenue through a multi-tier subscription model supplemented by transaction-based services.',
        ],
        metrics: [
          { value: 'Free', label: 'Basic analytics, limited AI recommendations' },
          { value: '$9.99/mo', label: 'Pro: Full AI intelligence, unlimited analysis, priority support' },
          { value: '$29.99/mo', label: 'Studio: Multi-artist, team collaboration, API access' },
          { value: 'Custom', label: 'Enterprise: White-label, custom integrations, dedicated support' },
        ],
      },
      {
        id: 'unit-economics',
        title: 'Unit Economics',
        type: 'text',
        body: [
          'Customer acquisition cost (CAC) is estimated at $12-18 per paying user, driven by content marketing, artist referral programs, and platform partnerships. Monthly revenue per user (ARPU) targets $12-22 across the subscriber base.',
          'Lifetime value (LTV) is projected at $180-350 based on 15-month average retention for SaaS music tools. This yields a healthy LTV/CAC ratio of 10:1 to 20:1.',
        ],
      },
      {
        id: 'growth-strategy',
        title: 'Growth Strategy',
        type: 'list',
        items: [
          'Freemium funnel: free tier drives adoption, Pro features drive conversion',
          'Artist referral program: organic growth through the artist community',
          'Platform partnerships: integration with DistroKid, Spotify for Artists, TikTok',
          'Content marketing: educational content about AI in music, artist success stories',
        ],
      },
    ],
  },
  {
    title: 'Product Strategy',
    slug: 'product-strategy',
    venture: 'Sonora Music Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      'Product strategy, vision, and prioritization framework for Sonora Music Hub.',
    readingTime: '5 min read',
    lastUpdated: 'Apr 2026',
    tags: ['Product Strategy', 'Vision', 'Roadmap'],
    sections: [
      {
        id: 'product-vision',
        title: 'Product Vision',
        type: 'quote',
        quote:
          'Sonora Music Hub is the only platform an independent artist needs to create, understand, distribute, and monetize their music.',
        quoteAttr: 'Product Vision Statement',
      },
      {
        id: 'core-principles',
        title: 'Core Product Principles',
        type: 'list',
        items: [
          'Artist-first: every feature is evaluated against the question "does this help artists make better music or build better careers?"',
          'Intelligence over data: we surface insights, not numbers. Artists don\'t need more dashboards.',
          'Integrated not stitched: production, analysis, and distribution are one experience, not three tools bolted together.',
          'Startup-friendly: 5-minute onboarding, 30-minute time-to-value, no enterprise complexity.',
        ],
      },
      {
        id: 'prioritization',
        title: 'Feature Prioritization',
        type: 'card-grid',
        cards: [
          {
            title: 'P0: Core Intelligence',
            description:
              'Audio analysis, streaming analytics, personalized recommendations. The foundation of value.',
          },
          {
            title: 'P1: Distribution Integration',
            description:
              'Seamless connection with major distribution and streaming platforms for data and publishing.',
          },
          {
            title: 'P2: Collaboration',
            description:
              'Multi-user teams, shared analytics, feedback workflows for management and production teams.',
          },
          {
            title: 'P3: Marketplace',
            description:
              'Connecting artists with producers, session musicians, mixers, and mastering engineers.',
          },
        ],
      },
      {
        id: 'differentiation',
        title: 'Key Differentiators',
        type: 'callout',
        calloutTitle: 'AI-Native Intelligence Layer',
        calloutBody:
          'Unlike analytics tools that display raw data, Sonora\'s AI layer generates narrative intelligence — personalized insights, recommendations, and forecasts that tell artists what the data means and what to do about it.',
        calloutType: 'success',
      },
    ],
  },
  {
    title: 'Pitch Deck',
    slug: 'pitch-deck',
    venture: 'Sonora Music Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      'Investor pitch deck presenting Sonora Music Hub\'s vision, market opportunity, and strategic plan.',
    readingTime: '3 min read',
    lastUpdated: 'Apr 2026',
    tags: ['Pitch Deck', 'Investor', 'Presentation'],
    sections: [
      {
        id: 'problem-slide',
        title: 'The Problem',
        type: 'callout',
        calloutTitle: 'Independent Artists Need 7+ Tools to Run Their Career',
        calloutBody:
          'Production, distribution, analytics, promotion, collaboration, monetization, and career planning each require separate tools. Artists spend more time managing tools than making music.',
        calloutType: 'warning',
      },
      {
        id: 'solution-slide',
        title: 'The Solution',
        type: 'text',
        body: [
          'Sonora Music Hub unifies production, intelligence, distribution, and monetization in a single AI-native platform. Artists get professional-grade tools with major-label intelligence at an indie-accessible price.',
          'The platform learns each artist\'s unique sound, audience, and career trajectory to provide personalized recommendations across creative and business decisions.',
        ],
      },
      {
        id: 'market',
        title: 'Market Opportunity',
        type: 'metrics',
        metrics: [
          { value: '$31B', label: 'Global recorded music' },
          { value: '12.4%', label: 'Independent share growth YoY' },
          { value: '5M+', label: 'Addressable artists' },
          { value: '$4.7B', label: 'Artist services TAM' },
        ],
      },
      {
        id: 'ask',
        title: 'The Ask',
        type: 'callout',
        calloutTitle: 'Building the Operating System for Independent Music',
        calloutBody:
          'Seeking strategic partnerships with distribution platforms, production tool companies, and artist management organizations. Also exploring seed funding for platform development and initial go-to-market.',
        calloutType: 'info',
      },
    ],
  },
  {
    title: 'Launch Strategy',
    slug: 'launch-strategy',
    venture: 'Sonora Music Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      'Go-to-market strategy, launch phases, and growth plan for Sonora Music Hub.',
    readingTime: '5 min read',
    lastUpdated: 'Apr 2026',
    tags: ['Launch Strategy', 'Marketing', 'Growth'],
    sections: [
      {
        id: 'launch-phases',
        title: 'Launch Phases',
        type: 'timeline',
        items: [
          'Phase 0 (Pre-Launch) — Developer preview: API access for early adopters, community building on Discord, content marketing foundation',
          'Phase 1 (Soft Launch) — Feature-complete beta: 500 artist invites, focused on audio analysis and streaming analytics',
          'Phase 2 (Public Launch) — Open registration: full platform including recommendations, distribution integrations',
          'Phase 3 (Scale) — Platform expansion: collaboration features, marketplace, enterprise tier',
        ],
      },
      {
        id: 'channels',
        title: 'Go-to-Market Channels',
        type: 'card-grid',
        cards: [
          {
            title: 'Community-Led Growth',
            description:
              'Artist Discord community, Reddit (r/WeAreTheMusicMakers, r/audioengineering), and music production forums.',
          },
          {
            title: 'Content Marketing',
            description:
              'AI music tutorials, artist case studies, industry analysis pieces. SEO-optimized content targeting artist pain points.',
          },
          {
            title: 'Platform Partnerships',
            description:
              'Integrated onboarding through distribution partners. Cross-promotion with production tool companies.',
          },
          {
            title: 'Artist Ambassador Program',
            description:
              'Early adopter artists become advocates. Referral incentives, exclusive features, community recognition.',
          },
        ],
      },
      {
        id: 'success-metrics',
        title: 'Launch Success Metrics',
        type: 'metrics',
        metrics: [
          { value: '10K', label: 'Registered artists (6 months post-launch)' },
          { value: '15%', label: 'Free-to-paid conversion rate' },
          { value: '30%', label: 'Monthly active user retention' },
          { value: '4.5+', label: 'App store rating' },
        ],
      },
      {
        id: 'competitive-positioning',
        title: 'Competitive Positioning',
        type: 'callout',
        calloutTitle: 'Positioning Statement',
        calloutBody:
          'For independent artists who want major-label intelligence without the label, Sonora Music Hub is the AI-powered platform that provides production tools, streaming analytics, and personalized career recommendations in one integrated experience.',
        calloutType: 'info',
      },
    ],
  },
];
