import Icon from '@/components/icon';
import {
  Button,
  Col,
  Collapse,
  Divider,
  Form,
  Row,
  Space,
  Typography,
} from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const LabelDom: React.FC = () => {
  return (
    <Space split={<Divider type="vertical" />}>
      <Typography.Paragraph strong style={{ margin: 0 }}>
        1,234 users
      </Typography.Paragraph>
      <Typography.Paragraph strong style={{ margin: 0 }}>
        10% of your user base
      </Typography.Paragraph>
    </Space>
  );
};

const FilterContainer = () => {
  return (
    <Form size="small">
      <div style={{
        background: '#fafafa',
        height: 100
      }}>

      </div>
      <Row justify="end">
        <Col>
          <Space>
            <Button type="link">Save Segment</Button>
            <Button>Discard</Button>
            <Button type="primary">Apply</Button>
          </Space>
        </Col>
      </Row>
    </Form>
  );
};

const FilterForm: React.FC = () => {
  return (
    <ThemeProvider
      theme={{
        components: {
          Collapse: {
            headerPadding: 0,
            contentPadding: 0,
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
        items={[
          {
            label: <LabelDom />,
            children: <FilterContainer />,
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default FilterForm;
