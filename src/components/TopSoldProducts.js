import React from 'react';
import { Card } from 'antd';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 16px;
  }
`;

const TopSoldProducts = () => {
  const data = {
    labels: [
      'Regency cakestand 3 tier',
      'Jumbo bag red retrospot',
      'Party bunting',
      'Postage',
      'White hanging heart t-light holder',
      'Jumbo bag strawberry',
      'Jumbo bag pink polkadot',
      'Assorted colour bird ornament',
    ],
    datasets: [
      {
        label: 'Sales',
        data: [14.4, 8.5, 6.1, 5.3, 5.3, 4.9, 4.7, 4.0],
        backgroundColor: '#1890ff',
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Horizontal bar chart
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw.toFixed(1)}K`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value}K`;
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <StyledCard title="Top Sold Products">
      <div style={{ height: '400px' }}>
        <Bar data={data} options={options} />
      </div>
    </StyledCard>
  );
};

export default TopSoldProducts;
