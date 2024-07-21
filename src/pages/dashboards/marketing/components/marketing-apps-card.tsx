import Icon from '@/components/icon';
import { Avatar, Card, Col, Row, Space, Typography } from 'antd';
import { useTheme } from 'antd-style';
import type React from 'react';

interface AppType {
  name: string;
  desc: string;
  icon: string;
}

const { Title, Link, Paragraph } = Typography;

const apps: AppType[] = [
  {
    name: 'VoiceChime AI',
    desc: 'VoiceChime AI recovers abandoned carts automatically through AI voice calls and boosts sales.',
    icon: 'https://img.myshopline.com/image/devcenter/8888/f9cb76188dc44ed589db673d06827341.jpeg?w=120&h=120',
  },
  {
    name: 'TikTok',
    desc: 'Support store connection with TikTok For Business and TikTok Shop, quickly start TikTok marketing',
    icon: 'https://img.myshopline.com/image/devcenter/9999/8888/c89f5743c64a4d94bbae6e45a8cce6ac.png?w=120&h=120',
  },
  {
    name: 'Pinterest',
    desc: 'Link your business account to guarantee data upload and product sync on Pinterest.',
    icon: 'https://img.myshopline.com/image/devcenter/8888/52b3347747584623bbc56f88f189e8ad.png?w=120&h=120',
  },
  {
    name: 'Meta (Facebook) Multi Pixels',
    desc: 'Quickly set up and manage multiple Meta Pixels in SHOPLINE, allowing easy tracking of visitors across your store. A Meta Business account is required.',
    icon: 'https://img.myshopline.com/image/devcenter/8888/5fb30846e3a14250bc888d8183953af1.png?w=120&h=120',
  },
  {
    name: 'EasyRank SEO All-in-one',
    desc: 'Level up your store SEO with EasyRank SEO’s intelligent keyword recommendations, global and focused SEO meta optimization, and Google Search Console integration and SERP optimization.',
    icon: 'https://img.myshopline.com/image/devcenter/9999/8888/c0cc0bcc23ec4cf59ca06e0394e17147.png?w=120&h=120',
  },
  {
    name: 'SmartPush',
    desc: 'Powerful, yet easy to use email and SMS message marketing tool.',
    icon: 'https://img.myshopline.com/image/devcenter/9999/8888/a7a08581158b4305bb6f1a85337b4893.png?w=120&h=120',
  },
];

const MarketingAppsCard: React.FC = () => {
  const theme = useTheme();
  return (
    <Card
      bordered={false}
      styles={{
        body: {
          paddingBlockStart: theme.padding,
        },
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={5}>Marketing apps</Title>
          <Paragraph type="secondary">
            Increase sessions, engage shoppers, and promote products by adding
            more marketing apps.
          </Paragraph>
        </Col>
        {apps.map((app, index) => (
          <Col key={index} xs={24} sm={12} lg={8}>
            <Card
              size="small"
              hoverable
              styles={{
                body: {
                  padding: theme.padding,
                },
              }}
            >
              <Space align="center">
                <Avatar size={32} shape="square" src={app.icon} />
                <Title level={5}>{app.name}</Title>
              </Space>
              <Paragraph
                style={{ marginBlock: '0.5em' }}
                ellipsis={{ rows: 2 }}
                type="secondary"
              >
                {app.desc}
              </Paragraph>
              <Link>Set up app</Link>
            </Card>
          </Col>
        ))}
        <Col span={24}>
          <Link>
            <span>View more marketing apps </span>
            <Icon name="square-arrow-out-up-right" size={14} />
          </Link>
        </Col>
      </Row>
    </Card>
  );
};

export default MarketingAppsCard;
