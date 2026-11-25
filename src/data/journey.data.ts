import { JourneyData } from '../types/journey.types'

export const journeyData: JourneyData = {
  introText:
    'From IT education to focused practice in enterprise networking and cloud infrastructure. A continuous journey of structured learning, credential-backed training, and hands-on labs.',

  milestones: [
    {
      id: 'milestone-0',
      year: 2026,
      title: 'Bachelor of Science in Information Technology',
      description: 'Graduated from Future University with a Bachelor of Science in Information Technology',
      type: 'achievement',
      icon: 'Award',
      tags: ['Education', 'IT Foundation'],
      details: 'Graduated from Future University in 2026 with a foundation in IT fundamentals, networking basics, and system administration.',
    },
    {
      id: 'milestone-1',
      year: 'Feb 2025',
      title: 'Networking Specialization Journey Begins',
      description: 'Started a focused networking learning and certification path',
      type: 'learning',
      icon: 'BookOpen',
      tags: ['Networking', 'Certification'],
      details: 'Started the Networkat networking course in February 2025 and began building hands-on labs in enterprise network design.',
    },
    {
      id: 'milestone-2',
      year: 2025,
      title: 'CCNA-Aligned Networking Training Completed',
      description: 'Completed structured CCNA-aligned training through the Networkat platform',
      type: 'achievement',
      icon: 'Award',
      tags: ['Cisco', 'CCNA', 'Training'],
      details: 'Built a foundation in networking fundamentals through structured coursework and practical labs; this is training completion, not a claim of a Cisco exam pass.',
    },
    {
      id: 'milestone-3',
      year: 2025,
      title: 'CCNP & Azure Cloud Learning Path',
      description: 'Advanced networking study with CCNP topics and Azure-focused infrastructure learning',
      type: 'growth',
      icon: 'Zap',
      tags: ['CCNP', 'Azure', 'Cloud'],
      details:
        'Continued structured study across CCNP topics and Azure-focused cloud infrastructure, supported by practical design exercises.',
    },
    {
      id: 'milestone-4',
      year: 2026,
      title: 'DevOps & Containerization Skills',
      description: 'Started building foundational DevOps and containerization skills',
      type: 'growth',
      icon: 'Code',
      tags: ['Docker', 'DevOps', 'Containers'],
      details:
        'Started learning Docker and DevOps in 2026 through hands-on labs and practical containerization exercises.',
    },
    {
      id: 'milestone-5',
      year: 2026,
      title: 'Continuous Learning & Specialization',
      description: '13 certificate-backed courses and trainings completed across technical and professional tracks',
      type: 'achievement',
      icon: 'Sparkles',
      tags: ['Learning', 'Certifications', 'Google', 'Coursera', 'IBM', 'McKinsey'],
      details:
        'Continued structured learning in 2026 through courses and trainings from Packt, Coursera, IBM, KodeKloud, Networkat, and specialized providers.',
    },
  ],

  currentFocus: {
    title: 'NOW',
    description:
      'Deepening practical skills in Kubernetes orchestration, cloud infrastructure, and network automation through focused labs and structured learning.',
    keywords: ['Kubernetes', 'Advanced Cloud', 'Edge Computing', 'Network Automation'],
    icon: 'Sparkles',
  },

  callToAction: 'Ready to collaborate on enterprise networking or cloud infrastructure projects?',
}

export default journeyData
