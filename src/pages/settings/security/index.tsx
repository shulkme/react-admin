import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Row,
  Space,
  Table,
  Tag,
  Typography,
} from 'antd';
import type React from 'react';

const { Title, Text, Link, Paragraph } = Typography;

const SecurityPage: React.FC = () => {
  return (
    <PageContainer size="middle" title="Security">
      <Form layout="vertical">
        <Space size="large" direction="vertical" style={{ display: 'flex' }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Passkeys</Title>
                <Paragraph type="secondary">
                  Log in with your fingerprint, face recognition or a PIN
                  instead of a password. Passkeys can be synced across devices
                  logged into the same platform (like Apple ID or a Google
                  account).
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Space direction="vertical" size="middle">
                  <Paragraph strong>
                    Creating a passkey takes under a minute.
                  </Paragraph>
                  <Button>Create a passkey</Button>
                </Space>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Password</Title>
                <Paragraph type="secondary">
                  Regularly changing account passwords is beneficial for
                  protecting the security of your assets
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Space direction="vertical" size="middle">
                  <Paragraph strong>
                    You have not set a password on your account.
                  </Paragraph>
                  <Button>Create password</Button>
                </Space>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Secondary email</Title>
                <Paragraph type="secondary">
                  A secondary email can be used to restore access to your
                  account. Security notifications are also sent to this email.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Space direction="vertical" size="middle">
                  <Typography>
                    <Paragraph strong>Secondary email</Paragraph>
                    <Paragraph type="secondary">
                      You do not have a secondary email.
                    </Paragraph>
                  </Typography>
                  <Button>Add secondary email</Button>
                </Space>
              </Card>
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Space direction="vertical">
                <Title level={4}>Two-step authentication</Title>
                <Paragraph type="secondary">
                  Two-step authentication adds a layer of security to your
                  account by using more than just your password to log in. Learn
                  more about <Link>two-step authentication</Link>
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} lg={16}>
              <Card bordered={false}>
                <Typography>
                  <Space align="center">
                    <Text strong>Authentication methods</Text>
                    <Tag
                      color="warning"
                      icon={<Icon name="circle-alert" size={12} />}
                    >
                      Off
                    </Tag>
                  </Space>
                  <Paragraph type="secondary">
                    After entering your password, verify your identity with an
                    authentication method.
                  </Paragraph>
                </Typography>
                <Divider />
                <Typography>
                  <Paragraph strong>HOW IT WORKS</Paragraph>
                  <Paragraph style={{ marginBottom: '0.5em' }}>
                    When you log in to Shopify, you’ll need to:
                  </Paragraph>
                  <ol>
                    <li>Enter your email and password</li>
                    <li>
                      Complete a second step to prove that it’s you logging in.
                      You can enter a verification code, use a security key, or
                      confirm your login on a trusted device.
                    </li>
                  </ol>
                </Typography>
                <Button type="primary" ghost>
                  Turn on two-step
                </Button>
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

export default SecurityPage;
