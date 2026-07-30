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
    url: 'https://github.com/yourname',
    label: 'GitHub',
    icon: 'FiGithub',
  },
  {
    platform: 'linkedin' as const,
    url: 'https://linkedin.com/in/yourprofile',
    label: 'LinkedIn',
    icon: 'FiLinkedin',
  },
  {
    platform: 'twitter' as const,
    url: 'https://twitter.com/yourhandle',
    label: 'Twitter',
    icon: 'FiTwitter',
  },
  {
    platform: 'email' as const,
    url: 'mailto:your.email@example.com',
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