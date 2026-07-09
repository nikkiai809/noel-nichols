import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience across marketing, creative direction, and business development.',
};

const experiences = [
  {
    role: 'Co-Founder & Creative Partner',
    org: 'Sonora Digital Corp',
    period: '2024 — Present',
    description:
      'Co-creating the Native Agent OS — an MCP-native multi-agent AI operating system (155 tools, 128 skills, 6 ADK agents, 535 tests). Leading product strategy, brand development, creative direction, and go-to-market for SIGNAL (AI decision intelligence platform), ABE Music OS, and the broader Sonora ecosystem. Driving client relationships with label executives and enterprise partners.',
    type: 'Founder',
  },
  {
    role: 'Marketing Strategist',
    org: 'Independent / Consulting',
    period: '2020 — Present',
    description:
      'Marketing strategy, brand positioning, and go-to-market planning for startups and creative businesses. Specializing in the intersection of technology, music, and community.',
    type: 'Strategy',
  },
  {
    role: 'Creative Director',
    org: 'Independent / Consulting',
    period: '2020 — Present',
    description:
      'Creative direction, brand identity development, visual system design, and narrative strategy for brands in music, technology, and culture.',
    type: 'Creative',
  },
  {
    role: 'Project Lead',
    org: 'Various Projects',
    period: '2018 — Present',
    description:
      'Leading cross-functional teams across product development, brand launches, community initiatives, and technology implementations.',
    type: 'Leadership',
  },
  {
    role: 'Communications & Brand Development',
    org: 'Independent / Consulting',
    period: '2018 — Present',
    description:
      'Brand narrative, executive communications, content strategy, and public speaking for entrepreneurs, government entities, and creative communities.',
    type: 'Communications',
  },
  {
    role: 'Business Development',
    org: 'Independent / Consulting',
    period: '2018 — Present',
    description:
      'Partnership development, client acquisition, revenue strategy, and ecosystem building across creative and technology sectors.',
    type: 'Business',
  },
];

export default function ExperiencePage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4 font-mono">Experience</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
              Building at the intersection of marketing, technology, and creativity.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.role}-${exp.org}`}
                className="border-t border-border py-8 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="editorial-grid items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-muted-foreground">
                        {exp.period}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground uppercase tracking-wider">
                        {exp.type}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      {exp.role}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {exp.org}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-6">Education</p>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold">Marketing Graduate</p>
                <p className="text-sm text-muted-foreground">
                  Formal education in marketing strategy and consumer behavior.
                  [TODO: Institution, year]
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold">Business Creation Graduate</p>
                <p className="text-sm text-muted-foreground">
                  Entrepreneurial training in venture building and business development.
                  [TODO: Institution, year]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
