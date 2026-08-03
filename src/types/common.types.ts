/**
 * Common Types
 * Shared types used across the entire portfolio project
 */
 
// Size variants
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
 
// Color variants
export type ColorVariant = 'gray' | 'gold' | 'green' | 'blue' | 'red' | 'amber';
 
// Text alignment
export type Alignment = 'left' | 'center' | 'right';
 
// Heading levels
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
 
// Animation triggers
export type AnimationTrigger = 'onScroll' | 'onHover' | 'onLoad' | 'onInView';
 
// Component variants
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outlined';
export type CardVariant = 'default' | 'elevated' | 'bordered' | 'glass';
export type BadgeVariant = 'solid' | 'outlined' | 'soft';
 
// Link target types
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
 
// Metadata
export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
}
 
// Social links
export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email' | 'instagram';
 
export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
  icon?: string;
  ariaLabel?: string;
}
 
// Call-to-action
export interface CTA {
  text: string;
  href: string;
  target?: LinkTarget;
  ariaLabel?: string;
  external?: boolean;
}
 
// Image metadata
export interface ImageMeta {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  blur?: string; // Blur hash for progressive loading
}
 
// Breakpoint information
export interface BreakpointInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  currentBreakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'ultra';
}
 
// Intersection observer result
export interface InViewResult {
  isInView: boolean;
  progress: number; // 0-1
  elementRef: React.RefObject<HTMLElement>;
}
 
// Animation state
export interface AnimationState {
  isAnimating: boolean;
  progress: number; // 0-1
  isComplete: boolean;
}
 
// Form field
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'radio' | 'checkbox';
  required?: boolean;
  placeholder?: string;
  validation?: (value: string) => boolean | string;
}
 
// API Response
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: 'pending' | 'success' | 'error';
}
 
// Scroll position
export interface ScrollPosition {
  x: number;
  y: number;
  progress: number; // 0-1 for entire page
}
 
// Device info
export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  supportsTouchEvents: boolean;
  prefersDarkMode: boolean;
  prefersReducedMotion: boolean;
}
 
// Analytics event
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp?: number;
}
 
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends Record<string, any> ? RecursivePartial<T[P]> : T[P];
};
 