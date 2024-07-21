import PageContainer from '@/components/page-container';
import { Alert, Card, Col, Row, Space, Typography } from 'antd';
import type React from 'react';

const AccountPage: React.FC = () => {
  return (
    <PageContainer size="middle" title="Account management">
      <Space size="large" direction="vertical" style={{ display: 'flex' }}>
        <Alert
          type="info"
          message="You agree to share cookies"
          description="SHOPLINE collects cookie data. The data you share will help us improve our products and services, and offer you with personalized promotions and discounts. If you don't wish to share your data, change your settings at 'User Agreement and Private Policy.'"
          showIcon
        />
        <Row gutter={[32, 32]}>
          <Col xs={24} md={6} lg={8}>
            <Typography.Title style={{ marginTop: 0 }} level={4}>
              Login account
            </Typography.Title>
            <Typography.Paragraph type="secondary">
              The only login identity of your account. You can also use another
              email/mobile phone number unregistered on Shopify as your new
              login account
            </Typography.Paragraph>
          </Col>
          <Col xs={24} md={18} lg={16}>
            <Card bordered={false}></Card>
          </Col>
        </Row>
      </Space>
    </PageContainer>
  );
};

export default AccountPage;
