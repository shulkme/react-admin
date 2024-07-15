import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import AppCard from '@/pages/utility/apps/components/app-card.tsx';
import AppItem from '@/pages/utility/apps/components/app-item.tsx';
import { useRequest } from 'ahooks';
import { Button, Card, Col, List, Row, Space } from 'antd';
import type React from 'react';

export interface AppType {
  name: string;
  icon: string;
  desc: string;
}

const items: AppType[] = [
  {
    name: 'Google Gmail',
    desc: 'Connecting you effortlessly, securely, and reliably to the world through seamless email communication and integrated productivity tools.',
    icon: 'https://cdn.svgporn.com/logos/google-gmail.svg',
  },
  {
    name: 'WhatsApp',
    desc: 'Connecting you effortlessly, securely, and reliably to the world through seamless email communication and integrated productivity tools.',
    icon: 'https://cdn.svgporn.com/logos/whatsapp-icon.svg',
  },
  {
    name: 'Facebook',
    desc: 'Connecting you effortlessly, securely, and reliably to the world through seamless email communication and integrated productivity tools.',
    icon: 'https://cdn.svgporn.com/logos/facebook.svg',
  },
  {
    name: 'Shopify',
    desc: 'Connecting you effortlessly, securely, and reliably to the world through seamless email communication and integrated productivity tools.',
    icon: 'https://cdn.svgporn.com/logos/shopify.svg',
  },
  {
    name: 'WooCommerce',
    desc: 'Connecting you effortlessly, securely, and reliably to the world through seamless email communication and integrated productivity tools.',
    icon: 'https://cdn.svgporn.com/logos/woocommerce-icon.svg',
  },
  {
    name: 'Tiktok',
    desc: 'Connecting you effortlessly, securely, and reliably to the world through seamless email communication and integrated productivity tools.',
    icon: 'https://cdn.svgporn.com/logos/tiktok-icon.svg',
  },
  {
    name: 'Progress',
    desc: 'Connecting you effortlessly, securely, and reliably to the world through seamless email communication and integrated productivity tools.',
    icon: 'https://cdn.svgporn.com/logos/progress.svg',
  },
  {
    name: 'Alfresco',
    desc: 'Connecting you effortlessly, securely, and reliably to the world through seamless email communication and integrated productivity tools.',
    icon: 'https://cdn.svgporn.com/logos/alfresco.svg',
  },
  {
    name: 'Pulumi',
    desc: 'Connecting you effortlessly, securely, and reliably to the world through seamless email communication and integrated productivity tools.',
    icon: 'https://cdn.svgporn.com/logos/pulumi-icon.svg',
  },
  {
    name: 'PM2',
    desc: 'Connecting you effortlessly, securely, and reliably to the world through seamless email communication and integrated productivity tools.',
    icon: 'https://cdn.svgporn.com/logos/pm2-icon.svg',
  },
  {
    name: 'Nats',
    desc: 'Connecting you effortlessly, securely, and reliably to the world through seamless email communication and integrated productivity tools.',
    icon: 'https://cdn.svgporn.com/logos/nats-icon.svg',
  },
];

const InstalledList = () => {
  const { data, loading } = useRequest<AppType[], never>(async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items.slice(0, 5));
      }, 2000);
    });
  });

  return (
    <List<AppType>
      size="large"
      dataSource={loading ? Array(5).fill({}) : data}
      renderItem={(record, index) => <AppItem record={record} key={index} />}
    />
  );
};

const RecommendList = () => {
  const { data, loading } = useRequest<AppType[], never>(async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items.slice(5));
      }, 2000);
    });
  });

  return (
    <Row gutter={[16, 16]}>
      {(loading ? Array(6).fill(null) : data)?.map((record, index) => (
        <Col key={index} xs={24} sm={24} md={12} lg={12} xl={8}>
          <AppCard record={record} />
        </Col>
      ))}
    </Row>
  );
};

const Apps: React.FC = () => {
  return (
    <PageContainer
      size="middle"
      title="Apps"
      extras={[
        <Button
          key="primary"
          icon={<Icon name="square-arrow-out-up-right" />}
          iconPosition="end"
          type="primary"
        >
          App Store
        </Button>,
      ]}
    >
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Card
          bordered={false}
          title="Installed"
          styles={{ body: { padding: 0 } }}
        >
          <InstalledList />
        </Card>
        <Card
          bordered={false}
          title="Recommend"
          extra={
            <Button
              type="link"
              icon={<Icon name="square-arrow-out-up-right" />}
              iconPosition="end"
            >
              More
            </Button>
          }
        >
          <RecommendList />
        </Card>
      </Space>
    </PageContainer>
  );
};

export default Apps;
