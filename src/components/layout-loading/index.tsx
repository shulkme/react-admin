import PageContainer from '@/components/page-container';
import { Card, Col, Layout, Row, Skeleton, Space } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';
const LayoutLoading: React.FC = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Layout.Header
        style={{
          padding: '0 16px',
          lineHeight: 1,
        }}
      >
        <ThemeProvider themeMode="dark">
          <Row
            justify="space-between"
            align="middle"
            wrap={false}
            gutter={16}
            style={{
              fontSize: 0,
              lineHeight: 1,
              verticalAlign: 'middle',
              height: '100%',
            }}
          >
            <Col>
              <Space size="middle">
                <Skeleton.Avatar active shape="square" />
                <Skeleton.Input active />
              </Space>
            </Col>
            <Col
              style={{
                maxWidth: 520,
                width: '100%',
              }}
            >
              <Skeleton.Input block active />
            </Col>
            <Col>
              <Space align="center" size="middle">
                <Skeleton.Avatar active shape="square" />
                <Skeleton.Avatar active shape="square" />
                <Skeleton.Avatar active shape="square" />
                <Skeleton.Avatar active shape="square" />
              </Space>
            </Col>
          </Row>
        </ThemeProvider>
      </Layout.Header>
      <Layout>
        <Layout.Sider breakpoint="lg" width={240} collapsedWidth={64}>
          <Space
            direction="vertical"
            style={{ padding: '16px 24px' }}
            size="middle"
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <Row gutter={16} key={index}>
                <Col flex="none">
                  <Skeleton.Avatar active size={20} shape="square" />
                </Col>
                <Col flex="auto">
                  <Skeleton.Button active block style={{ height: 20 }} />
                </Col>
              </Row>
            ))}
          </Space>
        </Layout.Sider>
        <Layout.Content
          style={{
            padding: 32,
          }}
        >
          <PageContainer
            title={<Skeleton.Button active />}
            extras={[
              <Skeleton.Button key="1" active />,
              <Skeleton.Button key="2" active />,
            ]}
          >
            <Card
              title={<Skeleton.Button active style={{ height: 24 }} />}
              styles={{
                body: {
                  height: '640px',
                },
              }}
            ></Card>
          </PageContainer>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default LayoutLoading;
