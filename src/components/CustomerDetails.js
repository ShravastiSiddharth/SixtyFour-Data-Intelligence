import React from 'react';
import { Table, Card } from 'antd';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CustomerDetails = () => {
  const columns = [
    { title: 'Customer ID', dataIndex: 'customerID', key: 'customerID' },
    { title: 'Country', dataIndex: 'country', key: 'country' },
    { title: 'Day of Latest Purchase', dataIndex: 'latestPurchase', key: 'latestPurchase' },
    { title: 'No of Purchases', dataIndex: 'purchases', key: 'purchases' },
    {
      title: 'Sales',
      dataIndex: 'sales',
      key: 'sales',
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100px', marginRight: '10px' }}>
            <Bar
              data={{
                labels: [''],
                datasets: [
                  {
                    data: [parseFloat(record.sales.replace('$', '').replace('K', ''))],
                    backgroundColor: '#1890ff',
                  },
                ],
              }}
              options={{
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: { x: { display: false }, y: { display: false } },
                responsive: true,
                maintainAspectRatio: false,
              }}
              height={20}
            />
          </div>
          <span>{record.sales}</span>
        </div>
      ),
    },
  ];

  const data = [
                    { key: 1, customerID: 14646, country: 'Netherlands', latestPurchase: '30 Mar 2022', purchases: 4, sales: '$21.5K' },
                    { key: 2, customerID: 17450, country: 'United Kingdom', latestPurchase: '25 Mar 2022', purchases: 3, sales: '$13.5K' },
                    { key: 3, customerID: 15769, country: 'United Kingdom', latestPurchase: '17 Mar 2022', purchases: 3, sales: '$13.0K' },
                    { key: 4, customerID: 14156, country: 'EIRE', latestPurchase: '17 Mar 2022', purchases: 6, sales: '$9.7K' },
                    { key: 5, customerID: 13694, country: 'United Kingdom', latestPurchase: '23 Mar 2022', purchases: 3, sales: '$8.1K' },
                    { key: 6, customerID: 17511, country: 'United Kingdom', latestPurchase: '29 Mar 2022', purchases: 3, sales: '$7.2K' },
                    { key: 7, customerID: 14911, country: 'EIRE', latestPurchase: '31 Mar 2022', purchases: 13, sales: '$7.1K' },
                    { key: 8, customerID: 12345, country: 'Germany', latestPurchase: '28 Feb 2022', purchases: 2, sales: '$5.6K' },
                    { key: 9, customerID: 16432, country: 'France', latestPurchase: '01 Mar 2022', purchases: 5, sales: '$14.2K' },
                    { key: 10, customerID: 13215, country: 'Spain', latestPurchase: '03 Apr 2022', purchases: 1, sales: '$2.3K' },
                    { key: 11, customerID: 14567, country: 'Italy', latestPurchase: '12 Mar 2022', purchases: 4, sales: '$10.5K' },
                    { key: 12, customerID: 17654, country: 'United Kingdom', latestPurchase: '19 Mar 2022', purchases: 3, sales: '$12.0K' },
                    { key: 13, customerID: 15876, country: 'Netherlands', latestPurchase: '22 Mar 2022', purchases: 6, sales: '$18.3K' },
                    { key: 14, customerID: 16789, country: 'Belgium', latestPurchase: '25 Feb 2022', purchases: 2, sales: '$6.4K' },
                    { key: 15, customerID: 13876, country: 'Denmark', latestPurchase: '15 Mar 2022', purchases: 5, sales: '$11.7K' },
                    { key: 16, customerID: 15324, country: 'Sweden', latestPurchase: '20 Mar 2022', purchases: 7, sales: '$15.8K' },
                    { key: 17, customerID: 13456, country: 'Norway', latestPurchase: '26 Mar 2022', purchases: 3, sales: '$9.9K' },
                    { key: 18, customerID: 16543, country: 'Finland', latestPurchase: '27 Feb 2022', purchases: 2, sales: '$5.3K' },
                    { key: 19, customerID: 17678, country: 'Portugal', latestPurchase: '29 Mar 2022', purchases: 4, sales: '$10.6K' },
                    { key: 20, customerID: 15432, country: 'Austria', latestPurchase: '10 Mar 2022', purchases: 3, sales: '$7.5K' },
                    { key: 21, customerID: 17892, country: 'Switzerland', latestPurchase: '18 Mar 2022', purchases: 6, sales: '$14.9K' },
                    { key: 22, customerID: 13412, country: 'Ireland', latestPurchase: '21 Mar 2022', purchases: 5, sales: '$13.1K' },
                    { key: 23, customerID: 17543, country: 'Luxembourg', latestPurchase: '30 Mar 2022', purchases: 2, sales: '$6.7K' },
                    { key: 24, customerID: 14321, country: 'Poland', latestPurchase: '02 Mar 2022', purchases: 4, sales: '$11.2K' },
                    { key: 25, customerID: 16754, country: 'Czech Republic', latestPurchase: '28 Mar 2022', purchases: 3, sales: '$8.0K' },
                    { key: 26, customerID: 18234, country: 'Hungary', latestPurchase: '15 Mar 2022', purchases: 6, sales: '$12.4K' },
                    { key: 27, customerID: 14876, country: 'Slovakia', latestPurchase: '17 Mar 2022', purchases: 4, sales: '$9.3K' },
                    { key: 28, customerID: 19456, country: 'Slovenia', latestPurchase: '19 Mar 2022', purchases: 5, sales: '$10.7K' },
                    { key: 29, customerID: 18765, country: 'Croatia', latestPurchase: '20 Mar 2022', purchases: 2, sales: '$5.8K' },
                    { key: 30, customerID: 17654, country: 'Bosnia and Herzegovina', latestPurchase: '25 Mar 2022', purchases: 3, sales: '$7.6K' },
                    { key: 31, customerID: 19987, country: 'Serbia', latestPurchase: '23 Mar 2022', purchases: 4, sales: '$11.3K' },
                    { key: 32, customerID: 17688, country: 'Montenegro', latestPurchase: '29 Mar 2022', purchases: 1, sales: '$2.9K' },
                    { key: 33, customerID: 18765, country: 'Kosovo', latestPurchase: '01 Apr 2022', purchases: 5, sales: '$10.2K' },
                    { key: 34, customerID: 14532, country: 'Albania', latestPurchase: '28 Mar 2022', purchases: 3, sales: '$7.0K' },
                    { key: 35, customerID: 18976, country: 'Macedonia', latestPurchase: '27 Mar 2022', purchases: 4, sales: '$9.8K' },
                    { key: 36, customerID: 16578, country: 'Bulgaria', latestPurchase: '30 Mar 2022', purchases: 3, sales: '$7.4K' },
                    { key: 37, customerID: 19876, country: 'Romania', latestPurchase: '02 Mar 2022', purchases: 4, sales: '$11.5K' },
                    { key: 38, customerID: 16457, country: 'Moldova', latestPurchase: '31 Mar 2022', purchases: 2, sales: '$6.1K' },
                    { key: 39, customerID: 17543, country: 'Ukraine', latestPurchase: '26 Mar 2022', purchases: 5, sales: '$14.0K' },
                    { key: 40, customerID: 14321, country: 'Belarus', latestPurchase: '17 Mar 2022', purchases: 3, sales: '$8.2K' },
                    { key: 41, customerID: 16754, country: 'Russia', latestPurchase: '29 Mar 2022', purchases: 6, sales: '$17.1K' },
                    { key: 42, customerID: 18234, country: 'Estonia', latestPurchase: '25 Mar 2022', purchases: 2, sales: '$5.4K' },
                    { key: 43, customerID: 14876, country: 'Latvia', latestPurchase: '23 Mar 2022', purchases: 3, sales: '$8.7K' },
                    { key: 44, customerID: 19456, country: 'Lithuania', latestPurchase: '20 Mar 2022', purchases: 4, sales: '$10.4K' },
                    { key: 45, customerID: 18765, country: 'Georgia', latestPurchase: '18 Mar 2022', purchases: 5, sales: '$12.3K' },
                    { key: 46, customerID: 17654, country: 'Armenia', latestPurchase: '22 Mar 2022', purchases: 2, sales: '$6.2K' },
                    { key: 47, customerID: 19987, country: 'Azerbaijan', latestPurchase: '26 Mar 2022', purchases: 3, sales: '$9.0K' },
                    { key: 48, customerID: 17688, country: 'Kazakhstan', latestPurchase: '30 Mar 2022', purchases: 4, sales: '$11.6K' },
                    { key: 49, customerID: 18765, country: 'Uzbekistan', latestPurchase: '28 Mar 2022', purchases: 5, sales: '$13.9K' },
                    { key: 50, customerID: 14532, country: 'Turkmenistan', latestPurchase: '24 Mar 2022', purchases: 3, sales: '$8.3K' },
                    { key: 51, customerID: 18976, country: 'Kyrgyzstan', latestPurchase: '20 Mar 2022', purchases: 4, sales: '$10.8K' },
                    
                  
  ];

  return (
    <Card
      title="Customer Details"
      style={{
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'auto', // Ensures scrollbar appears if needed
      }}
    >
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}> {/* Adjust maxHeight as needed */}
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
//           scroll={{ y: 400 }} // Optional: If you want to control the scroll behavior
          style={{ overflowX: 'auto' }} // Ensures horizontal scrollbar if needed
        />
      </div>
    </Card>
  );
};

export default CustomerDetails;
