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
import { CAPABILITIES, ARTICLES, PROCESS_STEPS } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center px-6 md:px-10 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent-subtle)] via-transparent to-transparent opacity-30" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/2 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1200px] mx-auto w-full relative z-10 pt-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)] mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-[11px] text-[var(--color-accent-light)] font-mono tracking-wider">
                AI Product Builder &amp; Founder
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="text-[clamp(2.2rem,6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-balance mb-6 md:mb-8">
              Building{' '}
              <span className="gradient-accent">AI-powered products</span>
              <br />
              <span className="text-[var(--color-fg)]/70">and digital ventures.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="text-sm md:text-base text-[var(--color-fg-muted)] max-w-lg leading-relaxed mb-10">
              Strategy, design, AI, and execution. I take ideas from concept to market —
              building products that transform how people discover music, manage their
              health, and interact with technology.
            </p>
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
                className="text-sm text-[var(--color-fg-dim)] hover:text-[var(--color-fg)] transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-[10px] text-[var(--color-fg-dim)]/40 font-mono tracking-[0.15em]">
            SCROLL
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--color-fg-dim)]/30 to-transparent" />
        </div>
      </section>

      {/* ─── WORK / PROJECTS ─── */}
      <Container id="work">
        <div className="mb-14">
          <SectionLabel>Selected Work</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              Products I&apos;ve Built
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              Each project represents a complete product journey — from identifying an
              opportunity to designing, building, and launching. AI platforms, digital
              ventures, and technology solutions.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>

      {/* ─── PROCESS ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Process</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              How I Build
            </h2>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              From concept to market — a systematic approach combining strategic thinking,
              design rigor, and technical execution.
            </p>
          </FadeIn>
        </div>

        <FadeInStagger className="grid md:grid-cols-3 gap-4">
          {PROCESS_STEPS.map((step) => (
            <FadeInItem key={step.step}>
              <div className="card p-6 h-full">
                <span className="text-[10px] font-mono text-[var(--color-fg-dim)] tracking-[0.1em]">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-[var(--color-fg)] mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">
                  {step.description}
                </p>
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
                I build at the intersection of&nbsp;strategy, design, and&nbsp;AI.
              </h2>
            </FadeIn>
          </div>

          <FadeInStagger className="space-y-5">
            {[
              "I'm a product builder and founder who combines marketing strategy, creative direction, AI engineering, and business development to create products that matter.",
              'My work spans music intelligence, mental health technology, creative brands, and venture building. I operate across the full product lifecycle — from identifying market opportunities to shipping production AI systems.',
              'Currently building Sonora Digital Corp, a venture studio creating AI-powered products. Previously founded multiple digital ventures across music, health, and entertainment.',
            ].map((text, i) => (
              <FadeInItem key={i}>
                <p className="text-sm md:text-base text-[var(--color-fg-muted)] leading-relaxed">{text}</p>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </Container>

      {/* ─── CAPABILITIES ─── */}
      <Container>
        <div className="mb-14">
          <SectionLabel>Capabilities</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-4">
              What I Do
            </h2>
          </FadeIn>
        </div>

        <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap) => (
            <FadeInItem key={cap.title}>
              <div className="card p-5 h-full">
                <h3 className="text-sm font-semibold text-[var(--color-fg)] mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">
                  {cap.description}
                </p>
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
              Thoughts &amp; Insights
            </h2>
          </FadeIn>
        </div>

        <FadeInStagger className="max-w-2xl space-y-6">
          {ARTICLES.map((article) => (
            <FadeInItem key={article.title}>
              <article className="group border-b border-[var(--color-border)] pb-6 hover:border-[var(--color-border-hover)] transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono text-[var(--color-fg-dim)]">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-medium text-[var(--color-fg)] group-hover:text-[var(--color-accent-light)] transition-colors mb-1.5">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--color-fg-dim)] leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>

      {/* ─── CONTACT ─── */}
      <Container id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <SectionLabel>Contact</SectionLabel>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-fg)] mb-6 text-balance">
              Let&apos;s build something together.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-md mx-auto mb-10 leading-relaxed">
              Looking for a product builder who can take an idea from concept to launch?
              Let&apos;s talk about your next project.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@noelnichols.com"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-light)] transition-all"
              >
                hello@noelnichols.com
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href="https://linkedin.com/in/noelnichols"
                className="px-6 py-3 text-sm text-[var(--color-fg-dim)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-border-hover)] hover:text-[var(--color-fg)] transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nikkiai809"
                className="px-6 py-3 text-sm text-[var(--color-fg-dim)] border border-[var(--color-border)] rounded-full hover:border-[var(--color-border-hover)] hover:text-[var(--color-fg)] transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
  );
}
