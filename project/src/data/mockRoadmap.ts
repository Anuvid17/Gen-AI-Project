export interface RoadmapItem {
  id: string;
  quarter: string;
  title: string;
  description: string;
  justification: string;
  features: string[];
  status: 'planned' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'critical';
}

export const mockRoadmap: RoadmapItem[] = [
  {
    id: 'r1',
    quarter: 'Q1 2024',
    title: 'Foundation & Core Features',
    description: 'Establish robust foundation with essential features and security',
    justification: 'Building a solid foundation is critical for long-term success. This quarter focuses on core functionality, security, and performance that will support all future development.',
    features: ['Performance Optimization', 'Advanced Security Features', 'Third-Party Integrations'],
    status: 'completed',
    priority: 'critical'
  },
  {
    id: 'r2',
    quarter: 'Q2 2024',
    title: 'Enhanced User Experience',
    description: 'Improve user experience with advanced analytics and collaboration tools',
    justification: 'User feedback indicates strong demand for better analytics and team collaboration. These features will increase user engagement and product stickiness.',
    features: ['Advanced Analytics Dashboard', 'Collaboration Tools', 'Mobile App Development'],
    status: 'in-progress',
    priority: 'high'
  },
  {
    id: 'r3',
    quarter: 'Q3 2024',
    title: 'Intelligence & Customization',
    description: 'AI-powered insights and customization options for diverse user needs',
    justification: 'AI capabilities will differentiate us from competitors and provide unique value. Custom branding addresses enterprise customer requirements.',
    features: ['AI-Powered Insights', 'Custom Branding Options', 'Automated Reporting'],
    status: 'planned',
    priority: 'high'
  },
  {
    id: 'r4',
    quarter: 'Q4 2024',
    title: 'Enterprise & Scale',
    description: 'Enterprise-grade features and scalability improvements',
    justification: 'Enterprise customers represent significant revenue opportunity. White-label solution opens new partnership channels and expands market reach.',
    features: ['White-label Solution', 'Advanced API Capabilities', 'Global Infrastructure'],
    status: 'planned',
    priority: 'medium'
  },
  {
    id: 'r5',
    quarter: 'Q1 2025',
    title: 'Innovation & Expansion',
    description: 'Innovative features and market expansion initiatives',
    justification: 'Continued innovation maintains competitive advantage. New market segments and features ensure sustained growth.',
    features: ['Predictive Analytics', 'Voice & Video Feedback', 'Partner Ecosystem'],
    status: 'planned',
    priority: 'medium'
  }
];
