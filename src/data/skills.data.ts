import { SkillsData } from '../types/skill.types'
export const skillsData: SkillsData = {
  intro:
    'Hands-on experience with enterprise networking, cloud infrastructure, and modern DevOps practices. Certified across multiple platforms including Cisco, Microsoft Azure, and containerization technologies.',


  categories: [
    {
      id: 'networking',
      name: 'Enterprise Networking',
      description: 'Cisco CCNA, CCNP. Advanced routing, network design, and security.',
      level: 92,
      yearsOfExperience: 2,
      color: '#D4A574',
      icon: 'Network',
      skills: [
        { name: 'Cisco CCNA', level: 90, proficiency: 'expert', verified: true },
        { name: 'Cisco CCNP', level: 70, proficiency: 'intermediate', verified: true },
        { name: 'Advanced Routing', level: 85, proficiency: 'expert' },
        { name: 'Enterprise Design', level: 85, proficiency: 'advanced' },
        { name: 'Network Security', level: 65, proficiency: 'intermediate', verified: true },
      ],
    },
    {
      id: 'cloud',
      name: 'Cloud Infrastructure',
      description: 'Microsoft Azure. Cloud design, deployment, and management.',
      level: 85,
      yearsOfExperience: 1,
      color: '#E0A677',
      icon: 'Cloud',
      skills: [
        { name: 'Azure AZ-104', level: 88, proficiency: 'expert', verified: true },
        { name: 'Virtual Networks', level: 85, proficiency: 'advanced' },
        { name: 'Cloud Design', level: 82, proficiency: 'advanced' },
      ],
    },
    {
      id: 'containerization',
      name: 'Containerization & DevOps',
      description: 'Docker expertise and DevOps fundamentals for modern infrastructure.',
      level: 80,
      yearsOfExperience: 2,
      color: '#D4B574',
      icon: 'Code',
      skills: [
        { name: 'Docker', level: 85, proficiency: 'advanced', verified: true },
        { name: 'DevOps Basics', level: 75, proficiency: 'intermediate' },
        { name: 'Containerization', level: 82, proficiency: 'advanced' },
      ],
    },
    {
      id: 'linux',
      name: 'Linux System Administration',
      description: 'Practical Linux experience for network and infrastructure management.',
      level: 78,
      yearsOfExperience: 2,
      color: '#E0C677',
      icon: 'Zap',
      skills: [
        { name: 'Linux Administration', level: 78, proficiency: 'advanced' },
        { name: 'Shell Scripting', level: 72, proficiency: 'intermediate' },
        { name: 'System Troubleshooting', level: 80, proficiency: 'advanced' },
      ],
    },
    {
      id: 'automation',
      name: 'Network Automation',
      description: 'Automation tools and practices for network management and efficiency.',
      level: 82,
      yearsOfExperience: 2,
      color: '#D4C574',
      icon: 'Code',
      skills: [
        { name: 'Network Automation', level: 82, proficiency: 'advanced', verified: true },
        { name: 'Configuration Management', level: 78, proficiency: 'advanced' },
      ],
    },
    {
      id: 'tools',
      name: 'Development & Tools',
      description: 'Version control, collaboration tools, and development practices.',
      level: 80,
      yearsOfExperience: 2,
      color: '#E0B677',
      icon: 'Code',
      skills: [
        { name: 'Git & GitHub', level: 80, proficiency: 'advanced' },
        { name: 'Google Tools', level: 85, proficiency: 'advanced' },
      ],
    },
  ],
}