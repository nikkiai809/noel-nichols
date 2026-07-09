import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A selection of work across AI, music, brand, and community.',
};

const projects = [
  {
    title: 'SIGNAL',
    subtitle: 'AI Decision Intelligence Platform',
    description:
      'An AI-powered decision intelligence platform for the music industry. Covers product vision, brand strategy, UX, sales, and technical collaboration.',
    href: '/projects/signal',
    year: '2025—2026',
    tags: ['AI', 'Product', 'Brand Strategy', 'UX'],
  },
  {
    title: 'YAMI',
    subtitle: 'Creative Direction & Brand Identity',
    description:
      'Creative direction, brand identity, and marketing strategy for a music and AI venture. Visual system design and positioning.',
    href: '/projects/yami',
    year: '2025—2026',
    tags: ['Brand Identity', 'Creative Direction', 'Marketing'],
  },
  {
    title: 'Velvet Rouge',
    subtitle: 'Brand System & Creative Concept',
    description:
      'Brand system development, naming, narrative, and visual exploration for a creative concept in the music space.',
    href: '/projects/velvet-rouge',
    year: '2024—2025',
    tags: ['Brand System', 'Naming', 'Narrative', 'Visual Identity'],
  },
  {
    title: 'Sonora Music Hub',
    subtitle: 'Creative Ecosystem & Community Development',
    description:
      'Community building, economic development, and creative ecosystem strategy in collaboration with government and local stakeholders.',
    href: '/projects/sonora-music-hub',
    year: '2024—2026',
    tags: ['Community', 'Ecosystem', 'Economic Development'],
  },
  {
    title: 'Downtown Studios',
    subtitle: 'Recording Studio Brand Development',
    description:
      'Brand development, creative direction, and marketing strategy for a recording studio. Music industry branding and visual identity.',
    href: '/projects/downtown-studios',
    year: '2024—2025',
    tags: ['Brand Development', 'Creative Direction', 'Music Industry'],
  },
  {
    title: 'Sonora Digital Corp',
    subtitle: 'Native Agent OS — MCP-Native Operating System',
    description:
      'Co-created a multi-agent AI operating system powering SIGNAL and enterprise products. 155 MCP tools, 128 skills, 6 ADK agents, 535 tests with 0 failures.',
    href: '/projects/sonora-digital-corp',
    year: '2024—2026',
    tags: ['AI OS', 'MCP Architecture', 'Multi-Agent', 'Product Strategy'],
  },
  {
    title: 'Blvck Squvd',
    subtitle: 'Record Label & Creative Collective',
    description:
      'Record label brand development, creative direction, and marketing strategy for an independent music collective and publishing platform.',
    href: '/projects/blvck-squvd',
    year: '2024—Present',
    tags: ['Record Label', 'Creative Direction', 'Music Publishing'],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4 font-mono">Projects</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
              Selected work across AI, music, brand, and community.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <Link
                key={project.title}
                href={project.href}
                className="group block border-t border-border pt-8 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="editorial-grid items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <p className="text-xs text-muted-foreground font-mono">
                        {project.year}
                      </p>
                      <span className="text-muted-foreground/30">/</span>
                      <div className="flex gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight group-hover:opacity-60 transition-opacity">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1 mb-3">
                      {project.subtitle}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                      View case study <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
