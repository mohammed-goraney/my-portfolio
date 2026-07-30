import { SkillsData } from '@types';

/**
 * Skills Data
 * Organized by category with expertise levels
 */

export const skillsData: SkillsData = {
  intro: 'Technical expertise developed over 8+ years of hands-on infrastructure work.',

  categories: [
    {
      id: 'networking',
      name: 'Networking',
      description: 'Enterprise-grade network architecture, design, and management',
      level: 95,
      yearsOfExperience: 8,
      color: '#D4A574', // Gold
      icon: 'Network',
      skills: [
        { name: 'BGP/IGP', level: 95, proficiency: 'expert' },
        { name: 'MPLS', level: 90, proficiency: 'expert' },
        { name: 'Network Security', level: 90, proficiency: 'expert', verified: true },
        { name: 'QoS & Traffic Management', level: 85, proficiency: 'advanced' },
        { name: 'SD-WAN', level: 85, proficiency: 'advanced' },
        { name: 'Network Monitoring', level: 90, proficiency: 'expert' },
      ],
    },

    {
      id: 'cloud',
      name: 'Cloud Infrastructure',
      description: 'Multi-cloud expertise with AWS, Azure, and GCP',
      level: 90,
      yearsOfExperience: 6,
      color: '#E0A677', // Amber
      icon: 'Cloud',
      skills: [
        { name: 'AWS', level: 95, proficiency: 'expert', verified: true },
        { name: 'Azure', level: 85, proficiency: 'advanced' },
        { name: 'GCP', level: 80, proficiency: 'advanced' },
        { name: 'Multi-cloud Architecture', level: 85, proficiency: 'advanced' },
        { name: 'Serverless', level: 80, proficiency: 'advanced' },
        { name: 'Cloud Security', level: 90, proficiency: 'expert' },
      ],
    },

    {
      id: 'automation',
      name: 'Automation & DevOps',
      description: 'Infrastructure automation, CI/CD, and operational excellence',
      level: 88,
      yearsOfExperience: 5,
      color: '#6BA587', // Green
      icon: 'Zap',
      skills: [
        { name: 'Terraform', level: 95, proficiency: 'expert' },
        { name: 'Ansible', level: 90, proficiency: 'expert' },
        { name: 'Docker', level: 85, proficiency: 'advanced' },
        { name: 'Kubernetes', level: 85, proficiency: 'advanced' },
        { name: 'CI/CD Pipelines', level: 90, proficiency: 'expert' },
        { name: 'Python Scripting', level: 80, proficiency: 'advanced' },
      ],
    },

    {
      id: 'security',
      name: 'Security & Compliance',
      description: 'Enterprise security architecture, compliance frameworks',
      level: 88,
      yearsOfExperience: 6,
      color: '#C9715E', // Red
      icon: 'Shield',
      skills: [
        { name: 'Zero Trust Architecture', level: 90, proficiency: 'expert' },
        { name: 'Network Security', level: 95, proficiency: 'expert', verified: true },
        { name: 'Compliance (ISO 27001)', level: 85, proficiency: 'advanced', verified: true },
        { name: 'Incident Response', level: 85, proficiency: 'advanced' },
        { name: 'Penetration Testing', level: 80, proficiency: 'advanced' },
        { name: 'VPN & Encryption', level: 90, proficiency: 'expert' },
      ],
    },

    {
      id: 'programming',
      name: 'Programming',
      description: 'Software development for infrastructure and automation',
      level: 78,
      yearsOfExperience: 5,
      color: '#6B9DC9', // Blue
      icon: 'Code',
      skills: [
        { name: 'Python', level: 85, proficiency: 'advanced' },
        { name: 'Bash/Shell', level: 90, proficiency: 'expert' },
        { name: 'Go', level: 75, proficiency: 'intermediate' },
        { name: 'TypeScript', level: 70, proficiency: 'intermediate' },
        { name: 'API Development', level: 80, proficiency: 'advanced' },
        { name: 'System Design', level: 85, proficiency: 'advanced' },
      ],
    },

    {
      id: 'tools',
      name: 'Tools & Platforms',
      description: 'Proficiency with industry-standard tooling and platforms',
      level: 85,
      yearsOfExperience: 7,
      color: '#A39C94', // Muted
      icon: 'Wrench',
      skills: [
        { name: 'Git & Version Control', level: 95, proficiency: 'expert' },
        { name: 'Linux/Unix', level: 95, proficiency: 'expert', verified: true },
        { name: 'Prometheus & Grafana', level: 85, proficiency: 'advanced' },
        { name: 'ELK Stack', level: 80, proficiency: 'advanced' },
        { name: 'Jira & Confluence', level: 80, proficiency: 'advanced' },
        { name: 'ServiceNow', level: 75, proficiency: 'intermediate' },
      ],
    },
  ],

  hideCategoryLevels: false,
  hideIndividualLevels: false,
};

export default skillsData;