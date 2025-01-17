import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../Side/Sidebar';
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

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenUpdate = (newValue: boolean) => {
    setIsOpen(newValue);
  };

  let displayF = true;
  if (isOpen && viewportWidth <= 545) {
    displayF = false;
  } else if (isOpen && viewportWidth > 545) {
    displayF = true;
  } else {
    displayF = true;
  }

  return (
    <BrowserRouter>
      <Sidebar onUpdate={handleIsOpenUpdate}>
        <div className="max-h-full max-w-full bg-gray-50">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* <div className="mb-8 min-h-32 bg-indigo-950 py-10">
          <h1 className="text-5xl font-bold text-white text-center">Healthcare Analytics Dashboard</h1>
          <p className="mt-2 text-white text-center text-2xl">Track patient outcomes and treatment effectiveness</p>
        </div> */}
            <Routes>
              <Route path="/" element={<div style={{ display: displayF ? "grid" : "none" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {summaryMetrics.map((metric) => (
                  <MetricsCard key={metric.title} {...metric} />
                ))}
              </div>} />

              <Route path="/metricsCard" element={<div style={{ display: displayF ? "grid" : "none" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {summaryMetrics.map((metric) => (
                  <MetricsCard key={metric.title} {...metric} />
                ))}
              </div>} />

              <Route path="/outcomesChart" element={<div style={{ display: displayF ? "grid" : "none" }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-400 rounded-lg shadow p-6">
                  <h2 className=" text-slate-50 text-2xl font-semibold mb-4 ">Patient Outcomes Trend</h2>
                  <OutcomesChart />
                </div>
              </div>} />

              <Route path="/treatmentEffectiveness" element={<div style={{ display: displayF ? "grid" : "none" }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-sky-300  rounded-lg shadow p-6">
                  <h2 className="text-2xl text-slate-50 font-semibold mb-4">Treatment Effectiveness</h2>
                  <TreatmentEffectiveness />
                </div>
              </div>} />

              <Route path="/utilizationMetrics" element={<div style={{ display: displayF ? "grid" : "none" }} className="bg-orange-200 rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold mb-4">Resource Utilization</h2>
                <UtilizationMetrics />
              </div>} />
            </Routes>
          </div>
        </div>
      </Sidebar>
    </BrowserRouter>
  );
}