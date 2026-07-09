import Image from 'next/image';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'signal',
    name: 'SIGNAL',
    tagline: 'AI Decision Intelligence for the Music Industry',
    url: 'https://signal-music.vercel.app',
    roles: ['Founder', 'Product', 'UX', 'Engineering', 'AI'],
    description:
      'An AI-powered platform that transforms how record labels discover, evaluate, and act on artist opportunities. Executive dashboard with decision intelligence, scoring engine, and multi-agent architecture.',
    logo: '/logos/signal.svg',
    color: '#6366f1',
    bgClass: 'from-indigo-50 to-white',
  },
  {
    id: 'yami',
    name: 'YAMI',
    tagline: 'Preventive Mental Health Ecosystem',
    url: 'https://yami-mx.vercel.app',
    roles: ['Founder', 'Product', 'Brand', 'Engineering'],
    description:
      'A three-layer preventive mental health platform for Mexico — Miru (detect), Kiku (accompany), Tomoni (connect). Built from concept to deployment: product strategy, brand identity, UX, and full-stack engineering.',
    logo: '/logos/yami.svg',
    color: '#2d8f7d',
    bgClass: 'from-teal-50 to-white',
  },
  {
    id: 'abe',
    name: 'ABE Music Hub',
    tagline: '360° Music Label Operating System',
    url: 'https://abe-music-hub.vercel.app',
    roles: ['Product', 'UX', 'Engineering'],
    description:
      'A complete music label OS connecting discovery, production, brand, distribution, and monetization in a single ecosystem. 11 interconnected spaces designed for maximum creative flow.',
    logo: '/logos/abe.svg',
    color: '#0ea5e9',
    bgClass: 'from-sky-50 to-white',
  },
  {
    id: 'sonora',
    name: 'Sonora Digital Corp',
    tagline: 'Venture Studio — Native Agent OS',
    url: 'https://sonoradigitalcorp.com',
    roles: ['Co-Founder', 'Product', 'Brand', 'Strategy'],
    description:
      'A technology venture studio building AI-powered infrastructure for the music industry. Our Native Agent OS powers 155 MCP tools, 128 skills, 6 ADK agents, and 535 passing tests across the entire ecosystem.',
    logo: '/logos/sonora.svg',
    color: '#7c5cfc',
    bgClass: 'from-purple-50 to-white',
  },
  {
    id: 'velvet',
    name: 'Velvet Rouge',
    tagline: 'Global Creative Network',
    url: 'https://velvet-rouge.vercel.app',
    roles: ['Creative Director', 'Brand', 'Design'],
    description:
      'A private creative network connecting six global cities through editorial, observation, and cultural signal. Not a brand, not an event — an invisible thread between Mexico City, Tokyo, Seoul, Berlin, LA, and Shanghai.',
    logo: '/logos/velvet.svg',
    color: '#5e1018',
    bgClass: 'from-stone-50 to-white',
  },
  {
    id: 'dental',
    name: 'Dr. Rafael Gómez Palafox',
    tagline: 'Maxillofacial Prosthetics & Oncology Dentistry',
    url: 'https://rafaelgomezpalafox.space-z.ai',
    roles: ['Full-Stack', 'UX', 'Design'],
    description:
      'Complete digital presence for a UNAM-trained specialist in maxillofacial prosthetics and oncology dentistry. From strategy to deployment: appointment system, content architecture, and patient experience design.',
    logo: '/logos/dental.svg',
    color: '#10b981',
    bgClass: 'from-emerald-50 to-white',
  },
];

const capabilities = [
  { title: 'AI Products', desc: 'From concept to deployed AI systems with scoring, reasoning, and explainability.' },
  { title: 'Product Strategy', desc: 'Roadmap definition, prioritization, spec-driven development, and go-to-market.' },
  { title: 'Technical Architecture', desc: 'Full-stack system design — Next.js, Python, MCP, distributed agents, and infrastructure.' },
  { title: 'UX & Interaction', desc: 'Premium interfaces at Apple/Linear quality. Editorial typography, motion, and design systems.' },
  { title: 'Brand Systems', desc: 'Naming, identity, visual language, and narrative architecture for ventures and products.' },
  { title: 'Engineering', desc: 'TypeScript, Python, React, Node.js, Tailwind, Prisma, Docker, and cloud infrastructure.' },
  { title: 'Growth & GTM', desc: 'Launch strategy, positioning, content architecture, and audience development for new products.' },
  { title: 'Creative Direction', desc: 'Artistic vision, editorial direction, cultural strategy, and creative operations.' },
  { title: 'Leadership', desc: 'Cross-functional team building, stakeholder management, and venture-level decision making.' },
];

