import Link from 'next/link';
import { docVentures } from '@/lib/docs';

export default function DocsPage() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[var(--color-accent)]">
            Knowledge Base
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-fg)] mt-3 mb-4">
            Founder Documentation
          </h1>
          <p className="text-sm text-[var(--color-fg-muted)] max-w-2xl leading-relaxed">
            Complete venture documentation — from market research and competitive analysis
            to product strategy, AI architecture, and launch plans. Each document is a
            real founder artifact, written during the building process.
          </p>
        </div>

        {/* Venture docs hubs */}
        <div className="space-y-12">
          {docVentures.map((venture) => (
            <section key={venture.id}>
              <div className="mb-6">
                <Link
                  href={`/docs/${venture.id}`}
                  className="group inline-flex items-center gap-2"
                >
                  <h2 className="text-xl font-semibold text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors">
                    {venture.name}
                  </h2>
                  <span className="text-xs text-[var(--color-fg-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                    →
                  </span>
                </Link>
                <p className="text-sm text-[var(--color-fg-muted)] mt-2 leading-relaxed max-w-3xl">
                  {venture.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {venture.docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${venture.id}/${doc.slug}`}
                    className="group rounded-lg border border-[var(--color-fg)]/10 p-4 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/5 transition-all"
                  >
                    <h3 className="text-sm font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-[var(--color-fg-muted)] mt-2 leading-relaxed line-clamp-2">
                      {doc.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
