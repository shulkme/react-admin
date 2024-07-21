import { getUsers } from '@/apis/user';
import { UserRecord } from '@/apis/user/types.ts';
import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import { usePagination } from 'ahooks';
import { Avatar, Button, Card, Space, Table, TableProps, Tooltip } from 'antd';
import React, { useState } from 'react';
import FilterForm from './components/filter-form';

const columns: TableProps<UserRecord>['columns'] = [
  {
    title: 'Avatar',
    key: 'avatar',
    dataIndex: 'avatar',
    width: 90,
    render: (value) => {
      return <Avatar src={value} />;
    },
  },
  {
    title: 'Name',
    key: 'nickname',
    dataIndex: 'nickname',
  },
  {
    title: 'Username',
    key: 'username',
    dataIndex: 'username',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: 'Phone',
    key: 'phone',
    dataIndex: 'phone',
  },
  {
    title: 'Action',
    key: 'action',
    width: 90,
    align: 'center',
    render: () => {
      return <Button type="link">Edit</Button>;
    },
  },
];
const ViewTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { data, loading, pagination } = usePagination(
    async ({ current, pageSize }) => {
      const res = await getUsers({ page: current, pageSize });
      return {
        list: res.data,
        total: res.meta.total,
      };
    },
  );

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <PageContainer
      size="large"
      title="View Table"
      description="Save commonly used queries as views for further filtering."
    >
      <Card
        className="with-table"
        bordered={false}
        tabList={[
          {
            label: 'All',
            key: 'all',
          },
          {
            label: 'Active',
            key: 'active',
          },
          {
            label: 'Draft',
            key: 'draft',
          },
          {
            label: 'Archived',
            key: 'archived',
          },
          {
            label: (
              <Tooltip title="Create View">
                <Icon name="plus" />
              </Tooltip>
            ),
            key: 'add',
          },
        ]}
        tabBarExtraContent={
          <Space>
            <Button size="small" icon={<Icon name="arrow-down-up" />} />
          </Space>
        }
      >
        <FilterForm />
        <Table<UserRecord>
          columns={columns}
          loading={loading}
          rowKey="id"
          dataSource={data?.list}
          rowSelection={rowSelection}
          pagination={pagination}
        />
      </Card>
    </PageContainer>
  );
};

export default ViewTable;
