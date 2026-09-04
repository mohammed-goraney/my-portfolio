import { JourneyData } from '../types/journey.types'

export const journeyData: JourneyData = {
  introText:
    'From IT education to specialized expertise in enterprise networking and cloud infrastructure. A continuous journey of learning, certification, and hands-on experience in building secure, scalable systems.',

  milestones: [
    {
      id: 'milestone-0',
      year: 2026,
      title: 'Bachelor of Science in Information Technology',
      description: 'Completed a Bachelor of Science in Information Technology with a foundation in computer systems and networks',
      type: 'achievement',
      icon: 'Award',
      tags: ['Education', 'IT Foundation'],
      details: 'Graduated in 2026 with a foundation in IT fundamentals, networking basics, and system administration.',
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
      title: 'Cisco CCNA Certification Achieved',
      description: 'Completed comprehensive CCNA training from Networkat platform',
      type: 'achievement',
      icon: 'Award',
      tags: ['Cisco', 'CCNA', 'Verified'],
      details: 'Mastered networking fundamentals through comprehensive courses and practical labs.',
    },
    {
      id: 'milestone-3',
      year: 2025,
      title: 'Cisco CCNP & Azure Cloud Journey',
      description: 'Advanced networking with CCNP and cloud infrastructure with Azure AZ-104',
      type: 'growth',
      icon: 'Zap',
      tags: ['CCNP', 'Azure', 'Cloud'],
      details:
        'Achieved CCNP certification and passed Azure Administrator (AZ-104) exam. Expanded expertise into cloud infrastructure.',
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
      description: '11 verified courses and programs completed across multiple platforms and technologies',
      type: 'achievement',
      icon: 'Sparkles',
      tags: ['Learning', 'Certifications', 'Google', 'Coursera', 'IBM', 'McKinsey'],
      details:
        'Continued structured learning in 2026 through verified courses from Google, Packt, Coursera, IBM, and specialized platforms in networking, cloud, DevOps, and automation.',
    },
  ],

  currentFocus: {
    title: 'NOW',
    description:
      'Deepening expertise in Kubernetes orchestration, preparing for advanced cloud certifications, and exploring edge computing solutions for enterprise networks.',
    keywords: ['Kubernetes', 'Advanced Cloud', 'Edge Computing', 'Network Automation'],
    icon: 'Sparkles',
  },

  callToAction: 'Ready to collaborate on enterprise networking or cloud infrastructure projects?',
}

export default journeyData