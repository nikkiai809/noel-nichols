'use client';

import { DocContentSection } from '@/types';
import { DocCallout } from './doc-callout';

export function DocSectionRenderer({ section }: { section: DocContentSection }) {
  switch (section.type) {
    case 'text':
      return null;

    case 'callout':
      return (
        <DocCallout
          title={section.calloutTitle || ''}
          body={section.calloutBody || ''}
          type={section.calloutType}
        />
      );

    case 'list':
      return (
        <ul className="space-y-2 my-4">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-fg-muted)]">
              <span className="text-[var(--color-accent)] mt-1.5 h-1 w-1.5 flex-shrink-0 rounded-full bg-current" />
              {item}
            </li>
          ))}
        </ul>
      );

    case 'timeline':
      return (
        <div className="relative my-6 pl-6 border-l-2 border-[var(--color-accent)]/20 space-y-6">
          {section.items?.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[25px] top-1 h-3 w-3 rounded-full bg-[var(--color-accent)]/30 border-2 border-[var(--color-accent)]" />
              <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      );

    case 'card-grid':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {section.cards?.map((card, i) => (
            <div
              key={i}
              className="rounded-lg border border-[var(--color-fg)]/10 p-5 hover:border-[var(--color-accent)]/20 transition-colors"
            >
              <h4 className="text-sm font-semibold text-[var(--color-fg)] mb-2">
                {card.title}
              </h4>
              <p className="text-xs leading-relaxed text-[var(--color-fg-muted)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      );

    case 'metrics':
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          {section.metrics?.map((m, i) => (
            <div
              key={i}
              className="rounded-lg border border-[var(--color-fg)]/10 p-4 text-center"
            >
              <div className="text-lg font-semibold text-[var(--color-accent)]">
                {m.value}
              </div>
              <div className="text-xs text-[var(--color-fg-muted)] mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      );

    case 'arch':
      return null;

    case 'quote':
      return (
        <blockquote className="my-8 border-l-2 border-[var(--color-accent)] pl-5">
          <p className="text-base italic text-[var(--color-fg)] leading-relaxed">
            "{section.quote}"
          </p>
          {section.quoteAttr && (
            <footer className="mt-2 text-xs text-[var(--color-fg-muted)]">
              — {section.quoteAttr}
            </footer>
          )}
          {section.body?.map((p, i) => (
            <p key={i} className="text-sm text-[var(--color-fg-muted)] mt-3 leading-relaxed">
              {p}
            </p>
          ))}
        </blockquote>
      );

    default:
      return null;
  }
}
