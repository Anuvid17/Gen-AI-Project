import { Calendar, CheckCircle2, Circle, Clock } from 'lucide-react';
import Layout from '../components/Layout';
import { mockRoadmap } from '../data/mockRoadmap';

function Roadmap() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="text-green-400" size={24} />;
      case 'in-progress':
        return <Clock className="text-blue-400" size={24} />;
      default:
        return <Circle className="text-gray-400" size={24} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-400';
      case 'in-progress':
        return 'border-blue-400';
      default:
        return 'border-gray-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-900 text-red-300';
      case 'high':
        return 'bg-orange-900 text-orange-300';
      case 'medium':
        return 'bg-yellow-900 text-yellow-300';
      default:
        return 'bg-gray-700 text-gray-300';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Product Roadmap</h1>
          <p className="text-gray-400">Our strategic vision for product development across upcoming quarters.</p>
        </div>

        <div className="space-y-6">
          {mockRoadmap.map((item, index) => (
            <div
              key={item.id}
              className={`bg-gray-800 rounded-xl p-6 border-l-4 ${getStatusColor(item.status)} hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(item.status)}
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar size={20} className="text-blue-400" />
                        <h2 className="text-2xl font-bold text-white">{item.quarter}</h2>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-1">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>

                    <span className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      item.status === 'completed' ? 'bg-green-900 text-green-300' :
                      item.status === 'in-progress' ? 'bg-blue-900 text-blue-300' :
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {item.status === 'completed' ? 'Completed' :
                       item.status === 'in-progress' ? 'In Progress' :
                       'Planned'}
                    </span>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Strategic Justification</h4>
                    <p className="text-gray-400 leading-relaxed">{item.justification}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index < mockRoadmap.length - 1 && (
                <div className="mt-6 ml-3 h-8 w-0.5 bg-gray-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Roadmap;
