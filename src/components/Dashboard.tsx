import React from 'react';
import { BarChart3, Users, Activity, TrendingUp } from 'lucide-react';
import MetricsCard from './MetricsCard';
import OutcomesChart from './OutcomesChart';
import TreatmentEffectiveness from './TreatmentEffectiveness';
import UtilizationMetrics from './UtilizationMetrics';

export default function Dashboard() {
  const summaryMetrics = [
    { title: 'Total Patients', value: '1,284', icon: Users, trend: '+12%' },
    { title: 'Avg. Recovery Rate', value: '76%', icon: Activity, trend: '+5%' },
    { title: 'Treatment Success', value: '82%', icon: TrendingUp, trend: '+3%' },
    { title: 'Resource Efficiency', value: '88%', icon: BarChart3, trend: '+7%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Healthcare Analytics Dashboard</h1>
          <p className="mt-2 text-gray-600">Track patient outcomes and treatment effectiveness</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summaryMetrics.map((metric) => (
            <MetricsCard key={metric.title} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Patient Outcomes Trend</h2>
            <OutcomesChart />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Treatment Effectiveness</h2>
            <TreatmentEffectiveness />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Resource Utilization</h2>
          <UtilizationMetrics />
        </div>
      </div>
    </div>
  );
}