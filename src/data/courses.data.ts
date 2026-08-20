/**
 * Courses Data
 * Real completed courses extracted from the author's Google profile
 * (SEO/marketing courses intentionally excluded per author preference)
 */

export interface Course {
  id: string
  name: string
  provider: string
  date: string
  grade?: string
  category: 'Networking' | 'DevOps' | 'Cloud' | 'Soft Skills' | 'Productivity'
  /** Verifiable credential URL (Coursera / Packt verification page) */
  credentialUrl?: string
  /** Local certificate image, e.g. /images/Coursera/encor-350-401.webp */
  certificateImage?: string
  /** Skills highlighted by the credential */
  skills?: string[]
}

export interface CoursesData {
  totalCourses: number
  courses: Course[]
}

export const coursesData: CoursesData = {
  totalCourses: 11,
  courses: [
    {
      id: 'encor-350-401',
      name: 'ENCOR (350-401) v1.1 Video Training Series',
      provider: 'Packt',
      date: 'Mar 1, 2026',
      category: 'Networking',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/specialization/00JIDXE1U80N',
      certificateImage: '/images/Coursera/encor-350-401.webp',
      skills: [
        'Enterprise Network Design',
        'SDN',
        'Wireless',
        'Network Virtualization',
        'QoS',
        'Network Security',
        'Automation',
      ],
    },
    {
      id: 'network-security-automation',
      name: 'Network Security, Automation, and Exam Preparation',
      provider: 'Packt',
      date: 'Mar 1, 2026',
      grade: '84%',
      category: 'Networking',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/verify/BQ49Z50FA70U',
      certificateImage: '/images/Coursera/network-security-automation.webp',
      skills: ['Network Security', 'Automation', 'Exam Preparation'],
    },
    {
      id: 'advanced-routing',
      name: 'Advanced Routing, Infrastructure, and Network Management',
      provider: 'Packt',
      date: 'Feb 19, 2026',
      grade: '92%',
      category: 'Networking',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/verify/FXCWETNX6UTR',
      certificateImage: '/images/Coursera/advanced-routing.webp',
      skills: ['Advanced Routing', 'Infrastructure', 'Network Management'],
    },
    {
      id: 'enterprise-network-design',
      name: 'Enterprise Network Design and Virtualization',
      provider: 'Packt',
      date: 'Jan 21, 2026',
      grade: '80%',
      category: 'Networking',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/verify/WAS4JDHGDRHL',
      certificateImage: '/images/Coursera/enterprise-network-design.webp',
      skills: ['Enterprise Network Design', 'Virtualization'],
    },
    {
      id: 'docker-for-beginners',
      name: 'Docker for Beginners with Hands-on Labs',
      provider: 'KodeKloud',
      date: 'Jul 24, 2026',
      category: 'DevOps',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/verify/5EXQZC4ECHPY',
      certificateImage: '/images/Coursera/docker-for-beginners.webp',
      skills: [
        'Docker',
        'Containerization',
        'Docker Compose',
        'Docker Swarm',
        'Kubernetes',
        'Cloud-Native',
      ],
    },
    {
      id: 'intro-devops',
      name: 'Introduction to DevOps',
      provider: 'IBM',
      date: 'Mar 2, 2025',
      grade: '83%',
      category: 'DevOps',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/verify/76LFUHWTI2E2',
      certificateImage: '/images/Coursera/intro-devops.webp',
      skills: [
        'CI/CD',
        'Continuous Deployment',
        'Cloud-Native',
        'Microservices',
        'TDD',
      ],
    },
    {
      id: 'ai-fundamentals',
      name: 'Artificial Intelligence Fundamentals',
      provider: 'IBM SkillsBuild',
      date: 'Dec 25, 2024',
      category: 'DevOps',
      credentialUrl: 'https://www.credly.com/go/Y2Pu6P4W',
      certificateImage: '/images/Coursera/ai-fundamentals.webp',
      skills: [
        'Artificial Intelligence',
        'Machine Learning Concepts',
        'AI Use Cases',
        'AI Fundamentals',
      ],
    },
    {
      id: 'time-management',
      name: 'Effective Time Management (الإدارة الفعالة للوقت)',
      provider: 'Alfaisal University / KLD',
      date: 'Feb 23, 2025',
      grade: '95%',
      category: 'Soft Skills',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/verify/3F04BKH9RLXY',
      certificateImage: '/images/Coursera/effective-time-management.webp',
      skills: [
        'Time Management',
        'Prioritization',
        'Planning',
        'Professional Development',
      ],
    },
    {
      id: 'storytelling-influencing',
      name: 'Storytelling and Influencing: Communicate with Impact',
      provider: 'Macquarie University',
      date: 'Mar 17, 2025',
      grade: '89%',
      category: 'Soft Skills',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/verify/D2R10HWJQHZY',
      certificateImage: '/images/Coursera/storytelling-influencing.webp',
      skills: [
        'Persuasive Communication',
        'Leadership',
        'Public Speaking',
        'Strategic Communication',
      ],
    },
    {
      id: 'google-digital-marketing',
      name: 'Google Digital Marketing & E-commerce Professional Certificate',
      provider: 'Google',
      date: 'Jul 7, 2024',
      category: 'Productivity',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/specialization/ZCGFXYJSHNG3',
      certificateImage: '/images/Coursera/google-digital-marketing.webp',
      skills: [
        'SEO',
        'E-Commerce',
        'Email Marketing',
        'Google Ads',
        'Campaign Management',
        'Performance Measurement',
      ],
    },
    {
      id: 'mckinsey-forward',
      name: 'McKinsey Forward Program',
      provider: 'McKinsey & Company',
      date: 'Dec 17, 2024',
      category: 'Soft Skills',
      certificateImage: '/images/Coursera/mckinsey-forward.webp',
      skills: [
        'Problem Solving',
        'Communication & Influence',
        'Adaptability & Resilience',
        'Digital Toolkit',
      ],
    },
  ],
}

export default coursesData
