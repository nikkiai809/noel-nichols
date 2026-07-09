'use client';

import { FadeIn, FadeInStagger, FadeInItem } from '@/components/motion/fade-in';
import type { CaseSection, ArchNode } from '@/types';

interface CaseBodyProps {
  sections: CaseSection[];
  architecture?: ArchNode[];
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
    <FadeInStagger className="grid gap-2.5 mt-4">
      {features.map((f) => (
        <FadeInItem key={f}>
          <div className="flex items-start gap-3 text-sm text-[var(--color-fg-muted)]">
            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-70" />
            {f}
          </div>
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

export function CaseStudyBody({ sections, architecture }: CaseBodyProps) {
  return (
    <div className="space-y-16 md:space-y-24">
      {sections.map((section) => {
        if (section.variant === 'architecture' && architecture) {
          return (
            <div key={section.id}>
              <h2 className="text-lg font-semibold text-[var(--color-fg)] mb-6">{section.title}</h2>
              <ArchitectureFlow nodes={architecture} />
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

        // Default text section
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
