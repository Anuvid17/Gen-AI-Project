import { MessageSquare, Layers, TrendingUp, Activity } from 'lucide-react';
import Layout from '../components/Layout';
import StatCard from '../components/StatCard';
import { mockFeedback } from '../data/mockFeedback';
import { mockFeatures } from '../data/mockFeatures';

function Dashboard() {
  const totalFeedback = mockFeedback.length;
  const totalFeatures = mockFeatures.length;

  const criticalPriority = mockFeatures.filter(f => f.priority === 'critical').length;
  const highPriority = mockFeatures.filter(f => f.priority === 'high').length;
  const topPriority = `${criticalPriority + highPriority} High/Critical`;

  const inProgressFeatures = mockFeatures.filter(f => f.status === 'in-development').length;

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome back! Here's an overview of your product insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Feedback"
            value={totalFeedback}
            icon={MessageSquare}
            trend="12%"
            trendUp={true}
            delay={0}
          />
          <StatCard
            title="Total Features"
            value={totalFeatures}
            icon={Layers}
            trend="8%"
            trendUp={true}
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
            trend="3%"
            trendUp={false}
            delay={300}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Recent Feedback</h2>
            <div className="space-y-3">
              {mockFeedback.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.category}</p>
                  </div>
                  <span className="text-sm text-gray-400">{item.votes} votes</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Active Features</h2>
            <div className="space-y-3">
              {mockFeatures
                .filter(f => f.status === 'in-development' || f.status === 'testing')
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
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      item.priority === 'critical' ? 'bg-red-900 text-red-300' :
                      item.priority === 'high' ? 'bg-orange-900 text-orange-300' :
                      'bg-yellow-900 text-yellow-300'
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
