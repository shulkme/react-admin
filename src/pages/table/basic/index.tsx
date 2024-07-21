import { getUsers } from '@/apis/user';
import { UserRecord } from '@/apis/user/types';
import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import { usePagination } from 'ahooks';
import {
  Avatar,
  Button,
  Card,
  Input,
  Row,
  Space,
  Table,
  TableProps,
} from 'antd';
import React, { useState } from 'react';

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

const BasicTable: React.FC = () => {
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
      title="Basic Table"
      description="The most common table function, usually used to display a simple list of content."
    >
      <Card
        className="with-table"
        bordered={false}
        title={`Total ${pagination.total.toLocaleString()} items`}
        extra={
          <Row justify="space-between" align="middle">
            <Space>
              {selectedRowKeys.length > 0 && (
                <>
                  <Button icon={<Icon name="folders" />}>Move to</Button>
                  <Button icon={<Icon name="trash" />} danger>
                    Delete
                  </Button>
                </>
              )}
            </Space>
            <Space>
              <Input placeholder="Search" prefix={<Icon name="search" />} />
              <Button icon={<Icon name="download" />}>Export</Button>
            </Space>
          </Row>
        }
      >
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

export default BasicTable;
