/**
 * 饼图
 * 图表参考文档
 * @link https://ant-design-charts-next.antgroup.com/zh/examples/statistics/pie/#basic-donut
 */
import { Pie, PieConfig } from '@ant-design/plots';
import { Badge, Card, Col, List, Row } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const PieChart: React.FC = () => {
  const config: PieConfig = {
    //autoFit: true,
    height: 200,
    data: [
      { type: 'Desktop', value: 55 },
      { type: 'Mobile', value: 25 },
      { type: 'Other', value: 30 },
    ],
    angleField: 'value',
    colorField: 'type',
    padding: 0,
    innerRadius: 0.7,
    annotations: [
      {
        type: 'text',
        style: {
          text: 'Devices',
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 14,
          fontStyle: 'bold',
        },
      },
    ],
    label: {
      position: 'outside',
      text: (item: { type: string; value: number }) => {
        return `${item.type}: ${item.value.toLocaleString()}`;
      },
    },
    style: {
      stroke: '#fff',
      inset: 1,
    },
    legend: false,
    scale: {
      color: {
        palette: ['#1677ff', '#91caff', '#e6f4ff'],
      },
    },
  };
  return <Pie {...config} />;
};

const DeviceRatioCard: React.FC = () => {
  return (
    <Card bordered={false} title="Divice Ratio" style={{ height: '100%' }}>
      <Row gutter={[16, 24]}>
        <Col xs={6} lg={8} xxl={24}>
          <ThemeProvider
            theme={{
              components: {
                List: {
                  itemPadding: '8px 0',
                },
              },
            }}
          >
            <List split={false}>
              <List.Item>
                <List.Item.Meta
                  avatar={<Badge color="#1677ff" dot />}
                  title="Desktop (55%)"
                  description="1000 desktop devices"
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  avatar={<Badge color="#91caff" dot />}
                  title="Mobile (25%)"
                  description="1000 mobile devices"
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  avatar={<Badge color="#e6f4ff" dot />}
                  title="Other (30%)"
                  description="1000 other devices"
                />
              </List.Item>
            </List>
          </ThemeProvider>
        </Col>
        <Col xs={18} lg={16} xxl={24}>
          <PieChart />
        </Col>
      </Row>
    </Card>
  );
};

export default DeviceRatioCard;
