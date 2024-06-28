import AvatarDropdown from '@/components/header/avatar-dropdown';
import NoticeDrawer from '@/components/header/notice-drawer';
import SearchBar from '@/components/header/search-bar';
import useStyles from '@/components/header/styles';
import Icon from '@/components/icon';
import { Avatar, Button, Col, Layout, Row, Space, Typography } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const Header: React.FC = () => {
  const { styles } = useStyles();
  return (
    <>
      <ThemeProvider themeMode="dark">
        <Layout.Header className={styles.ghost} />
        <Layout.Header className={styles.root}>
          <Row
            justify="space-between"
            align="middle"
            wrap={false}
            gutter={16}
            style={{ fontSize: 0, lineHeight: 1, verticalAlign: 'middle' }}
          >
            <Col>
              <Space align="center">
                <Avatar shape="square" src="/favicon.png" />
                <Typography.Title
                  level={5}
                  style={{
                    margin: 0,
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                  }}
                >
                  {import.meta.env.VITE_APP_NAME}
                </Typography.Title>
              </Space>
            </Col>
            <Col
              style={{
                maxWidth: 520,
                width: '100%',
              }}
            >
              <SearchBar />
            </Col>
            <Col>
              <Space align="center" size="middle">
                <Button type="text" icon={<Icon name="languages" />} />
                <Button type="text" icon={<Icon name="moon" />} />
                <Button type="text" icon={<Icon name="maximize" />} />
                <NoticeDrawer />
                <span />
                <AvatarDropdown />
              </Space>
            </Col>
          </Row>
        </Layout.Header>
      </ThemeProvider>
    </>
  );
};

export default Header;
