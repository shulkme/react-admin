import Icon from '@/components/icon';
import PageContainer from '@/components/page-container';
import { usePagination } from 'ahooks';
import {
  Button,
  Col,
  ConfigProvider,
  Input,
  List,
  Row,
  Segmented,
  Space,
  Typography,
} from 'antd';
import { createStyles } from 'antd-style';
import type React from 'react';
import ListItem from './components/list-item';
import { getList } from './service';

const useStyles = createStyles(({ css, prefixCls, token }) => {
  return {
    root: css`
      .${prefixCls}-list-items {
        display: flex;
        flex-direction: column;
        gap: ${token.padding}px;
      }
    `,
  };
});

const ListGrid: React.FC = () => {
  const { styles } = useStyles();
  const { loading, data, pagination } = usePagination(
    async ({ current, pageSize }) => {
      const res = await getList({ page: current, pageSize });
      return {
        list: res.data,
        total: res.meta.total,
      };
    },
  );
  return (
    <PageContainer
      title="List Grid"
      size="middle"
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
            <ConfigProvider
              theme={{
                components: {
                  Segmented: {
                    trackBg: 'transparent',
                    trackPadding: 0,
                  },
                },
              }}
            >
              <Space align="center" size="middle">
                <Input prefix={<Icon name="search" />} placeholder="Search" />
                <Segmented
                  defaultValue="list"
                  options={[
                    {
                      value: 'list',
                      icon: <Icon name="rows-3" strokeWidth={2} size={16} />,
                    },
                    {
                      value: 'grid',
                      icon: (
                        <Icon name="layout-grid" strokeWidth={2} size={16} />
                      ),
                    },
                  ]}
                />
              </Space>
            </ConfigProvider>
          </Col>
        </Row>
        {loading ? (
          <>
            <List
              rootClassName={styles.root}
              split={false}
              rowKey="index"
              dataSource={Array.from({ length: pagination.pageSize }).map(
                (_, index) => ({ index }),
              )}
              renderItem={(_, index) => <ListItem key={index} />}
            />
          </>
        ) : (
          <>
            <List
              rootClassName={styles.root}
              split={false}
              rowKey="id"
              //loading={loading}
              dataSource={data?.list || []}
              pagination={{ ...pagination, showSizeChanger: false }}
              renderItem={(record, index) => (
                <ListItem key={index} record={record} />
              )}
            />
          </>
        )}
      </Space>
    </PageContainer>
  );
};

export default ListGrid;
