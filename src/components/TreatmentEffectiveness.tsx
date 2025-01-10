import React from 'react';
import { TreatmentMetric } from '../types';

export default function TreatmentEffectiveness() {
  const treatments: TreatmentMetric[] = [
    { name: 'Physical Therapy', successRate: 85, averageDuration: 12, costEffectiveness: 92 },
    { name: 'Medication Management', successRate: 78, averageDuration: 6, costEffectiveness: 88 },
    { name: 'Surgery Recovery', successRate: 90, averageDuration: 8, costEffectiveness: 75 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Duration</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost Effectiveness</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {treatments.map((treatment) => (
            <tr key={treatment.name}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{treatment.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{treatment.successRate}%</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{treatment.averageDuration} weeks</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{treatment.costEffectiveness}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}