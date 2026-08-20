import { Project, ProjectsData } from '../types/project.types';
/**
 * Projects Data
 * Featured project + grid projects
 * Real hands-on projects completed by Mohammed Abdalla.
 */


export const dockerVotingApp: Project = {
  id: 'docker-voting-app',
  title: 'Docker Example Voting App Lab',
  shortDescription:
    'Multi-container application orchestrated with Docker Compose: Vote App → Redis → Worker → PostgreSQL → Result App',
  fullDescription:
    'Hands-on Docker lab completed after the Docker for Beginners course. Five containers communicate over a single Docker network, with Redis acting as the message queue and a .NET background worker persisting votes into PostgreSQL.',

  challenge: {
    description:
      'Running multiple containers and making them communicate reliably: service discovery, networking, environment variables, and background worker lifecycle.',
    complexity: 'medium',
  },

  approach: {
    description:
      'Defined all five services in a single docker-compose.yml, wired them through a shared bridge network, and used docker logs to troubleshoot container communication.',
    methodology: 'Docker Compose · Container Orchestration',
  },

  architecture:
    'Vote App (Python/Flask) → Redis (queue) → Worker (.NET) → PostgreSQL; Result App (Node.js) reads votes directly from PostgreSQL',

  technologies: [
    {
      category: 'DevOps',
      technologies: [
        { name: 'Docker', category: 'DevOps' },
        { name: 'Docker Compose', category: 'DevOps' },
      ],
    },
    {
      category: 'Database',
      technologies: [
        { name: 'Redis', category: 'Database' },
        { name: 'PostgreSQL', category: 'Database' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Python (Flask)', category: 'Backend' },
        { name: '.NET Worker', category: 'Backend' },
        { name: 'Node.js', category: 'Backend' },
      ],
    },
  ],

  results: [
    { title: 'Containers', description: '5 services on 1 network', impact: '5 services' },
    { title: 'Messaging', description: 'Queue-backed async vote processing', impact: 'Redis queue' },
    { title: 'Skills', description: 'Networking, env vars, docker logs troubleshooting', impact: 'Production patterns' },
  ],

  metrics: {
    custom: {
      services: '5 containers',
      queue: 'Redis → Worker',
      skillGrowth: 'Compose & networking',
    },
  },

  microLabel: 'Real hands-on lab · Completed',

  image: {
    url: '/images/projects/docker-voting-app.webp',
    alt: 'Docker Example Voting App architecture diagram',
    width: 1200,
    height: 600,
    blur: 'UeJ-|,ofyYof_3t8x]aK00of',
  },

  featured: true,
  status: 'completed',
  gridSize: 'hero',
  tags: ['Docker', 'Docker Compose', 'Redis', 'PostgreSQL', 'DevOps'],

  links: {
    github: 'https://github.com/mohammed-goraney',
  },

  caseStudyContent: {
    lessonsLearned: [
      'Running and debugging multi-container applications with docker logs',
      'Docker networking: service discovery by container name',
      'Environment variables and the role of background workers',
    ],
    keyDecisions: [
      'Redis as the message queue between Vote App and Worker',
      'PostgreSQL as the single source of truth for votes',
      'One docker-compose.yml to define the whole stack',
    ],
    duration: 'Completed after Docker course',
  },
}

const projects: Project[] = [dockerVotingApp];
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