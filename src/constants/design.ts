/**
 * Design System Tokens
 * Centralized design constants for colors, spacing, typography
 */

// Color palette
export const colors = {
  // Primary backgrounds
  background: '#1A1918',
  surface: '#2A2825',
  'surface-light': '#3A3530',

  // Text colors
  text: {
    primary: '#F5F2ED',
    secondary: '#EAE5DC',
    muted: '#A39C94',
    inverse: '#1A1918',
  },

  // Accent colors
  accent: {
    gold: '#D4A574',
    'gold-light': '#E8BB89',
    'gold-dark': '#B08A5B',
    amber: '#C9915E',
    'amber-light': '#E0A677',
    'amber-dark': '#A87445',
  },

  // Semantic colors
  success: '#6BA587',
  warning: '#D4A574',
  error: '#C9715E',
  info: '#6B9DC9',

  // Borders
  border: '#403C38',
  'border-light': '#504A45',
};

// Spacing scale (8px base)
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
};

// Typography scales
export const typography = {
  display: {
    size: '3.5rem',
    weight: 700,
    lineHeight: 1.1,
  },
  'display-sm': {
    size: '2.5rem',
    weight: 700,
    lineHeight: 1.1,
  },
  h1: {
    size: '2rem',
    weight: 600,
    lineHeight: 1.2,
  },
  h2: {
    size: '1.5rem',
    weight: 600,
    lineHeight: 1.3,
  },
  h3: {
    size: '1.25rem',
    weight: 600,
    lineHeight: 1.4,
  },
  h4: {
    size: '1rem',
    weight: 600,
    lineHeight: 1.5,
  },
  'body-lg': {
    size: '1.125rem',
    weight: 400,
    lineHeight: 1.6,
  },
  'body-md': {
    size: '1rem',
    weight: 400,
    lineHeight: 1.6,
  },
  'body-sm': {
    size: '0.875rem',
    weight: 400,
    lineHeight: 1.5,
  },
  caption: {
    size: '0.75rem',
    weight: 400,
    lineHeight: 1.4,
  },
  'caption-bold': {
    size: '0.75rem',
    weight: 600,
    lineHeight: 1.4,
  },
};

// Border radius
export const borderRadius = {
  none: '0',
  xs: '0.25rem',
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
};

// Shadows
export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

  // Warm graphite theme elevated shadows
  'elevation-1': '0 2px 8px rgba(0, 0, 0, 0.3)',
  'elevation-2': '0 4px 12px rgba(0, 0, 0, 0.35)',
  'elevation-3': '0 8px 24px rgba(0, 0, 0, 0.4)',
};

// Animation durations
export const duration = {
  fast: 150,
  base: 300,
  slow: 500,
  slower: 700,
};

// Easing functions
export const easing = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
};

// Z-index scale
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
  notification: 800,
};

// Breakpoints
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  ultra: '1920px',
};

// Container sizes
export const containers = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
};

export default {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  duration,
  easing,
  zIndex,
  breakpoints,
  containers,
};