/**
 * Journey/About Section Types
 */

export type MilestoneType = 'learning' | 'challenge' | 'achievement' | 'growth' | 'milestone';

export interface JourneyMilestone {
  id: string;
  year: number;
  title: string;
  description: string;
  type: MilestoneType;
  icon?: string;
  tags: string[];
  details?: string;
}

export interface CurrentFocus {
  title: string;
  description: string;
  keywords: string[];
  icon?: string;
}

export interface JourneyData {
  introText: string;
  milestones: JourneyMilestone[];
  currentFocus: CurrentFocus;
  callToAction?: string;
}

export interface JourneyTimelineProps {
  data: JourneyData;
  animated?: boolean;
}

export interface MilestoneCardProps {
  milestone: JourneyMilestone;
  isExpanded?: boolean;
  onExpand?: () => void;
  index?: number;
}