export interface Feedback {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'new' | 'reviewed' | 'planned' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  votes: number;
  createdAt: string;
  user: string;
}

export const mockFeedback: Feedback[] = [
  {
    id: '1',
    title: 'Dark mode support',
    description: 'Add dark mode toggle for better user experience during night time usage',
    category: 'UI/UX',
    status: 'completed',
    priority: 'high',
    votes: 145,
    createdAt: '2024-01-15',
    user: 'Sarah Chen'
  },
  {
    id: '2',
    title: 'Export to CSV functionality',
    description: 'Allow users to export feedback data to CSV format for external analysis',
    category: 'Feature',
    status: 'in-progress',
    priority: 'medium',
    votes: 89,
    createdAt: '2024-02-01',
    user: 'Mike Johnson'
  },
  {
    id: '3',
    title: 'Mobile app version',
    description: 'Create native mobile applications for iOS and Android platforms',
    category: 'Platform',
    status: 'planned',
    priority: 'critical',
    votes: 234,
    createdAt: '2024-02-10',
    user: 'Alex Rodriguez'
  },
  {
    id: '4',
    title: 'Advanced search filters',
    description: 'Implement more granular search and filter options for better data discovery',
    category: 'Feature',
    status: 'reviewed',
    priority: 'high',
    votes: 112,
    createdAt: '2024-02-15',
    user: 'Emily Davis'
  },
  {
    id: '5',
    title: 'Improve page load speed',
    description: 'Optimize performance to reduce initial page load time',
    category: 'Performance',
    status: 'new',
    priority: 'high',
    votes: 67,
    createdAt: '2024-03-01',
    user: 'David Kim'
  },
  {
    id: '6',
    title: 'Integration with Slack',
    description: 'Add Slack integration to receive notifications about new feedback',
    category: 'Integration',
    status: 'planned',
    priority: 'medium',
    votes: 78,
    createdAt: '2024-03-05',
    user: 'Lisa Wang'
  },
  {
    id: '7',
    title: 'Customizable dashboard widgets',
    description: 'Allow users to customize dashboard layout and choose which widgets to display',
    category: 'UI/UX',
    status: 'new',
    priority: 'low',
    votes: 43,
    createdAt: '2024-03-10',
    user: 'Tom Anderson'
  },
  {
    id: '8',
    title: 'API rate limiting improvements',
    description: 'Increase API rate limits for enterprise customers',
    category: 'Infrastructure',
    status: 'reviewed',
    priority: 'medium',
    votes: 56,
    createdAt: '2024-03-12',
    user: 'Rachel Green'
  },
  {
    id: '9',
    title: 'Multi-language support',
    description: 'Add internationalization support for Spanish, French, and German',
    category: 'Feature',
    status: 'planned',
    priority: 'high',
    votes: 198,
    createdAt: '2024-03-15',
    user: 'Carlos Martinez'
  },
  {
    id: '10',
    title: 'Bulk actions for feedback',
    description: 'Enable bulk operations like status updates, tagging, and deletion',
    category: 'Feature',
    status: 'new',
    priority: 'medium',
    votes: 34,
    createdAt: '2024-03-18',
    user: 'Nina Patel'
  }
];
