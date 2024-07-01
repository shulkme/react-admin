import Icon from '@/components/icon';
import { Button, Collapse, Space, Typography } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const LabelDom: React.FC = () => {
  return (
    <Typography.Paragraph strong style={{ margin: 0 }}>
      Total 1,234 | Ratio 10%
    </Typography.Paragraph>
  );
};

const ExtraDom = () => {
  return (
    <Space>
      <Button type="text" icon={<Icon name="circle-help" />} size="small" />
    </Space>
  );
};

const FilterForm: React.FC = () => {
  return (
    <ThemeProvider
      theme={{
        components: {
          Collapse: {
            headerPadding: 0,
          },
        },
      }}
    >
      <Collapse
        ghost
        expandIconPosition="end"
        collapsible="icon"
        expandIcon={({ isActive }) => (
          <Button
            size="small"
            type="text"
            icon={
              <Icon name={isActive ? 'chevron-up' : 'chevron-down'} size={16} />
            }
          />
        )}
        defaultActiveKey="filter"
        items={[
          {
            key: 'filter',
            label: <LabelDom />,
            children: <></>,
            extra: <ExtraDom />,
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default FilterForm;
