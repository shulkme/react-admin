import { Breadcrumb, BreadcrumbProps, Col, Row, Space, Typography } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';
import useStyles, { PageContainerSite } from './styles';

const { Title, Paragraph } = Typography;

export type PageContainerProps = React.PropsWithChildren<{
  title?: React.ReactNode;
  description?: React.ReactNode;
  extras?: React.ReactNode[];
  crumbs?: BreadcrumbProps['items'];
  size?: PageContainerSite;
}>;

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  ...props
}) => {
  const { styles } = useStyles({ size: props.size });

  return (
    <ThemeProvider
      theme={{
        components: {},
      }}
    >
      <div className={styles.root}>
        <div className={styles.header}>
          {props.crumbs && (
            <Breadcrumb
              items={[
                {
                  title: 'Home',
                },
                {
                  title: <a href="">Application Center</a>,
                },
                {
                  title: 'An Application',
                },
              ]}
            />
          )}
          <Row justify="space-between" align="middle">
            <Col>
              {props.title && (
                <Title
                  level={3}
                  style={{
                    margin: 0,
                  }}
                >
                  {props.title}
                </Title>
              )}
              {props.description && (
                <Paragraph type="secondary" style={{ margin: '1em 0 0' }}>
                  {props.description}
                </Paragraph>
              )}
            </Col>
            <Col>
              <Space size="middle" align="center">
                {props.extras && props.extras.map((extra) => extra)}
              </Space>
            </Col>
          </Row>
        </div>
        <div className={styles.container}>{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default PageContainer;
