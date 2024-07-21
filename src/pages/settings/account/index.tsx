import PageContainer from '@/components/page-container';
import { Alert, Button, Card, Col, Row, Space, Typography } from 'antd';
import type React from 'react';

const { Title, Text, Paragraph } = Typography;

const AccountPage: React.FC = () => {
  return (
    <PageContainer size="middle" title="Account management">
      <Space size="large" direction="vertical" style={{ display: 'flex' }}>
        <Alert
          type="info"
          message="You agree to share cookies"
          description="We collects cookie data. The data you share will help us improve our products and services, and offer you with personalized promotions and discounts. If you don't wish to share your data, change your settings at 'User Agreement and Private Policy.'"
          showIcon
        />
        <Row gutter={[32, 32]}>
          <Col xs={24} lg={8}>
            <Space direction="vertical">
              <Title level={4}>Login account</Title>
              <Paragraph type="secondary">
                The only login identity of your account. You can also use
                another unregistered email/mobile phone number as your new login
                account
              </Paragraph>
            </Space>
          </Col>
          <Col xs={24} lg={16}>
            <Card bordered={false}>
              <Row align="middle">
                <Col flex="auto">
                  <Paragraph strong>Current login account</Paragraph>
                  <Text type="secondary">displayname@example.com</Text>
                </Col>
                <Col flex="none">
                  <Space>
                    <Button>Change login account</Button>
                    <Button>Reset password</Button>
                  </Space>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Space>
    </PageContainer>
  );
};

export default AccountPage;
