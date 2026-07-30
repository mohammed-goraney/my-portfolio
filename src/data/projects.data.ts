import type { ProjectItem } from '../types/project.types';

export const projectsData: ProjectItem[] = [
  {
    id: 'project-1',
    name: 'Portfolio Website',
    description: 'A personal site showcasing projects, skills, and career journey.',
    tags: ['React', 'TypeScript', 'Vite'],
    imageUrl: '/project-images/portfolio.png',
    demoUrl: 'https://your-portfolio.example',
    repoUrl: 'https://github.com/your-username/portfolio',
  },
  {
    id: 'project-2',
    name: 'Design System',
    description: 'Reusable component library with accessible design tokens and themes.',
    tags: ['Storybook', 'Tailwind', 'Figma'],
  },
];
