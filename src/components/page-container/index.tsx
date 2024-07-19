import { MenuObject } from '@/hooks/menu';
import {
  Breadcrumb,
  BreadcrumbProps,
  Col,
  ConfigProvider,
  Menu,
  MenuProps,
  Row,
  Space,
  Typography,
} from 'antd';
import type React from 'react';
import { Link } from 'react-router-dom';
import useStyles, { PageContainerSite } from './styles';

const { Title, Paragraph } = Typography;

export type PageContainerProps = React.PropsWithChildren<{
  title?: React.ReactNode;
  description?: React.ReactNode;
  extras?: React.ReactNode[];
  crumbs?: BreadcrumbProps['items'];
  size?: PageContainerSite;
  tabs?: MenuObject[];
  activeTabKeys?: string[];
}>;

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  ...props
}) => {
  const { styles } = useStyles({ size: props.size });

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: 'transparent',
            itemPaddingInline: '0 32px',
          },
        },
      }}
    >
      <div className={styles.root}>
        <div className={styles.header}>
          {props.crumbs && (
            <Breadcrumb className={styles.crumb} items={props.crumbs} />
          )}
          {(props.title || props.extras) && (
            <Row
              className={styles.title}
              justify="space-between"
              align="middle"
            >
              <Col>
                {props.title && (
                  <Title
                    level={3}
                    style={{
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {props.title}
                  </Title>
                )}
              </Col>
              <Col>
                <Space size="middle" align="center">
                  {props.extras && props.extras.map((extra) => extra)}
                </Space>
              </Col>
            </Row>
          )}
          {props.description && (
            <Paragraph type="secondary" className={styles.desc}>
              {props.description}
            </Paragraph>
          )}
          {props.tabs && (
            <Menu
              selectedKeys={props.activeTabKeys}
              items={props.tabs as MenuProps['items']}
              mode="horizontal"
              _internalRenderMenuItem={(dom, props) => {
                const { elementRef, ...reset } = dom.props;
                return <Link to={props.path} ref={elementRef} {...reset} />;
              }}
            />
          )}
        </div>
        <div className={styles.container}>{children}</div>
      </div>
    </ConfigProvider>
  );
};

export default PageContainer;
