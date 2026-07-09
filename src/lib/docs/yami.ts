import { DocContent } from '@/types';

export const yamiDocs: DocContent[] = [
  {
    title: 'Executive Summary',
    slug: 'executive-summary',
    venture: 'YAMI',
    ventureLabel: 'YAMI',
    ventureSlug: 'yami',
    description:
      'A one-page overview of YAMI — the first preventive mental health ecosystem built for Mexico, combining anonymous screening, AI accompaniment, and community support.',
    readingTime: '4 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Overview', 'Business Case', 'Executive'],
    sections: [
      {
        id: 'problem',
        title: 'The Problem',
        type: 'callout',
        calloutTitle: '14.4 Million Mexicans Are Alone in Their Darkness',
        calloutBody:
          '24 million Mexicans live with a mental disorder. Fewer than 40% receive adequate care. Mexico allocates only 1.5% of its health budget to mental health — half the WHO recommendation. 14.4 million people have no access to support at all.',
        calloutType: 'warning',
      },
      {
        id: 'solution',
        title: 'The Solution',
        type: 'arch',
        body: [
          'YAMI is a three-layer preventive mental health ecosystem — detection, accompaniment, and community — delivered as an anonymous, free, culturally Mexican platform. It is not a replacement for therapy. It is a bridge between silence and the first time someone says "I need help."',
          'Built around three interconnected layers — MIRU (見る, to see), KIKU (聞く, to listen), and TOMONI (共に, together) — YAMI meets people where they are and guides them toward care before crisis.',
        ],
      },
      {
        id: 'why-now',
        title: 'Why Now',
        type: 'text',
        body: [
          'The global digital mental health market is growing at 17% CAGR, from $8.53B USD in 2025 to a projected $41.16B by 2035. Latin America is the fastest-growing region. Mexico currently has zero dominant local competitors in the preventive mental health space.',
          'Meanwhile, suicides in Mexico rose 48% between 2015 and 2024, reaching 8,856. There are only 1.1 psychiatrists per 100,000 people (WHO recommends 10). The need is not theoretical — it is accelerating.',
        ],
      },
      {
        id: 'traction',
        title: 'Traction & Milestones',
        type: 'timeline',
        items: [
          '2025 — Built by a single founder in 3 weeks at ~$15K USD cost (agency equivalent: ~$250K)',
          'Landing page with full brand identity and waitlist (yami-mx.vercel.app)',
          'MIRU: PHQ-9 + GAD-7 screening tests with scoring, severity levels, and crisis protocol',
          'KIKU: Anonymous emotional chat with crisis detection and voice dictation (es-MX)',
          'TOMONI: 6 anonymous support circles with real-time chat',
          'Complete brand system: identity, manifesto, tone of voice, content strategy, 11-color palette',
          'Clinical partnerships: CONASAMA, PSI México, Línea de la Vida (800 911 2000)',
        ],
      },
      {
        id: 'business-model',
        title: 'Business Model',
        type: 'metrics',
        metrics: [
          { value: 'Freemium', label: 'B2C: free always, premium $49/yr' },
          { value: 'B2B', label: 'Corporate: $8/employee/mo, 70% of MX companies have no program' },
          { value: 'Marketplace', label: '20% commission on therapist booking' },
          { value: 'Year 3 ARR', label: '~$14M USD ($252M MXN), 68% margin' },
        ],
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
      'Deep market analysis of the digital mental health opportunity in Mexico — TAM/SAM/SOM, demographics, competitive landscape, and strategic recommendations.',
    readingTime: '10 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Market Analysis', 'Research', 'Mental Health'],
    sections: [
      {
        id: 'market-size',
        title: 'Market Size & Growth',
        type: 'metrics',
        body: [
          'The digital mental health market represents one of the fastest-growing opportunities in health technology globally, with Latin America leading adoption growth.',
        ],
        metrics: [
          { value: '$8.53B', label: 'Global digital mental health market 2025' },
          { value: '$41.16B', label: 'Projected market 2035 (17% CAGR)' },
          { value: '17.8%', label: 'LatAm CAGR — fastest globally' },
          { value: '$1.15B', label: 'Mexico TAM by 2035' },
        ],
      },
      {
        id: 'mexico-crisis',
        title: 'The Mexican Mental Health Crisis',
        type: 'card-grid',
        body: ['Mexico faces a structural mental health emergency that existing systems cannot address:'],
        cards: [
          {
            title: '24M Affected',
            description:
              '24 million Mexicans live with a mental disorder. 58.5% are women, 41.5% men. 34.85M have experienced depressive symptoms.',
          },
          {
            title: '<40% Receive Care',
            description:
              'Fewer than 40% of those affected receive adequate treatment. 14.4 million people — more than the population of Chile — have zero access to support.',
          },
          {
            title: '1.1 Psychiatrists per 100K',
            description:
              'WHO recommends 10 per 100K. Mexico has 1.1. The mental health system is structurally under-resourced at every level.',
          },
          {
            title: 'Suicides Up 48%',
            description:
              '8,856 suicides in 2024, a 48% increase since 2015. Men have 4.2x higher completion rate — a silent male mental health crisis.',
          },
        ],
      },
      {
        id: 'personas',
        title: 'Target Personas',
        type: 'card-grid',
        body: ['The primary user base spans four key personas, each representing a distinct entry point into the YAMI ecosystem.'],
        cards: [
          {
            title: 'Lucía, 22 — University Student',
            description:
              'CDMX, TikTok-native, social anxiety, class C+. 18-35 is the priority age group representing 65% of mental health app users. 70% of users are women.',
          },
          {
            title: 'Carlos, 31 — Software Engineer',
            description:
              'Remote worker, Instagram, burnout, class C+. Represents the growing corporate mental health need: 60% of Mexican employees report burnout symptoms.',
          },
          {
            title: 'María, 44 — Homemaker',
            description:
              'Edomex, Facebook user, depression, class D. Represents the underserved adult demographic with limited access to digital health literacy.',
          },
          {
            title: 'Diego, 24 — Rural Laborer',
            description:
              'Oaxaca, WhatsApp-only, first-generation internet access, class D/E. Represents the 3:1 urban vs. rural digital divide and the male mental health gap.',
          },
        ],
      },
      {
        id: 'competition',
        title: 'Competitive Landscape',
        type: 'text',
        body: [
          'The Mexican digital mental health market has 8 identified competitors, but none occupy the preventive, anonymous, free, culturally Mexican space that YAMI targets.',
          'YANA (17M users) is the closest competitor — a Mexican chatbot with freemium model — but is vulnerable due to generic positioning, lack of community, and no tiered detection. Calm and Headspace are in a different category (meditation, English-language, US-centric). BetterHelp and Terapify serve the therapy market at price points inaccessible to most Mexicans.',
          'YAMI\'s competitive advantage is structural: it is the only ecosystem covering all three layers (detection + accompaniment + community) in a single free, anonymous, 100% Mexican Spanish platform.',
        ],
      },
      {
        id: 'strategic-position',
        title: 'Strategic Positioning',
        type: 'callout',
        calloutTitle: 'The Uncontested Space',
        calloutBody:
          'Ignore Calm and Headspace — different category. Attack YANA directly — vulnerable leader without identity. Position YAMI as "before BetterHelp" — the funnel, not the competitor. 70% of Mexican companies have no mental health program, and 60% of employees report burnout. The B2B opportunity alone represents $18M in Year 5 revenue.',
        calloutType: 'success',
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
      'Investor pitch deck: YAMI (闇) — the first preventive mental health ecosystem for Mexico. $3.5M USD raise for 22%.',
    readingTime: '4 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Pitch Deck', 'Investor', 'Presentation'],
    sections: [
      {
        id: 'problem-slide',
        title: 'The Problem',
        type: 'callout',
        calloutTitle: 'El Mercado del Silencio',
        calloutBody:
          '24 million Mexicans with mental disorders. Fewer than 40% receive care. 14.4 million with zero support. Only 1.5% of health budget to mental health. Suicides up 48% since 2015.',
        calloutType: 'warning',
      },
      {
        id: 'opportunity-slide',
        title: 'Market Opportunity',
        type: 'metrics',
        metrics: [
          { value: '$8.53B', label: 'Global market 2025' },
          { value: '$41.16B', label: 'Global market 2035' },
          { value: '17%', label: 'CAGR — fastest in LatAm' },
          { value: '0', label: 'Local competitors in prevention' },
        ],
      },
      {
        id: 'solution-slide',
        title: 'The Solution: Three-Layer Ecosystem',
        type: 'card-grid',
        body: [
          'YAMI is not a single app — it is a preventive ecosystem with three interconnected layers, each addressing a different stage of the mental health journey.',
        ],
        cards: [
          {
            title: 'MIRU (見る) — To See',
            description:
              'Anonymous emotional screening using PHQ-9 and GAD-7 standardized tests. 3 minutes. An emotional compass that tells you: "this deserves attention." Crisis detection triggers immediate helpline connection.',
          },
          {
            title: 'KIKU (聞く) — To Listen',
            description:
              'Anonymous emotional chat with conscious responses. Guided journaling, regulation exercises, crisis keyword detection. No judgment, no schedule, no record of what hurts.',
          },
          {
            title: 'TOMONI (共に) — Together',
            description:
              'Anonymous support circles moderated by clinical partners. Six circles covering anxiety, daily life, burnout, loneliness, grief, and general support. Healing is lighter in community.',
          },
        ],
      },
      {
        id: 'differentiator',
        title: 'The Uncopyable Moat',
        type: 'quote',
        quote:
          'Calm sells meditation. Headspace sells mindfulness. YAMI sells permission to be not okay in a culture that demands being okay. That cannot be copied with code.',
        quoteAttr: 'Brand Philosophy',
      },
      {
        id: 'traction-slide',
        title: 'Traction',
        type: 'timeline',
        items: [
          'Built by 1 founder in 3 weeks at ~$15K USD (agency equivalent: ~$250K)',
          'Full product live: MIRU, KIKU, TOMONI — not a Powerpoint',
          'Complete brand identity: 11-color palette, 3-typeface system, manifesto, tone of voice',
          'Clinical endorsements: CONASAMA, PSI México, Línea de la Vida (800 911 2000)',
          'Content strategy: TikTok-first, 4-week pre-launch calendar',
        ],
      },
      {
        id: 'ask-slide',
        title: 'The Ask',
        type: 'callout',
        calloutTitle: '$3.5M USD for 22% ($15.9M pre-money)',
        calloutBody:
          'Use of funds: Product 35%, Marketing 43%, Team 17%, Ops 5%. Milestones: 50K downloads in 6 months, 200K in 12 months, 500K in 18 months. Year 3 target: $14M ARR at 68% margin. Exit: $50-80M acquisition by YANA (Year 3-4) or $200-400M by BetterHelp/Calm (Year 5-6).',
        calloutType: 'info',
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
      'Four detailed user personas driving YAMI\'s product design, feature priorities, and market strategy.',
    readingTime: '6 min read',
    lastUpdated: 'Jul 2026',
    tags: ['UX', 'Personas', 'Design'],
    sections: [
      {
        id: 'persona-1',
        title: 'Lucía — The University Student',
        type: 'card-grid',
        body: ['22 years old, Mexico City. Sociology student at UNAM. TikTok-native. Lives with her family in a C+ class neighborhood. Has never spoken to a therapist but has been experiencing social anxiety since her second year of university.'],
        cards: [
          {
            title: 'Needs',
            description: 'Anonymous, no-cost entry point. Wants to understand what she\'s feeling before telling anyone — including her family — that something is wrong.',
          },
          {
            title: 'YAMI Fit',
            description: 'MIRU screening gives her a private answer. KIKU chat lets her express without judgment. She enters through TikTok content (#PermisoParaEstarMal) and stays because she feels seen.',
          },
        ],
      },
      {
        id: 'persona-2',
        title: 'Carlos — The Burned-Out Professional',
        type: 'card-grid',
        body: ['31 years old, Guadalajara. Software engineer at a fintech startup. Remote worker since 2020. High-functioning but increasingly irritable, exhausted, and disconnected. 60% of Mexican employees report similar burnout symptoms.'],
        cards: [
          {
            title: 'Needs',
            description: 'Doesn\'t have time for therapy. Needs something that fits between meetings. Skeptical of "wellness" apps but would trust a clinical tool.',
          },
          {
            title: 'YAMI Fit',
            description: 'PHQ-9 takes 3 minutes. KIKU is available 24/7 without scheduling. Corporate B2B tier brings YAMI through his employer at no personal cost.',
          },
        ],
      },
      {
        id: 'persona-3',
        title: 'María — The Underserved Adult',
        type: 'card-grid',
        body: ['44 years old, State of Mexico. Homemaker, mother of two. Uses Facebook as her primary digital platform. Has experienced depressive episodes for years but has never received treatment. Represents the 41.5% of affected Mexicans who are women over 30.'],
        cards: [
          {
            title: 'Needs',
            description: 'Simple, accessible interface. Spanish-first. No English. No complex navigation. Needs to feel that the platform is "for someone like her."',
          },
          {
            title: 'YAMI Fit',
            description: '100% Mexican Spanish. Clinical but warm design. Facebook-accessible content. Anonymous entry removes stigma barrier that prevents her generation from seeking help.',
          },
        ],
      },
      {
        id: 'persona-4',
        title: 'Diego — The Silent Male',
        type: 'card-grid',
        body: ['24 years old, rural Oaxaca. Day laborer. First-generation smartphone user. WhatsApp-only for internet access. Men have 4.2x higher suicide completion rate in Mexico but represent only 41.5% of those who seek help. Diego will never search for a mental health app.'],
        cards: [
          {
            title: 'Needs',
            description: 'Zero friction. No app store. No signup. Must work on a low-end Android phone with intermittent connectivity.',
          },
          {
            title: 'YAMI Fit',
            description: 'Web-based, no install required. Works on any device with a browser. WhatsApp-forward viral loop ("share with 3 friends"). KIKU chat interface is as familiar as messaging.',
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
      'The product vision, design principles, and strategic direction for YAMI — the first preventive mental health ecosystem for Mexico.',
    readingTime: '5 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Product Vision', 'Strategy', 'Design'],
    sections: [
      {
        id: 'vision-statement',
        title: 'Vision Statement',
        type: 'quote',
        quote:
          'Before it becomes a crisis, let it become a conversation.',
        quoteAttr: 'YAMI — Antes de que sea crisis, que sea conversación',
      },
      {
        id: 'product-philosophy',
        title: 'Product Philosophy',
        type: 'text',
        body: [
          'YAMI is built on a single insight: the barrier to mental health care in Mexico is not lack of tools — it is lack of permission. Mexican culture carries deep expectations of stoicism, self-sufficiency, and silence around emotional struggle. Before someone can accept help, they need to feel allowed to struggle in the first place.',
          'This is what YAMI sells: permission. Not meditation. Not mindfulness. Permission to be not okay in a culture that demands being okay. Permission to speak what you\'ve been carrying alone. Permission to reach for help before you hit crisis.',
        ],
      },
      {
        id: 'design-principles',
        title: 'Design Principles',
        type: 'list',
        items: [
          'Anonymity by default — no accounts, no email required. The product trusts users before they trust it.',
          'No progress metrics — no streaks, no scores, no gamification. Healing is not a competition.',
          'Silence is welcome — users can sit in KIKU without typing. Presence without performance.',
          'Community is not a feature — TOMONI circles are moderated, not algorithmic. Safety over scale.',
          'Clinical, not playful — the aesthetic is warm but serious. Mental health is not a game.',
          'Mexico first — every word, every color, every reference is native, not translated.',
        ],
      },
      {
        id: 'product-architecture',
        title: 'Three-Layer Architecture',
        type: 'timeline',
        items: [
          'Layer 1 — MIRU (見る): Anonymous emotional screening. PHQ-9 + GAD-7. 3-5 minutes. Crisis detection triggers immediate helpline (Línea de la Vida 800 911 2000). Not a diagnosis — an emotional compass.',
          'Layer 2 — KIKU (聞く): Anonymous emotional chat. Conscious AI responses. Guided journaling. Regulation exercises. Voice dictation (es-MX). Every session is fresh — no history stored. Crisis keyword detection.',
          'Layer 3 — TOMONI (共に): Anonymous support circles. 6 circles: anxiety, daily life, burnout, loneliness, grief, general. Moderated by clinical partners. Message limit: 500 characters. Listen without pressure to speak.',
        ],
      },
      {
        id: 'what-yami-is-not',
        title: 'What YAMI Is Not',
        type: 'callout',
        calloutTitle: 'Clear Boundaries',
        calloutBody:
          'YAMI is not a therapy replacement. It is not a medical diagnosis. It is not a social network. It is not another meditation app. It is not disguised corporate wellness. YAMI is a bridge — from silence to the first time someone says "I need help."',
        calloutType: 'info',
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
      'How YAMI uses AI for emotional accompaniment, crisis detection, and clinical screening — built for safety, anonymity, and Mexican cultural context.',
    readingTime: '7 min read',
    lastUpdated: 'Jul 2026',
    tags: ['AI/ML', 'Architecture', 'Engineering'],
    sections: [
      {
        id: 'ai-philosophy',
        title: 'AI Philosophy: Accompaniment, Not Diagnosis',
        type: 'text',
        body: [
          'YAMI\'s AI strategy is guided by a fundamental constraint: the AI never diagnoses. It accompanies. Clinical screening (PHQ-9, GAD-7) follows standardized, validated protocols with clear score ranges and severity levels. The AI layer in KIKU is designed for emotional reflection, not medical assessment.',
          'This distinction is both ethical and strategic. By clearly positioning AI as an accompaniment tool rather than a diagnostic one, YAMI avoids regulatory exposure while delivering meaningful support at scale.',
        ],
      },
      {
        id: 'kiku-architecture',
        title: 'KIKU Emotional AI Architecture',
        type: 'card-grid',
        body: ['KIKU\'s chat system uses a carefully architected AI pipeline optimized for emotional safety and cultural relevance.'],
        cards: [
          {
            title: 'Response Generation',
            description:
              'LLM-based responses fine-tuned with Mexican Spanish emotional vocabulary. Prioritizes reflection over advice. No therapeutic claims. Warm but clinical tone.',
          },
          {
            title: 'Crisis Detection',
            description:
              'Keyword-based crisis signal detection (suicid*, morir, lastim*, etc.). Immediate escalation to Línea de la Vida (800 911 2000). Accuracy over false negatives — we err on the side of safety.',
          },
          {
            title: 'Session Freshness',
            description:
              'Every KIKU session starts clean. No message history is persisted. The AI has context only within the current session, preserving complete anonymity.',
          },
          {
            title: 'Voice Dictation',
            description:
              'Web Speech API integration with es-MX locale. Users can speak instead of type — lowering barriers for users with limited literacy or emotional vocabulary.',
          },
        ],
      },
      {
        id: 'miru-clinical',
        title: 'MIRU Clinical Screening Engine',
        type: 'text',
        body: [
          'MIRU implements PHQ-9 (Patient Health Questionnaire-9) and GAD-7 (Generalized Anxiety Disorder-7) — internationally validated screening instruments. PHQ-9 covers 9 depression criteria over a 2-week timeframe with scores 0-27. GAD-7 covers 7 anxiety criteria with 89% sensitivity and 82% specificity for GAD diagnosis.',
          'Both instruments produce four severity levels (minimal, mild, moderate, severe). Crisis protocol activates automatically if PHQ-9 question 9 (self-harm thoughts) scores above 0 or if severity reaches "severe." Results can be passed to KIKU via URL parameters to provide context-aware support.',
        ],
      },
      {
        id: 'data-privacy',
        title: 'Data Privacy & Anonymity',
        type: 'callout',
        calloutTitle: 'Designed for Zero-Trust',
        calloutBody:
          'No accounts. No emails. No phone numbers. MIRU and KIKU operate entirely in the client. Screening results stored in localStorage (not servers). KIKU sessions have no history. TOMONI uses anonymous user IDs. The architecture assumes zero trust — because in Mexico, trust is the rarest resource in mental health.',
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
      'Technical architecture of the YAMI platform — a zero-install web ecosystem designed for anonymity, accessibility, and crisis safety.',
    readingTime: '6 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Architecture', 'Engineering', 'Technical'],
    sections: [
      {
        id: 'architecture-principles',
        title: 'Architecture Principles',
        type: 'text',
        body: [
          'YAMI\'s architecture is shaped by two non-negotiable constraints: the user must remain anonymous at all times, and the platform must work on any device with a browser — including the low-end Android phones that dominate Mexico\'s market.',
          'This drives an architecture that maximizes client-side processing, minimizes server-side data persistence, and uses progressive enhancement to deliver core functionality even on slow connections.',
        ],
      },
      {
        id: 'tech-stack',
        title: 'Technology Stack',
        type: 'list',
        items: [
          'Frontend: Pure HTML/CSS/JS — no framework. Zero build step. Loads instantly on any device.',
          'AI Backend: OpenRouter API for KIKU chat responses. No proprietary model hosting — cost-effective and scalable.',
          'Screening: PHQ-9 and GAD-7 implemented entirely client-side. Results in localStorage.',
          'Community: TOMONI circles via API with localStorage-based anonymous user IDs.',
          'Analytics: Privacy-preserving event tracking. No PII. No cookies.',
          'Hosting: Vercel with edge functions for API endpoints (15s timeout for chat).',
        ],
      },
      {
        id: 'system-components',
        title: 'System Components',
        type: 'card-grid',
        cards: [
          {
            title: 'MIRU Engine',
            description:
              'Client-side screening with PHQ-9 (9 questions) and GAD-7 (7 questions). Four severity levels. Crisis detection. Results stored in localStorage (last 20 sessions). Optional context pass to KIKU via URL params.',
          },
          {
            title: 'KIKU Chat',
            description:
              'Anonymous chat interface. Serverless API function calls to OpenRouter with Mexican Spanish prompt. Crisis keyword detection. Voice dictation via Web Speech API. No session history.',
          },
          {
            title: 'TOMONI Circles',
            description:
              '6 anonymous support circles. API-driven with localStorage-based anonymous IDs. 500-character message limit. Moderated content pipeline for safety.',
          },
          {
            title: 'Content Engine',
            description:
              'Manifesto-driven content system. TikTok-first distribution. Educational carousels. SEO-optimized crisis content (emergency keywords, helpline info).',
          },
        ],
      },
      {
        id: 'crisis-protocol',
        title: 'Crisis Protocol Architecture',
        type: 'callout',
        calloutTitle: 'Safety-First Design',
        calloutBody:
          'Crisis detection runs at two levels: MIRU (PHQ-9 Q9 self-harm scoring) and KIKU (real-time keyword detection). Both trigger immediate display of Línea de la Vida (800 911 2000) and SAPTEL (55 5259 8121) — Mexico\'s official crisis hotlines. The crisis float button is visible on every screen of the platform.',
        calloutType: 'success',
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
      'YAMI product roadmap — from viral launch to scalable preventive mental health ecosystem for Latin America.',
    readingTime: '4 min read',
    lastUpdated: 'Jul 2026',
    tags: ['Roadmap', 'Planning', 'Future'],
    sections: [
      {
        id: 'phase-1',
        title: 'Phase 1: Viral Seed (Months 1-3)',
        type: 'list',
        items: [
          'TikTok content engine: 5 videos/day, #PermisoParaEstarMal hashtag campaign',
          '20 psychologist endorsements as clinical ambassadors',
          '100K TikTok followers, 5K waitlist signups',
          'WhatsApp viral loop ("share with 3 friends")',
        ],
      },
      {
        id: 'phase-2',
        title: 'Phase 2: Launch (Months 4-6)',
        type: 'card-grid',
        cards: [
          {
            title: 'App Store Launch',
            description:
              'Web wrapper → progressive native experience. $300K USD ($5.4M MXN) in targeted ads. CDMX, Monterrey, Guadalajara focus.',
          },
          {
            title: 'B2B Pilot',
            description:
              '10 corporate clients for YAMI Pro. $100K annual contract value target. Burnout reduction as measurable KPI.',
          },
          {
            title: 'Clinical Validation',
            description:
              'Published efficacy study with UNAM/ITESM partnership. IRB-approved protocol for MIRU screening accuracy in Mexican population.',
          },
        ],
      },
      {
        id: 'phase-3',
        title: 'Phase 3: Scale (Months 7-18)',
        type: 'text',
        body: [
          'Scale phase targets 500K downloads with focus on corporate partnerships (B2B), UGC viral growth, and government integration. Key metric: 50 corporate clients representing $2.5M annual revenue. Government pilots with IMSS and state-level health secretariats.',
          'Platform expansion includes native mobile apps (React Native), expanded circle types, and AI model fine-tuning on Mexican Spanish mental health data.',
        ],
      },
      {
        id: 'long-term',
        title: 'Long-Term Vision',
        type: 'quote',
        quote:
          'YAMI becomes the default mental health front door for Mexico and Latin America — the first place millions turn to when they need to talk, before they reach crisis.',
        quoteAttr: 'Product Vision',
      },
    ],
  },
];
