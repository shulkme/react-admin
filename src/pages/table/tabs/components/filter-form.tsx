import Icon from '@/components/icon';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import { ThemeProvider, useTheme } from 'antd-style';
import type React from 'react';

const FilterForm: React.FC = () => {
  const theme = useTheme();
  return (
    <ThemeProvider
      theme={{
        components: {
          Select: {
            colorTextPlaceholder: theme.colorText,
          },
        },
      }}
    >
      <Form
        size="small"
        style={{
          paddingInline: theme.paddingLG,
          paddingBlock: theme.padding,
          borderBottom: `1px solid ${theme.colorBorderSecondary}`,
        }}
      >
        <Space direction="vertical" style={{ display: 'flex' }}>
          <Row gutter={16}>
            <Col flex="auto">
              <Form.Item noStyle>
                <Input
                  size="middle"
                  prefix={<Icon name="search" />}
                  placeholder="Search in xxx"
                />
              </Form.Item>
            </Col>
            <Col flex="none">
              <Space>
                <Button size="middle">Cancel</Button>
                <Button size="middle" type="primary">
                  Save
                </Button>
              </Space>
            </Col>
          </Row>
          <Space>
            <Form.Item noStyle>
              <Select placeholder="Status" />
            </Form.Item>
            <Form.Item noStyle>
              <Select placeholder="Tags" />
            </Form.Item>
            <Form.Item noStyle>
              <Select placeholder="Gender" />
            </Form.Item>
            <Form.Item noStyle>
              <Select placeholder="Country" />
            </Form.Item>
            <Form.Item noStyle>
              <Button icon={<Icon name="plus" />}>More Filters</Button>
            </Form.Item>
          </Space>
        </Space>
      </Form>
    </ThemeProvider>
  );
};

export default FilterForm;
