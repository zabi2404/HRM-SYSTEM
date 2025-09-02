import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['Total Employee', 'Active Employee', 'InActive Employee'];
const colors = ['#6366F1', '#0EA5E9', '#22D3EE'];
const values = [15624, 5546, 2478]; // Replace with your real data

const data = {
  labels,
  datasets: [
    {
      label: 'Traffic',
      data: values,
      backgroundColor: colors,
      hoverOffset: 8,
      borderColor: 'transparent',
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  resizeDelay: 0,
  cutout: '90%',
  rotation: -90,
  circumference: 180,
  layout: {
    padding: 0, // Ensure no padding from Chart.js layout
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) => `${ctx.label}: ${ctx.formattedValue}`,
      },   
           resizeObserver: true,

    },
  },
};

export default function HalfDoughnutChart() {
  return (
    <div  className="min-w-[150px]  sm:p-4 max-w-[400px] text-[#AEB9E1] text-[14px] flex flex-col items-center">
      {/* Chart Container */}
      <div
  className="
    flex justify-center items-center
    w-full max-w-[500px] min-w-[150px]
    h-full max-h-[420px] min-h-[220px]
    relative 
  "
>
  <Doughnut 
    data={data}
    options={{ ...options, maintainAspectRatio: false }}
    style={{ width: '100%', height: '100%' }}
    
  />
</div>


      {/* Total Count */}
      <div className="text-[36px] text-white font-bold mt-[-90px]">
        {values.reduce((a, b) => a + b, 0).toLocaleString()}
      </div>
      <div className="text-[14px]">Users by device</div>

      {/* Custom Legend */}
      <div className="mt-10 w-full space-y-2">
        {labels.map((label, index) => (
          <div key={index} className="flex justify-between gap-4 items-center text-sm mb-12">
            <div className="flex items-center space-x-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[index] }}
              ></span>
              <span>{label}</span>
            </div>
            <span className="text-white font-medium">{values[index].toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
