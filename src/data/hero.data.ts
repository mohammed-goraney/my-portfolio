import { HeroData } from '../types/hero.types'
export const heroData: HeroData = {
  name: 'Mohammed Abdalla',
  title: 'Network Engineer · DevOps · Cloud · Linux Administrator',
  valueProposition:
    'Building secure, scalable network infrastructure and cloud solutions with hands-on expertise in Azure, Linux, Docker, and enterprise networking.',
  supportingText:
    'Certified in CCNA, CCNP, and Azure AZ-104 with practical experience in Linux system administration, network automation, containerization, and DevOps.',
  portrait: {
    url: '/images/hero/portrait.jpg',
    alt: 'Mohammed Abdalla - Network, DevOps & Cloud Engineer and Linux Administrator',
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