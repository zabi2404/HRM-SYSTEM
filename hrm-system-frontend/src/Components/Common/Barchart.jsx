import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: [
    '12 AM', '1 AM', '2 AM', '3 AM', '4 AM',
     '5 AM',
    '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
    
    
  ],
  datasets: [
    {
      label: 'Dataset 1',
      data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50) + 10),
      backgroundColor: '#8EC6FF',
      borderRadius: 2,
      barPercentage: 0.6,
      categoryPercentage: 0.8,
    },
    {
      label: 'Dataset 2',
      data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 30) + 10),
      backgroundColor: '#2A7EFF',
      borderRadius: 4,
      barPercentage: 0.6,
      categoryPercentage: 0.8,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#FFFF',
        maxRotation: 0,
        autoSkip: true,
        maxTicksLimit: 4,
      },
      grid: {
        display: false,
      },
    },
    y: {
    display: false,
    min: 0,            // Minimum bar height starts from 0
    max: 80,          // Lower max = visually taller bars
    grid: { display: false },
  }
  },
};

export default function BarChart() {
  return (
    <div className="w-full">
      <Bar data={data} options={options} />
    </div>
  );
}
