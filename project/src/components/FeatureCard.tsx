import { Calendar, Users } from 'lucide-react';
import { Feature } from '../data/mockFeatures';

interface FeatureCardProps {
  feature: Feature;
}

function FeatureCard({ feature }: FeatureCardProps) {
  const priorityColors = {
    low: 'bg-gray-700 text-gray-300',
    medium: 'bg-yellow-900 text-yellow-300',
    high: 'bg-orange-900 text-orange-300',
    critical: 'bg-red-900 text-red-300',
  };

  const statusColors = {
    backlog: 'bg-gray-700 text-gray-300',
    'in-development': 'bg-blue-900 text-blue-300',
    testing: 'bg-cyan-900 text-cyan-300',
    deployed: 'bg-green-900 text-green-300',
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-0.5">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[feature.priority]}`}>
          {feature.priority}
        </span>
      </div>

      <p className="text-gray-400 mb-4">{feature.description}</p>

      <div className="flex items-center gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[feature.status]}`}>
          {feature.status}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
          {feature.effort}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
          Impact: {feature.impact}
        </span>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Users size={16} />
          <span>{feature.owner}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{feature.dueDate}</span>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
