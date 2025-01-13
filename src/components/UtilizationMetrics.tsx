import React from 'react';
import { UtilizationMetric } from '../types';

export default function UtilizationMetrics() {
  const metrics: UtilizationMetric[] = [
    { resource: 'Hospital Beds', usage: 82, trend: 'stable', efficiency: 88 },
    { resource: 'Operating Rooms', usage: 75, trend: 'increasing', efficiency: 92 },
    { resource: 'Medical Equipment', usage: 68, trend: 'decreasing', efficiency: 85 },
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'increasing': return 'text-green-600';
      case 'decreasing': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric) => (
        <div key={metric.resource} className="bg-emerald-300 rounded-lg p-6">
          <h3 className="text-2xl font-medium text-gray-900 mb-4">{metric.resource}</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-lg font-medium">
                <span>Usage</span>
                <span>{metric.usage}%</span>
              </div>
              <div className="mt-2 overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div 
                  style={{ width: `${metric.usage}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg text-slate-700">Trend</span>
              <span className={`text-lg font-medium ${getTrendColor(metric.trend)}`}>
                {metric.trend.charAt(0).toUpperCase() + metric.trend.slice(1)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Efficiency</span>
              <span className="text-sm font-medium text-gray-900">{metric.efficiency}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}