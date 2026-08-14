/**
 * Navigation Constants
 */

export const navigationLinks = [
  {
    label: 'Home',
    href: '#hero',
    id: 'nav-home',
  },
  {
    label: 'Journey',
    href: '#journey',
    id: 'nav-journey',
  },
  {
    label: 'Featured',
    href: '#featured-project',
    id: 'nav-featured',
  },
  {
    label: 'Courses',
    href: '#courses',
    id: 'nav-courses',
  },
  {
    label: 'Projects',
    href: '#projects',
    id: 'nav-projects',
  },
  {
    label: 'Skills',
    href: '#skills',
    id: 'nav-skills',
  },
  {
    label: 'Contact',
    href: '#contact',
    id: 'nav-contact',
  },
];

export const socialLinks = [
  {
    platform: 'github' as const,
    url: 'https://github.com/mohammed-goraney',
    label: 'GitHub',
    icon: 'FiGithub',
  },
  {
    platform: 'linkedin' as const,
    url: 'https://linkedin.com/in/mohammed-abdalla-it',
    label: 'LinkedIn',
    icon: 'FiLinkedin',
  },
  {
    platform: 'twitter' as const,
    url: 'https://twitter.com/',
    label: 'Twitter',
    icon: 'FiTwitter',
  },
  {
    platform: 'email' as const,
    url: 'mailto:moha.gora.app123@gmail.com',
    label: 'Email',
    icon: 'FiMail',
  },
];

export const mobileMenuLinks = navigationLinks; // Same as desktop for simplicity

export default {
  navigationLinks,
  socialLinks,
  mobileMenuLinks,
};