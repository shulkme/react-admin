import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import { Avatar, Button, Card, List, Space } from 'antd';
import { css, cx } from 'antd-style';
import type React from 'react';

interface IntegrationType {
  name: string;
  description: string;
  icon: string;
  action?: {
    text: string;
    url?: string;
  };
}

const Item: React.FC<IntegrationType> = (record) => {
  return (
    <List.Item
      actions={[
        <Button key="use" size="small">
          {record?.action?.text || 'Use'}
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={
          <Avatar
            shape="square"
            src={record.icon}
            className={cx(css`
              > img {
                object-fit: contain;
              }
            `)}
          />
        }
        title={record.name}
        description={record.description}
      />
    </List.Item>
  );
};

const items: IntegrationType[] = [
  {
    name: 'React',
    description:
      'Integrate with all the tools, applications, and services you need to manage your business.',
    icon: 'https://cdn.svgporn.com/logos/react.svg',
  },
  {
    name: 'Vue',
    description:
      'Integrate with all the tools, applications, and services you need to manage your business.',
    icon: 'https://cdn.svgporn.com/logos/vue.svg',
  },
  {
    name: 'Angular',
    description:
      'Integrate with all the tools, applications, and services you need to manage your business.',
    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg',
  },
  {
    name: 'Svelte',
    description:
      'Integrate with all the tools, applications, and services you need to manage your business.',
    icon: 'https://cdn.svgporn.com/logos/svelte-icon.svg',
  },
  {
    name: 'Solid',
    description:
      'Integrate with all the tools, applications, and services you need to manage your business.',
    icon: 'https://cdn.svgporn.com/logos/solidjs-icon.svg',
  },
  {
    name: 'Next',
    description:
      'Integrate with all the tools, applications, and services you need to manage your business.',
    icon: 'https://cdn.svgporn.com/logos/nextjs-icon.svg',
  },
  {
    name: 'Nuxt',
    description:
      'Integrate with all the tools, applications, and services you need to manage your business.',
    icon: 'https://cdn.svgporn.com/logos/nuxt-icon.svg',
  },
  {
    name: 'Electron',
    description:
      'Integrate with all the tools, applications, and services you need to manage your business.',
    icon: 'https://cdn.svgporn.com/logos/electron.svg',
  },
];

const Integrations: React.FC = () => {
  return (
    <PageContainer
      title="Integrations"
      size="middle"
      extras={[
        <Button
          key="primary"
          icon={<Icon name="square-arrow-out-up-right" />}
          iconPosition="end"
          type="primary"
        >
          View More
        </Button>,
      ]}
    >
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Card
          bordered={false}
          title="Use API"
          styles={{ body: { padding: 0 } }}
        >
          <List<IntegrationType>
            size="large"
            dataSource={[
              {
                name: 'RESTful API',
                description:
                  'Our API makes it easy for developers to simply and smoothly integrate with other apps.',
                icon: 'https://cdn.svgporn.com/logos/internet-computer-icon.svg',
                action: {
                  text: 'Documents',
                },
              },
              {
                name: 'Strapi',
                description:
                  'Our API makes it easy for developers to simply and smoothly integrate with other apps.',
                icon: 'https://cdn.svgporn.com/logos/strapi-icon.svg',
                action: {
                  text: 'Guide',
                },
              },
              {
                name: 'Request integration',
                description:
                  "If you can't find the integration you need, let us know! Fill out the form to make a request.",
                icon: 'https://cdn.svgporn.com/logos/fastapi-icon.svg',
                action: {
                  text: 'Request',
                },
              },
            ]}
            renderItem={(record, index) => <Item key={index} {...record} />}
          />
        </Card>
        <Card
          bordered={false}
          title="Featured integrations"
          styles={{ body: { padding: 0 } }}
        >
          <List<IntegrationType>
            size="large"
            dataSource={items}
            renderItem={(record, index) => <Item key={index} {...record} />}
          />
        </Card>
      </Space>
    </PageContainer>
  );
};

export default Integrations;
