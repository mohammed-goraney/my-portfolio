/**
 * Contact Section Types
 */

export interface ContactFormStep1Data {
  name: string;
  email: string;
}

export interface ContactFormFullData extends ContactFormStep1Data {
  subject?: string;
  message: string;
  preferredContact: 'email' | 'linkedin' | 'phone';
  phone?: string;
  budget?: string; // For client inquiry
  projectType?: string;
}

export interface ContactSectionData {
  title: string;
  description: string;
  primaryCTA: string;
  secondaryCTA?: string;
  email?: string;
  phone?: string;
  location?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// Social Proof Types

export interface Certification {
  id: string;
  name: string;
  issuer: string; // e.g., "Cisco", "AWS", "CompTIA"
  date: string; // YYYY-MM
  url?: string;
  credentialId?: string;
  badge?: string; // URL to badge image
  expiryDate?: string;
  verified?: boolean;
  category?: string; // "Cloud", "Security", "Networking"
  image?: string; // URL to certificate document image
}

export interface SocialProofMetrics {
  projectsCompleted?: number;
  learningHours?: number;
  technologiesMastered?: number;
  certifications?: number;
  recommendations?: number;
  githubStars?: number;
  githubFollowers?: number;
  publicSpeakingEvents?: number;
  yearsOfExperience?: number;
  articlesPublished?: number;
}

export interface SocialProofData {
  metrics: SocialProofMetrics;
  certifications: Certification[];
  certificatesIssuer?: {
    name: string;
    website?: string;
    certifiedDate?: string;
    credentialId?: string;
  };
  recommendations?: {
    count: number;
    url?: string; // LinkedIn profile link
  };
  achievements?: string[];
  badges?: {
    label: string;
    icon?: string;
  }[];
}

// Component Props

export interface ContactFormProps {
  onSubmit: (data: ContactFormFullData) => Promise<void>;
  isLoading?: boolean;
  successMessage?: string;
  errorMessage?: string;
}

export interface CertificationCardProps {
  certification: Certification;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export interface SocialProofDisplayProps {
  data: SocialProofData;
  variant?: 'cards' | 'badges' | 'grid' | 'compact';
  animated?: boolean;
  columns?: 2 | 3 | 4;
}

export interface MetricsPillProps {
  value: number;
  label: string;
  icon?: string;
  suffix?: string;
  animated?: boolean;
}