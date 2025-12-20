import { ThumbsUp, User } from 'lucide-react';
import { Feedback } from '../data/mockFeedback';

interface FeedbackCardProps {
  feedback: Feedback;
}

function FeedbackCard({ feedback }: FeedbackCardProps) {
  const statusColors = {
    new: 'bg-gray-700 text-gray-300',
    reviewed: 'bg-yellow-900 text-yellow-300',
    planned: 'bg-blue-900 text-blue-300',
    'in-progress': 'bg-cyan-900 text-cyan-300',
    completed: 'bg-green-900 text-green-300',
  };

  const priorityColors = {
    low: 'text-gray-400',
    medium: 'text-yellow-400',
    high: 'text-orange-400',
    critical: 'text-red-400',
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-0.5">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-white">{feedback.title}</h3>
        <span className={`text-xs font-semibold ${priorityColors[feedback.priority]} uppercase`}>
          {feedback.priority}
        </span>
      </div>

      <p className="text-gray-400 mb-4 line-clamp-2">{feedback.description}</p>

      <div className="flex items-center gap-3 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[feedback.status]}`}>
          {feedback.status}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
          {feedback.category}
        </span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          <User size={16} />
          <span>{feedback.user}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <ThumbsUp size={16} />
          <span className="font-semibold">{feedback.votes}</span>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
