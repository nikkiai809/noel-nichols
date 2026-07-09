import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SIGNAL — AI Decision Intelligence',
  description:
    'An AI-powered decision intelligence platform for the music industry. Product vision, brand strategy, UX, and go-to-market.',
};

const architectureLayers = [
  { layer: 'Presentation', tech: 'Next.js 15, TypeScript, TailwindCSS, shadcn/ui', items: ['Executive Dashboard (44 routes)', 'Landing Page (Toast UI)', 'Command Palette (Cmd+K)', 'Dark/Light mode'] },
  { layer: 'Gateway', tech: 'OpenClaw (MCP + HTTP)', items: ['Dual-mode: MCP protocol + HTTP REST API', 'SQLite leads database', '8 MCP tools + 4 HTTP endpoints', 'CORS, health checks'] },
  { layer: 'Orchestration', tech: 'GBrain Core (MCP Server)', items: ['Cortex planner + Thalamus router', '8 MCP tools for agent coordination', 'Multi-agent orchestration', 'Capability-based routing'] },
  { layer: 'Memory & Intelligence', tech: 'Engram (Vector DB + RAG + Graph)', items: ['Persistent memory with embeddings', 'Knowledge graph with 32 edges', '18 seeded memories', '7 MCP tools for RAG queries'] },
  { layer: 'Agent Layer', tech: 'Hermes + Agent Harnesses', items: ['Hermes v0.14.0 (self-improving agent)', 'Analyst, Writer, Legal Harnesses', 'Streaming MCP + Compliance MCP', 'Skills registry'] },
  { layer: 'AI Provider', tech: 'OpenRouter', items: ['Default: deepseek/deepseek-v4-flash', 'Fast inference model', 'Unified API across providers'] },
];

const timeline = [
  { phase: 'Discovery', period: 'Q3 2025', items: ['Market research with label executives', 'Competitive analysis of music AI tools', 'User interviews: 15+ industry professionals', 'Product-market fit validation'] },
  { phase: 'Vision & Architecture', period: 'Q4 2025', items: ['Product vision definition', 'MCP architecture design', 'Brand strategy & positioning', 'Executive dashboard wireframes'] },
  { phase: 'Build', period: 'Q1 2026', items: ['Platform development (Next.js + Python)', 'Intelligence engine + Score engine', '9 MCP servers deployment', 'Executive Brief & Decision Cards UX'] },
  { phase: 'Launch', period: 'Q2 2026', items: ['Beta release to select partners', 'Client onboarding & training', '44 pages, 18/18 tests passing', 'Vercel production deployment'] },
];

