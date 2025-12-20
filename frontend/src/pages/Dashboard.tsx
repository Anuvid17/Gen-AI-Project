import { MessageSquare, Layers, TrendingUp, Activity } from "lucide-react";
import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import { useEffect, useState } from "react";

import FeatureService from "../services/feature.service";
import FeedbackService, { Feedback } from "../services/feedback.service";
import { Feature } from "../services/feature.service";

function Dashboard() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      console.warn("No token found. Skipping API calls.");
      return;
    }

    // Fetch Features
    FeatureService.getAll()
      .then((data) => {
        console.log("FEATURES FROM BACKEND:", data);
        setFeatures(data);
      })
      .catch((error) => {
        console.error("FEATURE API ERROR:", error);
      });

    // Fetch Feedback
    FeedbackService.getAll()
      .then((data) => {
        console.log("FEEDBACK FROM BACKEND:", data);
        setFeedbacks(data);
      })
      .catch((error) => {
        console.error("FEEDBACK API ERROR:", error);
      });
  }, []);

  // ===== REAL STATS =====
  const totalFeedback = feedbacks.length;
  const totalFeatures = features.length;

  const criticalPriority = features.filter(
    (f) => f.priority === "critical"
  ).length;

  const highPriority = features.filter(
    (f) => f.priority === "high"
  ).length;

  const topPriority = `${criticalPriority + highPriority} High/Critical`;

  const inProgressFeatures = features.filter(
    (f) => f.status === "in-development"
  ).length;

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">
            Welcome back! Here's an overview of your product insights.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Feedback"
            value={totalFeedback}
            icon={MessageSquare}
            delay={0}
          />
          <StatCard
            title="Total Features"
            value={totalFeatures}
            icon={Layers}
            delay={100}
          />
          <StatCard
            title="Top Priority"
            value={topPriority}
            icon={TrendingUp}
            delay={200}
          />
          <StatCard
            title="In Development"
            value={inProgressFeatures}
            icon={Activity}
            delay={300}
          />
        </div>

        {/* RECENT FEEDBACK */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Recent Feedback
          </h2>

          <div className="space-y-3">
            {feedbacks.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-400">
                    {new Date(item.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}

            {feedbacks.length === 0 && (
              <p className="text-gray-400 text-sm">
                No feedback submitted yet.
              </p>
            )}
          </div>
        </div>

        {/* ACTIVE FEATURES */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Active Features
          </h2>

          <div className="space-y-3">
            {features
              .filter(
                (f) =>
                  f.status === "in-development" || f.status === "testing"
              )
              .slice(0, 5)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.status}</p>
                  </div>

                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      item.priority === "critical"
                        ? "bg-red-900 text-red-300"
                        : item.priority === "high"
                        ? "bg-orange-900 text-orange-300"
                        : "bg-yellow-900 text-yellow-300"
                    }`}
                  >
                    {item.priority}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;