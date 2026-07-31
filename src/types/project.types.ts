import { ImageMeta } from './common.types';/**
 * Project Section Types
 */

export interface ProjectMetrics {
  performance?: string; // e.g., "99.9% uptime"
  uptime?: string;
  reduction?: string; // e.g., "30% cost reduction"
  improvement?: string; // e.g., "40% faster"
  latency?: string;
  custom?: {
    [key: string]: string;
  };
}

export interface TechStackItem {
  name: string;
  category: 'Backend' | 'Infrastructure' | 'DevOps' | 'Tools' | 'Frontend' | 'Database';
}

export interface ProjectStack {
  category: 'Backend' | 'Infrastructure' | 'DevOps' | 'Tools' | 'Frontend' | 'Database';
  technologies: TechStackItem[];
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  caseStudy?: string;
  demo?: string;
  documentation?: string;
}

export interface ProjectResult {
  title: string;
  description: string;
  impact?: string; // Quantified impact
}

export interface ProjectChallenge {
  description: string;
  complexity: 'low' | 'medium' | 'high';
}

export interface ProjectApproach {
  description: string;
  methodology?: string; // e.g., "Microservices", "Infrastructure as Code"
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;

  // Problem & Approach
  challenge: ProjectChallenge;
  approach: ProjectApproach;
  problemStatement?: string;

  // Technical details
  architecture?: string; // Architecture description or diagram
  technologies: ProjectStack[];
  results: ProjectResult[];
  metrics: ProjectMetrics;

  // Micro label for quick context
  microLabel: string; // e.g., "Architected from scratch", "Optimized Performance"

  // Visual assets
  image: ImageMeta;
  thumbnail?: ImageMeta;
  screenshots?: ImageMeta[];
  diagram?: ImageMeta;

  // Links
  links: ProjectLinks;

  // Featured project designation
  featured?: boolean;
  isFeatured?: boolean;

  // Grid layout sizing (for Bento)
  gridSize?: 'sm' | 'md' | 'lg' | 'hero'; // hero = 2x2

  // Display settings
  publishedDate?: string;
  status?: 'completed' | 'ongoing' | 'archived';
  visibility?: 'public' | 'private';

  // Tags for filtering
  tags?: string[];

  // Optional case study content
  caseStudyContent?: {
    lessonsLearned: string[];
    keyDecisions: string[];
    teamSize?: number;
    duration?: string;
  };
}

export interface ProjectsData {
  intro?: string;
  featuredProject?: Project;
  gridProjects: Project[];
  allProjects: Project[];
}

// Component Props

export interface ProjectCardProps {
  project: Project;
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
  featured?: boolean;
}

export interface FeaturedProjectProps {
  project: Project;
  animated?: boolean;
}

export interface ProjectsGridProps {
  projects: Project[];
  columns?: 2 | 3 | 4;
  animateOnScroll?: boolean;
}

export interface ProjectStatsProps {
  metrics: ProjectMetrics;
  variant?: 'inline' | 'grid' | 'cards';
}

export interface TechStackDisplayProps {
  stack: ProjectStack[];
  variant?: 'pills' | 'grouped' | 'minimal';
  limit?: number;
  showCategory?: boolean;
}