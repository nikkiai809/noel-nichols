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
import { projects } from '@/lib/projects';
import {
  CAPABILITIES,
  ARTICLES,
  PROCESS_STEPS,
  NARRATIVE_STEPS,
  RECRUITER_INFO,
  TECH_STACK_HOME,
  TRUST_SIGNALS,
  SITE,
} from '@/lib/constants';

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
                AI Product Builder &amp; AI Engineer
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="text-[clamp(2.4rem,7vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-balance mb-6 md:mb-8">
              I build{' '}
              <span className="gradient-accent">production AI systems</span>
              <br />
              <span className="text-[var(--color-fg)]/70">from concept to deployment.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="text-sm md:text-base text-[var(--color-fg-muted)] max-w-xl leading-relaxed mb-3">
              Multi-agent architectures, MCP servers, RAG pipelines, data pipelines, and full-stack AI products.
              I design, engineer, and ship AI systems that solve real business problems.
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
                View Projects
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-3 text-sm text-[var(--color-fg-dim)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-border-hover)] hover:text-[var(--color-fg)] transition-all"
              >
                Contact Me
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
          <SectionLabel>Flagship Project</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              SIGNAL — AI Music Intelligence
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-xl leading-relaxed">
              A multi-provider AI platform with explainable scoring, feature store architecture,
              real-time data pipelines, and 382+ automated tests. My most technically ambitious project.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <Link href="/projects/signal" className="group block">
            <div className="card p-8 md:p-12 group-hover:translate-y-[-4px] transition-all duration-400 glow-amber">
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
                    AI-powered music intelligence platform connecting Spotify, YouTube, and TikTok data
                    through a Feature Store architecture with an explainable AI scoring engine.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['TensorFlow', 'FastAPI', 'Feature Store', '382+ Tests', 'Explainable AI', 'Real-time'].map((t) => (
                      <span key={t} className="badge badge-accent">{t}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-accent-light)] group-hover:gap-2 transition-all">
                    Read full case study <span>&rarr;</span>
                  </span>
                </div>
                <div className="hidden md:flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: '382+', label: 'Automated Tests' },
                      { value: '5+', label: 'Data Sources' },
                      { value: '5K+', label: 'Artists Scored' },
                      { value: '3', label: 'Pipeline Stages' },
                    ].map((m) => (
                      <div key={m.label} className="card p-4 text-center">
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

      {/* ─── ALL PROJECTS ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>All Projects</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              AI Products &amp; Platforms
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              Each project is a complete product engineering journey: architecture, implementation,
              testing, and deployment. AI platforms, automation systems, and digital ventures.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>

      {/* ─── NARRATIVE / ENGINEERING JOURNEY ─── */}
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

      {/* ─── PROCESS ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Process</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              How I Engineer Products
            </h2>
          </FadeIn>
        </div>

        <FadeInStagger className="grid md:grid-cols-3 gap-4">
          {PROCESS_STEPS.map((step) => (
            <FadeInItem key={step.step}>
              <div className="card p-6 h-full">
                <span className="text-[10px] font-mono text-[var(--color-fg-dim)] tracking-[0.1em]">{step.step}</span>
                <h3 className="text-base font-semibold text-[var(--color-fg)] mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{step.description}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>

      {/* ─── ABOUT ─── */}
      <Container id="about">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <SectionLabel>About</SectionLabel>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-6">
                I build AI systems end-to-end — from architecture to deployment.
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
              "I'm an AI product builder and engineer who combines software engineering, AI architecture, and product strategy to create production systems that solve real problems. My background spans multi-agent AI architectures, data pipelines, API design, and full-stack development — with a focus on shipping products that work.",
              'I build across the AI stack: MCP servers, RAG pipelines, feature stores, scoring engines, and the frontends that make them useful. Every project includes automated tests, CI/CD, and deployment infrastructure.',
              'Currently building Sonora Digital Corp, a venture studio with a proprietary multi-agent AI architecture (Sonora Brain v3). Previously built AI products across music intelligence, health, and enterprise automation.',
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
              Technology &amp; Tools
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
              <article className="group border-b border-[var(--color-border)] pb-6 hover:border-[var(--color-border-hover)] transition-colors cursor-pointer">
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
              Building AI products? I build them.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-md mx-auto mb-10 leading-relaxed">
              I&apos;m open to founding engineer, AI product builder, and product engineering roles.
              AI systems, automation, product engineering — from concept to production.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${SITE.email}`} className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-light)] transition-all">
                Let&apos;s Talk
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
