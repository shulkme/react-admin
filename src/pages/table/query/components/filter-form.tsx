import Icon from '@/components/icon';
import { useBoolean } from 'ahooks';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import type React from 'react';

const FilterForm: React.FC = () => {
  const [collapsed, { toggle: toggleCollapsed }] = useBoolean(true);
  return (
    <Form
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 19,
      }}
    >
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item label="Name">
            <Input placeholder="Please enter" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item label="Username">
            <Input placeholder="Please enter" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
          <Form.Item label="Email">
            <Input placeholder="Please enter" />
          </Form.Item>
        </Col>
        {!collapsed && (
          <>
            <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
              <Form.Item label="Phone">
                <Input placeholder="Please enter" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
              <Form.Item label="Address">
                <Input placeholder="Please enter" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={6}>
              <Form.Item label="Country">
                <Select placeholder="Please select" />
              </Form.Item>
            </Col>
          </>
        )}
        <Col flex="auto">
          <Form.Item
            wrapperCol={{
              style: {
                textAlign: 'right',
              },
            }}
          >
            <Space>
              <Button
                type="link"
                iconPosition="end"
                icon={<Icon name={collapsed ? 'chevron-down' : 'chevron-up'} />}
                onClick={toggleCollapsed}
              >
                {collapsed ? 'Expand' : 'Collapse'}
              </Button>
              <Button>Reset</Button>
              <Button type="primary">Query</Button>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
