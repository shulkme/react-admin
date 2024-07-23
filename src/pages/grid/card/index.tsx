import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import { usePagination } from 'ahooks';
import { Button, Col, Input, List, Row, Select, Space, Typography } from 'antd';
import type React from 'react';
import ProductCard from './components/product-card';
import { getList } from './service';

const CardGrid: React.FC = () => {
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
      title="Card Grid"
      extras={[
        <Button key="create" type="primary" icon={<Icon name="plus" />}>
          New
        </Button>,
      ]}
    >
      <Space direction="vertical" size="large">
        <Row justify="space-between" align="middle" gutter={16}>
          <Col>
            <Typography.Title level={5}>Total 1,000 items</Typography.Title>
          </Col>
          <Col>
            <Space align="center" size="middle">
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
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
            xxl: 6,
          }}
          pagination={{ ...pagination, showSizeChanger: false }}
          style={{
            margin: -8,
          }}
          renderItem={(record) => (
            <div style={{ height: '100%', padding: 8 }}>
              <ProductCard {...record} />
            </div>
          )}
        />
      </Space>
    </PageContainer>
  );
};

export default CardGrid;
