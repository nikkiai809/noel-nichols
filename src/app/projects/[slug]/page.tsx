import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects, getProject, getProjectSlugs } from '@/lib/projects';
import { SITE } from '@/lib/constants';
import { CaseStudyClient } from './client';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.summary,
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.summary,
    },
    twitter: {
      title: `${project.name} — ${project.tagline}`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const allIds = getProjectSlugs();
  const currentIdx = allIds.indexOf(slug);
  const prev = currentIdx > 0 ? allIds[currentIdx - 1] : null;
  const next = currentIdx < allIds.length - 1 ? allIds[currentIdx + 1] : null;
  const prevProject = prev ? getProject(prev) : null;
  const nextProject = next ? getProject(next) : null;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 md:pt-44 pb-12 md:pb-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent-subtle)]/40 via-transparent to-transparent" />
        </div>

        <div className="max-w-[880px] mx-auto relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--color-fg-dim)] hover:text-[var(--color-fg-muted)] transition-colors mb-6 font-mono tracking-wider"
          >
            &larr; Back to Projects
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[11px] font-mono text-[var(--color-fg-dim)] tracking-wider uppercase">
              {project.tagline}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold text-[var(--color-fg)] mb-4 tracking-tight">
            {project.name}
          </h1>

          <p className="text-sm md:text-base text-[var(--color-fg-muted)] max-w-xl leading-relaxed mb-6">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-fg-dim)]">
            <span>
              <span className="text-[var(--color-fg-dim)]">Role: </span>
              <span className="text-[var(--color-fg)]/80">{project.role}</span>
            </span>
            <span className="text-[var(--color-border)]">/</span>
            <span>
              <span className="text-[var(--color-fg-dim)]">Category: </span>
              <span className="text-[var(--color-fg)]/80">{project.category}</span>
            </span>
            {project.url && project.url !== '#' && (
              <>
                <span className="text-[var(--color-border)]">/</span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent-light)] hover:underline"
                >
                  Live Demo &rarr;
                </a>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ─── METRICS ─── */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-[880px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-[var(--color-border)] pt-8">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-xl md:text-2xl font-semibold text-[var(--color-fg)]">
                  {m.value}
                </div>
                <div className="text-xs text-[var(--color-fg-dim)] mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY BODY ─── */}
      <CaseStudyClient project={project} />

      {/* ─── TECHNOLOGY STACK BY CATEGORY ─── */}
      <section className="section-container px-6 md:px-10 pb-8">
        <div className="max-w-[720px] mx-auto">
          <div className="border-t border-[var(--color-border)] pt-8">
            <h2 className="label-mono mb-6">Technology Stack</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.techCategories.map((cat) => (
                <div key={cat.label}>
                  <h3 className="text-xs font-semibold text-[var(--color-fg)] mb-2">{cat.label}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--color-accent-border)] text-[var(--color-accent-light)] bg-[var(--color-accent-subtle)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── KEYWORDS ─── */}
      <section className="section-container px-6 md:px-10 pb-16">
        <div className="max-w-[720px] mx-auto">
          <h2 className="label-mono mb-4">Keywords</h2>
          <div className="flex flex-wrap gap-1.5">
            {project.keywords.map((kw) => (
              <span
                key={kw}
                className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--color-border)] text-[var(--color-fg-dim)] bg-[var(--color-bg-surface)]"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NAVIGATION ─── */}
      <section className="section-container px-6 md:px-10">
        <div className="max-w-[720px] mx-auto">
          <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-8">
            {prevProject ? (
              <Link
                href={`/projects/${prev}`}
                className="group text-sm text-[var(--color-fg-dim)] hover:text-[var(--color-fg)] transition-colors"
              >
                <span className="group-hover:opacity-70">&larr;</span>{' '}
                {prevProject.name}
              </Link>
            ) : (
              <Link
                href="/projects"
                className="text-sm text-[var(--color-fg-dim)] hover:text-[var(--color-fg)] transition-colors"
              >
                &larr; All Projects
              </Link>
            )}

            {nextProject && (
              <Link
                href={`/projects/${next}`}
                className="group text-sm text-[var(--color-fg-dim)] hover:text-[var(--color-fg)] transition-colors"
              >
                {nextProject.name}{' '}
                <span className="group-hover:opacity-70">&rarr;</span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
