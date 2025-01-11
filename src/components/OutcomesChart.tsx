import React from 'react';

export default function OutcomesChart() {
  return (
    <div className="h-64 flex items-center justify-center">
      <div className="space-y-4 w-full">
        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-semibold text-slate-900">Pain Management</span>
            </div>
            <div>
              <span className="text-lg font-semibold text-slate-900">85%</span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
            <div className="w-[85%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-800"></div>
          </div>
        </div>
        
        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-semibold text-slate-900">Mobility Improvement</span>
            </div>
            <div>
              <span className="text-lg font-semibold text-slate-900">78%</span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
            <div className="w-[78%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
          </div>
        </div>

        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-semibold text-slate-900">Quality of Life</span>
            </div>
            <div>
              <span className="text-lg font-semibold text-slate-900">92%</span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100">
            <div className="w-[92%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
}