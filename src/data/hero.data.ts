import { HeroData } from '../types/hero.types';

export const heroData: HeroData = {
  name: 'Your Name',
  title: 'Network & Cloud Engineer',
  valueProposition:
    'Designing resilient networks and cloud infrastructure that scale with confidence.',
  supportingText:
    'Building secure, high-performance infrastructure for businesses that demand excellence.',
  portrait: {
    url: '/images/hero/portrait.jpg',
    alt: 'Professional portrait',
    width: 600,
    height: 600,
  },
  primaryCTA: {
    text: 'View My Work',
    href: '#projects',
    ariaLabel: 'Navigate to projects section',
  },
  secondaryCTA: {
    text: 'Get In Touch',
    href: '#contact',
    ariaLabel: 'Navigate to contact section',
  },
};

export default heroData;