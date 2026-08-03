import { SocialProofData } from '../types/contact.types'
export const socialProofData: SocialProofData = {
  metrics: {
    yearsOfExperience: 2,
    projectsCompleted: 12,
    learningHours: 1200,         
    technologiesMastered: 15,
    certifications: +36,
    recommendations: 1,
    githubFollowers: 150,
    publicSpeakingEvents: 2,
    articlesPublished: 3,
  },

  certifications: [
    {
      id: 'ccna',
      name: 'Cisco CCNA Certification',
      issuer: 'Networkat Platform',
      date: '2024-09',
      credentialId: 'CCNA-2024',
      category: 'Networking',
      verified: true,
      url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/',
    },
    {
      id: 'ccnp',
      name: 'Cisco CCNP Certification',
      issuer: 'Networkat Platform',
      date: '2024-10',
      credentialId: 'CCNP-2024',
      category: 'Networking',
      verified: true,
      url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/',
    },
    {
      id: 'azure-az104',
      name: 'Microsoft Azure Administrator (AZ-104)',
      issuer: 'Microsoft Azure',
      date: '2024-11',
      credentialId: 'AZ-104-2024',
      category: 'Cloud',
      verified: true,
      url: 'https://learn.microsoft.com/en-us/certifications/exams/az-104/',
    },
    {
      id: 'docker',
      name: 'Docker for Beginners with Hands-on Labs',
      issuer: 'KodeKloud',
      date: '2024-07',
      credentialId: 'DOCKER-2024',
      category: 'DevOps',
      verified: true,
      url: 'https://www.kodekloud.com/',
    },
    {
      id: 'encor',
      name: 'ENCOR (350-401) v1.1 Video Training Series',
      issuer: 'Packt',
      date: '2024-08',
      credentialId: 'ENCOR-2024',
      category: 'Networking',
      verified: true,
      url: 'https://www.packtpub.com/',
    },
  ],

  achievements: [
    'Completed 36+ professional courses across networking, cloud, and DevOps platforms',
    '1,200+ hours of hands-on learning and certification training',
    'Cisco CCNA and CCNP certifications from Networkat - 9 comprehensive courses',
    'Microsoft Azure Administrator (AZ-104) certified',
    'Docker containerization and DevOps fundamentals mastered',
    'Advanced expertise in Enterprise Network Design, Security, and Automation',
  ],

  badges: [
    { label: 'Network Architect', icon: 'Network' },
    { label: 'Cloud Engineer', icon: 'Cloud' },
    { label: 'DevOps Enthusiast', icon: 'Zap' },
  ],

  recommendations: {
    count: 6,
    url: 'https://linkedin.com/in/mohammed-abdalla-it',
  },
}