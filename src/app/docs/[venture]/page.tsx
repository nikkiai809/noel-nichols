import Link from 'next/link';
import { notFound } from 'next/navigation';
import { docVentures, getVentureDocs } from '@/lib/docs';
import { DocSidebar } from '@/components/docs/doc-sidebar';

export function generateStaticParams() {
  return docVentures.map((v) => ({ venture: v.id }));
}

export default async function VentureHubPage({
  params,
}: {
  params: Promise<{ venture: string }>;
}) {
  const { venture } = await params;
  const vData = docVentures.find((v) => v.id === venture);
  if (!vData) notFound();

  const docs = getVentureDocs(venture);

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-12">
          <DocSidebar venture={vData} />

          <div className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/docs"
                className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                ← All Ventures
              </Link>
            </div>

            {/* Header */}
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-[var(--color-accent)]">
                Venture Documentation
              </span>
              <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mt-3 mb-4">
                {vData.name}
              </h1>
              <p className="text-sm text-[var(--color-fg-muted)] max-w-2xl leading-relaxed">
                {vData.description}
              </p>
            </div>

            {/* Document list */}
            <div className="space-y-3">
              {docs.map((doc, i) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${venture}/${doc.slug}`}
                  className="group block rounded-lg border border-[var(--color-fg)]/10 p-5 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/5 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-base font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors">
                      {doc.title}
                    </h2>
                    <span className="text-xs text-[var(--color-fg-muted)]">
                      {doc.readingTime}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">
                    {doc.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider text-[var(--color-fg-muted)]/60 border border-[var(--color-fg)]/10 rounded-full px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                    {i > 0 && (
                      <span className="text-[10px] text-[var(--color-fg-muted)]/40">
                        {i + 1} of {docs.length}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
