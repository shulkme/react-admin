/**
 * 统计卡片组
 * 图表参考文档
 * @link https://ant-design-charts.antgroup.com/zh/examples/statistics/tiny/#basic-area
 */

import Icon from '@/components/icon';
import { Tiny, TinyAreaConfig } from '@ant-design/plots';
import { Card, Col, Row, Space, Typography } from 'antd';
import { isArray } from 'lodash';
import type React from 'react';

const { Paragraph, Title, Text } = Typography;

const AreaChart: React.FC<{ color?: string | [string, string] }> = ({
  color,
}) => {
  const data = [11, 10, 13, 12, 18, 17, 26, 13, 11].map((value, index) => ({
    value,
    index,
  }));

  const fill = isArray(color) ? `l(90) 0:${color[0]} 1:${color[1]}` : color;

  const config: TinyAreaConfig = {
    data,
    autoFit: true,
    padding: 1,
    shapeField: 'smooth',
    xField: 'index',
    yField: 'value',
    style: {
      fill: fill,
      fillOpacity: 0.5,
    },
    line: {
      shapeField: 'smooth',
      style: {
        stroke: color,
        strokeWidth: 5,
      },
    },
  };

  return <Tiny.Area {...config} />;
};

type StatisticCardProps = React.PropsWithChildren<{
  label: string;
  value: number | string;
  trend?: 'up' | 'down';
  trendValue?: string;
}>;

const StatisticCard: React.FC<StatisticCardProps> = ({
  children,
  ...props
}) => {
  return (
    <Card bordered={false} style={{ height: '100%' }}>
      <Space direction="vertical" style={{ display: 'flex' }}>
        <Row align="middle">
          <Col flex="auto">
            <Paragraph type="secondary" style={{ margin: 0 }}>
              {props.label}
            </Paragraph>
            <Title level={2} style={{ margin: 0 }}>
              {props.value.toLocaleString()}
            </Title>
          </Col>
          <Col flex="none">
            {props.trend && (
              <Space direction="vertical" align="center" size={2}>
                <Text
                  type={
                    props.trend === 'up'
                      ? 'danger'
                      : props.trend === 'down'
                        ? 'success'
                        : undefined
                  }
                >
                  <Icon name={`trending-${props.trend}`} size={20} />
                </Text>
                <Text style={{ fontSize: 12 }}>{props.trendValue}</Text>
              </Space>
            )}
          </Col>
        </Row>
        <div
          style={{
            height: 56,
          }}
        >
          {children}
        </div>
      </Space>
    </Card>
  );
};

const StatisticGroupCards: React.FC = () => {
  return (
    <>
      <Col xs={24} sm={12} md={12} lg={6}>
        <StatisticCard
          label="Total Posts"
          value={1234}
          trend="up"
          trendValue="+20%"
        >
          <AreaChart color={['rgba(40, 222, 80, 1)', 'rgba(40, 222, 80, 0)']} />
        </StatisticCard>
      </Col>
      <Col xs={24} sm={12} md={12} lg={6}>
        <StatisticCard
          label="Total Visitors"
          value={1234}
          trend="down"
          trendValue="-20%"
        >
          <AreaChart color={['rgba(255, 104, 1, 1)', 'rgba(255, 104, 1, 0)']} />
        </StatisticCard>
      </Col>
      <Col xs={24} sm={12} md={12} lg={6}>
        <StatisticCard
          label="Total Comments"
          value={1234}
          trend="up"
          trendValue="+20%"
        >
          <AreaChart
            color={['rgba(250, 38, 116, 1)', 'rgba(250, 38, 116, 0)']}
          />
        </StatisticCard>
      </Col>
      <Col xs={24} sm={12} md={12} lg={6}>
        <StatisticCard
          label="Total Users"
          value={1234}
          trend="down"
          trendValue="-20%"
        >
          <AreaChart color={['rgba(98, 8, 255, 1)', 'rgba(98, 8, 255, 0)']} />
        </StatisticCard>
      </Col>
    </>
  );
};

export default StatisticGroupCards;
