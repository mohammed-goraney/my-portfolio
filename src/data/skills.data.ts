import { SkillsData } from '../types/skill.types'
export const skillsData: SkillsData = {
  intro:
    'Hands-on practice with enterprise networking, cloud infrastructure, and modern DevOps fundamentals through structured labs and learning.',


  categories: [
    {
      id: 'networking',
      name: 'Enterprise Networking',
      description: 'CCNA/CCNP-aligned training, routing practice, network design, and security fundamentals.',
      level: 78,
      yearsOfPractice: 2,
      color: '#D4A574',
      icon: 'Network',
      skills: [
        { name: 'Cisco CCNA-aligned topics', level: 78, proficiency: 'intermediate', verified: true },
        { name: 'Cisco CCNP-aligned topics', level: 62, proficiency: 'intermediate', verified: true },
        { name: 'Cisco IOS', level: 72, proficiency: 'intermediate' },
        { name: 'Routing & switching labs', level: 72, proficiency: 'intermediate' },
        { name: 'Enterprise design practice', level: 68, proficiency: 'intermediate' },
        { name: 'Network Security', level: 65, proficiency: 'intermediate', verified: true },
      ],
    },
    {
      id: 'cloud',
      name: 'Cloud Infrastructure',
      description: 'Azure-focused learning, cloud fundamentals, and infrastructure practice.',
      level: 68,
      yearsOfPractice: 1,
      color: '#E0A677',
      icon: 'Cloud',
      skills: [
        { name: 'Azure AZ-104-focused topics', level: 68, proficiency: 'intermediate', verified: true },
        { name: 'Virtual networks', level: 65, proficiency: 'intermediate' },
        { name: 'Cloud design fundamentals', level: 60, proficiency: 'developing' },
      ],
    },
    {
      id: 'containerization',
      name: 'Containerization & DevOps',
      description: 'Docker practice and foundational DevOps workflows for modern infrastructure.',
      level: 68,
      yearsOfPractice: 1,
      color: '#D4B574',
      icon: 'Code',
      skills: [
        { name: 'Docker Compose', level: 72, proficiency: 'intermediate', verified: true },
        { name: 'Docker', level: 72, proficiency: 'intermediate', verified: true },
        { name: 'DevOps basics', level: 64, proficiency: 'developing' },
        { name: 'Containerization', level: 68, proficiency: 'intermediate' },
      ],
    },
    {
      id: 'linux',
      name: 'Linux System Administration',
      description: 'Practical Linux experience for network and infrastructure management.',
      level: 68,
      yearsOfPractice: 1,
      color: '#E0C677',
      icon: 'Zap',
      skills: [
        { name: 'Linux administration', level: 68, proficiency: 'intermediate' },
        { name: 'Shell scripting', level: 58, proficiency: 'developing' },
        { name: 'System troubleshooting', level: 70, proficiency: 'intermediate' },
      ],
    },
    {
      id: 'automation',
      name: 'Network Automation',
      description: 'Automation tools and practices for network management and efficiency.',
      level: 62,
      yearsOfPractice: 1,
      color: '#D4C574',
      icon: 'Code',
      skills: [
        { name: 'Network automation', level: 62, proficiency: 'developing', verified: true },
        { name: 'Configuration management', level: 58, proficiency: 'developing' },
      ],
    },
    {
      id: 'tools',
      name: 'Development & Tools',
      description: 'Version control, collaboration tools, and development practices.',
      level: 70,
      yearsOfPractice: 1,
      color: '#E0B677',
      icon: 'Code',
      skills: [
        { name: 'Git & GitHub', level: 70, proficiency: 'intermediate' },
        { name: 'Google tools', level: 72, proficiency: 'intermediate' },
      ],
    },
  ],
}
