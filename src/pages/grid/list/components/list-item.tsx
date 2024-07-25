import { UserRecord } from '@/apis/user/types';
import Icon from '@/components/icon';
import {
  Avatar,
  Button,
  Card,
  ConfigProvider,
  Divider,
  List,
  Skeleton,
  Space,
  Statistic,
} from 'antd';
import type React from 'react';

const ListItem: React.FC<{
  record?: UserRecord;
}> = ({ record }) => {
  if (!record) {
    return (
      <ConfigProvider
        theme={{
          components: {
            Skeleton: {
              controlHeightXS: 12,
            },
          },
        }}
      >
        <Card bordered={false}>
          <List.Item
            style={{ padding: 0 }}
            actions={[<Skeleton.Button active />]}
          >
            <Skeleton
              avatar
              title={false}
              paragraph={{ rows: 2, width: ['30%', '60%'] }}
              active
            />
          </List.Item>
        </Card>
      </ConfigProvider>
    );
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Statistic: {
            contentFontSize: 16,
            marginXXS: 0,
          },
        },
      }}
    >
      <Card bordered={false}>
        <List.Item
          style={{ padding: 0 }}
          actions={[
            <Button key="follow" icon={<Icon name="heart" />}>
              Follow
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={record.avatar} size={44} />}
            title={record.nickname}
            description={record.email}
          />
          <Space split={<Divider type="vertical" />} size="middle">
            <Statistic
              title="Posts"
              value={1234}
              valueStyle={{ fontWeight: 600 }}
            />
            <Statistic
              title="Followers"
              value={1234}
              valueStyle={{ fontWeight: 600 }}
            />
            <Statistic
              title="Likers"
              value={1234}
              valueStyle={{ fontWeight: 600 }}
            />
          </Space>
        </List.Item>
      </Card>
    </ConfigProvider>
  );
};

export default ListItem;
