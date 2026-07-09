'use client';

import Link from 'next/link';
import {
  FadeIn,
  FadeInStagger,
  FadeInItem,
} from '@/components/motion/fade-in';
import { Container } from '@/components/ui/container';
import { SectionLabel } from '@/components/ui/section-label';
import { ProjectCard } from '@/components/project/card';
import { SignalShowcase } from '@/components/signal-showcase';
import { projects } from '@/lib/projects';
import {
  CAPABILITIES,
  ARTICLES,
  PROCESS_STEPS,
  NARRATIVE_STEPS,
  RECRUITER_INFO,
  TECH_STACK_HOME,
  TRUST_SIGNALS,
  ENGINEERING_PRINCIPLES,
  GITHUB_REPOS,
  CURRENTLY_BUILDING,
  HOW_WORK_STEPS,
  SITE,
} from '@/lib/constants';

/* Only top 3 projects get featured prominence */
const FEATURED_PROJECTS = projects.slice(0, 3);
const MORE_PROJECTS = projects.slice(3);

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent-subtle)] via-transparent to-transparent opacity-30" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--color-accent)]/2 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1200px] mx-auto w-full relative z-10 pt-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)] mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-[11px] text-[var(--color-accent-light)] font-mono tracking-wider">
                Founding AI Engineer &amp; AI Product Builder
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="text-[clamp(2.4rem,7vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-balance mb-6 md:mb-8">
              I build AI products that{' '}
              <span className="gradient-accent">solve real problems</span>
              <br />
              <span className="text-[var(--color-fg)]/70">and ship to production.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="text-sm md:text-base text-[var(--color-fg-muted)] max-w-xl leading-relaxed mb-3">
              Multi-agent architectures, MCP servers, RAG pipelines, data pipelines, and full-stack AI systems.
              I design, engineer, and ship products that transform complex business problems into production software.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-x-6 gap-y-1.5 mb-8 text-xs text-[var(--color-fg-dim)]">
              {RECRUITER_INFO.slice(0, 4).map((info) => (
                <span key={info.label}>
                  <span className="text-[var(--color-fg-dim)]/50">{info.label}: </span>
                  <span className="text-[var(--color-fg)]/70">{info.value}</span>
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-light)] transition-all shadow-md hover:shadow-lg"
              >
                Explore Projects
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-3 text-sm text-[var(--color-fg-dim)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-border-hover)] hover:text-[var(--color-fg)] transition-all"
              >
                Contact
              </Link>
              <a
                href="/resume.pdf"
                className="group text-sm text-[var(--color-fg-dim)] hover:text-[var(--color-fg)] transition-colors inline-flex items-center gap-1.5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-50">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-[10px] text-[var(--color-fg-dim)]/40 font-mono tracking-[0.15em]">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--color-fg-dim)]/30 to-transparent" />
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section className="px-6 md:px-10 pb-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-6 border-y border-[var(--color-border)]">
            {TRUST_SIGNALS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl md:text-2xl font-semibold text-[var(--color-fg)]">{s.value}</div>
                <div className="text-[11px] text-[var(--color-fg-dim)] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECT: SIGNAL ─── */}
      <Container id="work">
        <div className="mb-14">
          <SectionLabel>Flagship Product</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              SIGNAL — AI Music Intelligence
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-xl leading-relaxed">
              Predicts emerging artists through explainable AI scoring across Spotify, YouTube, and TikTok.
              Built with a Feature Store architecture, multi-provider data pipeline, and 382+ automated tests.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <Link href="/projects/signal" className="group block">
            <div className="card p-8 md:p-12 group-hover:translate-y-[-4px] transition-all duration-400 glow-amber relative">
              <div className="absolute top-0 right-0 p-3 md:p-4">
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent)]/5 text-[var(--color-accent-light)] tracking-wider uppercase">
                  Featured
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span className="text-[11px] font-mono text-[var(--color-fg-dim)] tracking-wider uppercase">Flagship AI Product</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-fg)] mb-3 group-hover:text-[var(--color-accent-light)] transition-colors">
                    SIGNAL
                  </h3>
                  <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed mb-5">
                    Multi-provider AI platform connecting streaming data through a Feature Store
                    with an explainable scoring engine. 12 architecture components, 4 pipeline stages,
                    6 signal dimensions, enterprise API.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['TensorFlow', 'FastAPI', 'Feature Store', '382+ Tests', 'Explainable AI', 'Real-time', 'API'].map((t) => (
                      <span key={t} className="badge badge-accent">{t}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-accent-light)] group-hover:gap-2 transition-all">
                      Read full case study <span>&rarr;</span>
                    </span>
                    <span className="text-[var(--color-fg-dim)]/40">|</span>
                    <span className="text-[var(--color-fg-dim)]">6 sections &middot; 12 architecture layers</span>
                  </div>
                </div>
                <div className="hidden md:flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: '382+', label: 'Automated Tests' },
                      { value: '5+', label: 'Data Sources' },
                      { value: '5K+', label: 'Artists Scored' },
                      { value: '6', label: 'Signal Dimensions' },
                      { value: '12', label: 'Architecture Layers' },
                      { value: 'Real-time', label: 'Inference Pipeline' },
                    ].map((m) => (
                      <div key={m.label} className="card p-3 text-center">
                        <div className="text-lg font-semibold text-[var(--color-fg)]">{m.value}</div>
                        <div className="text-[10px] text-[var(--color-fg-dim)] mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>
      </Container>

      {/* ─── WOW MOMENT: INSIDE SIGNAL ─── */}
      <SignalShowcase />

      {/* ─── FEATURED PROJECTS: TOP 3 ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Featured Products</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              Production AI Systems
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              Each product is a complete engineering journey: architecture, implementation, testing, and deployment.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {MORE_PROJECTS.length > 0 && (
          <FadeIn>
            <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
              <details className="group">
                <summary className="cursor-pointer text-xs text-[var(--color-fg-dim)] hover:text-[var(--color-fg)] transition-colors font-mono tracking-wider list-none flex items-center gap-2">
                  <span className="inline-block transition-transform duration-300 group-open:rotate-90">&rarr;</span>
                  More Projects ({MORE_PROJECTS.length})
                </summary>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {MORE_PROJECTS.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i + FEATURED_PROJECTS.length} />
                  ))}
                </div>
              </details>
            </div>
          </FadeIn>
        )}
      </Container>

      {/* ─── CURRENTLY BUILDING ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Active Development</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              Currently Building
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              Products and infrastructure in active development. Every item ships with tests, documentation, and CI/CD.
            </p>
          </FadeIn>
        </div>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CURRENTLY_BUILDING.map((item) => (
            <FadeInItem key={item.product}>
              <div className="card p-5 h-full">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.status === 'active'
                        ? 'bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.3)]'
                        : item.status === 'shipped'
                        ? 'bg-[var(--color-accent)]'
                        : 'bg-[var(--color-fg-dim)]/40'
                    }`}
                  />
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--color-fg-dim)]">
                    {item.status === 'active' ? 'Active' : item.status === 'shipped' ? 'Shipped' : 'Exploring'}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-fg)] mb-1">{item.product}</h3>
                <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{item.description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>

      {/* ─── HOW I WORK ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Process</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              How I Engineer Products
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              A repeatable process for transforming problems into production AI systems. Every phase includes deliverables,
              quality gates, and measurable outcomes.
            </p>
          </FadeIn>
        </div>

        {/* Connected process cards */}
        <div className="relative">
          {/* Vertical connector (mobile) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/30 to-transparent hidden md:block" />

          <FadeInStagger className="grid md:grid-cols-6 gap-4">
            {HOW_WORK_STEPS.map((step, i) => (
              <FadeInItem key={step.step}>
                <div className="card p-5 h-full relative">
                  {/* Connector arrow (desktop) */}
                  {i < HOW_WORK_STEPS.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[var(--color-accent)]/30 text-sm">
                      &rarr;
                    </div>
                  )}

                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] flex items-center justify-center">
                      <span className="text-xs font-mono text-[var(--color-accent-light)]">{step.step}</span>
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-[var(--color-fg)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{step.description}</p>

                  {/* Bottom accent bar */}
                  <div className="mt-4 w-8 h-0.5 rounded-full bg-[var(--color-accent)]/40" />
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </Container>

      {/* ─── ENGINEERING PRINCIPLES ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Philosophy</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              Engineering Principles
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              Every product follows the same engineering philosophy — production-first, explainable, automated, data-driven, scalable, and user-centered.
            </p>
          </FadeIn>
        </div>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ENGINEERING_PRINCIPLES.map((p) => (
            <FadeInItem key={p.title}>
              <div className="card p-6 h-full border-l-2 border-[var(--color-accent)]">
                <h3 className="text-sm font-semibold text-[var(--color-fg)] mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{p.description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>

      {/* ─── NARRATIVE / JOURNEY ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Journey</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              Engineering &amp; Product Building Progression
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              Each phase added technical depth and product ownership. The common thread: shipping production systems.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent" />

          <FadeInStagger className="space-y-10">
            {NARRATIVE_STEPS.map((step, i) => (
              <FadeInItem key={step.era}>
                <div className={`relative flex items-start gap-6 md:gap-0 md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg)] -translate-x-1/2 z-10" />
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-[10px] font-mono text-[var(--color-accent-light)] tracking-wider">{step.era}</span>
                    <h3 className="text-base font-semibold text-[var(--color-fg)] mt-1 mb-1">{step.label}</h3>
                    <p className="text-sm text-[var(--color-fg-dim)] leading-relaxed">{step.description}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </Container>

      {/* ─── ABOUT ─── */}
      <Container id="about">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <SectionLabel>About</SectionLabel>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-6">
                AI products engineered end-to-end — from architecture to deployment.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-[var(--color-fg-dim)]">
                {RECRUITER_INFO.map((info) => (
                  <span key={info.label}>
                    <span className="text-[var(--color-fg-dim)]/50">{info.label}: </span>
                    <span className="text-[var(--color-fg)]/70">{info.value}</span>
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeInStagger className="space-y-5">
            {[
              'SIGNAL predicts emerging artists through explainable AI across 6 signal dimensions. Sonora Brain v3 coordinates 8+ MCP servers across a multi-agent architecture. Engram provides persistent memory for AI systems. These are the products — the evidence of what production AI engineering looks like.',
              'Multi-agent architectures, MCP servers, RAG pipelines, feature stores, scoring engines, data pipelines, and the frontends that make them useful. Every project ships with automated tests, CI/CD, and deployment infrastructure.',
              'Currently building Sonora Digital Corp, a venture studio with a proprietary multi-agent AI architecture. Previously built AI products across music intelligence (SIGNAL), health (YAMI), and enterprise analytics.',
            ].map((text, i) => (
              <FadeInItem key={i}>
                <p className="text-sm md:text-base text-[var(--color-fg-muted)] leading-relaxed">{text}</p>
              </FadeInItem>
            ))}
            <FadeInItem>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="/resume.pdf" className="inline-flex items-center gap-1.5 text-xs text-[var(--color-accent-light)] hover:underline">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
                <a href={SITE.social.github} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-accent-light)] hover:underline">GitHub</a>
                <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-accent-light)] hover:underline">LinkedIn</a>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </Container>

      {/* ─── CAPABILITIES ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Capabilities</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              What Ships
            </h2>
          </FadeIn>
        </div>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap) => (
            <FadeInItem key={cap.title}>
              <div className="card p-5 h-full">
                <h3 className="text-sm font-semibold text-[var(--color-fg)] mb-2">{cap.title}</h3>
                <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{cap.description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>

      {/* ─── TECHNOLOGY STACK ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Stack</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              Technology &amp; Infrastructure
            </h2>
          </FadeIn>
        </div>

        <FadeInStagger className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TECH_STACK_HOME.map((cat) => (
            <FadeInItem key={cat.category}>
              <div className="card p-5 h-full">
                <h3 className="text-xs font-semibold text-[var(--color-fg)] mb-3 uppercase tracking-wider">{cat.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span key={item} className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--color-border)] text-[var(--color-fg-dim)]">{item}</span>
                  ))}
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>

      {/* ─── GITHUB REPOS ─── */}
      <Container id="github">
        <div className="mb-14">
          <SectionLabel>Source</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              Active Repositories
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              Production AI infrastructure and products. Every repository ships with tests, documentation, and CI/CD.
            </p>
          </FadeIn>
        </div>

        <FadeInStagger className="grid md:grid-cols-2 gap-4">
          {GITHUB_REPOS.map((repo) => (
            <FadeInItem key={repo.name}>
              <a href={repo.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="card p-5 h-full group-hover:translate-y-[-3px] transition-all duration-400">
                  <div className="flex items-center gap-2 mb-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-fg-dim)]">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <h3 className="text-sm font-semibold text-[var(--color-fg)] group-hover:text-[var(--color-accent-light)] transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{repo.description}</p>
                </div>
              </a>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn>
          <div className="mt-8 text-center">
            <a
              href={SITE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs text-[var(--color-fg-dim)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-border-hover)] hover:text-[var(--color-fg)] transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              View All Repositories on GitHub
              <span>&rarr;</span>
            </a>
          </div>
        </FadeIn>
      </Container>

      {/* ─── WRITING ─── */}
      <Container id="writing">
        <div className="mb-14">
          <SectionLabel>Writing</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              Technical Writing
            </h2>
          </FadeIn>
        </div>

        <FadeInStagger className="max-w-2xl space-y-6">
          {ARTICLES.map((article) => (
            <FadeInItem key={article.title}>
              <article className="group border-b border-[var(--color-border)] pb-6 hover:border-[var(--color-border-hover)] transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono text-[var(--color-fg-dim)]">{article.date}</span>
                </div>
                <h3 className="text-sm md:text-base font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent-light)] transition-colors mb-1.5">{article.title}</h3>
                <p className="text-sm text-[var(--color-fg-dim)] leading-relaxed">{article.excerpt}</p>
              </article>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>

      {/* ─── CONTACT / CTA ─── */}
      <Container id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <SectionLabel>Contact</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-6 text-balance">
              Building AI products? These systems ship.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-md mx-auto mb-10 leading-relaxed">
              Open to founding engineer, AI product builder, and product engineering roles.
              Production AI systems, multi-agent architectures, and product engineering — from concept to deployment.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${SITE.email}`} className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-light)] transition-all">
                Start a Conversation
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 px-5 py-3 text-sm text-[var(--color-fg-dim)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-border-hover)] hover:text-[var(--color-fg)] transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
              <a href={SITE.social.github} className="px-5 py-3 text-sm text-[var(--color-fg-dim)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-border-hover)] hover:text-[var(--color-fg)] transition-all" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={SITE.social.linkedin} className="px-5 py-3 text-sm text-[var(--color-fg-dim)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-border-hover)] hover:text-[var(--color-fg)] transition-all" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
  );
}
