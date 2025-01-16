import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: string;
}

export default function MetricsCard({ title, value, icon: Icon, trend }: MetricsCardProps) {
  const isPositive = trend.startsWith('+');

  return (
    <div className="bg-indigo-300 rounded-lg shadow h-80 w-70 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Icon className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="ml-3 text-2xl font-medium text-gray-900">{title}</h3>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className={`mt-2 ${isPositive ? 'text-green-600 text-xl' : 'text-red-600'}`}>
          {trend} from last month
        </p>
      </div>
    </div>
  );
}