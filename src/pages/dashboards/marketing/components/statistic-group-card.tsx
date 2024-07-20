import { Card, Col, Row, Space, Statistic, Typography } from 'antd';
import { useTheme } from 'antd-style';
import type React from 'react';

const StatisticGroupCard: React.FC = () => {
  const theme = useTheme();
  return (
    <Card
      bordered={false}
      styles={{
        body: {
          paddingBlockStart: theme.padding,
        },
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space>
            <Typography.Title level={5} style={{ margin: 0 }}>
              Marketing Results
            </Typography.Title>
            <Typography.Text type="secondary">Last 30 days</Typography.Text>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={12} xl={6}>
          <Card
            size="small"
            style={{
              background: theme.colorFillQuaternary,
            }}
          >
            <Statistic title="Online store sessions" value={123456} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} xl={6}>
          <Card
            size="small"
            style={{
              background: theme.colorFillQuaternary,
            }}
          >
            <Statistic title="Orders attributed to marketing" value={123456} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} xl={6}>
          <Card
            size="small"
            style={{
              background: theme.colorFillQuaternary,
            }}
          >
            <Statistic
              title="Sales attributed to marketing"
              prefix="$"
              value={123456}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} xl={6}>
          <Card
            size="small"
            style={{
              background: theme.colorFillQuaternary,
            }}
          >
            <Statistic
              title="Online store conversion rate"
              value={20.99}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default StatisticGroupCard;
