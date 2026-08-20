/**
 * Navigation Constants
 */

export const navigationLinks = [
  {
    label: 'Home',
    labelKey: 'navHome',
    href: '#hero',
    id: 'nav-home',
  },
  {
    label: 'Journey',
    labelKey: 'navJourney',
    href: '#journey',
    id: 'nav-journey',
  },
  {
    label: 'Courses',
    labelKey: 'navCourses',
    href: '#courses',
    id: 'nav-courses',
  },
  {
    label: 'Projects',
    labelKey: 'navProjects',
    href: '#projects',
    id: 'nav-projects',
  },
  {
    label: 'Skills',
    labelKey: 'navSkills',
    href: '#skills',
    id: 'nav-skills',
  },
  {
    label: 'Contact',
    labelKey: 'navContact',
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