import { getUsers } from '@/apis/user';
import { UserRecord } from '@/apis/user/types';
import { useRequest } from 'ahooks';
import { Avatar, Button, Card, List } from 'antd';
import React from 'react';

const LatestCommentsCard: React.FC = () => {
  const { loading, data } = useRequest(getUsers, {
    defaultParams: [{ pageSize: 7 }],
  });
  return (
    <Card
      bordered={false}
      title="Latest Comments"
      styles={{
        body: {
          padding: 0,
        },
      }}
      extra={<a>View More</a>}
    >
      <List<UserRecord>
        size="large"
        loading={loading}
        dataSource={data?.data || []}
        renderItem={(record) => (
          <List.Item
            actions={[
              <Button size="small" key="reply">
                Reply
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={record.avatar} />}
              title={record.nickname}
              description={record.email}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default LatestCommentsCard;
