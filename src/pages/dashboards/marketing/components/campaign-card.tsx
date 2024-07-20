import { Button, Card, Col, Image, Row, Typography } from 'antd';
import type React from 'react';

const CampaignCard: React.FC = () => {
  return (
    <Card bordered={false}>
      <Row gutter={16} justify="space-between">
        <Col xs={24} sm={16} md={18} xl={16}>
          <Typography>
            <Typography.Title level={5} style={{ marginTop: 0 }}>
              Create multichannel marketing campaigns
            </Typography.Title>
            <Typography.Paragraph type="secondary">
              Promote discounts and sales, reach out to new customers, and
              feature new products to increase sales across channels
            </Typography.Paragraph>
          </Typography>
          <Button>Create campaign</Button>
        </Col>
        <Col xs={24} sm={8} md={6} xl={8}>
          <Image
            width="100%"
            src="https://cdn.myshopline.com/sl/admin/ec2-admin-sales/20240717145000148/imgs/activity-empty.f5bb2.jpg"
            preview={false}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default CampaignCard;
