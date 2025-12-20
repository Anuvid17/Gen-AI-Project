import { useEffect, useState } from "react";
import { CheckCircle2, Clock, Circle } from "lucide-react";

import Layout from "../components/Layout";
import FeatureService, {
  Feature,
  Status,
} from "../services/feature.service";

/* ===== Roadmap Columns ===== */
const COLUMNS: {
  key: Status;
  title: string;
  icon: JSX.Element;
}[] = [
  {
    key: "backlog",
    title: "Planned",
    icon: <Circle className="text-gray-400" size={22} />,
  },
  {
    key: "in-development",
    title: "In Development",
    icon: <Clock className="text-blue-400" size={22} />,
  },
  {
    key: "testing",
    title: "Testing",
    icon: <Clock className="text-yellow-400" size={22} />,
  },
  {
    key: "deployed",
    title: "Completed",
    icon: <CheckCircle2 className="text-green-400" size={22} />,
  },
];

const priorityColors: Record<string, string> = {
  critical: "bg-red-900 text-red-300",
  high: "bg-orange-900 text-orange-300",
  medium: "bg-yellow-900 text-yellow-300",
  low: "bg-gray-700 text-gray-300",
};

function Roadmap() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FeatureService.getAll()
      .then(setFeatures)
      .catch((err) =>
        console.error("Roadmap fetch error", err)
      )
      .finally(() => setLoading(false));
  }, []);

  const byStatus = (status: Status) =>
    features.filter((f) => f.status === status);

  if (loading) {
    return (
      <Layout>
        <p className="text-gray-400 text-center mt-20">
          Loading roadmap...
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Product Roadmap
          </h1>
          <p className="text-gray-400">
            AI-driven roadmap based on real user feedback.
          </p>
        </div>

        {/* COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {COLUMNS.map((col) => (
            <div
              key={col.key}
              className="bg-gray-800 rounded-xl border border-gray-700 p-4"
            >
              <div className="flex items-center gap-2 mb-4">
                {col.icon}
                <h2 className="text-lg font-semibold text-white">
                  {col.title}
                </h2>
              </div>

              <div className="space-y-4">
                {byStatus(col.key).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-white font-medium">
                        {feature.name}
                      </h3>

                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          priorityColors[feature.priority]
                        }`}
                      >
                        {feature.priority}
                      </span>
                    </div>

                    <p className="text-sm text-gray-300 mt-2">
                      {feature.description}
                    </p>

                    <div className="flex justify-between text-xs text-gray-400 mt-3">
                      <span>
                        {feature.feedback_count} feedback
                      </span>
                      <span>
                        Confidence{" "}
                        {feature.confidence_score.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}

                {byStatus(col.key).length === 0 && (
                  <p className="text-sm text-gray-500">
                    No items
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Roadmap;