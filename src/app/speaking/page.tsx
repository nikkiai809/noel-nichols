import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speaking',
  description: 'Experience presenting to entrepreneurs, government, creative communities, clients, and investors.',
};

const speakingHighlights = [
  {
    audience: 'Entrepreneurs',
    description:
      'Presentations on marketing strategy, brand building, and AI-powered business development to startup communities and entrepreneurial networks.',
  },
  {
    audience: 'Government',
    description:
      'Strategic presentations to government entities on creative economy development, technology adoption, and community-driven economic initiatives.',
  },
  {
    audience: 'Creative Communities',
    description:
      'Workshops and talks on brand identity, creative entrepreneurship, and the intersection of art and technology for artists and creative professionals.',
  },
  {
    audience: 'Clients',
    description:
      'Executive presentations covering brand strategy, platform demos, marketing roadmaps, and business development proposals.',
  },
  {
    audience: 'Investors',
    description:
      'Pitch presentations, product demonstrations, and strategic overviews for investors and stakeholders.',
  },
];

export default function SpeakingPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4 font-mono">Speaking</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
              Presenting to diverse audiences across business, government, and creative communities.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="space-y-0">
            {speakingHighlights.map((item, i) => (
              <div
                key={item.audience}
                className="border-t border-border py-8 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="editorial-grid items-start">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      {item.audience}
                    </h2>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-4">Topics</p>
            <div className="flex flex-wrap gap-2">
              {[
                'Marketing Strategy',
                'Brand Building',
                'AI for Business',
                'Creative Economy',
                'Music Industry Innovation',
                'Community Development',
                'Technology Entrepreneurship',
                'Executive Communication',
              ].map((topic) => (
                <span
                  key={topic}
                  className="text-sm px-3 py-1.5 rounded-lg bg-muted border border-border text-muted-foreground"
                >
                  {topic}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-8 leading-relaxed">
              [TODO: Add specific speaking engagements, conference appearances, and upcoming events.]
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
