'use client';

import Link from 'next/link';
import { FadeInUp } from './animations';

interface ProjectCardProps {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  colors: {
    gradient: string;
  };
  index?: number;
}

export default function ProjectCard({ id, name, tagline, description, technologies, colors, index = 0 }: ProjectCardProps) {
  return (
    <FadeInUp delay={0.05 * index}>
      <Link href={`/projects/${id}`}>
        <div className="project-card group cursor-pointer">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${colors.gradient}`} />
              <span className="tag-item">{tagline}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
              {name}
            </h3>
            <p className="text-sm text-white/50 mb-5 line-clamp-2">
              {description}
            </p>
            <div className="tag-list mb-5">
              {technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="tag-item">{tech}</span>
              ))}
              {technologies.length > 4 && (
                <span className="tag-item">+{technologies.length - 4}</span>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/40 group-hover:text-white/70 transition-colors">
              <span>View case study</span>
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </Link>
    </FadeInUp>
  );
}
