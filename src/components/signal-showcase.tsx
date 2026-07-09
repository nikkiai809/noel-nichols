'use client';

import { FadeIn, FadeInStagger, FadeInItem } from '@/components/motion/fade-in';
import Link from 'next/link';

/* ─── Pipeline Stage ─── */

interface Stage {
  label: string;
  description: string;
  accent?: boolean;
}

const PIPELINE_STAGES: Stage[] = [
  { label: 'Data Sources', description: 'Spotify · YouTube · TikTok · Social Feeds · Cultural Signals' },
  { label: 'Normalization', description: 'Schema mapping, dedup, artist resolution, signal enrichment' },
  { label: 'Feature Store', description: 'Batch + real-time feature computation, versioned registry', accent: true },
  { label: 'AI Scoring', description: '6-dimension ensemble: velocity, penetration, momentum, spread, signal' },
  { label: 'Intelligence API', description: 'REST endpoints for search, scores, trends, on-demand inference' },
  { label: 'Dashboard', description: 'Interactive discovery, filters, exports, alerting' },
];

const SCORING_DIMENSIONS = [
  { label: 'Growth Velocity', value: 'Streaming growth rate of change over time' },
  { label: 'Playlist Penetration', value: '% of total streams from algorithmic playlists' },
  { label: 'Social Momentum', value: 'Engagement rate growth across platforms' },
  { label: 'Geographic Spread', value: 'Market diversity index — how many regions' },
  { label: 'Genre Crossover', value: 'Cross-genre audience overlap potential' },
  { label: 'Cultural Signal', value: 'Trending frequency × platform relevance weight' },
];

/* ─── Pipeline Visualizer ─── */

