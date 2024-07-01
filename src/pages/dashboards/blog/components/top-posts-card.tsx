import { useRequest } from 'ahooks';
import { Card, Table, TableProps, Typography } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

type PostRecord = {
  id: number;
  title: string;
  views: number;
};

const columns: TableProps<PostRecord>['columns'] = [
  {
    title: '#',
    dataIndex: 'id',
    render: (value) => {
      return <>{value}</>;
    },
  },
  {
    title: 'TITLE',
    dataIndex: 'title',
    render: (value) => {
      return (
        <Typography.Title level={5} style={{ margin: 0 }}>
          {value}
        </Typography.Title>
      );
    },
  },
  {
    title: 'VIEW',
    dataIndex: 'views',
    render: (value) => {
      return <>{value.toLocaleString()}</>;
    },
  },
];

const TopPostsCard: React.FC = () => {
  const fetchData = async (): Promise<PostRecord[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          Array.from({ length: 10 }).map((_, index) => {
            return {
              id: index + 1,
              title: 'This is a post title',
              views: 1234 - 10 * index,
            };
          }),
        );
      }, 1000);
    });
  };

  const { loading, data } = useRequest(fetchData);

  return (
    <ThemeProvider
      theme={{
        components: {
          Table: {
            cellPaddingInlineSM: 24,
          },
        },
      }}
    >
      <Card
        bordered={false}
        title="Top Posts"
        styles={{
          header: {
            margin: 0,
          },
          body: {
            paddingInline: 0,
            paddingBlockStart: 0,
          },
        }}
        style={{ height: '100%' }}
      >
        <Table<PostRecord>
          rowKey="id"
          loading={loading}
          dataSource={data}
          size="small"
          bordered={false}
          columns={columns}
          pagination={false}
        />
      </Card>
    </ThemeProvider>
  );
};

export default TopPostsCard;
