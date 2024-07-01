import { Area, AreaConfig } from '@ant-design/plots';
import { Card, Select } from 'antd';
import type React from 'react';

const TrendAnalysisCard: React.FC = () => {
  const config: AreaConfig = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/stocks.json',
      transform: [
        {
          type: 'filter',
          callback: (d: Record<string, string>) => d.symbol === 'GOOG',
        },
      ],
    },
    padding: 0,
    paddingLeft: 12,
    paddingBottom: 4,
    xField: (d: Record<string, string>) => new Date(d.date),
    yField: 'price',
    shapeField: 'smooth',
    style: {
      fill: 'l(0) 0:#FF7300 0.2:#E33434 0.4:#D33087 0.6:#3E14DC 0.8:#1571FC 1:#0FD7F5',
      fillOpacity: 0.1,
    },
    axis: {
      y: { labelFormatter: '~s' },
    },
    line: {
      shapeField: 'smooth',
      style: {
        stroke:
          'l(0) 0:#FF7300 0.2:#E33434 0.4:#D33087 0.6:#3E14DC 0.8:#1571FC 1:#0FD7F5',
        strokeWidth: 10,
      },
      tooltip: false,
    },
    height: 300,
  };
  return (
    <Card
      bordered={false}
      title="Trend Analysis"
      style={{ height: '100%' }}
      extra={
        <Select
          defaultValue={0}
          style={{ width: 120 }}
          options={[
            {
              label: 'Today',
              value: 0,
            },
            {
              label: 'Last 7 days',
              value: 7,
            },
            {
              label: 'Last Month',
              value: 30,
            },
          ]}
        />
      }
    >
      <Area {...config} />
    </Card>
  );
};

export default TrendAnalysisCard;
