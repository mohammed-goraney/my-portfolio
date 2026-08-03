import { CTA, ImageMeta } from './common.types';
 
/**
 * Hero Section Types
 */
 
export interface HeroData {
  name: string;
  title: string;
  valueProposition: string;
  supportingText: string;
  portrait: ImageMeta;
  primaryCTA: CTA;
  secondaryCTA: CTA;
  scrollIndicatorText?: string;
}
 
export interface HeroSectionProps {
  data: HeroData;
  isFirstSection?: boolean;
  onScrollIndicatorClick?: () => void;
}