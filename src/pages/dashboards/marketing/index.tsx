import PageContainer from '@/components/page-container';
import { Button, Col, Row } from 'antd';
import type React from 'react';
import AutomationCard from './components/automation-card';
import CampaignCard from './components/campaign-card';
import MarketingAppsCard from './components/marketing-apps-card';
import StatisticGroupCard from './components/statistic-group-card';
import StrategyGuideCard from './components/strategy-guide-card';

const MarketingDashboard: React.FC = () => {
  return (
    <PageContainer
      title="Marketing Overview"
      size="middle"
      extras={[
        <Button key="campaign">Create campaign</Button>,
        <Button key="automation" type="primary">
          Create an automation
        </Button>,
      ]}
    >
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <StatisticGroupCard />
        </Col>
        <Col span={24}>
          <StrategyGuideCard />
        </Col>
        <Col xs={24} xl={12}>
          <CampaignCard />
        </Col>
        <Col xs={24} xl={12}>
          <AutomationCard />
        </Col>
        <Col span={24}>
          <MarketingAppsCard />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default MarketingDashboard;
