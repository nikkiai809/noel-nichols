'use client';

import Link from 'next/link';
import { FadeInUp, FadeIn, ScaleIn, StaggerContainer, StaggerItem, SectionContainer } from '@/components/sections/animations';
import ProjectCard from '@/components/sections/project-card';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center px-6 md:px-10 overflow-hidden">
        <div className="hero-gradient-bg" />
        <div className="max-w-[1280px] mx-auto w-full relative z-10 pt-20">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
              <span className="text-xs text-white/40 font-mono">AI Product Builder &amp; Founder</span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-balance mb-6">
              Building{' '}
              <span className="gradient-text">AI-powered products</span>
              <br />
              and digital ventures.
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-base md:text-lg text-white/40 max-w-xl leading-relaxed mb-10">
              I design, build and launch technology products that transform ideas into scalable businesses.
              Strategy, creativity, AI, and execution — from concept to market.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                Contact Me →
              </Link>
            </div>
          </FadeInUp>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/20 font-mono tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* ─── SELECTED PROJECTS ─── */}
      <SectionContainer id="work">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <div className="section-label">Selected Work</div>
          </FadeIn>
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Products I&apos;ve Built
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              Each project represents a complete product journey — from identifying the opportunity
              to designing, building, and launching. AI-powered platforms, digital ventures, and
              technology solutions that deliver real impact.
            </p>
          </FadeInUp>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              tagline={project.tagline}
              description={project.description}
              technologies={project.technologies}
              colors={{ gradient: project.gradient }}
              index={i}
            />
          ))}
        </div>
      </SectionContainer>

      {/* ─── HOW I BUILD ─── */}
      <SectionContainer>
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <div className="section-label">Process</div>
          </FadeIn>
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">How I Build</h2>
            <p className="text-white/40 text-sm leading-relaxed">
              From concept to market, I follow a systematic approach that combines strategic thinking,
              design rigor, and technical execution.
            </p>
          </FadeInUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-5">
          {[
            {
              step: '01',
              title: 'Discover & Define',
              desc: 'I start with the problem — not the solution. Research, user interviews, market analysis, and opportunity sizing to validate the direction before building.',
            },
            {
              step: '02',
              title: 'Design & Build',
              desc: 'Architecture, UX, and engineering in parallel. I design systems that scale and interfaces that feel intuitive. AI integration where it adds real value.',
            },
            {
              step: '03',
              title: 'Launch & Iterate',
              desc: 'Ship fast, measure everything, iterate constantly. Products are living systems — I build for continuous improvement and market feedback.',
            },
          ].map((item) => (
            <StaggerItem key={item.step}>
              <div className="metric-card h-full">
                <span className="text-[10px] font-mono text-white/20 tracking-widest">{item.step}</span>
                <h3 className="text-lg font-semibold text-white mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionContainer>

      {/* ─── ABOUT ─── */}
      <SectionContainer id="about">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <FadeIn>
              <div className="section-label">About</div>
            </FadeIn>
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                I build at the intersection of strategy, design, and AI.
              </h2>
            </FadeInUp>
          </div>

          <div className="space-y-5">
            <FadeInUp delay={0.1}>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">
                I&apos;m a product builder and founder who combines marketing strategy, creative
                direction, AI engineering, and business development to create products that matter.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">
                My background spans music intelligence, mental health technology, creative brands,
                and venture building. I work across the full product lifecycle — from identifying
                market opportunities to shipping production AI systems.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">
                Currently building{' '}
                <Link href="/projects/sonora-digital-corp" className="text-white/70 hover:text-white underline underline-offset-4 decoration-white/20">
                  Sonora Digital Corp
                </Link>
                , a venture studio creating AI-powered products. Previously founded multiple digital
                ventures across music, health, and entertainment.
              </p>
            </FadeInUp>
          </div>
        </div>
      </SectionContainer>

      {/* ─── CAPABILITIES ─── */}
      <SectionContainer>
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <div className="section-label">Capabilities</div>
          </FadeIn>
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">What I Do</h2>
          </FadeInUp>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: 'AI Products', desc: 'Full-stack AI platforms, LLM integration, ML pipelines, and intelligent systems that solve real problems.' },
            { title: 'Product Strategy', desc: 'Opportunity identification, market analysis, roadmap planning, and go-to-market execution for digital products.' },
            { title: 'Technical Architecture', desc: 'System design, API architecture, data pipelines, and infrastructure planning for scalable products.' },
            { title: 'Venture Building', desc: 'From zero to launch — concept validation, team building, funding strategy, and venture creation.' },
          ].map((cap) => (
            <StaggerItem key={cap.title}>
              <div className="metric-card h-full">
                <h3 className="text-base font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{cap.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionContainer>

      {/* ─── WRITING ─── */}
      <SectionContainer id="writing">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <div className="section-label">Writing</div>
          </FadeIn>
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Thoughts &amp; Insights</h2>
          </FadeInUp>
        </div>

        <StaggerContainer className="max-w-3xl space-y-6">
          {[
            {
              title: 'Building a Multi-Agent AI Architecture',
              desc: 'How Sonora Brain v3 uses MCP servers, memory persistence, and spec-driven development to build AI products systematically.',
            },
            {
              title: 'The Product Builder\'s Creed',
              desc: 'Why the most valuable people in AI are those who can bridge strategy, design, and technical execution.',
            },
            {
              title: 'SIGNAL: AI in Music Intelligence',
              desc: 'Building an AI platform that helps record labels discover emerging talent using streaming data and predictive analytics.',
            },
            {
              title: 'AI × Music: The New Creative Frontier',
              desc: 'How artificial intelligence is reshaping music discovery, creation, and the relationship between artists and technology.',
            },
          ].map((article, i) => (
            <StaggerItem key={i}>
              <div className="group border-b border-white/[0.04] pb-6 hover:border-white/[0.08] transition-colors cursor-pointer">
                <h3 className="text-base md:text-lg font-medium text-white/80 group-hover:text-white transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-white/30">{article.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionContainer>

      {/* ─── CONTACT ─── */}
      <SectionContainer id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="section-label">Contact</div>
          </FadeIn>
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-balance">
              Let&apos;s build something together.
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-white/40 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
              Looking for a product builder who can take an idea from concept to launch?
              Let&apos;s talk about your next project.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@noelnichols.com"
                className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all inline-flex items-center gap-2"
              >
                hello@noelnichols.com
                <span className="inline-block">→</span>
              </a>
              <a
                href="https://linkedin.com/in/noelnichols"
                className="px-6 py-3 text-sm text-white/40 hover:text-white border border-white/[0.08] rounded-full transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nikkiai809"
                className="px-6 py-3 text-sm text-white/40 hover:text-white border border-white/[0.08] rounded-full transition-all"
              >
                GitHub
              </a>
            </div>
          </FadeInUp>
        </div>
      </SectionContainer>
    </>
  );
}
