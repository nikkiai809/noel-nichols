'use client';

import Link from 'next/link';
import { FadeInUp, FadeIn, SectionContainer } from '@/components/sections/animations';
import { CaseStudyContent } from '@/components/sections/case-study-content';
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function CaseStudyPage() {
  const params = useParams();
  const projectId = params.slug as string;
  const project = projects.find((p) => p.id === projectId);
  if (!project) notFound();

  const allIds = projects.map((p) => p.id);
  const currentIndex = allIds.indexOf(projectId);
  const prev = currentIndex > 0 ? allIds[currentIndex - 1] : null;
  const next = currentIndex < allIds.length - 1 ? allIds[currentIndex + 1] : null;

  return (
    <>
      {/* ─── CASE STUDY HERO ─── */}
      <section className="relative pt-32 md:pt-44 pb-12 md:pb-20 px-6 md:px-10 overflow-hidden">
        <div className="hero-gradient-bg opacity-60" />
        <div className="max-w-[880px] mx-auto relative z-10">
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors mb-8 font-mono tracking-wider"
            >
              ← Back to Projects
            </Link>
          </FadeIn>

          <FadeInUp>
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${project.gradient}`} />
              <span className="text-xs font-mono text-white/40">{project.tagline}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tight">
              {project.name}
            </h1>
            <p className="text-base md:text-lg text-white/40 max-w-xl leading-relaxed mb-8">
              {project.description}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span className="text-white/30">Role:</span>
                <span className="text-white/70">{project.role}</span>
              </div>
              <span className="text-white/10">·</span>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span className="text-white/30">Category:</span>
                <span className="text-white/70">{project.category}</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ─── METRICS ─── */}
      {project.metrics && (
        <SectionContainer className="pt-0 pb-12">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/[0.04] pt-8">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-lg md:text-2xl font-semibold text-white">{m.value}</div>
                  <div className="text-xs text-white/40 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </SectionContainer>
      )}

      {/* ─── CASE STUDY BODY ─── */}
      <SectionContainer className="pt-0">
        <div className="max-w-[720px] mx-auto">
          <CaseStudyContent
            sections={project.sections}
            architectureSteps={project.architecture}
            gradient={project.gradient}
          />
        </div>
      </SectionContainer>

      {/* ─── TECH STACK ─── */}
      <SectionContainer>
        <div className="max-w-[720px] mx-auto">
          <FadeIn>
            <div className="border-t border-white/[0.04] pt-8">
              <h2 className="section-label mb-4">Technology Stack</h2>
              <div className="tag-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag-item-accent">{tech}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* ─── KEYWORDS ─── */}
      <SectionContainer className="pt-0">
        <div className="max-w-[720px] mx-auto">
          <FadeIn>
            <div>
              <h2 className="section-label mb-4">Keywords</h2>
              <div className="tag-list">
                {project.keywords.map((kw) => (
                  <span key={kw} className="tag-item">{kw}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* ─── NAVIGATION ─── */}
      <SectionContainer>
        <FadeIn>
          <div className="flex items-center justify-between border-t border-white/[0.04] pt-8">
            {prev ? (
              <Link href={`/projects/${prev}`} className="text-sm text-white/40 hover:text-white transition-colors">
                ← {projects.find((p) => p.id === prev)?.name}
              </Link>
            ) : (
              <Link href="/projects" className="text-sm text-white/40 hover:text-white transition-colors">
                ← All Projects
              </Link>
            )}
            {next && (
              <Link href={`/projects/${next}`} className="text-sm text-white/40 hover:text-white transition-colors">
                {projects.find((p) => p.id === next)?.name} →
              </Link>
            )}
          </div>
        </FadeIn>
      </SectionContainer>
    </>
  );
}
