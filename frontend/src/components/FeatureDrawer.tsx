import { X, Calendar, MessageSquare } from "lucide-react";
import { Feature } from "../services/feature.service";

interface FeatureDrawerProps {
  feature: Feature | null;
  onClose: () => void;
}

function FeatureDrawer({ feature, onClose }: FeatureDrawerProps) {
  if (!feature) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-xl h-full bg-gray-900 border-l border-gray-700 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            {feature.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        {/* Meta */}
        <div className="space-y-2 mb-6 text-sm text-gray-300">
          <p><strong>Status:</strong> {feature.status}</p>
          <p><strong>Priority:</strong> {feature.priority}</p>
          <p><strong>Effort:</strong> {feature.effort}</p>
          <p><strong>Impact:</strong> {feature.impact}</p>
          <p><strong>Confidence:</strong> {feature.confidence_score.toFixed(2)}</p>
          <p>
            <Calendar size={14} className="inline mr-1" />
            {new Date(feature.created_at).toLocaleString()}
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Description
          </h3>
          <p className="text-gray-400">
            {feature.description}
          </p>
        </div>

        {/* Feedback */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <MessageSquare size={18} />
            Feedback ({feature.feedback_count})
          </h3>

          {feature.feedbacks.length === 0 && (
            <p className="text-gray-500 text-sm">
              No feedback linked to this feature.
            </p>
          )}

          <div className="space-y-3">
            {feature.feedbacks.map(({ feedback, created_at }) => (
              <div
                key={feedback.id}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4"
              >
                <p className="text-white font-medium">
                  {feedback.title}
                </p>

                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>by {feedback.username}</span>
                  <span>
                    {new Date(created_at).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureDrawer;
