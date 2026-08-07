import { HeroData } from '../types/hero.types'
export const heroData: HeroData = {
  name: 'Mohammed Abdalla',
  title: 'Network & Cloud Engineer',
  valueProposition:
    'Building secure, scalable network infrastructure and cloud solutions with hands-on expertise in Azure, Docker, and enterprise networking.',
  supportingText:
    'Certified in CCNA, CCNP, and Azure AZ-104 with practical experience in network automation, containerization, and DevOps.',
  portrait: {
    url: '/images/hero/portrait.jpg',
    alt: 'Mohammed Abdalla - Network & Cloud Engineer',
    width: 864,
    height: 1216,
  },
  primaryCTA: {
    text: 'View My Projects',
    href: '#projects',
    ariaLabel: 'Navigate to projects section',
  },
  secondaryCTA: {
    text: 'Get In Touch',
    href: '#contact',
    ariaLabel: 'Navigate to contact section',
  },
}