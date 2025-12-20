import { useState } from "react";
import {
  Calendar,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import {
  Feature,
  Priority,
  Status,
} from "../services/feature.service";

interface FeatureCardProps {
  feature: Feature;
  onClick?: () => void;
}

const priorityColors: Record<Priority, string> = {
  low: "bg-gray-700 text-gray-300",
  medium: "bg-yellow-900 text-yellow-300",
  high: "bg-orange-900 text-orange-300",
  critical: "bg-red-900 text-red-300",
};

const statusColors: Record<Status, string> = {
  backlog: "bg-gray-700 text-gray-300",
  "in-development": "bg-blue-900 text-blue-300",
  testing: "bg-cyan-900 text-cyan-300",
  deployed: "bg-green-900 text-green-300",
};

function FeatureCard({ feature, onClick }: FeatureCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gray-800 rounded-lg p-6 border border-gray-700
                 hover:border-blue-500 transition-all duration-200
                 hover:shadow-lg hover:shadow-blue-500/10
                 transform hover:-translate-y-0.5 space-y-4"
    >
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-white">
          {feature.name}
        </h3>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            priorityColors[feature.priority]
          }`}
        >
          {feature.priority}
          {feature.ai_reason && " • AI"}
        </span>
      </div>

      <p className="text-gray-400">{feature.description}</p>

      {/* META */}
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            statusColors[feature.status]
          }`}
        >
          {feature.status}
        </span>

        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
          Effort: {feature.effort}
        </span>

        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
          Impact: {feature.impact}
        </span>

        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
          Confidence: {feature.confidence_score.toFixed(2)}
        </span>
      </div>

      {/* AI INSIGHT */}
      {feature.ai_reason && (
        <div className="bg-gray-900 border border-purple-800 rounded-lg p-3 text-sm">
          <p className="text-purple-300 font-medium mb-1">
            AI Insight
          </p>

          <p className="text-gray-300">
            {feature.ai_reason}
          </p>

          {feature.last_ai_update && (
            <p className="text-xs text-gray-500 mt-1">
              Last updated:{" "}
              {new Date(feature.last_ai_update).toLocaleString()}
            </p>
          )}
        </div>
      )}

      {/* FEEDBACK TOGGLE */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevents opening drawer
          setExpanded((prev) => !prev);
        }}
        className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
      >
        <MessageSquare size={16} />
        {feature.feedback_count} Feedback
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* FEEDBACK LIST */}
      {expanded && (
        <div className="border-t border-gray-700 pt-4 space-y-3">
          {feature.feedbacks.length === 0 && (
            <p className="text-sm text-gray-500">
              No feedback linked to this feature.
            </p>
          )}

          {feature.feedbacks.map(({ feedback, created_at }) => (
            <div
              key={feedback.id}
              className="bg-gray-700 rounded-lg p-3"
            >
              <p className="text-white text-sm font-medium">
                {feedback.title}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                <span>by {feedback.username}</span>

                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(created_at).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeatureCard;
