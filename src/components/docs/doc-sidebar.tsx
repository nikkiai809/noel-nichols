'use client';

import { DocVenture } from '@/types';
import Link from 'next/link';

interface DocSidebarProps {
  venture: DocVenture;
  currentSlug?: string;
}

export function DocSidebar({ venture, currentSlug }: DocSidebarProps) {
  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24">
        <div className="mb-3">
          <Link
            href={`/docs/${venture.id}`}
            className="text-xs uppercase tracking-widest text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            {venture.name}
          </Link>
        </div>
        <nav>
          <ul className="space-y-0.5">
            {venture.docs.map((doc) => {
              const isActive = doc.slug === currentSlug;
              return (
                <li key={doc.slug}>
                  <Link
                    href={`/docs/${venture.id}/${doc.slug}`}
                    className={`block text-sm py-1.5 px-3 rounded-md transition-colors ${
                      isActive
                        ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium'
                        : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-fg)]/5'
                    }`}
                  >
                    {doc.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