const experience = [
  {
    period: '2024 — Present',
    title: 'Co-Founder & Creative Partner',
    org: 'Sonora Digital Corp',
    description:
      'Built a Native Agent OS from scratch — 155 MCP tools, 128 skills, 6 agents, 535 tests, 0 failures. Launched SIGNAL (AI music intelligence), ABE Music Hub (label OS), and YAMI (mental health platform). Grew the venture studio to 4 products, 6 services, and 3 platforms.',
    type: 'Founder',
  },
  {
    period: '2023 — Present',
    title: 'Product Builder & Creative Director',
    org: 'Independent',
    description:
      'End-to-end product creation: from concept through design, engineering, and launch. Delivered Velvet Rouge (global creative network), multiple studio projects, and complete digital presence for healthcare professionals.',
    type: 'Builder',
  },
  {
    period: '2020 — Present',
    title: 'Marketing & Brand Strategist',
    org: 'Independent / Consulting',
    description:
      'Brand positioning, go-to-market planning, and narrative architecture for startups and creative businesses across music, technology, and healthcare sectors.',
    type: 'Strategy',
  },
  {
    period: '2018 — Present',
    title: 'Project & Team Lead',
    org: 'Various',
    description:
      'Led cross-functional teams across product development, brand launches, community initiatives, and technology implementations. Managed stakeholder relationships, budgets, and delivery timelines.',
    type: 'Leadership',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="min-h-screen flex items-center section pb-0">
        <div className="container-wide px-6 md:px-8 lg:px-12 pt-24">
          <div className="max-w-4xl text-left">
            <p className="text-sm text-muted-foreground font-mono mb-6 animate-fade-in-up">
              Noel Nichols
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] animate-fade-in-up stagger-1">
              I build
              <br />
              <span className="italic font-normal text-muted-foreground">products</span>.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mt-8 max-w-2xl leading-relaxed animate-fade-in-up stagger-2">
              AI infrastructure. Music platforms. Mental health ecosystems.
              Brand systems. From concept through design, engineering, and
              deployment — I take products from zero to live.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-10 animate-fade-in-up stagger-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-80 transition-all"
              >
                View products <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            {/* Subtle scroll indicator */}
            <div className="mt-24 sm:mt-32 flex items-center gap-2 text-xs text-muted-foreground/40 font-mono animate-fade-in stagger-4">
              <span className="w-6 h-px bg-muted-foreground/20" />
              scroll
            </div>
          </div>
        </div>
      </section>

      {/* ===== SELECTED PRODUCTS ===== */}
      <section id="products" className="section anchor-offset">
        <div className="container-wide px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mb-16 md:mb-24 text-left">
            <p className="text-xs text-muted-foreground font-mono mb-4 tracking-wider uppercase">
              Selected Products
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              I don&apos;t just design or code — I build products from start to finish.
            </h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center animate-reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Project preview */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-frame aspect-[4/3] relative overflow-hidden bg-gradient-to-br ${project.bgClass} group`}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={280}
                      height={70}
                      unoptimized
                      className="w-full max-w-[220px] sm:max-w-[280px] h-auto opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      Visit live site <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </a>

                {/* Project info - left aligned */}
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
                  </div>
                  <p className="text-base text-muted-foreground mb-3 font-medium">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.roles.map((role) => (
                      <span key={role} className="role-tag">{role}</span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium mt-5 hover:opacity-50 transition-opacity"
                  >
                    Visit {project.name} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW I BUILD ===== */}
      <section id="approach" className="section anchor-offset">
        <div className="container-wide px-6 md:px-8 lg:px-12">
          <div className="divider mb-16 md:mb-24" />
          <div className="max-w-4xl mb-16 text-left">
            <p className="text-xs text-muted-foreground font-mono mb-4 tracking-wider uppercase">
              How I Build
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              From zero to deployed — with no gaps between vision and execution.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-left">
            {[
              {
                step: '01',
                title: 'Spec & Design',
                content:
                  'Every product starts with a clear spec: purpose, scope, architecture, and interfaces defined before a single line of code. Design decisions are documented and trade-offs are explicit.',
              },
              {
                step: '02',
                title: 'Build & Integrate',
                content:
                  'I build full-stack — from Next.js frontends to Python AI services, from MCP agent infrastructure to database architecture. Every component is tested alongside the code, not after.',
              },
              {
                step: '03',
                title: 'Ship & Iterate',
                content:
                  'Deployed on production infrastructure (Vercel, Docker, cloud). Real users, real data, real impact. Products ship fast and improve continuously, guided by metrics and feedback.',
              },
            ].map((step) => (
              <div key={step.step} className="animate-reveal">
                <p className="text-3xl font-semibold tracking-tight text-muted-foreground/20 mb-4">
                  {step.step}
                </p>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-24 p-8 md:p-12 bg-muted rounded-2xl border border-border text-left">
            <p className="text-sm text-muted-foreground font-mono mb-3">Methodology</p>
            <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground font-medium leading-relaxed max-w-3xl">
              &ldquo;Spec-Driven Development. Every component is defined, planned, built, verified, and archived. No ambiguity. No shortcuts. No surprises.&rdquo;
            </blockquote>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Spec', 'Plan', 'Tasks', 'Apply', 'Verify', 'Archive'].map((s) => (
                <span key={s} className="text-xs px-3 py-1 rounded-full bg-background border border-border font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="section anchor-offset">
        <div className="container-wide px-6 md:px-8 lg:px-12">
          <div className="divider mb-16 md:mb-24" />
          <div className="max-w-4xl mb-16 text-left">
            <p className="text-xs text-muted-foreground font-mono mb-4 tracking-wider uppercase">
              Experience
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Track record of shipping.
            </h2>
          </div>

          <div className="space-y-0 text-left">
            {experience.map((exp, i) => (
              <div
                key={`${exp.title}-${exp.org}`}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-8 border-t border-border animate-reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="md:col-span-1">
                  <p className="text-xs text-muted-foreground font-mono">{exp.period}</p>
                </div>
                <div className="md:col-span-3 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <span className="role-tag">{exp.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{exp.org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section id="capabilities" className="section anchor-offset">
        <div className="container-wide px-6 md:px-8 lg:px-12">
          <div className="divider mb-16 md:mb-24" />
          <div className="max-w-4xl mb-16 text-left">
            <p className="text-xs text-muted-foreground font-mono mb-4 tracking-wider uppercase">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Not a list of tools. A set of capabilities.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border text-left">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`p-6 md:p-8 animate-reveal ${i >= 3 ? 'sm:border-t' : ''} ${i % 3 !== 0 ? 'sm:border-t-0' : ''}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <h3 className="text-sm font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WRITING ===== */}
      <section id="writing" className="section anchor-offset">
        <div className="container-wide px-6 md:px-8 lg:px-12">
          <div className="divider mb-16 md:mb-24" />
          <div className="max-w-4xl text-left">
            <p className="text-xs text-muted-foreground font-mono mb-4 tracking-wider uppercase">
              Writing
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Thoughts on building products at the intersection of AI, music, and creativity.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Essays, case studies, and observations on product development,
              AI infrastructure, creative economies, and the future of music
              technology. Coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section anchor-offset">
        <div className="container-wide px-6 md:px-8 lg:px-12">
          <div className="divider mb-16 md:mb-24" />
          <div className="max-w-4xl text-left">
            <p className="text-xs text-muted-foreground font-mono mb-4 tracking-wider uppercase">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              Building something interesting? Let&apos;s talk.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-10">
              Whether you&apos;re a founder building AI infrastructure, a label
              looking for a technology partner, or a team that needs product
              leadership — I&apos;d like to hear about what you&apos;re building.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@noelnichols.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-80 transition-all"
              >
                hello@noelnichols.com <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/noelnichols1934"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
              >
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/nikkiai809"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
              >
                GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
