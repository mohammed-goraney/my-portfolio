# 🏗️ PORTFOLIO PROJECT ARCHITECTURE - Phase 1

## Project Overview
- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (selective use)
- **Build Tool:** Vite
- **Design System:** Custom token-based system
- **Data-Driven:** All content via structured data files

---

## Directory Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   └── portrait.jpg (high-quality, optimized)
│   │   ├── projects/
│   │   │   ├── featured/
│   │   │   └── grid/
│   │   └── og-image.jpg
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ScrollIndicator.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Journey.tsx
│   │   │   ├── FeaturedProject.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   └── animations/
│   │       ├── ScrollReveal.tsx
│   │       ├── ParallaxImage.tsx
│   │       └── CounterAnimation.tsx
│   │
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   └── PageLayout.tsx
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── useInViewport.ts
│   │   ├── useIsMobile.ts
│   │   ├── useReducedMotion.ts
│   │   └── useDeviceInfo.ts
│   │
│   ├── utils/
│   │   ├── cn.ts (classname helper)
│   │   ├── format.ts (date, numbers, strings)
│   │   ├── animation.ts (easing functions, animation helpers)
│   │   ├── seo.ts (schema generation)
│   │   ├── performance.ts (lazy loading utilities)
│   │   └── validation.ts (contact form validation)
│   │
│   ├── constants/
│   │   ├── design.ts (colors, spacing, typography)
│   │   ├── navigation.ts (menu structure)
│   │   ├── metadata.ts (SEO, site info)
│   │   └── breakpoints.ts (responsive sizes)
│   │
│   ├── data/
│   │   ├── hero.data.ts
│   │   ├── journey.data.ts
│   │   ├── projects.data.ts
│   │   ├── skills.data.ts
│   │   ├── certifications.data.ts
│   │   └── social.data.ts
│   │
│   ├── types/
│   │   ├── index.ts (main types export)
│   │   ├── common.types.ts
│   │   ├── hero.types.ts
│   │   ├── journey.types.ts
│   │   ├── project.types.ts
│   │   ├── skill.types.ts
│   │   └── contact.types.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── animations.css
│   │   └── typography.css
│   │
│   ├── assets/
│   │   ├── icons/ (SVG icons)
│   │   └── fonts/ (if custom fonts)
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .env.example
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

---

## Component Taxonomy

### **Shared Components (Reusable, Design System)**

#### Button.tsx
```
- variant: primary | secondary | ghost | outlined
- size: sm | md | lg
- disabled: boolean
- loading: boolean
- icon: ReactNode
- children: ReactNode
```

#### Card.tsx
```
- variant: default | elevated | bordered
- size: sm | md | lg
- hover: boolean (micro-interaction)
- children: ReactNode
```

#### Badge.tsx
```
- variant: solid | outlined | soft
- color: gray | gold | green | blue | red
- size: sm | md
- children: ReactNode
```

#### Section.tsx
```
- id: string (for navigation)
- className: string
- children: ReactNode
```

#### SectionTitle.tsx
```
- title: string
- subtitle?: string
- alignment: left | center | right
- level: h1 | h2 | h3
```

#### Navigation.tsx
```
- sticky: boolean
- transparent: boolean
- currentSection: string
```

#### ScrollIndicator.tsx
```
- animated: boolean
- showProgress: boolean
```

### **Section Components (Page Sections)**

#### Hero.tsx
- Portrait image
- Value proposition
- Supporting sentence
- Primary CTA
- Secondary CTA
- Scroll indicator

#### Journey.tsx
- Interactive timeline
- Year markers
- Learning milestones
- Challenges overcome
- Growth indicators
- "NOW" current focus

#### FeaturedProject.tsx
- Large immersive layout
- Challenge description
- Architecture diagram
- Decision making process
- Technologies used
- Results metrics
- Lessons learned
- CTA to full case study

#### Projects.tsx
- Bento grid layout
- Hero card (2x)
- Medium cards
- Small cards
- Stats cards
- Hover interactions
- Staggered animation

#### Skills.tsx
- Skill categories (Networking, Cloud, Automation, etc.)
- Visual indicators (bars, radars)
- Percentage or level indicators
- Non-pill design

