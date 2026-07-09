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
        <div className="arch-flow">
          {nodes.map((node, i) => (
            <span key={node.label} className="flex items-center gap-1">
              <span className={`arch-node ${node.primary ? 'arch-node--primary' : ''}`}>
                {node.label}
              </span>
              {i < nodes.length - 1 && <span className="arch-arrow">&rarr;</span>}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
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
            <div key={section.id} className="space-y-4">
              {section.body.map((p, i) => (
                <p key={i} className="text-sm md:text-base text-[var(--color-fg-muted)] leading-relaxed">
                  {p}
                </p>
              ))}
              <FeatureList features={section.features} />
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
