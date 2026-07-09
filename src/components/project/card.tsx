'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/motion/fade-in';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.06}>
      <Link href={`/projects/${project.id}`} className="group block">
        <article className="card p-6 md:p-8 h-full group-hover:translate-y-[-3px] transition-all duration-400">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-60" />
            <Badge>{project.category}</Badge>
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-[var(--color-fg)] mb-2 group-hover:text-[var(--color-accent-light)] transition-colors">
            {project.name}
          </h3>

          <p className="text-sm text-[var(--color-fg-muted)] mb-5 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((t) => (
              <span key={t} className="badge text-[10px]">
                {t}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="badge text-[10px]">+{project.technologies.length - 4}</span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[var(--color-fg-dim)] group-hover:text-[var(--color-accent-light)] transition-colors">
            <span>View case study</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </div>
        </article>
      </Link>
    </FadeIn>
  );
}
