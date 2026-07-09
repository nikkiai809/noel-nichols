'use client';

import { FadeIn, FadeInStagger, FadeInItem } from '@/components/motion/fade-in';
import type { CaseSection, ArchNode, Screenshot } from '@/types';

interface CaseBodyProps {
  sections: CaseSection[];
  architecture?: ArchNode[];
  screenshots?: Screenshot[];
}

function ArchitectureFlow({ nodes }: { nodes: ArchNode[] }) {
  return (
    <FadeIn>
      <div className="card p-6 md:p-10 glow-amber">
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
          {nodes.map((node, i) => (
            <span key={node.label} className="flex items-center gap-1.5 md:gap-2">
              <span
                className={`inline-block px-3 py-1.5 text-[11px] font-mono rounded-md border transition-colors ${
                  node.primary
                    ? 'border-[var(--color-accent-border)] bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] font-semibold'
                    : 'border-[var(--color-border)] bg-[var(--color-bg-surface)] text-[var(--color-fg-dim)]'
                }`}
              >
                {node.label}
              </span>
              {i < nodes.length - 1 && (
                <span className="text-[var(--color-fg-dim)]/40 text-sm">&rarr;</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function ArchBlocks({ blocks }: { blocks: NonNullable<CaseSection['archBlocks']> }) {
  return (
    <FadeInStagger className="space-y-4">
      {blocks.map((block) => (
        <FadeInItem key={block.layer}>
          <div className="card p-5 md:p-6">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-fg)]">{block.layer}</h3>
                <div className="flex flex-wrap gap-1.5 mt-2 mb-2">
                  {block.components.map((c) => (
                    <span key={c} className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--color-accent-border)] text-[var(--color-accent-light)] bg-[var(--color-accent-subtle)]">
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{block.description}</p>
              </div>
            </div>
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <FadeInStagger className="grid gap-2.5 mt-6">
      {features.map((f) => (
        <FadeInItem key={f}>
          <div className="flex items-start gap-3 text-sm text-[var(--color-fg-muted)]">
            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            {f}
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

function FeatureCards({ cards }: { cards: NonNullable<CaseSection['featureCards']> }) {
  return (
    <FadeInStagger className="grid sm:grid-cols-2 gap-4">
      {cards.map((card) => (
        <FadeInItem key={card.title}>
          <div className="card p-5 h-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              <h3 className="text-sm font-semibold text-[var(--color-fg)]">{card.title}</h3>
            </div>
            <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{card.description}</p>
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

function TimelineSection({ items }: { items: string[] }) {
  return (
    <FadeInStagger className="space-y-0">
      {items.map((item, i) => (
        <FadeInItem key={i}>
          <div className="flex items-start gap-4 pb-6 relative">
            <div className="flex flex-col items-center">
              <span className="w-3 h-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] flex-shrink-0 z-10" />
              {i < items.length - 1 && (
                <div className="w-px flex-1 bg-gradient-to-b from-[var(--color-accent)]/40 to-transparent min-h-[24px]" />
              )}
            </div>
            <div className="pt-0.5">
              <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{item}</p>
            </div>
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

function ApiExamplesSection({ examples }: { examples: NonNullable<CaseSection['apiExamples']> }) {
  return (
    <FadeInStagger className="grid gap-3">
      {examples.map((ex) => (
        <FadeInItem key={ex.endpoint}>
          <div className="card p-4 md:p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] border border-[var(--color-accent-border)] uppercase tracking-wider">
                {ex.method}
              </span>
              <code className="text-xs font-mono text-[var(--color-fg)]/80">{ex.endpoint}</code>
            </div>
            <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{ex.description}</p>
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

function RoadmapSection({ items }: { items: NonNullable<CaseSection['roadmap']> }) {
  return (
    <FadeInStagger className="grid gap-4">
      {items.map((item) => (
        <FadeInItem key={item.phase}>
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--color-border)] text-[var(--color-fg-dim)]">
                {item.phase}
              </span>
              {item.status === 'completed' && (
                <span className="text-[10px] font-mono text-emerald-400">&#10003; Complete</span>
              )}
              {item.status === 'in-progress' && (
                <span className="text-[10px] font-mono text-[var(--color-accent-light)]">&#9679; In Progress</span>
              )}
              {item.status === 'planned' && (
                <span className="text-[10px] font-mono text-[var(--color-fg-dim)]">&#9679; Planned</span>
              )}
            </div>
            <h3 className="text-sm font-semibold text-[var(--color-fg)] mb-1">{item.title}</h3>
            <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{item.description}</p>
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

function GallerySection({ screenshots }: { screenshots: Screenshot[] }) {
  return (
    <FadeInStagger className="grid md:grid-cols-2 gap-4">
      {screenshots.map((s) => (
        <FadeInItem key={s.label}>
          <div className="card overflow-hidden">
            <div className={`aspect-video bg-gradient-to-br ${s.color} flex items-center justify-center`}>
              <div className="text-center p-6">
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[var(--color-accent)]/20 border border-[var(--color-accent-border)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent-light)]">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--color-fg)]/80">{s.label}</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-[var(--color-fg-dim)] leading-relaxed">{s.caption}</p>
            </div>
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

function ChallengesSection({ challenges }: { challenges: { title: string; body: string }[] }) {
  return (
    <FadeInStagger className="grid gap-4">
      {challenges.map((c) => (
        <FadeInItem key={c.title}>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-[var(--color-fg)] mb-2">{c.title}</h3>
            <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{c.body}</p>
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

function LessonsSection({ lessons }: { lessons: { title: string; body: string }[] }) {
  return (
    <FadeInStagger className="grid gap-4">
      {lessons.map((l) => (
        <FadeInItem key={l.title}>
          <div className="card p-5 border-l-2 border-[var(--color-accent)]">
            <h3 className="text-sm font-semibold text-[var(--color-fg)] mb-2">{l.title}</h3>
            <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{l.body}</p>
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

export function CaseStudyBody({ sections, architecture, screenshots }: CaseBodyProps) {
  return (
    <div className="space-y-16 md:space-y-20">
      {sections.map((section) => {
        if (section.variant === 'architecture' && architecture) {
          return (
            <div key={section.id}>
              <h2 className="text-lg font-semibold text-[var(--color-fg)] mb-6">{section.title}</h2>
              <ArchitectureFlow nodes={architecture} />
            </div>
          );
        }

        if (section.variant === 'arch-blocks' && section.archBlocks) {
          return (
            <div key={section.id} className="space-y-4">
              {section.body.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-[var(--color-fg-muted)] leading-relaxed">{p}</p>
              ))}
              <div className="mt-6">
                <ArchBlocks blocks={section.archBlocks} />
              </div>
            </div>
          );
        }

        if (section.variant === 'gallery' && screenshots) {
          return (
            <div key={section.id}>
              <h2 className="text-lg font-semibold text-[var(--color-fg)] mb-6">{section.title}</h2>
              <GallerySection screenshots={screenshots} />
            </div>
          );
        }

        if (section.variant === 'challenges' && section.challenges) {
          return (
            <div key={section.id}>
              <h2 className="text-lg font-semibold text-[var(--color-fg)] mb-6">{section.title}</h2>
              <ChallengesSection challenges={section.challenges} />
            </div>
          );
        }

        if (section.variant === 'lessons' && section.lessons) {
          return (
            <div key={section.id}>
              <h2 className="text-lg font-semibold text-[var(--color-fg)] mb-6">{section.title}</h2>
              <LessonsSection lessons={section.lessons} />
            </div>
          );
        }

        if (section.variant === 'features' && section.features) {
          return (
            <div className="space-y-4">
              {section.body.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-[var(--color-fg-muted)] leading-relaxed">{p}</p>
              ))}
              <FeatureList features={section.features} />
            </div>
          );
        }

        if (section.variant === 'feature-cards' && section.featureCards) {
          return (
            <div key={section.id} className="space-y-4">
              {section.body.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-[var(--color-fg-muted)] leading-relaxed">{p}</p>
              ))}
              <div className="mt-6">
                <FeatureCards cards={section.featureCards} />
              </div>
            </div>
          );
        }

        if (section.variant === 'timeline' && section.features) {
          return (
            <div key={section.id} className="space-y-4">
              {section.body.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-[var(--color-fg-muted)] leading-relaxed">{p}</p>
              ))}
              <div className="mt-6">
                <TimelineSection items={section.features} />
              </div>
            </div>
          );
        }

        if (section.variant === 'api-examples' && section.apiExamples) {
          return (
            <div key={section.id} className="space-y-4">
              {section.body.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-[var(--color-fg-muted)] leading-relaxed">{p}</p>
              ))}
              <div className="mt-6">
                <ApiExamplesSection examples={section.apiExamples} />
              </div>
            </div>
          );
        }

        if (section.variant === 'roadmap' && section.roadmap) {
          return (
            <div key={section.id} className="space-y-4">
              {section.body.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-[var(--color-fg-muted)] leading-relaxed">{p}</p>
              ))}
              <div className="mt-6">
                <RoadmapSection items={section.roadmap} />
              </div>
            </div>
          );
        }

        return (
          <div key={section.id} className="space-y-4">
            {section.body.map((p, i) => (
              <p key={i} className="text-sm md:text-base text-[var(--color-fg-muted)] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
