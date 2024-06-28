import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import { Button, Col, Row } from 'antd';
import type React from 'react';
import DeviceRatioCard from './components/device-ratio-card';
import LatestCommentsCard from './components/latest-comments-card';
import StatisticGroupCards from './components/statistic-group-cards';
import TopPostsCard from './components/top-posts-card';
import TrendAnalysisCard from './components/trend-analysis-card';
import UserGeographyCard from './components/user-geography-card';

const Welcome: React.FC = () => {
  return (
    <PageContainer
      title="Welcome back, Steve"
      description="Happy to see you again on your dashboard."
      extras={[
        <Button key="filter" type="default" icon={<Icon name="filter" />}>
          Filters
        </Button>,
        <Button key="manage" type="primary">
          Manage Posts
        </Button>,
      ]}
      size="large"
    >
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            <StatisticGroupCards />
          </Row>
        </Col>
        <Col xs={24} xxl={12}>
          <TrendAnalysisCard />
        </Col>
        <Col xs={24} xxl={12}>
          <UserGeographyCard />
        </Col>
        <Col xs={24} xxl={12}>
          <LatestCommentsCard />
        </Col>
        <Col xs={24} lg={12} xxl={6}>
          <TopPostsCard />
        </Col>
        <Col xs={24} lg={12} xxl={6}>
          <DeviceRatioCard />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Welcome;
