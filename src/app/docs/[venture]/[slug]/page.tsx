import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { docVentures, getDoc, getAdjacentDocs, getRelatedDocs } from '@/lib/docs';
import { DocSidebar } from '@/components/docs/doc-sidebar';
import { DocNavigation } from '@/components/docs/doc-navigation';
import { DocSectionRenderer } from '@/components/docs/doc-section-renderer';
import { SITE } from '@/lib/constants';

export function generateStaticParams() {
  const params: { venture: string; slug: string }[] = [];
  for (const v of docVentures) {
    for (const d of v.docs) {
      params.push({ venture: v.id, slug: d.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ venture: string; slug: string }>;
}): Promise<Metadata> {
  const { venture, slug } = await params;
  const doc = getDoc(venture, slug);
  if (!doc) return {};
  return {
    title: `${doc.title} — ${doc.ventureLabel} Documentation`,
    description: doc.description,
    openGraph: {
      title: `${doc.title} — ${doc.ventureLabel}`,
      description: doc.description,
    },
  };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ venture: string; slug: string }>;
}) {
  const { venture, slug } = await params;
  const doc = getDoc(venture, slug);
  if (!doc) notFound();

  const vData = docVentures.find((v) => v.id === venture);
  if (!vData) notFound();

  const adjacent = getAdjacentDocs(venture, slug);
  const related = getRelatedDocs(doc, 3);

  return (
    <main className="min-h-screen py-20 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar — hidden on mobile, show on lg+ */}
          <DocSidebar venture={vData} currentSlug={slug} />

          {/* Main content */}
          <article className="flex-1 min-w-0 max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/docs"
                className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                ← All Ventures
              </Link>
              <span className="text-xs text-[var(--color-fg-dim)] mx-2">/</span>
              <Link
                href={`/docs/${venture}`}
                className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                {vData.name}
              </Link>
            </div>

            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                {doc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider text-[var(--color-accent)] border border-[var(--color-accent)]/20 rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-[10px] text-[var(--color-fg-dim)]">
                  {doc.readingTime}
                </span>
                <span className="text-[10px] text-[var(--color-fg-dim)]">
                  Updated {doc.lastUpdated}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
                {doc.title}
              </h1>
              <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed max-w-2xl">
                {doc.description}
              </p>
            </header>

            {/* Table of Contents (sticky on desktop) */}
            <div className="mb-10 p-4 rounded-lg border border-[var(--color-fg)]/10 bg-[var(--color-fg)]/[0.02]">
              <span className="text-xs uppercase tracking-widest text-[var(--color-fg-muted)] mb-3 block">
                Contents
              </span>
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {doc.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors py-1"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {doc.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-lg font-semibold text-[var(--color-fg)] mb-4">
                    {section.title}
                  </h2>
                    {section.body && section.type !== 'callout' && section.type !== 'quote' && (
                    <div className="space-y-4">
                      {section.body.map((p, i) => (
                        <p key={i} className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                  <DocSectionRenderer section={section} />
                </section>
              ))}
            </div>

            {/* Navigation */}
            <DocNavigation
              venture={venture}
              prev={adjacent.prev}
              next={adjacent.next}
            />

            {/* Related Documents */}
            {related.length > 0 && (
              <div className="mt-12 pt-8 border-t border-[var(--color-fg)]/10">
                <h3 className="text-sm font-semibold text-[var(--color-fg)] mb-4">
                  Related Documents
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/docs/${r.ventureSlug}/${r.slug}`}
                      className="group rounded-lg border border-[var(--color-fg)]/10 p-4 hover:border-[var(--color-accent)]/30 transition-all"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-[var(--color-fg-dim)]">
                        {r.ventureLabel}
                      </span>
                      <h4 className="text-sm font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors mt-1">
                        {r.title}
                      </h4>
                      <p className="text-xs text-[var(--color-fg-muted)] mt-1 line-clamp-2">
                        {r.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="mt-12 pt-6 border-t border-[var(--color-fg)]/10 text-center">
              <p className="text-xs text-[var(--color-fg-dim)]">
                Last updated {doc.lastUpdated} · {doc.readingTime} ·{' '}
                {doc.ventureLabel} Documentation
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
