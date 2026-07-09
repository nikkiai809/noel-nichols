/* ─── Project Types ─── */

export interface Metric {
  value: string;
  label: string;
}

export interface ArchNode {
  label: string;
  primary?: boolean;
}

export interface CaseSection {
  id: string;
  title: string;
  body: string[];
  variant?: 'text' | 'architecture' | 'features' | 'metrics';
  features?: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  category: string;
  technologies: string[];
  keywords: string[];
  url: string;
  repo: string;
  metrics: Metric[];
  architecture?: ArchNode[];
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
  icon?: string;
}