#### SocialProof.tsx
- Certifications grid
- GitHub stats
- Learning hours
- Completed projects count
- Recommendations
- Speaking badges

#### Contact.tsx
- Two-step micro-commitment
- Primary message
- Single question
- CTA button
- Privacy statement

### **Animation Components**

#### ScrollReveal.tsx
- Fade-in on scroll
- Staggered animations
- Respects prefers-reduced-motion

#### ParallexImage.tsx
- Parallax effect on scroll
- Performance optimized
- Fallback for reduced motion

#### CounterAnimation.tsx
- Animated numbers
- Incremental counting
- Used in Social Proof

---

## Data Models & Types

### Hero Data Type
```typescript
interface HeroData {
  name: string;
  title: string;
  valueProposition: string;
  supportingText: string;
  portraitUrl: string;
  portraitAlt: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}
```

### Journey Milestone Type
```typescript
interface JourneyMilestone {
  year: number;
  title: string;
  description: string;
  type: 'learning' | 'challenge' | 'achievement' | 'growth';
  icon: string;
  tags: string[];
}

interface JourneyData {
  milestones: JourneyMilestone[];
  currentFocus: {
    title: string;
    description: string;
    keywords: string[];
  };
}
```

### Project Type
```typescript
interface ProjectMetrics {
  performance?: string;
  uptime?: string;
  reduction?: string;
  improvement?: string;
}

interface ProjectStack {
  category: string; // 'Backend' | 'Infrastructure' | 'DevOps'
  technologies: string[];
}

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  approach: string;
  challenge: string;
  architecture?: string;
  technologies: ProjectStack[];
  results: string[];
  metrics: ProjectMetrics;
  imageUrl: string;
  imageAlt: string;
  microLabel: string; // "Architected from scratch"
  links: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
  featured?: boolean; // For featured project section
  isFeatured?: boolean;
  gridSize?: 'sm' | 'md' | 'lg'; // For Bento layout
}
```

### Skill Type
```typescript
interface SkillCategory {
  name: string; // "Networking", "Cloud", "Automation"
  description: string;
  level: number; // 0-100
  skills: string[];
}

interface SkillsData {
  categories: SkillCategory[];
}
```

### Certification Type
```typescript
interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string; // YYYY-MM
  url?: string;
  badge?: string;
  expiryDate?: string;
}

interface SocialProofMetrics {
  projectsCompleted: number;
  learningHours: number;
  technologiesMastered: number;
  certifications: Certification[];
  recommendations: number;
  githubStars?: number;
  speakingEngagements?: number;
}
```

### Contact Type
```typescript
interface ContactFormStep1 {
  name: string;
  email: string;
}

interface ContactFormData extends ContactFormStep1 {
  subject: string;
  message: string;
  preferredContact: 'email' | 'linkedin' | 'phone';
}
```

---

## Type Structure File Organization

### types/index.ts
```typescript
export * from './common.types';
export * from './hero.types';
export * from './journey.types';
export * from './project.types';
export * from './skill.types';
export * from './contact.types';
```

### types/common.types.ts
```typescript
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';
export type ColorVariant = 'gray' | 'gold' | 'green' | 'blue' | 'red';
export type Alignment = 'left' | 'center' | 'right';
export type AnimationTrigger = 'onScroll' | 'onHover' | 'onLoad';

export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email';
  url: string;
  label: string;
}
```

---

## Data Files Structure

### data/hero.data.ts
```typescript
import { HeroData } from '../types';

export const heroData: HeroData = {
  name: 'Your Name',
  title: 'Network & Cloud Engineer',
  valueProposition: 'Designing resilient networks and cloud infrastructure...',
  supportingText: '...',
  portraitUrl: '/images/hero/portrait.jpg',
  portraitAlt: 'Professional portrait',
  primaryCTA: {
    text: 'View My Work',
    href: '#projects',
  },
  secondaryCTA: {
    text: 'Get In Touch',
    href: '#contact',
  },
};
```

### data/projects.data.ts
```typescript
import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Multi-Region Cloud Infrastructure',
    featured: true,
    // ... rest of data
  },
  // More projects
];

export const featuredProject = projectsData.find(p => p.featured);
export const gridProjects = projectsData.filter(p => !p.featured);
```

---

## Constants Structure

