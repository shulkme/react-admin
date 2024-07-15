import Icon from '@/components/icon';
import { AppType } from '@/pages/utility/apps';
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
import React, { useMemo } from 'react';

const { Title, Paragraph, Text } = Typography;

const avatarClassName = cx(css`
  > img {
    object-fit: contain;
  }
`);

const AppCard: React.FC<{
  record?: AppType;
}> = ({ record }) => {
  const loading = useMemo(() => !record, [record]);
  return (
    <Card hoverable={!loading}>
      <Skeleton loading={loading} active avatar paragraph={{ rows: 2 }}>
        <Row gutter={16} align="middle">
          <Col flex="none">
            {record && (
              <Avatar
                className={avatarClassName}
                shape="square"
                src={record.icon}
              />
            )}
          </Col>
          <Col flex="auto">
            {record && (
              <Title level={5} style={{ margin: 0 }}>
                {record.name}
              </Title>
            )}
          </Col>
          <Col flex="none">
            {record ? (
              <Button size="small" type="primary">
                Install
              </Button>
            ) : (
              <Skeleton.Button active size="small" />
            )}
          </Col>
        </Row>
        {record && (
          <Paragraph style={{ marginBlock: '1em' }}>{record.desc}</Paragraph>
        )}
        <Space size={16}>
          {record && (
            <>
              <Text type="secondary">
                <Icon name="arrow-down-to-line" />
                <span>1,234</span>
              </Text>
              <Text type="secondary">
                <Icon name="users" />
                <span>1,234</span>
              </Text>
            </>
          )}
        </Space>
      </Skeleton>
    </Card>
  );
};

export default AppCard;
