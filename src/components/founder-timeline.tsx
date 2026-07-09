'use client';

import { FadeInStagger, FadeInItem } from '@/components/motion/fade-in';
import type { FounderTimelineEvent } from '@/types';

interface Props {
  events: FounderTimelineEvent[];
}

export function FounderTimeline({ events }: Props) {
  const typeColors: Record<string, string> = {
    founder: 'bg-[var(--color-accent)]',
    product: 'bg-blue-500/80',
    technology: 'bg-emerald-500/80',
    company: 'bg-purple-500/80',
  };

  const typeLabels: Record<string, string> = {
    founder: 'Founder',
    product: 'Product',
    technology: 'Tech',
    company: 'Company',
  };

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/20 to-transparent" />

      <FadeInStagger className="space-y-8 md:space-y-12">
        {events.map((event, i) => (
          <FadeInItem key={event.era}>
            <div
              className={`relative flex items-start gap-6 md:gap-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-5 md:left-1/2 w-[10px] h-[10px] -translate-x-1/2 z-10 mt-1.5">
                <span
                  className={`block w-[10px] h-[10px] rounded-full ${typeColors[event.type] || 'bg-[var(--color-accent)]'} shadow-[0_0_8px_rgba(217,119,6,0.2)]`}
                />
              </div>

              {/* Content */}
              <div
                className={`ml-14 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <div
                  className={`flex items-center gap-2 mb-1 ${
                    i % 2 === 0 ? 'md:justify-end' : ''
                  }`}
                >
                  <span className="text-[10px] font-mono text-[var(--color-fg-dim)]">
                    {event.era}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${typeColors[event.type]} bg-opacity-20 text-[var(--color-fg-dim)]/80`}
                  >
                    {typeLabels[event.type]}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-fg)] mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">
                  {event.description}
                </p>

                {/* Accent line */}
                <div
                  className={`mt-3 w-8 h-0.5 rounded-full bg-[var(--color-accent)]/30 ${
                    i % 2 === 0 ? 'md:ml-auto' : ''
                  }`}
                />
              </div>

              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </div>
  );
}
