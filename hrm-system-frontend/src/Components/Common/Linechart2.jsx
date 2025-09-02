// LineChart.jsx
import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register required chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
    labels: [
    '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM',
    '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM',
    '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM',
  ],

  datasets: [
    {
      label: 'Revenue',
      data: [
        0, 30, 80, 50, 110, 90, 70, 60,
        100, 85, 60, 40, 60, 95, 150, 220,
        300, 180, 90, 80, 120, 140, 100, 50,
      ],
      fill: false,
     
      borderColor: '#8EC6FF',
      tension: 0,
      pointRadius: 0
      
  
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false ,
      position: 'top',
      labels: { color: '#fff' }, // white text for dark backgrounds
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      ticks: { color: '#fff', maxTicksLimit: 4,   },
      grid: { display: false },
     
    },
    y: {
  ticks: {
    color: '#fff',
    maxTicksLimit: 4,     
      
    beginAtZero: true,
  },
  grid: {
    display: false,       
  },
},
  },
};

export default function LineChart() {
  return <Line data={data} options={options} />;
}
