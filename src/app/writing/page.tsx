import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Articles and thoughts on marketing, AI, creativity, and the future of creative economies.',
};

const articles = [
  {
    title: 'The Future of Creative Economies',
    description:
      'How technology, AI, and community-driven initiatives are reshaping creative industries in emerging markets.',
    date: 'Coming soon',
    status: 'draft' as const,
  },
  {
    title: 'AI and Marketing: Beyond the Hype',
    description:
      'Practical applications of artificial intelligence in marketing strategy, content creation, and customer engagement.',
    date: 'Coming soon',
    status: 'draft' as const,
  },
  {
    title: 'Building Communities That Scale',
    description:
      'Lessons from building creative ecosystems at the intersection of music, technology, and local culture.',
    date: 'Coming soon',
    status: 'draft' as const,
  },
  {
    title: 'Brand Strategy in the Age of AI',
    description:
      'How brand positioning, narrative, and identity evolve when intelligent systems become part of the creative process.',
    date: 'Coming soon',
    status: 'draft' as const,
  },
  {
    title: 'Music Innovation in Latin America',
    description:
      'The emerging music technology landscape in Latin America and the opportunities for creators, investors, and platforms.',
    date: 'Coming soon',
    status: 'draft' as const,
  },
];

export default function WritingPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4 font-mono">Writing</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
              Thoughts on marketing, AI, creativity, and the future.
            </h1>
            <p className="text-muted-foreground mt-6 leading-relaxed max-w-xl">
              These articles are in development. Subscribe to be notified when
              they&rsquo;re published.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="space-y-0">
            {articles.map((article, i) => (
              <div
                key={article.title}
                className="border-t border-border py-8 animate-fade-in-up opacity-60 hover:opacity-100 transition-opacity"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="editorial-grid items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-muted-foreground">
                        {article.date}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground uppercase tracking-wider">
                        {article.status}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      {article.title}
                    </h2>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