### constants/design.ts
```typescript
export const colors = {
  background: '#1A1918',
  surface: '#2A2825',
  text: {
    primary: '#F5F2ED',
    secondary: '#EAE5DC',
    muted: '#A39C94',
  },
  accent: {
    gold: '#D4A574',
    amber: '#C9915E',
  },
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
};

export const typography = {
  display: {
    size: '3.5rem',
    weight: 700,
    lineHeight: 1.1,
  },
  heading1: {
    size: '2.5rem',
    weight: 600,
    lineHeight: 1.2,
  },
  // ... more typography scales
};
```

### constants/navigation.ts
```typescript
export const navigationLinks = [
  { label: 'Journey', href: '#journey' },
  { label: 'Featured', href: '#featured-project' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
```

### constants/metadata.ts
```typescript
export const siteMetadata = {
  title: 'Your Name - Network & Cloud Engineer',
  description: '...',
  url: 'https://yourportfolio.com',
  image: 'https://yourportfolio.com/og-image.jpg',
  author: 'Your Name',
  email: 'your.email@example.com',
  social: {
    github: 'https://github.com/...',
    linkedin: 'https://linkedin.com/in/...',
    twitter: 'https://twitter.com/...',
  },
};
```

---

## Hooks Architecture

### hooks/useScrollAnimation.ts
- Detects scroll position
- Triggers animations based on viewport
- Handles throttling for performance

### hooks/useInViewport.ts
- Uses Intersection Observer
- Returns isVisible, progress percentage
- Respects prefers-reduced-motion

### hooks/useReducedMotion.ts
- Checks system preference
- Returns boolean
- Disables animations if true

### hooks/useIsMobile.ts
- Responsive hook
- Returns breakpoint information
- Updates on resize

---

## Utilities Architecture

### utils/cn.ts
ClassNames helper (like clsx)

### utils/animation.ts
```typescript
export const easing = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
};

export const duration = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
};
```

### utils/seo.ts
```typescript
export const generatePersonSchema = (data: HeroData) => {
  // Returns JSON-LD Person schema
};

export const generateCreativeWorkSchema = (project: Project) => {
  // Returns JSON-LD CreativeWork schema
};
```

### utils/format.ts
- formatDate()
- formatNumber()
- capitalizeString()

### utils/performance.ts
- generateBlurHash()
- lazyLoadImage()
- preloadImages()

---

## Key Principles for This Architecture

1. **Separation of Concerns**
   - UI components in `components/`
   - Data in `data/`
   - Types in `types/`
   - Utilities in `utils/`

2. **Data-Driven Design**
   - All content via data files
   - Adding a project = editing `projects.data.ts`
   - No hardcoded content in components

3. **Type Safety**
   - Full TypeScript coverage
   - Strict type definitions
   - No `any` types

4. **Scalability**
   - Easy to add new sections
   - Easy to add new projects
   - Easy to add new certifications

5. **Performance First**
   - Image optimization hooks
   - Lazy loading utilities
   - Animation performance checks

6. **Accessibility Built-in**
   - Semantic HTML in types
   - ARIA attributes in components
   - Reduced motion support

7. **Reusable Components**
   - Button, Card, Badge
   - No duplication
   - Consistent design tokens

---

## Environment Variables (.env.example)

```env
VITE_SITE_URL=https://yourportfolio.com
VITE_API_KEY=your_api_key_if_needed
VITE_ENABLE_ANALYTICS=true
```

---

## File Naming Conventions

- **Components:** PascalCase (Hero.tsx)
- **Utilities:** camelCase (cn.ts)
- **Hooks:** camelCase (useScrollAnimation.ts)
- **Data files:** camelCase with .data suffix (projects.data.ts)
- **Types:** PascalCase with .types suffix (project.types.ts)
- **Constants:** camelCase (design.ts, navigation.ts)

---

## Package.json Scripts (Preview)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src/",
    "type-check": "tsc --noEmit",
    "format": "prettier --write src/",
    "analyze": "vite-plugin-visualizer"
  }
}
```

---

## Next Steps (Phase 2)

Once this architecture is approved:
1. Initialize project with Vite
2. Set up TypeScript
3. Configure Tailwind CSS
4. Create all type definitions
5. Create all data files
6. Build shared component library