import { Search, Target, Lightbulb, TestTube, Rocket } from 'lucide-react';

export const designPhases = [
  {
    id: 'discover',
    name: 'Discover',
    shortName: 'Discover',
    description: 'Research and explore the problem space through user insights',
    icon: Search,
    color: 'bg-blue-500',
    colorBadge: 'bg-blue-500',
    toolCount: 5
  },
  {
    id: 'define',
    name: 'Define',
    shortName: 'Define',
    description: 'Synthesize insights and define the design challenge',
    icon: Target,
    color: 'bg-indigo-500',
    colorBadge: 'bg-indigo-500',
    toolCount: 6
  },
  {
    id: 'ideate-prototype',
    name: 'Ideate & Prototype',
    shortName: 'Ideate',
    description: 'Generate ideas and create prototypes to explore solutions',
    icon: Lightbulb,
    color: 'bg-purple-500',
    colorBadge: 'bg-purple-500',
    toolCount: 18
  },
  {
    id: 'test-validate',
    name: 'Test & Validate',
    shortName: 'Test',
    description: 'Validate designs through testing and user feedback',
    icon: TestTube,
    color: 'bg-pink-500',
    colorBadge: 'bg-pink-500',
    toolCount: 7
  },
  {
    id: 'launch',
    name: 'Launch',
    shortName: 'Launch',
    description: 'Prepare for manufacturing and market launch',
    icon: Rocket,
    color: 'bg-green-500',
    colorBadge: 'bg-green-500',
    toolCount: 10
  }
];
