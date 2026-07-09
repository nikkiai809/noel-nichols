import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sonora Digital Corp — Native Agent OS',
  description:
    'An MCP-native multi-agent operating system powering SIGNAL and enterprise AI products. 155 tools, 128 skills, 6 agents, 535 tests.',
};

const platformStats = [
  { label: 'MCP Tools', value: '155' },
  { label: 'ADK Agents', value: '6' },
  { label: 'Workflows', value: '6' },
  { label: 'Ollama Models', value: '6' },
  { label: 'Capabilities', value: '16' },
  { label: 'Skills', value: '128' },
  { label: 'Plugins', value: '5' },
  { label: 'Tests', value: '535' },
];

const architectureLayers = [
  {
    layer: 'Gateway',
    port: '18989',
    desc: 'MCP Protocol Gateway with JWT RS256 authentication and rate limiting. Single entry point for all agent communication.',
    components: ['MCP Protocol Handler', 'JWT Auth (RS256)', 'Rate Limiter', 'Request Router'],
  },
  {
    layer: 'Capability Registry',
    desc: 'Central registry of all system capabilities. Enables capability-based routing and dynamic service discovery across the OS.',
    components: ['Service Discovery', 'Capability Registration', 'Health Checks', 'Version Management'],
  },
  {
    layer: 'ADK (Agent Development Kit)',
    desc: 'Declarative agent definitions in YAML. Agents are configured, not coded — each with defined tools, models, and boundaries.',
    components: ['6 YAML-Configured Agents', 'Tool Assignment', 'Model Binding', 'Permission Rules'],
  },
  {
    layer: 'Workflow Engine',
    desc: 'Multi-step, multi-agent workflow orchestration. Chain agents together for complex, cross-domain tasks.',
    components: ['Sequential Pipelines', 'Parallel Execution', 'State Management', 'Error Recovery'],
  },
  {
    layer: 'Swarm Engine',
    desc: 'Parallel agent coordination for high-throughput scenarios. Agents collaborate on tasks with dynamic role assignment.',
    components: ['Agent Swarms', 'Dynamic Role Assignment', 'Result Aggregation', 'Conflict Resolution'],
  },
  {
    layer: 'Provider Router',
    desc: 'Routes requests across 6 Ollama models + OpenRouter + OpenCodeGo. Automatic failover and model selection.',
    components: ['Ollama (6 models)', 'OpenRouter', 'OpenCodeGo', 'Automatic Failover'],
  },
];

