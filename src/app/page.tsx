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
import { FounderTimeline } from '@/components/founder-timeline';
import { projects } from '@/lib/projects';
import {
  CAPABILITIES,
  ARTICLES,
  FOUNDER_PROCESS,
  FOUNDER_NARRATIVE,
  FOUNDER_METRICS,
  RECRUITER_INFO,
  TECH_STACK_HOME,
  ENGINEERING_PRINCIPLES,
  GITHUB_REPOS,
  CURRENTLY_BUILDING,
  HOW_WORK_STEPS,
  SITE,
} from '@/lib/constants';

const FEATURED_VENTURES = projects.slice(0, 3);

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
                Founder &middot; AI Product Builder &middot; Founding Engineer
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="text-[clamp(2.4rem,7vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-balance mb-6 md:mb-8">
              I don&apos;t build projects.{' '}
              <span className="gradient-accent">I build companies.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="text-sm md:text-base text-[var(--color-fg-muted)] max-w-xl leading-relaxed mb-3">
              AI ventures founded from zero. Market discovery, product strategy, AI architecture,
              engineering, and launch — end-to-end ownership of every company I create.
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
                Explore Ventures
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                href="/#about"
                className="px-6 py-3 text-sm text-[var(--color-fg-dim)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-border-hover)] hover:text-[var(--color-fg)] transition-all"
              >
                About
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

      {/* ─── FOUNDER METRICS DASHBOARD ─── */}
      <section className="px-6 md:px-10 pb-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 py-6 border-y border-[var(--color-border)]">
            {FOUNDER_METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-xl md:text-2xl font-semibold text-[var(--color-fg)]">
                  {m.value}
                </div>
                <div className="text-[10px] md:text-[11px] text-[var(--color-fg-dim)] mt-0.5 leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FLAGSHIP VENTURE: SIGNAL ─── */}
      <Container id="work">
        <div className="mb-14">
          <SectionLabel>Flagship Venture</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              SIGNAL — AI Music Intelligence
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-xl leading-relaxed">
              A venture that predicts emerging artists through explainable AI scoring across Spotify, YouTube, and TikTok.
              Founded, architected, engineered, and launched end-to-end.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <Link href="/projects/signal" className="group block">
            <div className="card p-8 md:p-12 group-hover:translate-y-[-4px] transition-all duration-400 glow-amber relative">
              <div className="absolute top-0 right-0 p-3 md:p-4">
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent)]/5 text-[var(--color-accent-light)] tracking-wider uppercase">
                  Venture
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span className="text-[11px] font-mono text-[var(--color-fg-dim)] tracking-wider uppercase">AI Music Intelligence Venture</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-fg)] mb-3 group-hover:text-[var(--color-accent-light)] transition-colors">
                    SIGNAL
                  </h3>
                  <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed mb-5">
                    Multi-provider AI platform connecting streaming data through a Feature Store
                    with an explainable scoring engine. End-to-end founder ownership: market research,
                    product strategy, AI architecture, engineering, and go-to-market.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Founder', 'AI Architecture', 'Product Strategy', 'Engineering', 'Go-to-Market'].map((t) => (
                      <span key={t} className="badge badge-accent">{t}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['TensorFlow', 'FastAPI', 'Feature Store', '382+ Tests', 'Explainable AI'].map((t) => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-accent-light)] group-hover:gap-2 transition-all">
                      Full case study <span>&rarr;</span>
                    </span>
                    <span className="text-[var(--color-fg-dim)]/40">|</span>
                    <span className="text-[var(--color-fg-dim)]">8 founder areas &middot; 6 sections</span>
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
                      { value: '8', label: 'Founder Areas' },
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

      {/* ─── VENTURES ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Ventures</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              Startup Ecosystem
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              Companies founded from zero. Each venture represents complete ownership — from market discovery
              and product strategy through AI architecture, engineering, and launch.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {FEATURED_VENTURES.map((venture, i) => (
            <ProjectCard key={venture.id} project={venture} index={i} />
          ))}
        </div>

        <FadeIn>
          <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm text-[var(--color-accent-light)] hover:gap-3 transition-all"
            >
              View all ventures <span>&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </Container>

      {/* ─── FOUNDER ─── */}
      <Container id="about">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <SectionLabel>Founder</SectionLabel>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-6">
                I don&apos;t build projects. I build companies.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed mb-4">
                Every venture on this site was created from zero. I identified the opportunity,
                defined the product, designed the AI architecture, built the system, and launched
                the company. End-to-end founder ownership across every venture.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex flex-wrap gap-2">
                {[
                  'Opportunity Discovery',
                  'Market Research',
                  'Product Strategy',
                  'Business Model',
                  'Pitch Deck',
                  'Branding & UX',
                  'AI Architecture',
                  'Engineering',
                  'Product Launch',
                  'Growth Strategy',
                ].map((item) => (
                  <span key={item} className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--color-accent-border)] text-[var(--color-accent-light)] bg-[var(--color-accent-subtle)]">
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-3 pt-6">
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
            </FadeIn>
          </div>

          <div>
            <SectionLabel>How Ventures Are Built</SectionLabel>
            <FadeIn>
              <h3 className="text-xl font-semibold text-[var(--color-fg)] mb-6">
                From Opportunity to Company
              </h3>
            </FadeIn>
            <FadeInStagger className="space-y-4">
              {[
                {
                  phase: '01',
                  title: 'Market Research',
                  desc: 'Industry analysis, competitive landscape, user research, and opportunity sizing before any product decisions.',
                },
                {
                  phase: '02',
                  title: 'Product Strategy',
                  desc: 'Vision definition, business model, roadmap, success metrics. Strategy drives architecture.',
                },
                {
                  phase: '03',
                  title: 'AI Architecture',
                  desc: 'System design for production AI: data pipelines, agent coordination, memory systems, APIs.',
                },
                {
                  phase: '04',
                  title: 'Execution & Launch',
                  desc: 'Build, test, deploy. Tests from day one, CI/CD from commit one, shipped before feature-complete.',
                },
                {
                  phase: '05',
                  title: 'Iterate & Grow',
                  desc: 'Measure, learn, improve. Usage data drives every decision. Then start the next venture.',
                },
              ].map((item) => (
                <FadeInItem key={item.phase}>
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] flex items-center justify-center">
                      <span className="text-xs font-mono text-[var(--color-accent-light)]">{item.phase}</span>
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--color-fg)] mb-0.5">{item.title}</h4>
                      <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </Container>

      {/* ─── FOUNDER TIMELINE ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Timeline</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              Entrepreneurial Journey
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              From engineering foundations to multiple ventures. Each phase built on the last.
            </p>
          </FadeIn>
        </div>
        <FounderTimeline events={FOUNDER_NARRATIVE} />
      </Container>

      {/* ─── FOUNDER PROCESS ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Process</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              How Ventures Are Built
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              A repeatable process for identifying opportunities, designing products, building AI systems, and launching companies.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          <FadeInStagger className="grid md:grid-cols-6 gap-4">
            {FOUNDER_PROCESS.map((step, i) => (
              <FadeInItem key={step.step}>
                <div className="card p-5 h-full relative">
                  {i < FOUNDER_PROCESS.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[var(--color-accent)]/30 text-sm">
                      &rarr;
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border)] flex items-center justify-center">
                      <span className="text-xs font-mono text-[var(--color-accent-light)]">{step.step}</span>
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--color-fg)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{step.description}</p>
                  <div className="mt-4 w-8 h-0.5 rounded-full bg-[var(--color-accent)]/40" />
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
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
              Ventures and infrastructure in active development. Every line of code ships to production.
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

      {/* ─── ENGINEERING PRINCIPLES ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Philosophy</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              Engineering Principles
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              Every venture follows the same engineering philosophy — production-first, explainable, automated, data-driven, scalable, and user-centered.
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

      {/* ─── CAPABILITIES ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Capabilities</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              What I Build
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
              Building the next venture.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-md mx-auto mb-10 leading-relaxed">
              Open to founding engineer, AI product builder, and founding-level roles.
              I identify opportunities, design products, build AI systems, and launch companies from scratch.
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
