import AvatarDropdown from '@/components/header/avatar-dropdown';
import FullscreenButton from '@/components/header/fullscreen-button';
import LanguageDropdown from '@/components/header/language-dropdown';
import NoticeDrawer from '@/components/header/notice-drawer';
import SearchBar from '@/components/header/search-bar';
import useStyles from '@/components/header/styles';
import ThemeModeButton from '@/components/header/theme-mode-button';
import { Avatar, Col, Layout, Row, Space, Typography } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const Header: React.FC = () => {
  const { styles } = useStyles();
  return (
    <ThemeProvider themeMode="dark">
      <Layout.Header className={styles.ghost} />
      <Layout.Header className={styles.root}>
        <Row
          justify="space-between"
          align="middle"
          wrap={false}
          gutter={16}
          style={{
            fontSize: 0,
            lineHeight: 1,
            verticalAlign: 'middle',
            height: '100%',
          }}
        >
          <Col>
            <Space align="center">
              <Avatar shape="square" src="/favicon.png" />
              <Typography.Title
                level={5}
                style={{
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
              <LanguageDropdown />
              <ThemeModeButton />
              <FullscreenButton />
              <NoticeDrawer />
              <span />
              <AvatarDropdown />
            </Space>
          </Col>
        </Row>
      </Layout.Header>
    </ThemeProvider>
  );
};

export default Header;
