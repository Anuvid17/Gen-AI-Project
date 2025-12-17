export interface Feature {
  id: string;
  name: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'backlog' | 'in-development' | 'testing' | 'deployed';
  effort: string;
  impact: string;
  owner: string;
  dueDate: string;
}

export const mockFeatures: Feature[] = [
  {
    id: 'f1',
    name: 'Mobile App Development',
    description: 'Native iOS and Android applications with full feature parity',
    priority: 'critical',
    status: 'in-development',
    effort: 'Large',
    impact: 'High',
    owner: 'Mobile Team',
    dueDate: '2024-06-30'
  },
  {
    id: 'f2',
    name: 'Advanced Analytics Dashboard',
    description: 'Comprehensive analytics with custom reports and visualizations',
    priority: 'high',
    status: 'in-development',
    effort: 'Medium',
    impact: 'High',
    owner: 'Analytics Team',
    dueDate: '2024-05-15'
  },
  {
    id: 'f3',
    name: 'AI-Powered Insights',
    description: 'Machine learning models to analyze feedback patterns and predict trends',
    priority: 'high',
    status: 'backlog',
    effort: 'Large',
    impact: 'Very High',
    owner: 'Data Science Team',
    dueDate: '2024-08-30'
  },
  {
    id: 'f4',
    name: 'Third-Party Integrations',
    description: 'Connect with Jira, Slack, Microsoft Teams, and other tools',
    priority: 'high',
    status: 'testing',
    effort: 'Medium',
    impact: 'Medium',
    owner: 'Integration Team',
    dueDate: '2024-04-30'
  },
  {
    id: 'f5',
    name: 'Custom Branding Options',
    description: 'Allow customers to customize colors, logos, and themes',
    priority: 'medium',
    status: 'backlog',
    effort: 'Small',
    impact: 'Medium',
    owner: 'Frontend Team',
    dueDate: '2024-07-15'
  },
  {
    id: 'f6',
    name: 'Advanced Security Features',
    description: 'SSO, 2FA, and enterprise-grade security enhancements',
    priority: 'critical',
    status: 'testing',
    effort: 'Medium',
    impact: 'High',
    owner: 'Security Team',
    dueDate: '2024-04-15'
  },
  {
    id: 'f7',
    name: 'Automated Reporting',
    description: 'Schedule and automatically generate reports via email',
    priority: 'medium',
    status: 'backlog',
    effort: 'Small',
    impact: 'Medium',
    owner: 'Backend Team',
    dueDate: '2024-09-30'
  },
  {
    id: 'f8',
    name: 'Collaboration Tools',
    description: 'Real-time collaboration features with comments and mentions',
    priority: 'high',
    status: 'in-development',
    effort: 'Medium',
    impact: 'High',
    owner: 'Platform Team',
    dueDate: '2024-05-30'
  },
  {
    id: 'f9',
    name: 'White-label Solution',
    description: 'Complete white-label platform for enterprise clients',
    priority: 'medium',
    status: 'backlog',
    effort: 'Large',
    impact: 'Medium',
    owner: 'Enterprise Team',
    dueDate: '2024-10-30'
  },
  {
    id: 'f10',
    name: 'Performance Optimization',
    description: 'Improve load times and optimize database queries',
    priority: 'high',
    status: 'deployed',
    effort: 'Medium',
    impact: 'High',
    owner: 'Platform Team',
    dueDate: '2024-03-30'
  }
];
