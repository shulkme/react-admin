import { useRequest } from 'ahooks';
import { Avatar, Button, Card, List } from 'antd';
import React from 'react';

type CommentRecord = {
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

const LatestCommentsCard: React.FC = () => {
  const fetchData = async (): Promise<CommentRecord[]> => {
    return await fetch(
      'https://randomuser.me/api/?results=6&inc=name,email,nat,picture&noinfo',
    ).then((res) => res.json().then((res) => res.results));
  };

  const { loading, data } = useRequest(fetchData);

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
      <List<CommentRecord>
        size='large'
        loading={loading}
        dataSource={data}
        renderItem={(record) => (
          <List.Item actions={[<Button size='small' key="reply">Reply</Button>]}>
            <List.Item.Meta
              avatar={<Avatar src={record.picture.thumbnail} />}
              title={[record.name.first, record.name.last].join(' ')}
              description={record.email}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default LatestCommentsCard;
