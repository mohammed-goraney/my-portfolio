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
  /** Local certificate image, e.g. /images/Coursera/encor-350-401.jpeg */
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
      certificateImage: '/images/Coursera/encor-350-401.jpeg',
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
    },
    {
      id: 'advanced-routing',
      name: 'Advanced Routing, Infrastructure, and Network Management',
      provider: 'Packt',
      date: 'Feb 19, 2026',
      grade: '92%',
      category: 'Networking',
    },
    {
      id: 'enterprise-network-design',
      name: 'Enterprise Network Design and Virtualization',
      provider: 'Packt',
      date: 'Jan 22, 2026',
      grade: '80%',
      category: 'Networking',
    },
    {
      id: 'intro-devops',
      name: 'Introduction to DevOps',
      provider: 'IBM',
      date: 'Mar 3, 2025',
      grade: '83%',
      category: 'DevOps',
    },
    {
      id: 'time-management',
      name: 'Effective Time Management (الإدارة الفعالة للوقت)',
      provider: 'Alfaisal University / KLD',
      date: 'Feb 23, 2025',
      grade: '95%',
      category: 'Soft Skills',
    },
    {
      id: 'microsoft-excel',
      name: 'Getting Started with Microsoft Excel',
      provider: 'Coursera',
      date: 'Feb 23, 2025',
      grade: '86%',
      category: 'Productivity',
    },
    {
      id: 'art-of-storytelling',
      name: 'The Art of Storytelling',
      provider: 'IESE Business School',
      date: 'Mar 19, 2025',
      grade: '100%',
      category: 'Soft Skills',
    },
    {
      id: 'storytelling-influencing',
      name: 'Storytelling and Influencing: Communicate with Impact',
      provider: 'Macquarie University',
      date: 'Mar 17, 2025',
      grade: '89%',
      category: 'Soft Skills',
    },
    {
      id: 'mind-map-canva',
      name: 'Use Canva to Create an Interactive Mind Map',
      provider: 'Coursera',
      date: 'Nov 20, 2024',
      grade: '100%',
      category: 'Productivity',
    },
    {
      id: 'google-digital-marketing',
      name: 'Google Digital Marketing & E-commerce Professional Certificate',
      provider: 'Google',
      date: '2024',
      category: 'Productivity',
    },
  ],
}

export default coursesData
