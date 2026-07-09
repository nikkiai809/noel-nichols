/* ─── Project / Venture Types ─── */

export interface Metric {
  value: string;
  label: string;
}

export interface ArchNode {
  label: string;
  primary?: boolean;
}

export interface ArchBlock {
  layer: string;
  components: string[];
  description: string;
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

export interface ApiExample {
  endpoint: string;
  method: string;
  description: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status?: 'completed' | 'in-progress' | 'planned';
}

export interface FeatureCard {
  title: string;
  description: string;
  icon?: string;
}

export interface CaseSection {
  id: string;
  title: string;
  body: string[];
  variant?: 'text' | 'architecture' | 'features' | 'challenges' | 'lessons' | 'gallery' | 'timeline' | 'feature-cards' | 'api-examples' | 'roadmap' | 'arch-blocks';
  features?: string[];
  challenges?: Challenge[];
  lessons?: Lesson[];
  screenshots?: Screenshot[];
  featureCards?: FeatureCard[];
  apiExamples?: ApiExample[];
  roadmap?: RoadmapItem[];
  archBlocks?: ArchBlock[];
}

export interface TechCategory {
  label: string;
  items: string[];
}

export interface VentureRole {
  area: string;
  description: string;
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
  ventureRoles?: VentureRole[];
  ventureType?: string;
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

/* ─── Engineering Principles ─── */

export interface EngineeringPrinciple {
  title: string;
  description: string;
}

/* ─── GitHub Repos ─── */

export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  language?: string;
}

/* ─── Currently Building ─── */

export interface CurrentlyBuilding {
  product: string;
  description: string;
  status: 'active' | 'shipped' | 'exploring';
}

/* ─── How I Work ─── */

export interface HowWorkStep {
  step: string;
  title: string;
  description: string;
}

/* ─── Founder ─── */

export interface FounderMetric {
  value: string;
  label: string;
}

export interface FounderTimelineEvent {
  era: string;
  title: string;
  description: string;
  type: 'founder' | 'product' | 'technology' | 'company';
}

/* ─── Docs ─── */

export interface DocContent {
  title: string;
  slug: string;
  venture: string;
  ventureLabel: string;
  ventureSlug: string;
  description: string;
  readingTime: string;
  lastUpdated: string;
  tags: string[];
  sections: DocContentSection[];
}

export interface DocContentSection {
  id: string;
  title: string;
  type: 'text' | 'callout' | 'list' | 'timeline' | 'card-grid' | 'metrics' | 'arch' | 'quote';
  body?: string[];
  items?: string[];
  calloutTitle?: string;
  calloutBody?: string;
  calloutType?: 'info' | 'warning' | 'success';
  cards?: { title: string; description: string }[];
  metrics?: { value: string; label: string }[];
  quote?: string;
  quoteAttr?: string;
}

export interface DocVenture {
  id: string;
  name: string;
  description: string;
  docs: { title: string; slug: string; description: string }[];
}
