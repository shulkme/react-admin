import { Button, Card, Col, Image, Row, Typography } from 'antd';
import type React from 'react';

const AutomationCard: React.FC = () => {
  return (
    <Card bordered={false}>
      <Row gutter={16} justify="space-between">
        <Col xs={24} sm={16} md={18} xl={16}>
          <Typography>
            <Typography.Title level={5} style={{ marginTop: 0 }}>
              Automate push activities
            </Typography.Title>
            <Typography.Paragraph type="secondary">
              Use automated prebuilt flow templates, including cart abandonment,
              welcome series, transaction emails, and more.
            </Typography.Paragraph>
          </Typography>
          <Button>Create an automation</Button>
        </Col>
        <Col xs={24} sm={8} md={6} xl={8}>
          <Image
            width="100%"
            src="https://cdn.myshopline.com/sl/admin/ec2-admin-sales/20240717145000148/imgs/automation-empty.8965e.jpg"
            preview={false}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default AutomationCard;
