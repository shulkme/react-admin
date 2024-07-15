import Icon from '@/components/icon';
import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Select,
  SelectProps,
  Space,
} from 'antd';
import { useTheme } from 'antd-style';
import type React from 'react';

const statusOptions: SelectProps['options'] = [
  {
    label: 'Normal',
    value: 'normal',
  },
  {
    label: 'Active',
    value: 'active',
  },
];

const genderOptions: SelectProps['options'] = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Unknown',
    value: 'unknown',
  },
];

const tagsOptions: SelectProps['options'] = [
  {
    label: 'VIP',
    value: 'vip',
  },
];

const countryOptions: SelectProps['options'] = [
  {
    label: 'China',
    value: 'cn',
  },
  {
    label: 'United States',
    value: 'us',
  },
  {
    label: 'Japan',
    value: 'jp',
  },
  {
    label: 'Korea',
    value: 'kr',
  },
];

const FilterForm: React.FC = () => {
  const theme = useTheme();
  return (
    <ConfigProvider
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
              <Select
                placeholder="Status"
                style={{ width: 120 }}
                options={statusOptions}
                allowClear
              />
            </Form.Item>
            <Form.Item noStyle>
              <Select
                placeholder="Tags"
                style={{ width: 120 }}
                options={tagsOptions}
                allowClear
              />
            </Form.Item>
            <Form.Item noStyle>
              <Select
                placeholder="Gender"
                style={{ width: 120 }}
                options={genderOptions}
                allowClear
              />
            </Form.Item>
            <Form.Item noStyle>
              <Select
                placeholder="Country"
                style={{ width: 120 }}
                options={countryOptions}
                allowClear
              />
            </Form.Item>
            <Form.Item noStyle>
              <Button icon={<Icon name="plus" />} type="dashed">
                Add filter
              </Button>
            </Form.Item>
          </Space>
        </Space>
      </Form>
    </ConfigProvider>
  );
};

export default FilterForm;
