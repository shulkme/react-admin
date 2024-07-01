import { getUsers } from '@/apis/user';
import { UserRecord } from '@/apis/user/types.ts';
import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import { usePagination } from 'ahooks';
import {
  Avatar,
  Button,
  Card,
  Col,
  Pagination,
  Row,
  Space,
  Table,
  TableProps,
  Typography,
} from 'antd';
import { useTheme } from 'antd-style';
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
    render: (value) => {
      return <>{value}</>;
    },
  },
  {
    title: 'Username',
    key: 'username',
    dataIndex: 'username',
    render: (value) => {
      return <>{value}</>;
    },
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
    render: (value) => {
      return <>{value}</>;
    },
  },
  {
    title: 'Phone',
    key: 'phone',
    dataIndex: 'phone',
    render: (value) => {
      return <>{value}</>;
    },
  },
  {
    title: 'Action',
    key: 'action',
    width: 90,
    render: () => {
      return <Button size="small">Edit</Button>;
    },
  },
];
const QueryTable: React.FC = () => {
  const theme = useTheme();
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
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <PageContainer
      size="large"
      title="Query Table"
      description="The most common table function, usually used to display a simple list of content."
    >
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Card bordered={false}></Card>
        <Card
          bordered={false}
          styles={{
            header: {
              margin: 0,
            },
            body: {
              padding: 0,
            },
          }}
          title="Total 1,234 items"
          extra={
            <Space>
              <Button icon={<Icon name="download" />}>Export</Button>
              <Button icon={<Icon name="settings-2" />}>Columns</Button>
            </Space>
          }
        >
          <Table<UserRecord>
            columns={columns}
            loading={loading}
            rowKey="id"
            dataSource={data?.list}
            rowSelection={rowSelection}
            pagination={false}
          />
          <Row
            gutter={16}
            align="middle"
            justify="space-between"
            style={{
              paddingBlock: theme.padding,
              paddingInline: theme.paddingLG,
            }}
          >
            <Col>
              <Typography.Text type="secondary">
                Total 1,234 items , 100 selected
              </Typography.Text>
            </Col>
            <Col>
              <Pagination {...pagination} size="default" />
            </Col>
          </Row>
        </Card>
      </Space>
    </PageContainer>
  );
};

export default QueryTable;
