import Icon from '@/components/icon';
import {
  Button,
  Col,
  Collapse,
  Divider,
  Dropdown,
  Form,
  Input,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import { ThemeProvider, useTheme } from 'antd-style';
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
  const theme = useTheme();
  return (
    <ThemeProvider>
      <Form size="small" layout="horizontal" variant="borderless">
        <div
          style={{
            background: theme.colorFillQuaternary,
            marginBlock: 16,
            marginInline: -24,
            padding: 24,
            borderBlock: `1px solid ${theme.colorBorderSecondary}`,
          }}
        >
          <Form.List name="rows">
            {(fields, operation) => (
              <Row gutter={[8, 12]}>
                {fields.map(({ key, name, ...resetField }) => (
                  <Col key={key} xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
                    <Row wrap={false}>
                      <Col flex="auto">
                        <Row
                          style={{
                            border: `1px solid ${theme.colorBorder}`,
                            borderRadius: theme.borderRadiusSM + 'px',
                          }}
                        >
                          <Col span={8}>
                            <Form.Item {...resetField} name={[name, 'field']}>
                              <Select
                                placeholder="Field"
                                defaultValue="name"
                                options={[
                                  {
                                    label: 'Name',
                                    value: 'name',
                                  },
                                  {
                                    label: 'Username',
                                    value: 'username',
                                  },
                                  {
                                    label: 'Tags',
                                    value: 'tags',
                                  },
                                  {
                                    label: 'Email',
                                    value: 'email',
                                  },
                                  {
                                    label: 'Phone',
                                    value: 'phone',
                                  },
                                ]}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item
                              {...resetField}
                              name={[name, 'condition']}
                            >
                              <Select
                                placeholder="Condition"
                                defaultValue="equal"
                                options={[
                                  {
                                    label: 'Equal',
                                    value: 'equal',
                                  },
                                  {
                                    label: 'Not Equal',
                                    value: 'not_equal',
                                  },
                                ]}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={8}>
                            <Form.Item {...resetField} name={[name, 'value']}>
                              <Input placeholder="Value" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                      <Col flex="70px">
                        {key < fields.length - 1 && (
                          <Form.Item {...resetField} name={[name, 'relation']}>
                            <Select
                              placeholder="Relation"
                              defaultValue="and"
                              labelRender={({ label }) => (
                                <span
                                  style={{
                                    color: theme.colorWarning,
                                  }}
                                >
                                  {label}
                                </span>
                              )}
                              options={[
                                {
                                  label: 'AND',
                                  value: 'and',
                                },
                                {
                                  label: 'OR',
                                  value: 'or',
                                },
                              ]}
                            />
                          </Form.Item>
                        )}
                      </Col>
                    </Row>
                  </Col>
                ))}
                <Col flex="auto">
                  <Dropdown
                    trigger={['click']}
                    menu={{
                      items: [
                        {
                          label: 'Name',
                          key: 'name',
                        },
                        {
                          label: 'Username',
                          key: 'username',
                        },
                        {
                          label: 'Tags',
                          key: 'tags',
                        },
                        {
                          label: 'Email',
                          key: 'email',
                        },
                        {
                          label: 'Phone',
                          key: 'phone',
                        },
                      ],
                      onClick: () => operation.add(),
                    }}
                  >
                    <Button icon={<Icon name="plus" />} type="dashed">
                      Add Filter
                    </Button>
                  </Dropdown>
                </Col>
              </Row>
            )}
          </Form.List>
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
    </ThemeProvider>
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
          Form: {
            itemMarginBottom: 0,
          },
        },
      }}
    >
      <Collapse
        bordered={false}
        expandIconPosition="end"
        collapsible="icon"
        style={{
          background: 'transparent',
        }}
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
