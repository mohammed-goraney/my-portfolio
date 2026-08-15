/**
 * Site Metadata
 * Used for SEO, social sharing, and general site info
 */

export const siteMetadata = {
  // Basic info
  title: 'Mohammed Abdalla - Network & Cloud Engineer',
  description:
    'Mohammed Abdalla — Network & Cloud Engineer designing resilient infrastructure that scales with confidence. Certified in CCNA, CCNP, and Azure AZ-104. Expert in AWS, networking, and DevOps.',
  siteName: 'Mohammed Abdalla — Portfolio',
  url: 'https://github.com/mohammed-goraney/my-portfolio',
  locale: 'en_US',

  // Author
  author: {
    name: 'Mohammed Abdalla',
    email: 'moha.gora.app123@gmail.com',
    phone: '',
    location: 'Egypt',
  },

  // Social profiles
  social: {
    github: 'https://github.com/mohammed-goraney',
    linkedin: 'https://linkedin.com/in/mohammed-abdalla-it',
    twitter: '',
    email: 'moha.gora.app123@gmail.com',
  },

  // Open Graph / Social sharing
  og: {
    image: 'https://yourportfolio.com/og-image.jpg',
    type: 'website',
    width: 1200,
    height: 630,
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    creator: '',
  },

  // Keywords
  keywords: [
    'Network Engineer',
    'Cloud Architect',
    'DevOps',
    'AWS',
    'Infrastructure',
    'Network Administration',
    'Cloud Security',
    'Terraform',
    'Kubernetes',
  ],

  // Contact information
  contact: {
    email: 'moha.gora.app123@gmail.com',
    phone: '',
    location: 'Egypt',
  },

  // Organization
  organization: {
    name: 'Mohammed Abdalla',
    url: 'https://github.com/mohammed-goraney',
    logo: '',
  },

  // Analytics (if needed)
  analytics: {
    googleAnalyticsId: '',
    hotjarId: '',
  },
};

/**
 * Web3Forms access key — routes contact form submissions to
 * moha.gora.app123@gmail.com. Activated via the Web3Forms activation
 * email sent on the first successful submission.
 */
export const WEB3FORMS_KEY = '690a9454-9d76-4136-8b70-0cddd2a49317';

export default siteMetadata;