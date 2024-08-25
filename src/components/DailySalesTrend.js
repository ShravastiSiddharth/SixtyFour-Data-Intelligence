import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DailySalesTrend = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      // Cleanup the chart instance before unmounting or re-rendering
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    labels: ['Feb 26', 'Mar 3', 'Mar 8', 'Mar 13', 'Mar 18', 'Mar 23', 'Mar 28', 'Apr 2'],
    datasets: [
      {
        label: 'Sales',
        data: [20, 30, 40, 35, 50, 45, 55, 60],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        yAxisID: 'y-axis-sales',
      },
      {
        label: 'No of Purchases',
        data: [15, 25, 35, 30, 40, 35, 50, 55],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        yAxisID: 'y-axis-purchases',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 10,
          padding: 15,
        },
      },
      title: {
        display: true,
        text: 'Daily Sales Trend',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      'y-axis-sales': {
        type: 'linear',
        position: 'left',
        ticks: {
          callback: function (value) {
            return `$${value}K`;
          },
        },
        beginAtZero: true,
      },
      'y-axis-purchases': {
        type: 'linear',
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        beginAtZero: true,
      },
    },
  };

  const cardStyle = {
    padding: '20px',
    maxWidth: '100%',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  };

  const percentageStyle = {
    color: '#ff4d4f',
    fontSize: '22px',
    marginRight: '5px',
  };

  return (
    <Card style={cardStyle}>
      <div style={headerStyle}>
        <span style={percentageStyle}>▼13.2%</span> vs. previous day
      </div>
      <div style={{ height: '300px', width: '100%' }}>
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </Card>
  );
};

export default DailySalesTrend;
