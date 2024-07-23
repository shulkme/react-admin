import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Typography,
  Upload,
} from 'antd';
import type React from 'react';
const { Title, Text, Link, Paragraph } = Typography;

const StorePage: React.FC = () => {
  return (
    <PageContainer title="Store settings" size="middle">
      <Form layout="vertical">
        <Space direction="vertical" size="large">
          <Row gutter={[32, 16]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Basic information</Title>
                <Paragraph type="secondary">
                  This information allows the store and your customers to
                  contact you.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Space direction="vertical" size="middle">
                  <Typography>
                    <Paragraph strong>Store logo</Paragraph>
                    <Paragraph type="secondary">
                      This logo is displayed on the store management page after
                      you login. <Link>Preview display here</Link>. Max image
                      size is 10MB.
                    </Paragraph>
                  </Typography>
                  <Form.Item name="avatar">
                    <Upload listType="picture-card">
                      <button
                        style={{ border: 0, background: 'none' }}
                        type="button"
                      >
                        <Icon name="plus" size={20} />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </button>
                    </Upload>
                  </Form.Item>
                </Space>
                <Form.Item
                  name="store_name"
                  label={<Text strong>Store name</Text>}
                >
                  <Input placeholder="Please enter store name" />
                </Form.Item>
                <Form.Item
                  name="contact_email"
                  label={<Text strong>Store admin contact email</Text>}
                  extra="we can contact you through this email address"
                >
                  <Input placeholder="Please enter email address" />
                </Form.Item>
                <Space direction="vertical" size="middle">
                  <Typography>
                    <Paragraph strong>Customer service email</Paragraph>
                    <Paragraph type="secondary">
                      This email is visible to customers when they receive an
                      order notification or other emails from your store. It
                      will be displayed as ‘via example.com’ for any emails
                      created by us. We recommend using an email address from
                      your own domain, to reduce the chances of spam filters
                      blocking your emails and build brand trust.
                    </Paragraph>
                  </Typography>
                  <Form.Item name="customer_service_email">
                    <Input placeholder="Please enter email address" />
                  </Form.Item>
                </Space>
                <Button>Configure email</Button>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 16]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Business details</Title>
                <Paragraph type="secondary">
                  Manage product types and business locations' time zones
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Row gutter={16}>
                  <Col xs={24} sm={12} md={8} lg={12} xl={8}>
                    <Form.Item
                      name="country_region"
                      label={<Text strong>Country/Region</Text>}
                    >
                      <Select placeholder="Please select" />
                    </Form.Item>
                  </Col>
                  <Col span={24}></Col>
                  <Col xs={24} sm={12} md={8} lg={12} xl={8}>
                    <Form.Item
                      name="product_type"
                      label={<Text strong>Product type</Text>}
                    >
                      <Select placeholder="Please select" />
                    </Form.Item>
                  </Col>
                  <Col span={24}></Col>
                  <Col xs={24} sm={12} md={8} lg={12} xl={8}>
                    <Form.Item
                      name="timezone"
                      label={<Text strong>Time zone</Text>}
                    >
                      <Select placeholder="Please select" />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 16]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Payment currency</Title>
                <Paragraph type="secondary">
                  Choose the currency your store will accept payments in. Note
                  that this cannot be modified once the first order has been
                  made.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Space direction="vertical" size="middle">
                  <Paragraph strong>Payment currency</Paragraph>
                  <Paragraph>US Dollar (USD)</Paragraph>
                  <Button>Change currency</Button>
                  <Paragraph type="secondary">
                    Note: Once an order is made or the first gift card is
                    successfully issued, the payment currency cannot be changed.
                  </Paragraph>
                  <Space>
                    <Text strong>Custom currency format</Text>
                    <Switch />
                  </Space>
                  <Paragraph>
                    If you disable custom formats, the store will use the
                    default currency format. Learn more about{' '}
                    <Link>Custom currency format</Link>
                  </Paragraph>
                  <Button>Edit format</Button>
                </Space>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 16]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Order settings</Title>
                <Paragraph type="secondary">Set order ID prefix</Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Space direction="vertical" size="middle">
                  <Typography>
                    <Paragraph strong>Set order ID prefix</Paragraph>
                    <Paragraph type="secondary">
                      Order ID starts from 1001 by default. You may add a prefix
                      to create custom IDs. e.g. "EN1001"
                    </Paragraph>
                  </Typography>
                  <Row gutter={16}>
                    <Col xs={24} md={12} lg={24} xl={12}>
                      <Form.Item name="order_id">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </Space>
                <Paragraph type="secondary">
                  Order ID will be displayed as1001, 1002, 1003...
                </Paragraph>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 16]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Store status</Title>
                <Paragraph type="secondary">
                  Your store can either be ‘Open’ or ‘Closed’. You may want to
                  temporarily close the store for updates or stocktake. Products
                  won’t be available for sale when the store is ‘Closed’.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Row gutter={16}>
                  <Col xs={24} sm={12} md={8} lg={12} xl={8}>
                    <Form.Item
                      name="country_region"
                      label={<Text strong>Store status</Text>}
                    >
                      <Select placeholder="Please select" />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Space>
        <Divider />
        <Row justify="end">
          <Col>
            <Button type="primary">Update</Button>
          </Col>
        </Row>
      </Form>
    </PageContainer>
  );
};

export default StorePage;
