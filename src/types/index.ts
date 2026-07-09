/* ─── Project Types ─── */

export interface Metric {
  value: string;
  label: string;
}

export interface ArchNode {
  label: string;
  primary?: boolean;
}

export interface Challenge {
  title: string;
  body: string;
}

export interface Lesson {
  title: string;
  body: string;
}

export interface Screenshot {
  label: string;
  caption: string;
  color: string;
}

export interface CaseSection {
  id: string;
  title: string;
  body: string[];
  variant?: 'text' | 'architecture' | 'features' | 'challenges' | 'lessons' | 'gallery';
  features?: string[];
  challenges?: Challenge[];
  lessons?: Lesson[];
  screenshots?: Screenshot[];
}

export interface TechCategory {
  label: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  category: string;
  technologies: string[];
  techCategories: TechCategory[];
  keywords: string[];
  url: string;
  repo: string;
  metrics: Metric[];
  architecture?: ArchNode[];
  screenshots?: Screenshot[];
  sections: CaseSection[];
}

/* ─── Navigation ─── */

export interface NavItem {
  label: string;
  href: string;
}

/* ─── Writing ─── */

export interface Article {
  title: string;
  excerpt: string;
  date?: string;
}

/* ─── Capability ─── */

export interface Capability {
  title: string;
  description: string;
}

/* ─── Recruiter Info ─── */

export interface RecruiterInfo {
  label: string;
  value: string;
}
