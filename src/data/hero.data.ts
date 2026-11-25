import { HeroData } from '../types/hero.types'
export const heroData: HeroData = {
  name: 'Mohammed Abdalla',
  title: 'IT Support · NOC · Network Operations',
  valueProposition:
    'Supporting reliable IT and network operations through hands-on practice in troubleshooting, Cisco IOS, Linux, Docker, and enterprise networking.',
  supportingText:
    'Completed CCNA/CCNP-aligned networking training and Azure AZ-104-focused learning, with hands-on practice in Linux administration, network automation, containerization, and DevOps.',
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
