import { DocContent } from '@/types';

export const sonoraDocs: DocContent[] = [
  {
    title: 'Market Research',
    slug: 'market-research',
    venture: 'Sonora Music Creative Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      'Market analysis for Sonora Music Creative Hub — a 360° physical ecosystem where artists are discovered, developed, produced, launched, and monetized under one roof.',
    readingTime: '7 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Market Analysis', 'Research', 'Music Industry'],
    sections: [
      {
        id: 'market-overview',
        title: 'Market Overview',
        type: 'text',
        body: [
          "The music industry's infrastructure is fragmented across dozens of independent providers: recording studios in one location, mixing engineers in another, marketing agencies somewhere else, legal counsel in a third city. An artist navigating this landscape must coordinate 10+ vendors, each with separate contracts, timelines, and creative visions.",
          'This fragmentation creates massive inefficiency: higher costs, slower time-to-market, inconsistent creative direction, and talent lost between service providers. Independent artists and emerging labels bear the brunt of this structural problem.',
        ],
      },
      {
        id: 'market-size',
        title: 'Market Size & Growth',
        type: 'metrics',
        metrics: [
          { value: '$31B', label: 'Global recorded music revenue (2025)' },
          { value: '12.4%', label: 'Independent artist share growth YoY' },
          { value: '40%', label: 'Cost reduction vs fragmented model' },
          { value: '2x', label: 'Faster time-to-market integrated vs fragmented' },
        ],
      },
      {
        id: 'the-problem',
        title: 'The Problem: Fragmented Infrastructure',
        type: 'card-grid',
        cards: [
          {
            title: '10+ Vendors Per Artist',
            description:
              'Production, distribution, brand, management, legal, and marketing each require separate providers. No creative continuity between stages.',
          },
          {
            title: 'High Operating Costs',
            description:
              'Each vendor adds margin, coordination overhead, and contractual complexity. The fragmented model costs 40% more than an integrated approach.',
          },
          {
            title: 'Slow Time-to-Market',
            description:
              'Coordinating across independent providers adds months to release cycles. Momentum is lost between creative stages.',
          },
          {
            title: 'Talent Attrition',
            description:
              'Promising artists fall through the cracks between service providers. No single entity owns the full artist development journey.',
          },
        ],
      },
      {
        id: 'competitive-landscape',
        title: 'Competitive Landscape',
        type: 'text',
        body: [
          "No existing competitor offers a truly integrated 360° physical ecosystem for artist development. Recording studios operate independently of marketing agencies. Distribution services don't offer creative development. Management companies don't own production infrastructure.",
          'The closest analogs are major label infrastructure (Sony, Universal, Warner) — but these are exclusive, expensive, and inaccessible to emerging artists. Sonora Music Creative Hub democratizes this model by offering integrated infrastructure as a service.',
        ],
      },
    ],
  },
  {
    title: 'Industry Analysis',
    slug: 'industry-analysis',
    venture: 'Sonora Music Creative Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      'Deep industry analysis of music infrastructure fragmentation and the opportunity for integrated creative ecosystems.',
    readingTime: '6 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Industry Analysis', 'Strategy', 'Research'],
    sections: [
      {
        id: 'industry-structure',
        title: 'Current Industry Structure',
        type: 'text',
        body: [
          "The music industry's service layer is organized around specialized silos. Recording, production, mixing, mastering, branding, marketing, distribution, legal, management, and touring each operate as independent industries. An emerging artist must become a project manager just to coordinate their own career.",
          'This structure benefits established artists who can afford dedicated teams, but creates an insurmountable coordination barrier for emerging talent. The industry is optimized for the top 1% while leaving the remaining 99% to navigate fragmentation alone.',
        ],
      },
      {
        id: 'the-solution',
        title: 'The Sonora Model: 360° Integration',
        type: 'callout',
        calloutTitle: 'Todo Bajo un Mismo Techo',
        calloutBody:
          'Sonora Music Creative Hub brings 11 interconnected spaces under one roof — from recording studios and beat labs to marketing departments and executive offices. Every stage of the artist journey, from discovery to global scale, orchestrated within a single ecosystem. 40% cost reduction. 2x faster releases. Unified creative vision.',
        calloutType: 'success',
      },
      {
        id: 'artist-journey',
        title: 'The 6-Stage Artist Journey',
        type: 'timeline',
        items: [
          'Stage 1 — Discovery: A&R identifies raw talent through scouting, digital footprint, and referrals. Initial assessment and market potential analysis.',
          'Stage 2 — Formation: Artistic identity development: vocal coaching, songwriting workshops, image consulting, and artistic direction.',
          'Stage 3 — Production: Recording in Studio A, beat production in Beat Lab, mixing and mastering by in-house engineers.',
          'Stage 4 — Brand: Visual identity, social media strategy, content production, press kit development, narrative creation.',
          'Stage 5 — Launch: Distribution across all platforms, premiere event at Velvet Courtyard, PR campaign, playlist strategy.',
          'Stage 6 — Scale: International expansion, touring support, brand partnerships, publishing deals, long-term career architecture.',
        ],
      },
      {
        id: 'revenue-architecture',
        title: 'Revenue Architecture',
        type: 'metrics',
        metrics: [
          { value: '8 Streams', label: 'Production, Academy, Coworking, Events, Merch, Management, Consulting, Sync Licenses' },
          { value: 'B2B + B2C', label: 'Artist services + label partnerships + brand sponsorships' },
          { value: 'Recurring', label: 'Membership, management commissions, retainers' },
          { value: 'Event-Driven', label: 'Private listening sessions, showcases, Velvet Rouge Nights' },
        ],
      },
    ],
  },
  {
    title: 'Business Model',
    slug: 'business-model',
    venture: 'Sonora Music Creative Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      "Sonora Music Creative Hub's business model — 8 diversified revenue streams built around a 360° artist development ecosystem.",
    readingTime: '5 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Business Model', 'Strategy', 'Monetization'],
    sections: [
      {
        id: 'revenue-streams',
        title: '8 Revenue Streams',
        type: 'card-grid',
        cards: [
          {
            title: 'Production Services',
            description:
              'Recording sessions, mixing, mastering, beat production. Tiered pricing by session type and engineer seniority.',
          },
          {
            title: 'Academy',
            description:
              'Vocal coaching, instrument lessons, songwriting workshops, production courses. Group and private formats.',
          },
          {
            title: 'Creative Coworking',
            description:
              'Velvet Artist Loft memberships. Creative networking space with scheduled programming and community events.',
          },
          {
            title: 'Events',
            description:
              'Private listening sessions, artist showcases, Velvet Rouge Nights. Tickets, sponsorships, and VIP experiences.',
          },
          {
            title: 'Artist Management',
            description:
              'Commission-based management for hub-developed artists. Percentage of recorded music, publishing, touring, and merch.',
          },
          {
            title: 'Merchandising',
            description:
              'In-house merch design, production, and distribution for hub artists. Brand collaborations and limited drops.',
          },
          {
            title: 'Industry Consulting',
            description:
              'Strategic advisory for labels, brands, and investors entering the music space. Market analysis and deal structuring.',
          },
          {
            title: 'Sync & Licensing',
            description:
              'Music placement in film, TV, advertising, and gaming. Revenue share with hub artists and production catalog.',
          },
        ],
      },
      {
        id: 'unit-economics',
        title: 'Key Economics',
        type: 'metrics',
        metrics: [
          { value: '40%', label: 'Cost reduction vs fragmented model' },
          { value: '2x', label: 'Faster time-to-market' },
          { value: '100%', label: 'Internal talent pipeline' },
          { value: '360°', label: 'Integrated artist development' },
        ],
      },
    ],
  },
  {
    title: 'Product Strategy',
    slug: 'product-strategy',
    venture: 'Sonora Music Creative Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      'Product strategy, vision, and operational blueprint for Sonora Music Creative Hub\'s 11 interconnected spaces.',
    readingTime: '6 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Product Strategy', 'Vision', 'Roadmap'],
    sections: [
      {
        id: 'vision-statement',
        title: 'Vision Statement',
        type: 'quote',
        quote:
          'No estás alquilando un edificio. Estás construyendo una fábrica de artistas.',
        quoteAttr: 'Sonora Music Creative Hub — You are not renting a building. You are building an artist factory.',
      },
      {
        id: 'physical-spaces',
        title: '11 Interconnected Spaces',
        type: 'card-grid',
        body: [
          'Each space in the hub is designed for a specific creative function, with intentional adjacency to enable flow between stages.',
        ],
        cards: [
          {
            title: '01 — Velvet Artist Loft',
            description:
              'Creative coworking, networking, listening parties, songwriting sessions, executive lounge. The social heart of the hub.',
          },
          {
            title: '02 — Studio A',
            description:
              'Professional recording, premium production, vocal booth. Flagship recording facility with industry-standard equipment.',
          },
          {
            title: '03 — Beat Lab',
            description:
              'Music production, beatmaking, resident producers. A dedicated space for the production craft.',
          },
          {
            title: '04 — Academy',
            description:
              'Vocal training, instruments, songwriting, artistic formation. Education as a core service, not an afterthought.',
          },
          {
            title: '05 — Rehearsal Room',
            description:
              'Rehearsals, choreography, showcases, auditions. Performance preparation in a professional setting.',
          },
          {
            title: '06 — Strategy Room',
            description:
              'Contracts, planning, investor meetings, management. Where business decisions are made.',
          },
          {
            title: '07 — Marketing & Branding',
            description:
              'Social media, advertising, design, content production. In-house creative marketing team.',
          },
          {
            title: '08 — Legal Affairs',
            description:
              'Contracts, taxes, royalties, publishing administration. Legal infrastructure for artist protection.',
          },
          {
            title: '09 — A&R Department',
            description:
              'Scouting, talent evaluation, artistic development. The discovery engine of the hub.',
          },
          {
            title: '10 — Executive Office',
            description:
              'General direction, executive production. Leadership and strategic oversight.',
          },
          {
            title: '11 — Velvet Courtyard',
            description:
              'Events, networking, launches, creative markets, VIP experiences. Where the hub meets the world.',
          },
        ],
      },
      {
        id: 'strategic-differentiation',
        title: 'Key Differentiators',
        type: 'callout',
        calloutTitle: 'Integration Is the Product',
        calloutBody:
          'The hub is not a collection of rentable spaces. It is a vertically integrated artist development engine where producers work alongside marketers, A&R scouts collaborate with legal, and every stage of the artist journey is orchestrated under one roof. The adjacency is the feature.',
        calloutType: 'success',
      },
    ],
  },
  {
    title: 'Pitch Deck',
    slug: 'pitch-deck',
    venture: 'Sonora Music Creative Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      'Investor and partner pitch deck for Sonora Music Creative Hub — the integrated artist development ecosystem.',
    readingTime: '4 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Pitch Deck', 'Investor', 'Presentation'],
    sections: [
      {
        id: 'problem-slide',
        title: 'The Problem',
        type: 'callout',
        calloutTitle: 'Fragmentado entre 10+ Proveedores',
        calloutBody:
          'Artists must coordinate recording, production, branding, marketing, legal, management, and distribution across separate vendors. High costs, slow releases, inconsistent vision, and talent lost between the cracks.',
        calloutType: 'warning',
      },
      {
        id: 'solution-slide',
        title: 'The Solution',
        type: 'text',
        body: [
          'Sonora Music Creative Hub is a 360° physical ecosystem where every stage of the artist journey is orchestrated under one roof. 11 interconnected spaces spanning creative production, brand development, business operations, and community events.',
          'An artist enters through discovery — A&R scouting, vocal assessment, market analysis — and progresses through formation, production, branding, launch, and global scaling without ever leaving the ecosystem.',
        ],
      },
      {
        id: 'metrics',
        title: 'Key Metrics',
        type: 'metrics',
        metrics: [
          { value: '40%', label: 'Cost reduction' },
          { value: '2x', label: 'Faster releases' },
          { value: '11', label: 'Interconnected spaces' },
          { value: '6', label: 'Stage artist journey' },
        ],
      },
      {
        id: 'spaces',
        title: 'The 11 Spaces',
        type: 'timeline',
        items: [
          '01 — Velvet Artist Loft (coworking, networking, listening parties)',
          '02 — Studio A (professional recording, production)',
          '03 — Beat Lab (music production, beatmaking)',
          '04 — Academy (vocal training, instruments, workshops)',
          '05 — Rehearsal Room (choreography, showcases)',
          '06 — Strategy Room (contracts, planning, investor meetings)',
          '07 — Marketing & Branding (social media, design, content)',
          '08 — Legal Affairs (contracts, royalties, publishing)',
          '09 — A&R Department (scouting, talent evaluation)',
          '10 — Executive Office (leadership, strategic oversight)',
          '11 — Velvet Courtyard (events, networking, launches)',
        ],
      },
      {
        id: 'ask',
        title: 'Partnership Opportunity',
        type: 'callout',
        calloutTitle: 'Building the Artist Factory',
        calloutBody:
          'Seeking strategic partners, investors, and label partners to activate the Sonora Music Creative Hub model. Currently in development phase with architectural blueprint complete, artist pipeline methodology defined, and revenue model validated.',
        calloutType: 'info',
      },
    ],
  },
  {
    title: 'Launch Strategy',
    slug: 'launch-strategy',
    venture: 'Sonora Music Creative Hub',
    ventureLabel: 'Sonora Music Hub',
    ventureSlug: 'sonora',
    description:
      'Go-to-market strategy and launch plan for Sonora Music Creative Hub — from blueprint to operational ecosystem.',
    readingTime: '5 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Launch Strategy', 'Marketing', 'Growth'],
    sections: [
      {
        id: 'launch-phases',
        title: 'Launch Phases',
        type: 'timeline',
        items: [
          'Phase 0 (Blueprint) — Architectural design complete. 11-space layout finalized. Artist journey methodology defined. Revenue model validated.',
          'Phase 1 (Build-Out) — Physical space construction and equipment installation. Studio A and Beat Lab as anchor tenants. Core team hiring.',
          'Phase 2 (Soft Launch) — Velvet Artist Loft and Academy operational. First artist cohort enrolled. Private showcase events.',
          'Phase 3 (Full Launch) — All 11 spaces operational. Velvet Rouge Nights event series launched. Label partnerships active. First artist graduates.',
          'Phase 4 (Scale) — Second location planning. Franchise model development. International artist pipeline.',
        ],
      },
      {
        id: 'go-to-market',
        title: 'Go-to-Market Channels',
        type: 'card-grid',
        cards: [
          {
            title: 'Label Partnerships',
            description:
              'Strategic alliances with independent labels seeking integrated development infrastructure for their rosters.',
          },
          {
            title: 'Artist Discovery Network',
            description:
              'A&R scouting pipeline through social media, open mics, talent shows, and music school partnerships.',
          },
          {
            title: 'Industry Events',
            description:
              'Velvet Rouge Nights as recurring showcase platform. Private listening sessions for A&R executives and tastemakers.',
          },
          {
            title: 'Direct-to-Artist',
            description:
              'Academy and studio services marketed directly to emerging artists through social media, content marketing, and referral programs.',
          },
        ],
      },
      {
        id: 'success-metrics',
        title: 'Success Metrics',
        type: 'metrics',
        metrics: [
          { value: '50+', label: 'Artists in pipeline (Year 1)' },
          { value: '85%+', label: 'Studio utilization rate' },
          { value: '3+', label: 'Label partnerships active' },
          { value: '8', label: 'Revenue streams operational' },
        ],
      },
    ],
  },
];
