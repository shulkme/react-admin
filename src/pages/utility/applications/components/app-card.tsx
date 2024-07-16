import Icon from '@/components/icon';
import { AppType } from '@/pages/utility/applications';
import {
  Avatar,
  Button,
  Card,
  Col,
  Row,
  Skeleton,
  Space,
  Typography,
} from 'antd';
import { css, cx } from 'antd-style';
import { isEmpty } from 'lodash';
import React from 'react';

const { Title, Paragraph, Text } = Typography;

const avatarClassName = cx(css`
  > img {
    object-fit: contain;
  }
`);

const AppCard: React.FC<{
  record: AppType | null;
}> = ({ record }) => {
  if (isEmpty(record)) {
    return (
      <Card>
        <Skeleton active avatar paragraph={{ rows: 2 }} />
      </Card>
    );
  }
  return (
    <Card hoverable>
      <Row gutter={16} align="middle">
        <Col flex="none">
          <Avatar
            className={avatarClassName}
            shape="square"
            src={record.icon}
          />
        </Col>
        <Col flex="auto">
          <Title level={5} style={{ margin: 0 }}>
            {record.name}
          </Title>
        </Col>
        <Col flex="none">
          <Button size="small" type="primary">
            Install
          </Button>
        </Col>
      </Row>
      <Paragraph style={{ marginBlock: '1em' }}>{record.desc}</Paragraph>
      <Space size={16}>
        <Text type="secondary">
          <Icon name="arrow-down-to-line" />
          <span>1,234</span>
        </Text>
        <Text type="secondary">
          <Icon name="users" />
          <span>1,234</span>
        </Text>
      </Space>
    </Card>
  );
};

export default AppCard;
