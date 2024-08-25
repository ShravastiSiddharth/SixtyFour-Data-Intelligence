
import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { UserOutlined, ShoppingOutlined, DollarOutlined, LineChartOutlined } from '@ant-design/icons';

const StatsHeader = () => {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card>
          <Statistic
            title="Customers"
            value={1012}
            prefix={<UserOutlined />}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Products"
            value={2200}
            prefix={<ShoppingOutlined />}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Sales"
            value="$573.3K"
            prefix={<DollarOutlined />}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Avg Sales"
            value="$21.2K"
            prefix={<LineChartOutlined />}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default StatsHeader;
