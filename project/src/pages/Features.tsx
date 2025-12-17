import { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';
import { mockFeatures } from '../data/mockFeatures';

type SortBy = 'priority' | 'status' | 'dueDate';

function Features() {
  const [sortBy, setSortBy] = useState<SortBy>('priority');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
  const statusOrder = { 'in-development': 0, testing: 1, backlog: 2, deployed: 3 };

  const sortedAndFilteredFeatures = mockFeatures
    .filter(item => statusFilter === 'all' || item.status === statusFilter)
    .sort((a, b) => {
      if (sortBy === 'priority') {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      } else if (sortBy === 'status') {
        return statusOrder[a.status] - statusOrder[b.status];
      } else {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }
    });

  const groupedByPriority = {
    critical: sortedAndFilteredFeatures.filter(f => f.priority === 'critical'),
    high: sortedAndFilteredFeatures.filter(f => f.priority === 'high'),
    medium: sortedAndFilteredFeatures.filter(f => f.priority === 'medium'),
    low: sortedAndFilteredFeatures.filter(f => f.priority === 'low'),
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Features</h1>
          <p className="text-gray-400">Track and manage product features across their lifecycle.</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <ArrowUpDown size={20} className="text-blue-400" />
            <h2 className="text-lg font-semibold text-white">Sort & Filter</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="priority">Priority</option>
                <option value="status">Status</option>
                <option value="dueDate">Due Date</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Status Filter</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="all">All Statuses</option>
                <option value="backlog">Backlog</option>
                <option value="in-development">In Development</option>
                <option value="testing">Testing</option>
                <option value="deployed">Deployed</option>
              </select>
            </div>
          </div>
        </div>

        {sortBy === 'priority' ? (
          <div className="space-y-8">
            {groupedByPriority.critical.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                  Critical Priority ({groupedByPriority.critical.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {groupedByPriority.critical.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                  ))}
                </div>
              </div>
            )}

            {groupedByPriority.high.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  High Priority ({groupedByPriority.high.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {groupedByPriority.high.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                  ))}
                </div>
              </div>
            )}

            {groupedByPriority.medium.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  Medium Priority ({groupedByPriority.medium.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {groupedByPriority.medium.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                  ))}
                </div>
              </div>
            )}

            {groupedByPriority.low.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-400 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                  Low Priority ({groupedByPriority.low.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {groupedByPriority.low.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedAndFilteredFeatures.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        )}

        {sortedAndFilteredFeatures.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No features match the selected filters.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Features;
