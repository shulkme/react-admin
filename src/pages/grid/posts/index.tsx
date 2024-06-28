import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import { usePagination } from 'ahooks';
import { Button, Col, Input, List, Row, Select, Space, Typography } from 'antd';
import type React from 'react';
import PostCard from './components/post-card';
import { getList } from './service';

const Posts: React.FC = () => {
  const { loading, data, pagination } = usePagination(
    async ({ current, pageSize }) => {
      const res = await getList({ page: current, pageSize });
      return {
        list: res.data,
        total: res.meta.total,
      };
    },
    {
      defaultPageSize: 12,
      onSuccess: (data) => {
        console.log(data);
      },
    },
  );

  return (
    <PageContainer
      size="large"
      title="All Posts"
      extras={[
        <Button key="create" type="primary" icon={<Icon name="plus" />}>
          New
        </Button>,
      ]}
    >
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {!loading && `Total ${pagination.total.toLocaleString()} items`}
            </Typography.Title>
          </Col>
          <Col>
            <Space size="middle">
              <Input prefix={<Icon name="search" />} placeholder="Search" />
              <Select
                style={{ width: 160 }}
                placeholder="sort"
                labelRender={(option) => {
                  return (
                    <Space>
                      <Icon name="arrow-down-up" />
                      {option.label}
                    </Space>
                  );
                }}
                defaultValue="least-updated"
                options={[
                  {
                    label: 'Least Updated',
                    value: 'least-updated',
                  },
                  {
                    label: 'Most Liked',
                    value: 'most-liked',
                  },
                  {
                    label: 'Most Views',
                    value: 'most-views',
                  },
                ]}
              />
            </Space>
          </Col>
        </Row>
        <List
          rowKey="id"
          loading={loading}
          dataSource={data?.list || []}
          grid={{
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 4,
          }}
          pagination={{ ...pagination, showSizeChanger: false }}
          style={{
            margin: -12,
          }}
          renderItem={(record) => (
            <div style={{ height: '100%', padding: 12 }}>
              <PostCard {...record} />
            </div>
          )}
        />
      </Space>
    </PageContainer>
  );
};

export default Posts;
