import React, { useEffect, useRef } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController, 
  Title,
  Tooltip,
  Legend
} from 'chart.js';


Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController, 
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ data, options }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Use ref to persist chart instance

  useEffect(() => {
    const renderChart = () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy previous chart instance
      }
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar', // 'bar' type requires BarController to be registered
        data: data,
        options: options,
      });
    };

    renderChart();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Cleanup on unmount
      }
    };
  }, [data, options]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
