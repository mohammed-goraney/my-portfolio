/**
 * Skills Section Types
 */

export interface Skill {
  name: string;
  level?: number; // 0-100
  yearsOfExperience?: number;
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
  verified?: boolean; // Certification badge
}

export interface SkillCategory {
  id: string;
  name: string; // "Networking", "Cloud", "Automation", etc.
  description?: string;
  level?: number; // Overall category proficiency (0-100)
  skills: Skill[];
  color?: string; // Optional accent color for the category
  icon?: string;
  yearsOfExperience?: number;
}

export interface SkillsData {
  intro?: string;
  uiUxHighlight?: {
    title: string;
    description: string;
    level: number;
    color?: string;
    skills: Skill[];
  };
  categories: SkillCategory[];
  hideCategoryLevels?: boolean;
  hideIndividualLevels?: boolean;
}

// Component Props

export interface SkillCategoryProps {
  category: SkillCategory;
  variant?: 'card' | 'minimal' | 'expanded';
  showLevels?: boolean;
  animated?: boolean;
}

export interface SkillItemProps {
  skill: Skill;
  showLevel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'pill' | 'item' | 'badge';
}

export interface SkillIndicatorProps {
  level: number; // 0-100
  variant?: 'bar' | 'circle' | 'radar' | 'dots';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  showLabel?: boolean;
}

export interface SkillsGridProps {
  categories: SkillCategory[];
  columns?: 2 | 3 | 4;
  animateOnScroll?: boolean;
  displayMode?: 'cards' | 'list' | 'compact';
}