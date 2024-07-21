import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import {
  Alert,
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  List,
  Row,
  Select,
  Space,
  Switch,
  Table,
  Typography,
} from 'antd';
import type React from 'react';

const { Title, Text, Link, Paragraph } = Typography;

const AccountPage: React.FC = () => {
  return (
    <PageContainer size="middle" title="Account management">
      <Form layout="vertical">
        <Space size="large" direction="vertical" style={{ display: 'flex' }}>
          <Alert
            type="info"
            message="You agree to share cookies"
            description="We collects cookie data. The data you share will help us improve our products and services, and offer you with personalized promotions and discounts. If you don't wish to share your data, change your settings at 'User Agreement and Private Policy.'"
            showIcon
          />
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Login account</Title>
                <Paragraph type="secondary">
                  The only login identity of your account. You can also use
                  another unregistered email/mobile phone number as your new
                  login account
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Row align="middle">
                  <Col flex="auto">
                    <Paragraph strong>Current login account</Paragraph>
                    <Paragraph type="secondary">
                      displayname@example.com
                    </Paragraph>
                  </Col>
                  <Col flex="none">
                    <Space>
                      <Button>Change login account</Button>
                      <Button>Reset password</Button>
                    </Space>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Quick login</Title>
                <Paragraph type="secondary">
                  You can connect to the external login service for secure
                  access of your account
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Space direction="vertical" size="middle">
                  <Typography>
                    <Paragraph strong>Connected login services</Paragraph>
                    <Paragraph type="secondary">
                      You can use connected login services for quick login
                    </Paragraph>
                  </Typography>
                  <List split={false}>
                    <List.Item
                      actions={[
                        <Link key="disconnect" type="danger" strong>
                          Disconnect
                        </Link>,
                      ]}
                    >
                      <List.Item.Meta
                        style={{ alignItems: 'center' }}
                        avatar={
                          <Avatar
                            className="avatar-contain"
                            size={24}
                            src="https://cdn.svgporn.com/logos/google-icon.svg"
                          />
                        }
                        title={
                          <span>
                            You have connected to 1992633964@qq.com login
                            service
                          </span>
                        }
                      />
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta
                        style={{ alignItems: 'center' }}
                        avatar={
                          <Avatar
                            className="avatar-contain"
                            size={24}
                            src="https://cdn.svgporn.com/logos/facebook.svg"
                          />
                        }
                        title={
                          <span>
                            <Link>Connect to Google</Link>
                          </span>
                        }
                      />
                    </List.Item>
                    <List.Item>
                      <List.Item.Meta
                        style={{ alignItems: 'center' }}
                        avatar={
                          <Avatar
                            className="avatar-contain"
                            size={24}
                            src="https://cdn.svgporn.com/logos/apple.svg"
                          />
                        }
                        title={
                          <span>
                            <Link>Connect to Google</Link>
                          </span>
                        }
                      />
                    </List.Item>
                  </List>
                </Space>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Contact information</Title>
                <Paragraph type="secondary">
                  We will send you email bill or other messages related to your
                  account through your contact information
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Form.Item label={<Text strong>Contact email</Text>}>
                  <Row gutter={16}>
                    <Col xs={24} md={12} lg={24} xl={12}>
                      <Input placeholder="Please enter contact email" />
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item
                  label={<Text strong>Contact mobile phone number</Text>}
                >
                  <Row gutter={16}>
                    <Col xs={24} md={12} lg={24} xl={12}>
                      <Form.Item noStyle>
                        <Input
                          placeholder="Please enter phone number"
                          addonBefore={
                            <Form.Item name="prefix" noStyle>
                              <Select defaultValue="86" style={{ width: 70 }}>
                                <Select.Option value="86">+86</Select.Option>
                                <Select.Option value="87">+87</Select.Option>
                              </Select>
                            </Form.Item>
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} lg={24} xl={12}>
                      <Form.Item noStyle>
                        <Input
                          placeholder="Enter confirmation code"
                          suffix={<Link strong>Send verification code</Link>}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Account language</Title>
                <Paragraph type="secondary">
                  The language you see when you log on and receive emails. This
                  doesn't affect your customers.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Form.Item label={<Text strong>Account language</Text>}>
                  <Row gutter={16}>
                    <Col xs={24} md={12} lg={24} xl={12}>
                      <Select
                        placeholder="Select your language"
                        defaultValue="en"
                      >
                        <Select.Option value="en">English</Select.Option>
                        <Select.Option value="zh-CN">简体中文</Select.Option>
                      </Select>
                    </Col>
                  </Row>
                </Form.Item>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Login device</Title>
                <Paragraph type="secondary">
                  Records history devices logged in to your Admin. If any of
                  these entries are unusual or suspicious, log out and contact
                  us immediately.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Space direction="vertical" size="middle">
                  <Typography>
                    <Paragraph strong>Logged in devices</Paragraph>
                    <Paragraph type="secondary">
                      Records only recent 10 devices logged in to your SHOPLINE
                      Admin
                    </Paragraph>
                  </Typography>
                  <Table
                    size="small"
                    bordered
                    columns={[
                      {
                        title: 'Device/IP',
                      },
                      {
                        title: 'Time',
                      },
                      {
                        title: 'Location',
                      },
                      {
                        title: 'Status',
                      },
                      {
                        title: 'Operate',
                      },
                    ]}
                  />
                </Space>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>User agreement and privacy policy</Title>
                <Paragraph type="secondary">
                  Record our agreements and policies
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Typography>
                  <Paragraph strong>
                    Current account has completed registration at 2024-07-20
                    11:43:00 and ticked{' '}
                    <Link>
                      User agreement <Icon name="square-arrow-out-up-right" />
                    </Link>{' '}
                    and{' '}
                    <Link>
                      Privacy policy <Icon name="square-arrow-out-up-right" />
                    </Link>
                  </Paragraph>
                </Typography>
                <Divider type="horizontal" />
                <Paragraph strong>Share data</Paragraph>
                <Paragraph
                  type="secondary"
                  style={{
                    marginBlock: '0.5em 1em',
                  }}
                >
                  Your account's operational data will be shared with our
                  analytics tools, which will help us improve our products and
                  provide you with the relevant promotions or recommendations.
                </Paragraph>
                <Space>
                  <Switch checked />
                  <Text strong>Opened</Text>
                  <Text type="secondary">
                    (Automatically opened upon successful registration at
                    2024-07-20 11:43:00)
                  </Text>
                </Space>
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

export default AccountPage;
