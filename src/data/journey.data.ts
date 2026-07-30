import { JourneyData } from '@types';

/**
 * Journey Section Data
 * Replace with your actual journey, milestones, and learning path
 */

export const journeyData: JourneyData = {
  introText:
    'From early curiosity about how networks work to designing infrastructure for enterprise-scale systems, this is my technical journey.',

  milestones: [
    {
      id: 'milestone-1',
      year: 2015,
      title: 'Started Learning Networking',
      description: 'Self-taught networking fundamentals through CompTIA A+',
      type: 'learning',
      icon: 'BookOpen',
      tags: ['Education', 'Networking'],
      details: 'Discovered passion for network architecture and design.',
    },
    {
      id: 'milestone-2',
      year: 2017,
      title: 'First Enterprise Project',
      description: 'Implemented LAN restructuring for financial services firm',
      type: 'achievement',
      icon: 'Award',
      tags: ['Enterprise', 'Leadership'],
      details: '99.5% uptime SLA achievement. Led team of 3 engineers.',
    },
    {
      id: 'milestone-3',
      year: 2019,
      title: 'Migrated to Cloud',
      description: 'Led digital transformation - on-premise to AWS',
      type: 'challenge',
      icon: 'Cloud',
      tags: ['Cloud', 'AWS'],
      details: 'Zero-downtime migration of critical workloads. 40% cost optimization.',
    },
    {
      id: 'milestone-4',
      year: 2021,
      title: 'Infrastructure as Code',
      description: 'Implemented Terraform-based infrastructure automation',
      type: 'growth',
      icon: 'Code',
      tags: ['DevOps', 'Automation'],
      details: 'Reduced deployment time from hours to minutes. Full GitOps workflow.',
    },
    {
      id: 'milestone-5',
      year: 2023,
      title: 'Senior Architecture Role',
      description: 'Promoted to Principal Network Engineer',
      type: 'achievement',
      icon: 'Zap',
      tags: ['Leadership', 'Architecture'],
      details:
        'Leading infrastructure strategy for 500+ employee organization. Mentoring junior engineers.',
    },
  ],

  currentFocus: {
    title: 'NOW',
    description:
      'Mastering Kubernetes orchestration, learning Rust for systems programming, and exploring edge computing solutions.',
    keywords: ['Kubernetes', 'Rust', 'Edge Computing', 'Cloud Security'],
    icon: 'Sparkles',
  },

  callToAction: 'Want to explore a specific project or technology?',
};

export default journeyData;