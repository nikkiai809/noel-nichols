import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Skills across marketing strategy, brand, technology, and creative direction.',
};

const skillCategories = [
  {
    title: 'Strategy',
    skills: ['Marketing Strategy', 'Brand Strategy', 'Content Strategy', 'Go-to-Market Strategy', 'Business Development'],
  },
  {
    title: 'Communication',
    skills: ['Executive Presentations', 'Public Speaking', 'Copywriting', 'Narrative Development', 'Client Communication'],
  },
  {
    title: 'Creative',
    skills: ['Creative Direction', 'Brand Identity', 'Visual Systems', 'Design Direction', 'Storytelling'],
  },
  {
    title: 'Product & UX',
    skills: ['Product Thinking', 'UX Strategy', 'User Research', 'Information Architecture', 'Product Management'],
  },
  {
    title: 'Technology',
    skills: ['AI / Machine Learning', 'HTML / CSS', 'WordPress', 'SEO', 'Project Management', 'Research'],
  },
];

export default function SkillsPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4 font-mono">Skills</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
              Tools and disciplines I work with.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <p className="text-xs text-muted-foreground font-mono mb-4 uppercase tracking-wider">
                  {cat.title}
                </p>
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 shrink-0" />
                      <p className="text-sm">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core competencies highlight */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-6">Core Competencies</p>
            <div className="flex flex-wrap gap-2">
              {[
                'Marketing Strategy',
                'Brand Strategy',
                'Communication',
                'Executive Presentations',
                'Content Strategy',
                'Public Speaking',
                'Copywriting',
                'UX Thinking',
                'Product Thinking',
                'Project Management',
                'AI',
                'HTML',
                'WordPress',
                'SEO',
                'Research',
                'Business Development',
                'Creative Direction',
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-lg bg-muted border border-border text-muted-foreground hover:text-foreground transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