function PipelineVisualizer() {
  return (
    <div className="card p-6 md:p-10 glow-amber overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent-subtle)]/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="hidden md:flex items-stretch gap-0">
          {PIPELINE_STAGES.map((stage, i) => (
            <div key={stage.label} className="flex-1 flex items-stretch">
              <div className="flex-1 flex flex-col items-center text-center relative px-2 py-6">
                {/* Connector line */}
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[calc(50%+8px)] h-px bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent" />
                )}
                {i < PIPELINE_STAGES.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[calc(50%+8px)] h-px bg-gradient-to-l from-[var(--color-accent)]/20 to-transparent" />
                )}

                {/* Pulsing dot */}
                <div className="relative mb-3">
                  <span
                    className={`block w-3 h-3 rounded-full ${
                      stage.accent
                        ? 'bg-[var(--color-accent)] animate-pulse shadow-[0_0_12px_rgba(217,119,6,0.4)]'
                        : 'bg-[var(--color-fg-dim)]/40'
                    }`}
                  />
                </div>

                {/* Label */}
                <span
                  className={`text-[11px] font-semibold mb-1.5 ${
                    stage.accent ? 'text-[var(--color-accent-light)]' : 'text-[var(--color-fg)]/80'
                  }`}
                >
                  {stage.label}
                </span>

                {/* Description on hover */}
                <span className="text-[9px] text-[var(--color-fg-muted)] leading-relaxed max-w-[130px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                  {stage.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="flex md:hidden flex-col gap-0">
          {PIPELINE_STAGES.map((stage, i) => (
            <div key={stage.label} className="flex items-start gap-4 py-3 relative">
              {i < PIPELINE_STAGES.length - 1 && (
                <div className="absolute left-[5.5px] top-[14px] bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)]/20 to-transparent" />
              )}
              <span
                className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
                  stage.accent
                    ? 'bg-[var(--color-accent)] animate-pulse shadow-[0_0_8px_rgba(217,119,6,0.3)]'
                    : 'bg-[var(--color-fg-dim)]/40'
                }`}
              />
              <div>
                <span
                  className={`text-xs font-semibold ${
                    stage.accent ? 'text-[var(--color-accent-light)]' : 'text-[var(--color-fg)]/80'
                  }`}
                >
                  {stage.label}
                </span>
                <p className="text-[10px] text-[var(--color-fg-dim)] mt-0.5">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Scoring Dimensions Grid ─── */

function ScoringGrid() {
  return (
    <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {SCORING_DIMENSIONS.map((dim) => (
        <FadeInItem key={dim.label}>
          <div className="card p-4 text-center h-full">
            <div className="text-xs font-semibold text-[var(--color-accent-light)] mb-1">{dim.label}</div>
            <div className="text-[10px] text-[var(--color-fg-dim)] leading-relaxed">{dim.value}</div>
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

/* ─── Main Export ─── */

export function SignalShowcase() {
  return (
    <section className="px-4 md:px-10 py-16 md:py-24 relative overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent-subtle)]/20 via-transparent to-[var(--color-accent-subtle)]/10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[400px] bg-[var(--color-accent)]/1 rounded-full blur-[80px] md:blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <FadeIn>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-[10px] font-mono text-[var(--color-accent-light)] tracking-[0.15em] uppercase">Immersive Deep-Dive</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-[var(--color-fg)] mb-4">
            Inside{' '}
            <span className="gradient-accent">SIGNAL</span>
          </h2>
          <p className="text-sm md:text-base text-[var(--color-fg-muted)] max-w-2xl leading-relaxed mb-10">
            A complete walkthrough of the architecture, scoring engine, data pipeline, and intelligence API.
            Every component is designed for production — explainability, scalability, and reliability from day one.
          </p>
        </FadeIn>

        {/* Pipeline Visualization */}
        <div className="mb-8">
          <FadeIn>
            <span className="text-[10px] font-mono text-[var(--color-fg-dim)] tracking-[0.1em] uppercase block mb-4">
              Data Pipeline &amp; Architecture Flow
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="group">
              <PipelineVisualizer />
            </div>
          </FadeIn>
        </div>

        {/* Architecture Layers + Scoring + API in a grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {/* Architecture Overview */}
          <FadeIn delay={0.1}>
            <div className="card p-5 glow-amber">
              <div className="flex items-center gap-2 mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent-light)]">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <path d="M3 9h18" />
                  <path d="M9 3v18" />
                </svg>
                <span className="text-[10px] font-mono text-[var(--color-fg-dim)] tracking-[0.1em] uppercase">Architecture</span>
              </div>
              <div className="space-y-2">
                {[
                  '6-layer system: ingestion → normalization → feature store → scoring → API → dashboard',
                  '12 architecture components across all layers',
                  'Batch + real-time dual-path via shared Feature Store',
                  'Extensible adapter pattern for multi-provider data',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-[var(--color-fg-muted)]">
                    <span className="mt-1 w-1 h-1 rounded-full bg-[var(--color-accent)]/60 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Data Pipeline */}
          <FadeIn delay={0.15}>
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent-light)]">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                <span className="text-[10px] font-mono text-[var(--color-fg-dim)] tracking-[0.1em] uppercase">Data Pipeline</span>
              </div>
              <div className="space-y-2">
                {[
                  '5+ integrated data sources: Spotify, YouTube, TikTok, social feeds, cultural signals',
                  'Raw ingestion → schema normalization → feature computation → Feature Store write',
                  '382+ automated tests ensuring pipeline reliability across source changes',
                  'Quality gates at every stage: dedup, validation, signal preservation',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-[var(--color-fg-muted)]">
                    <span className="mt-1 w-1 h-1 rounded-full bg-[var(--color-accent)]/60 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Scoring Engine */}
          <FadeIn delay={0.2}>
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent-light)]">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                <span className="text-[10px] font-mono text-[var(--color-fg-dim)] tracking-[0.1em] uppercase">Scoring Engine</span>
              </div>
              <div className="space-y-2">
                {[
                  '6-dimensional ensemble scoring: velocity, penetration, momentum, spread, crossover, signal',
                  'Each dimension produces interpretable sub-scores with full transparency',
                  'Explainability built in: source attribution, weight visualization, confidence indicators',
                  '5K+ artists scored across multiple genres and markets',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-[var(--color-fg-muted)]">
                    <span className="mt-1 w-1 h-1 rounded-full bg-[var(--color-accent)]/60 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scoring Dimensions + CTA */}
        <div className="mb-8">
          <FadeIn>
            <span className="text-[10px] font-mono text-[var(--color-fg-dim)] tracking-[0.1em] uppercase block mb-4">
              Six Signal Dimensions
            </span>
          </FadeIn>
          <ScoringGrid />
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="text-center">
            <Link
              href="/projects/signal"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-light)] transition-all shadow-md hover:shadow-lg"
            >
              Explore the Full Case Study
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
