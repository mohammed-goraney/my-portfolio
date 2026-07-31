import { SocialProofData } from '../types/contact.types';
/**
 * Social Proof Data
 * Certifications, metrics, and credibility signals
 */

export const socialProofData: SocialProofData = {
  metrics: {
    yearsOfExperience: 8,
    projectsCompleted: 35,
    learningHours: 2400,
    technologiesMastered: 20,
    certifications: 5,
    recommendations: 12,
    githubFollowers: 450,
    publicSpeakingEvents: 8,
    articlesPublished: 24,
  },

  certifications: [
    {
      id: 'aws-solutions-architect',
      name: 'AWS Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      date: '2023-06',
      credentialId: 'AWS-SAP-2023-1234',
      badge: '/images/badges/aws-solutions-architect.png',
      category: 'Cloud',
      verified: true,
      url: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
    },

    {
      id: 'cisco-ccie',
      name: 'Cisco CCIE Routing & Switching',
      issuer: 'Cisco',
      date: '2021-03',
      credentialId: 'CCIE-123456',
      badge: '/images/badges/cisco-ccie.png',
      category: 'Networking',
      verified: true,
      url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert/ccie-routing-switching.html',
    },

    {
      id: 'kubernetes-admin',
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022-11',
      credentialId: 'CNCF-CKA-2022-5678',
      badge: '/images/badges/cka.png',
      category: 'DevOps',
      verified: true,
      url: 'https://www.cncf.io/certification/cka/',
    },

    {
      id: 'terraform-associate',
      name: 'Terraform Associate',
      issuer: 'HashiCorp',
      date: '2023-02',
      credentialId: 'TF-ASSOCIATE-2023-9012',
      category: 'DevOps',
      verified: true,
      url: 'https://www.hashicorp.com/certification/terraform-associate',
    },

    {
      id: 'iso-27001',
      name: 'ISO/IEC 27001 Lead Implementer',
      issuer: 'PECB',
      date: '2022-08',
      credentialId: 'ISO27001-LI-2022-3456',
      category: 'Security',
      verified: true,
      url: 'https://pecb.org/en/iso-27001-lead-implementer-training',
    },
  ],

  recommendations: {
    count: 12,
    url: 'https://linkedin.com/in/yourprofile',
  },

  achievements: [
    'Led digital transformation saving $500k annually',
    'Designed infrastructure serving 10M+ daily requests',
    'Reduced mean time to recovery by 70%',
    'Achieved ISO 27001 certification',
    'Mentored 8+ junior engineers',
    'Published 24 technical articles',
    'Speaker at 8 industry conferences',
  ],

  badges: [
    {
      label: 'Cloud Expert',
      icon: 'Cloud',
    },
    {
      label: 'Infrastructure Leader',
      icon: 'Zap',
    },
    {
      label: 'Security Champion',
      icon: 'Shield',
    },
    {
      label: 'Open Source Contributor',
      icon: 'Code',
    },
  ],
};

export default socialProofData;