export default function SignalProjectPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <p className="text-sm text-muted-foreground mb-4 font-mono">
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>{' '}
            /<span className="text-foreground"> SIGNAL</span>
          </p>

          {/* Hero image placeholder */}
          <div className="aspect-[16/9] md:aspect-[2.4/1] bg-muted rounded-xl mb-10 flex items-center justify-center border border-border">
            <div className="text-center p-8">
              <p className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-muted-foreground/20">
                SIGNAL
              </p>
              <p className="text-sm text-muted-foreground/40 mt-2">
                [TODO: Screenshot / hero image]
              </p>
            </div>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance mb-6">
              SIGNAL — AI Decision Intelligence for the Music Industry
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              An AI-powered platform that transforms how record labels and
              executives discover, evaluate, and act on artist opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="editorial-grid">
            <div>
              <p className="text-xs text-muted-foreground font-mono mb-3">Overview</p>
              <h2 className="text-2xl font-semibold mb-4">Product Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SIGNAL was built to answer one question for music executives:
                &ldquo;What should I do next?&rdquo; It replaces spreadsheets,
                gut feelings, and fragmented data with a unified AI decision
                platform that surfaces opportunities, risks, and recommendations
                in real time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The platform combines an intelligence engine, score engine,
                explainability layer, and confidence scoring — all presented
                through an executive dashboard designed for 15-second decision
                making.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Live platform:{' '}
                <a href="https://signal-music.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  signal-music.vercel.app
                </a>
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Role</p>
                <p className="text-sm">
                  Product Strategy, Brand Strategy, UX Direction, Sales, Client Onboarding
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Timeline</p>
                <p className="text-sm">Q3 2025 — Present</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Codebase</p>
                <p className="text-sm">
                  <a href="https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    github.com/sonoradigitalcorp-H/Sonora-Digital-Corp
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js 15', 'TypeScript', 'TailwindCSS', 'Python', 'MCP Protocol', 'OpenRouter', 'Vercel', 'SWR', 'SQLite', 'Neo4j'].map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Strategy */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <div className="editorial-grid">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-3">Problem</p>
                <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Record labels and music executives make high-stakes decisions
                  about artist investment with fragmented data, manual processes,
                  and no centralized intelligence. Opportunities are missed,
                  risks go unnoticed, and decisions take too long.
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-3">Strategy</p>
                <h2 className="text-2xl font-semibold mb-4">The Approach</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Build a unified AI platform that ingests artist data, applies
                  scoring and intelligence algorithms, and presents actionable
                  insights through an executive-grade interface. Prioritize
                  clarity, confidence, and speed of decision making over data
                  density.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-8">Timeline</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((phase) => (
                <div key={phase.phase} className="animate-fade-in-up">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-foreground/30" />
                    <p className="text-xs text-muted-foreground font-mono">
                      {phase.period}
                    </p>
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{phase.phase}</h3>
                  <ul className="space-y-1">
                    {phase.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-muted-foreground/30 mt-1">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-3">Architecture</p>
            <h2 className="text-2xl font-semibold mb-6">System Architecture</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              SIGNAL is built on an MCP-native agent architecture. Every component
              is an independent MCP server that communicates through a unified protocol.
              This enables scalable integration, hot-swappable agents, and cross-service
              memory persistence.
            </p>

            <div className="relative mb-6">
              {/* Pipeline visualization */}
              <div className="hidden md:flex items-center justify-between mb-8 text-[11px] font-mono text-muted-foreground">
                <span className="text-foreground font-medium">Landing Page</span>
                <span className="text-border">→</span>
                <span className="text-foreground font-medium">OpenClaw</span>
                <span className="text-border">→</span>
                <span className="text-foreground font-medium">GBrain</span>
                <span className="text-border">→</span>
                <span className="text-foreground font-medium">Engram + Agents</span>
                <span className="text-border">→</span>
                <span className="text-foreground font-medium">OpenRouter</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {architectureLayers.map((layer) => (
                  <div key={layer.layer} className="p-4 rounded-lg border border-border bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold">{layer.layer}</h3>
                      <span className="text-[10px] font-mono text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                        {layer.tech.split(',')[0]}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground/60 font-mono mb-2 leading-relaxed">
                      {layer.tech}
                    </p>
                    <ul className="space-y-1">
                      {layer.items.map((item) => (
                        <li key={item} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-muted-foreground/30 mt-0.5">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-3">Results</p>
            <h2 className="text-2xl font-semibold mb-6">Platform Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Routes Built', value: '44+' },
                { label: 'MCP Servers', value: '9' },
                { label: 'Tests Passing', value: '18/18' },
                { label: 'Tech Score', value: '84/100' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-muted border border-border">
                  <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
              {[
                { label: 'MCP Tools', value: '155' },
                { label: 'ADK Agents', value: '6' },
                { label: 'Workflows', value: '6' },
                { label: 'Skills', value: '128' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-muted/50 border border-border">
                  <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              The platform scored 84/100 on the Sonora Quality Index, powered by
              535 automated tests with 0 failures. Deployed to Vercel for
              production use with select label partners.
            </p>
          </div>
        </div>
      </section>

      {/* Lessons + Future */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <div className="editorial-grid">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-3">Lessons</p>
                <h2 className="text-2xl font-semibold mb-4">What We Learned</h2>
                <ul className="space-y-3">
                  {[
                    'Executive decision-making requires clarity over density — 15-second readability is a feature, not a limitation.',
                    'AI scoring must be explainable. Confidence without context is noise.',
                    'MCP architecture enables scalable agent integration without coupling — 9 servers, 155 tools, one protocol.',
                    '535 automated tests with 0 failures proved the value of Spec-Driven Development (SDD).',
                    'Dark mode, premium design, and polished UX signal enterprise readiness to label executives.',
                  ].map((lesson) => (
                    <li key={lesson} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-foreground/30 mt-1">—</span>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-3">Future</p>
                <h2 className="text-2xl font-semibold mb-4">What&rsquo;s Next</h2>
                <ul className="space-y-3 mb-4">
                  {[
                    'Real-time data streaming integration (Streaming MCP)',
                    'Compliance & regulatory auditing layer (Compliance MCP)',
                    'Expanded LLM provider support beyond OpenRouter',
                    'Mobile companion app with real-time alerts',
                    'Multi-language support for Latin American market expansion',
                  ].map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-muted-foreground/30 mt-1">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  The platform is positioned to expand beyond music into adjacent
                  creative industries where AI-powered decision intelligence
                  creates clear value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-4">Gallery</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="aspect-[16/10] bg-muted rounded-xl flex items-center justify-center border border-border"
                >
                  <p className="text-sm text-muted-foreground/30">
                    [TODO: Screenshot {n}]
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <Link
              href="/projects/yami"
              className="group flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">Next Project</p>
                <p className="text-xl sm:text-2xl font-semibold group-hover:opacity-60 transition-opacity">
                  YAMI
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
