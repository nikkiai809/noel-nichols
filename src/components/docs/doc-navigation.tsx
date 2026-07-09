'use client';

import Link from 'next/link';

interface DocNavProps {
  venture: string;
  prev: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
}

export function DocNavigation({ venture, prev, next }: DocNavProps) {
  return (
    <div className="mt-12 pt-8 border-t border-[var(--color-fg)]/10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          {prev ? (
            <Link
              href={`/docs/${venture}/${prev.slug}`}
              className="group block"
            >
              <span className="text-xs text-[var(--color-fg-muted)] mb-1 block">
                ← Previous
              </span>
              <span className="text-sm text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors">
                {prev.title}
              </span>
            </Link>
          ) : null}
        </div>
        <div className="flex-1 text-right">
          {next ? (
            <Link
              href={`/docs/${venture}/${next.slug}`}
              className="group block"
            >
              <span className="text-xs text-[var(--color-fg-muted)] mb-1 block">
                Next →
              </span>
              <span className="text-sm text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors">
                {next.title}
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
