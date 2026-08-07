import { Project, ProjectsData } from '../types/project.types';
/**
 * Projects Data
 * Featured project + grid projects
 * Replace with your actual projects
 */

const projects: Project[] = [
  {
    id: 'multi-region-cloud',
    title: 'Multi-Region Cloud Infrastructure',
    shortDescription: 'Designed and deployed globally distributed infrastructure for SaaS platform',
    fullDescription:
      'Architected and deployed a multi-region cloud infrastructure supporting 10M+ daily requests across 3 continents.',

    challenge: {
      description:
        'Legacy on-premise infrastructure could not scale. Single points of failure. High latency for international users.',
      complexity: 'high',
    },

    approach: {
      description: 'Migrated to AWS multi-region with active-active configuration, auto-scaling, and intelligent routing.',
      methodology: 'Microservices + Infrastructure as Code',
    },

    architecture: 'AWS Multi-Region with Auto-scaling Groups, Application Load Balancers, and DynamoDB Global Tables',

    technologies: [
      {
        category: 'Cloud',
        technologies: [
          { name: 'AWS EC2', category: 'Cloud' },
          { name: 'AWS RDS', category: 'Cloud' },
          { name: 'AWS DynamoDB', category: 'Cloud' },
          { name: 'AWS Lambda', category: 'Cloud' },
        ],
      },
      {
        category: 'Infrastructure',
        technologies: [
          { name: 'Terraform', category: 'Infrastructure' },
          { name: 'CloudFormation', category: 'Infrastructure' },
        ],
      },
      {
        category: 'DevOps',
        technologies: [
          { name: 'Docker', category: 'DevOps' },
          { name: 'Kubernetes', category: 'DevOps' },
          { name: 'CI/CD (GitLab)', category: 'DevOps' },
        ],
      },
    ],

    results: [
      { title: 'Uptime', description: '99.99% SLA achieved' },
      { title: 'Performance', description: '60% latency reduction for global users', impact: '1.2s → 0.4s' },
      { title: 'Cost', description: '35% infrastructure cost optimization', impact: '$500k/year savings' },
    ],

    metrics: {
      uptime: '99.99%',
      improvement: '60% latency reduction',
      reduction: '35% cost savings',
    },

    microLabel: 'Architected from scratch',

    image: {
      url: '/images/projects/multi-region.jpg',
      alt: 'Multi-region infrastructure diagram',
      width: 1200,
      height: 600,
      blur: 'UeJ-|,ofyYof_3t8x]aK00of',
    },

    featured: true,

    gridSize: 'hero',

    links: {
      caseStudy: '#case-study-multi-region',
      github: 'https://github.com/mohammed-goraney',
    },

    tags: ['Cloud', 'AWS', 'Infrastructure', 'DevOps'],

    caseStudyContent: {
      lessonsLearned: [
        'Multi-region complexity requires careful planning',
        'Cost optimization is ongoing process',
        'Observability is critical for distributed systems',
      ],
      keyDecisions: [
        'Active-active vs active-passive (chose active-active)',
        'Database replication strategy (chose global tables)',
        'Disaster recovery RTO/RPO targets',
      ],
      teamSize: 5,
      duration: '8 months',
    },
  },

  {
    id: 'network-automation',
    title: 'Network Automation Platform',
    shortDescription: 'Built Python-based automation platform for network device management',
    challenge: {
      description: 'Manual network device configuration was error-prone and time-consuming. 200+ devices managed.',
      complexity: 'medium',
    },
    approach: {
      description: 'Developed Python framework for automated configuration, validation, and monitoring.',
      methodology: 'Infrastructure as Code',
    },
    technologies: [
      {
        category: 'Backend',
        technologies: [
          { name: 'Python', category: 'Backend' },
          { name: 'Netmiko', category: 'Backend' },
          { name: 'Napalm', category: 'Backend' },
        ],
      },
      {
        category: 'Tools',
        technologies: [
          { name: 'Ansible', category: 'Tools' },
          { name: 'Git', category: 'Tools' },
        ],
      },
    ],
    results: [
      { title: 'Time Saved', description: '80% reduction in configuration time' },
      { title: 'Reliability', description: 'Eliminated manual configuration errors' },
    ],
    metrics: {
      reduction: '80% time savings',
      improvement: '100% error elimination',
    },
    microLabel: 'Automated deployment pipeline',
    image: {
      url: '/images/projects/network-automation.jpg',
      alt: 'Network automation dashboard',
      width: 800,
      height: 600,
      blur: 'UeJ-|,ofyYof_3t8x]aK00of',
    },
    gridSize: 'md',
    links: {
      github: 'https://github.com/mohammed-goraney',
    },
    tags: ['Automation', 'Python', 'Networking'],
  },

  {
    id: 'security-hardening',
    title: 'Security Hardening Initiative',
    shortDescription: 'Enterprise-wide security hardening covering network, hosts, and compliance',
    challenge: {
      description: 'Aging security posture. Multiple compliance violations. Needed modernization.',
      complexity: 'high',
    },
    approach: {
      description: 'Implemented zero-trust architecture, implemented automated compliance checks.',
      methodology: 'Security-First Infrastructure',
    },
    technologies: [
      {
        category: 'Infrastructure',
        technologies: [
          { name: 'Palo Alto Networks', category: 'Infrastructure' },
          { name: 'WAF', category: 'Infrastructure' },
        ],
      },
    ],
    results: [
      { title: 'Compliance', description: 'Achieved ISO 27001 certification' },
      { title: 'Incidents', description: '90% reduction in security incidents' },
    ],
    metrics: {
      reduction: '90% incident reduction',
    },
    microLabel: 'Improved security posture',
    image: {
      url: '/images/projects/security.jpg',
      alt: 'Security monitoring dashboard',
      width: 800,
      height: 600,
      blur: 'UeJ-|,ofyYof_3t8x]aK00of',
    },
    gridSize: 'md',
    tags: ['Security', 'Compliance'],
    links: undefined
  },

  {
    id: 'monitoring-observability',
    title: 'Observability Stack',
    shortDescription: 'Implemented comprehensive monitoring and observability for microservices',
    challenge: {
      description: 'Black-box microservices made debugging difficult. Poor visibility into system health.',
      complexity: 'medium',
    },
    approach: {
      description: 'Implemented ELK stack, Prometheus, Grafana, and distributed tracing.',
    },
    technologies: [
      {
        category: 'Tools',
        technologies: [
          { name: 'Prometheus', category: 'Tools' },
          { name: 'Grafana', category: 'Tools' },
          { name: 'ELK Stack', category: 'Tools' },
          { name: 'Jaeger', category: 'Tools' },
        ],
      },
    ],
    results: [{ title: 'MTTR', description: 'Mean time to resolution reduced by 70%' }],
    metrics: {
      improvement: '70% MTTR reduction',
    },
    microLabel: 'Optimized observability',
    image: {
      url: '/images/projects/monitoring.jpg',
      alt: 'Monitoring dashboards',
      width: 600,
      height: 400,
      blur: 'UeJ-|,ofyYof_3t8x]aK00of',
    },
    gridSize: 'sm',
    tags: ['Monitoring', 'DevOps'],
    links: undefined
  },
];

// Featured project
export const featuredProject = projects.find(p => p.featured) || projects[0];

// Grid projects (non-featured)
export const gridProjects = projects.filter(p => !p.featured);

// All projects
export const allProjects = projects;

// Export structured data
export const projectsData: ProjectsData = {
  intro: 'Selection of recent projects showcasing architectural decisions and technical leadership.',
  featuredProject,
  gridProjects,
  allProjects,
};

export default projectsData;