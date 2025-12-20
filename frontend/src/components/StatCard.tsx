import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  delay?: number;
}

function StatCard({ title, value, icon: Icon, trend, trendUp, delay = 0 }: StatCardProps) {
  return (
    <div
      className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1 animate-fadeInUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-blue-600 rounded-lg">
          <Icon size={24} className="text-white" />
        </div>
        {trend && (
          <span
            className={`text-sm font-semibold ${
              trendUp ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {trendUp ? '↑' : '↓'} {trend}
          </span>
        )}
      </div>
      <h3 className="text-gray-400 text-sm font-medium mb-2">{title}</h3>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

export default StatCard;
