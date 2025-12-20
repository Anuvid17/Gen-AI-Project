import { useEffect, useState } from "react";
import { ArrowUpDown } from "lucide-react";

import Layout from "../components/Layout";
import FeatureCard from "../components/FeatureCard";
import FeatureDrawer from "../components/FeatureDrawer";

import FeatureService, {
  Feature,
  Priority,
  Status,
} from "../services/feature.service";

type SortBy = "priority" | "status" | "created_at";

/* ===== Sorting Orders ===== */
const priorityOrder: Record<Priority, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
};

const statusOrder: Record<Status, number> = {
  "in-development": 0,
  testing: 1,
  backlog: 2,
  deployed: 3,
};

function Features() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);

  const [sortBy, setSortBy] = useState<SortBy>("priority");
  const [statusFilter, setStatusFilter] = useState<Status | "all">("all");

  const [selectedFeature, setSelectedFeature] =
    useState<Feature | null>(null);

  /* ===== Fetch from backend ===== */
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setLoading(false);
      return;
    }

    FeatureService.getAll()
      .then(setFeatures)
      .catch((err) =>
        console.error("FEATURE FETCH ERROR:", err)
      )
      .finally(() => setLoading(false));
  }, []);

  /* ===== Lock background scroll when drawer open ===== */
  useEffect(() => {
    document.body.style.overflow = selectedFeature ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedFeature]);

  /* ===== Filter + Sort ===== */
  const sortedAndFilteredFeatures = features
    .filter(
      (item) =>
        statusFilter === "all" || item.status === statusFilter
    )
    .sort((a, b) => {
      if (sortBy === "priority") {
        return (
          priorityOrder[a.priority] -
          priorityOrder[b.priority]
        );
      }

      if (sortBy === "status") {
        return (
          statusOrder[a.status] -
          statusOrder[b.status]
        );
      }

      return (
        new Date(b.created_at).getTime() -
        new Date(a.created_at).getTime()
      );
    });

  const groupedByPriority: Record<Priority, Feature[]> = {
    critical: sortedAndFilteredFeatures.filter(
      (f) => f.priority === "critical"
    ),
    high: sortedAndFilteredFeatures.filter(
      (f) => f.priority === "high"
    ),
    medium: sortedAndFilteredFeatures.filter(
      (f) => f.priority === "medium"
    ),
    low: sortedAndFilteredFeatures.filter(
      (f) => f.priority === "low"
    ),
  };

  /* ===== Loading State ===== */
  if (loading) {
    return (
      <Layout>
        <p className="text-gray-400 text-center mt-20">
          Loading features...
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
            Features
          </h1>
          <p className="text-gray-400">
            Track and manage product features across their lifecycle.
          </p>
        </div>

        {/* SORT & FILTER */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <ArrowUpDown size={20} className="text-blue-400" />
            <h2 className="text-lg font-semibold text-white">
              Sort & Filter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* SORT */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as SortBy)
                }
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              >
                <option value="priority">Priority</option>
                <option value="status">Status</option>
                <option value="created_at">
                  Created Date
                </option>
              </select>
            </div>

            {/* FILTER */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Status Filter
              </label>
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(
                    e.target.value as Status | "all"
                  )
                }
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              >
                <option value="all">All Statuses</option>
                <option value="backlog">Backlog</option>
                <option value="in-development">
                  In Development
                </option>
                <option value="testing">Testing</option>
                <option value="deployed">Deployed</option>
              </select>
            </div>
          </div>
        </div>

        {/* FEATURE LIST */}
        {sortBy === "priority" ? (
          <div className="space-y-8">
            {Object.entries(groupedByPriority).map(
              ([priority, items]) =>
                items.length > 0 && (
                  <div key={priority}>
                    <h2 className="text-2xl font-bold mb-4 capitalize text-white">
                      {priority} Priority ({items.length})
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {items.map((feature) => (
                        <FeatureCard
                          key={feature.id}
                          feature={feature}
                          onClick={() =>
                            setSelectedFeature(feature)
                          }
                        />
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedAndFilteredFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                onClick={() =>
                  setSelectedFeature(feature)
                }
              />
            ))}
          </div>
        )}

        {sortedAndFilteredFeatures.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No features match the selected filters.
            </p>
          </div>
        )}
      </div>

      {/* FEATURE DRAWER */}
      {selectedFeature && (
        <FeatureDrawer
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </Layout>
  );
}

export default Features;