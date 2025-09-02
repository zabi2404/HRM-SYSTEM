import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
  TimeScale
);

export default function LineChart() {
  const chartRef = useRef();
  const [chartData, setChartData] = useState({ datasets: [] });
  const [activeIndex, setActiveIndex] = useState(null);

  // Full datasets
  const rawData = [
    { x: '2025-01-01', y: 0, growth: 3.2 },
    { x: '2025-02-01', y: 25, growth: 4.1 },
    { x: '2025-03-01', y: 105, growth: 6.5 },
    { x: '2025-04-01', y: 125.2, growth: 12.5 },
    { x: '2025-05-01', y: 140, growth: 8.1 },
    { x: '2025-06-01', y: 160, growth: 5.9 },
    { x: '2025-07-01', y: 190, growth: 4.3 },
    { x: '2025-08-01', y: 210, growth: 4.9 },
    { x: '2025-09-01', y: 230, growth: 3.3 },
    { x: '2025-10-01', y: 245, growth: 2.1 },
    { x: '2025-11-01', y: 260, growth: 3.6 },
    { x: '2025-12-01', y: 275, growth: 2.4 },
  ];

  const secondData = [
    { x: '2025-01-01', y: 60 },
    { x: '2025-02-01', y: 80 },
    { x: '2025-03-01', y: 70 },
    { x: '2025-04-01', y: 110 },
    { x: '2025-05-01', y: 90 },
    { x: '2025-06-01', y: 140 },
    { x: '2025-07-01', y: 100 },
    { x: '2025-08-01', y: 130 },
    { x: '2025-09-01', y: 110 },
    { x: '2025-10-01', y: 120 },
    { x: '2025-11-01', y: 130 },
    { x: '2025-12-01', y: 140 },
  ];

  const getVisibleData = () =>
    window.innerWidth <= 480
      ? {
          raw: rawData.slice(-4),
          second: secondData.slice(-4),
        }
      : { raw: rawData, second: secondData };

  const buildDatasets = ({ raw, second }) => {
    const chart = chartRef.current;
    if (!chart) return;

    const { ctx, canvas } = chart;
    const height = canvas.clientHeight;

    const gradientA = ctx.createLinearGradient(0, 0, 0, height);
    gradientA.addColorStop(0, '#575DFF');
    gradientA.addColorStop(1, '#575DFF00');

    const gradientB = ctx.createLinearGradient(0, 0, 0, height);
    gradientB.addColorStop(0, '#57C3FF');
    gradientB.addColorStop(1, '#57C3FF00');

    setChartData({
      datasets: [
        {
          label: 'Sales',
          data: raw,
          parsing: { xAxisKey: 'x', yAxisKey: 'y' },
          borderColor: '#8EC6FF',
          backgroundColor: gradientA,
          fill: { target: 'origin' },
          tension: 0.5,
          borderWidth: 1,
          pointBackgroundColor: '#8EC6FF',
          pointRadius: ({ dataIndex }) =>
            dataIndex === raw.length - 1 || dataIndex === activeIndex ? 3 : 0,
          pointHoverRadius: 6,
        },
        {
          label: 'Revenue',
          data: second,
          parsing: { xAxisKey: 'x', yAxisKey: 'y' },
          borderColor: '#3A88FF',
          backgroundColor: gradientB,
          fill: { target: 'origin' },
          tension: 0.5,
          borderWidth: 1,
          pointBackgroundColor: '#3A88FF',
          pointRadius: ({ dataIndex }) =>
            dataIndex === second.length - 1 || dataIndex === activeIndex ? 3 : 0,
        },
      ],
    });
  };

  useEffect(() => {
    const handleResize = () => {
      buildDatasets(getVisibleData());
      // 🔧 Force Chart.js to recalc its size when parent width grows again
      if (chartRef.current) {
        chartRef.current.resize();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: { bottom: 0 } },
    onClick: (e) => {
      const points = chartRef.current?.getElementsAtEventForMode(
        e,
        'nearest',
        { intersect: true },
        true
      );
      if (points?.length) setActiveIndex(points[0].index);
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        type: 'time',
        time: { unit: 'month', displayFormats: { month: 'MMM' } },
        ticks: { color: '#fff', autoSkip: false, maxRotation: 0, minRotation: 0 },
        grid: { display: false },
      },
      y: {
        min: 0,
        ticks: { color: '#fff', callback: (v) => `${v}k` },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="w-full h-[300px] sm:h-[400px]">
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
}
