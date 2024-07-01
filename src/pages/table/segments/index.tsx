import { getUsers } from '@/apis/user';
import { UserRecord } from '@/apis/user/types';
import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import TableColumns from '@/components/table-columns';
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
const FilterTable: React.FC = () => {
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
      title="Segments Table"
      description="Used for merging queries of multiple fields in scenarios with known fields."
    >
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Card
          bordered={false}
          styles={{
            body: {
              paddingBlock: '32px 8px',
            },
          }}
        >
          <FilterForm />
        </Card>
        <Card
          bordered={false}
          styles={{
            header: {
              margin: 0,
            },
            body: {
              padding: 0,
            },
            extra: {
              flex: 1,
            },
            title: {
              flex: 'none',
              marginRight: 16,
            },
          }}
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
                <Button icon={<Icon name="download" />}>Export</Button>
                <TableColumns>
                  <Button icon={<Icon name="settings-2" />}>Columns</Button>
                </TableColumns>
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
                Total {pagination.total.toLocaleString()} items
                {selectedRowKeys.length > 0 &&
                  ` , ${selectedRowKeys.length} items selected`}
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

export default FilterTable;
