import { FadeInUp, FadeIn } from './animations';
import ArchitectureDiagram from './architecture-diagram';
import { CaseStudySection } from '@/lib/projects';

interface CaseStudyContentProps {
  sections: CaseStudySection[];
  backgroundColor?: string;
  gradient?: string;
  architectureSteps?: { label: string; isMain?: boolean }[];
  color?: string;
}

export function CaseStudyContent({
  sections,
  gradient = 'from-[#6366f1] via-[#8b5cf6] to-[#a78bfa]',
  architectureSteps,
}: CaseStudyContentProps) {
  return (
    <div className="space-y-20 md:space-y-28">
      {sections.map((section, i) => {
        // Architecture diagram type
        if (section.type === 'architecture' && architectureSteps) {
          return (
            <FadeInUp key={section.id} delay={0.05}>
              <div className="glow-indigo-subtle bg-[#0d0d0d] border border-white/[0.06] rounded-xl p-6 md:p-10">
                <h3 className="text-sm font-semibold text-white/80 mb-6">{section.title}</h3>
                <ArchitectureDiagram steps={architectureSteps} gradient={gradient} />
              </div>
            </FadeInUp>
          );
        }

        // Metrics type
        if (section.type === 'metrics') {
          return (
            <FadeInUp key={section.id} delay={0.05}>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-8">{section.title}</h2>
                {section.content.map((p, pi) => (
                  <p key={pi} className="text-sm md:text-base text-white/50 mb-6 leading-relaxed">{p}</p>
                ))}
              </div>
            </FadeInUp>
          );
        }

        // Feature list type
        if (section.type === 'feature-list' && section.features) {
          return (
            <FadeIn key={section.id}>
              <div className="space-y-5">
                {section.content.map((p, pi) => (
                  <p key={pi} className="text-sm md:text-base text-white/50 leading-relaxed">{p}</p>
                ))}
                <div className="mt-6 grid gap-2.5">
                  {section.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br flex-shrink-0" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)' }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        }

        // Default text section
        return (
          <div key={section.id} className="space-y-5">
            {section.content.map((p, pi) => (
              <p key={pi} className="text-sm md:text-base text-white/50 leading-relaxed">{p}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