export default function SonoraDigitalCorpPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <p className="text-sm text-muted-foreground mb-4 font-mono">
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>{' '}
            /<span className="text-foreground"> Sonora Digital Corp</span>
          </p>

          <div className="aspect-[16/9] md:aspect-[2.4/1] bg-muted rounded-xl mb-10 flex items-center justify-center border border-border">
            <div className="text-center p-8">
              <p className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-muted-foreground/20">
                Native Agent OS
              </p>
              <p className="text-sm text-muted-foreground/40 mt-2">
                [TODO: Architecture diagram]
              </p>
            </div>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance mb-6">
              Sonora Digital Corp — Native Agent OS
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              An MCP-native multi-agent operating system powering SIGNAL and
              enterprise AI products. 155 MCP tools, 128 skills, 6 ADK agents,
              535 tests with zero failures.
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
              <h2 className="text-2xl font-semibold mb-4">What Is Native Agent OS?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Native Agent OS is the infrastructure behind every Sonora Digital
                Corp product. It&apos;s a multi-agent AI operating system built
                entirely on the MCP (Model Context Protocol), where every
                component — from memory to orchestration to gateway — is an
                independent MCP server.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The result is a modular, composable, and testable AI platform
                that can scale horizontally, swap components without downtime,
                and maintain strict boundaries between agents through formal
                specifications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Public site:{' '}
                <a href="https://sonoradigitalcorp.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  sonoradigitalcorp.com
                </a>
                {' / '}
                <a href="https://github.com/sonoradigitalcorp-H/Sonora-Digital-Corp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  GitHub
                </a>
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Role</p>
                <p className="text-sm">
                  Product Strategy, Brand Strategy, UX Direction, Creative Direction
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Timeline</p>
                <p className="text-sm">2024 — Present</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {['MCP Protocol', 'Python', 'TypeScript', 'Next.js', 'Neo4j', 'Qdrant', 'Ollama', 'OpenRouter', 'Docker'].map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Codebase Languages</p>
                <p className="text-sm text-muted-foreground">
                  HTML (33.8%), TypeScript (24.6%), Python (23.2%), JavaScript (11.1%)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-3">Platform Scale</p>
            <h2 className="text-2xl font-semibold mb-6">By the Numbers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {platformStats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-muted border border-border">
                  <p className="text-2xl sm:text-3xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm font-semibold mb-1">Quality Index: 84/100</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                535 automated tests across 6 test suites (Truth, Collectors, Execution, Evolution, ABE, Integration) — all passing with 0 failures.
              </p>
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
              Every component is an independently deployable MCP server communicating
              through a unified gateway. This enables hot-swappable agents, cross-service
              memory, and capability-based routing.
            </p>

            {/* Pipeline flow */}
            <div className="hidden md:flex items-center justify-between mb-8 text-[11px] font-mono text-muted-foreground bg-muted/30 p-4 rounded-lg border border-border">
              <span className="text-foreground font-medium">Gateway :18989</span>
              <span className="text-border">→</span>
              <span className="text-foreground font-medium">CapabilityRegistry</span>
              <span className="text-border">→</span>
              <span className="text-foreground font-medium">ADK + Workflow</span>
              <span className="text-border">→</span>
              <span className="text-foreground font-medium">Provider Router</span>
              <span className="text-border">→</span>
              <span className="text-foreground font-medium">LLM / Tools</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {architectureLayers.map((layer) => (
                <div key={layer.layer} className="p-4 rounded-lg border border-border bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold">{layer.layer}</h3>
                    {layer.port && (
                      <span className="text-[10px] font-mono text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                        :{layer.port}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mb-2">
                    {layer.desc}
                  </p>
                  <ul className="space-y-1">
                    {layer.components.map((item) => (
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
      </section>

      {/* Products powered */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <div className="editorial-grid">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-3">Products</p>
                <h2 className="text-2xl font-semibold mb-4">Powered by Native Agent OS</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The OS serves as the foundation for multiple products across
                  the Sonora ecosystem. Each product is a vertical application
                  built on the same MCP-native core.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: 'SIGNAL',
                    desc: 'AI decision intelligence for the music industry — executive dashboard, opportunity pipeline, and market intelligence.',
                    status: 'Live (Beta)',
                  },
                  {
                    name: 'ABE Music OS',
                    desc: 'Enterprise OS for music labels with PWA, voice interface, avatar, contracts, revenue tracking, and CRM.',
                    status: 'In Development',
                  },
                  {
                    name: 'Sonora Brain v3',
                    desc: 'Internal agent orchestration platform powering MCP servers, skills registry, memory, and multi-agent workflows.',
                    status: 'Active',
                  },
                ].map((product) => (
                  <div key={product.name} className="p-4 rounded-lg border border-border bg-muted/30">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold">{product.name}</h3>
                      <span className="text-[10px] font-mono text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                        {product.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDD Methodology */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-3">Methodology</p>
            <h2 className="text-2xl font-semibold mb-4">Spec-Driven Development</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              Every component in Native Agent OS is governed by SDD — a 7-phase
              workflow: Spec → Plan → Tasks → Apply → Verify → Archive. Each
              agent has a formal YAML spec defining its capabilities, boundaries,
              tools, and test requirements.
            </p>
            <div className="flex flex-wrap gap-2">
              {['VDD', 'EDD', 'PDD', 'ODD', 'SDD', 'BDD', 'TDD'].map((step) => (
                <span key={step} className="text-xs px-3 py-1 rounded-full bg-muted border border-border font-mono">
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <div className="editorial-grid">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-3">Lessons</p>
                <h2 className="text-2xl font-semibold mb-4">What We Learned</h2>
                <ul className="space-y-3">
                  {[
                    'MCP protocol enables true modularity — replace any component without touching others.',
                    'YAML-defined agents (ADK) are easier to maintain, audit, and scale than hardcoded agents.',
                    '535 tests with 0 failures is achievable when specs drive development from day one.',
                    'Cross-service memory (Engram) eliminates the cold-start problem across sessions.',
                    'A unified gateway with JWT auth and rate limiting is essential for production multi-agent systems.',
                  ].map((lesson) => (
                    <li key={lesson} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-foreground/30 mt-1">—</span>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-3">Products</p>
                <h2 className="text-2xl font-semibold mb-4">Ecosystem Map</h2>
                <ul className="space-y-3">
                  {['TwinStream', 'WebCast', 'AppLive', 'AutoEvent', 'LiveBrand', 'Concierge', 'ComplianceCast', 'IndustryTwin'].map((product) => (
                    <li key={product} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-foreground/30 mt-1">—</span>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <Link
              href="/projects/blvck-squvd"
              className="group flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">Next Project</p>
                <p className="text-xl sm:text-2xl font-semibold group-hover:opacity-60 transition-opacity">
                  Blvck Squvd
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
