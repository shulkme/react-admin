import PageContainer from '@/components/page-container';
import { Card, Col, Row, Skeleton } from 'antd';
import type React from 'react';

const Loading: React.FC = () => {
  return (
    <PageContainer
      title={<Skeleton.Button active />}
      description={
        <Skeleton.Button active size="small" block style={{ width: '200px' }} />
      }
      extras={[
        <Skeleton.Button key="1" active />,
        <Skeleton.Button key="2" active />,
      ]}
    >
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={12} lg={6}>
              <Card bordered={false}>
                <Skeleton
                  active
                  title
                  paragraph={{
                    rows: 2,
                  }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6}>
              <Card bordered={false}>
                <Skeleton
                  active
                  title
                  paragraph={{
                    rows: 2,
                  }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6}>
              <Card bordered={false}>
                <Skeleton
                  active
                  title
                  paragraph={{
                    rows: 2,
                  }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6}>
              <Card bordered={false}>
                <Skeleton
                  active
                  title
                  paragraph={{
                    rows: 2,
                  }}
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} xxl={12}>
          <Card
            title={
              <Skeleton.Button size="small" active style={{ width: 100 }} />
            }
            bordered={false}
          >
            <Skeleton
              active
              title={false}
              paragraph={{
                rows: 8,
              }}
            />
          </Card>
        </Col>
        <Col xs={24} xxl={12}>
          <Card
            title={
              <Skeleton.Button size="small" active style={{ width: 100 }} />
            }
            bordered={false}
          >
            <Skeleton
              active
              title={false}
              paragraph={{
                rows: 8,
              }}
            />
          </Card>
        </Col>
        <Col xs={24} xxl={12}>
          <Card
            title={
              <Skeleton.Button size="small" active style={{ width: 100 }} />
            }
            bordered={false}
          >
            <Skeleton
              active
              title={false}
              paragraph={{
                rows: 4,
              }}
            />
          </Card>
        </Col>
        <Col xs={24} lg={12} xxl={6}>
          <Card
            title={
              <Skeleton.Button size="small" active style={{ width: 100 }} />
            }
            bordered={false}
          >
            <Skeleton
              active
              title={false}
              paragraph={{
                rows: 4,
              }}
            />
          </Card>
        </Col>
        <Col xs={24} lg={12} xxl={6}>
          <Card
            title={
              <Skeleton.Button size="small" active style={{ width: 100 }} />
            }
            bordered={false}
          >
            <Skeleton
              active
              title={false}
              paragraph={{
                rows: 4,
              }}
            />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Loading;
