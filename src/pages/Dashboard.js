import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import StatsHeader from '../components/StatsHeader';
import DailySalesTrend from '../components/DailySalesTrend';
import SalesByLocation from '../components/SalesByLocation';
import TopSoldProducts from '../components/TopSoldProducts';
import CustomerDetails from '../components/CustomerDetails';

const DashboardContainer = styled.div`
  padding: 24px;
  background-color: #f0f2f5;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <StatsHeader />
      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} md={12}>
          <DailySalesTrend />
        </Col>
        <Col xs={24} md={12}>
          <SalesByLocation />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} md={12}>
          <TopSoldProducts />
        </Col>
        <Col xs={24} md={12}>
          <CustomerDetails />
        </Col>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;
