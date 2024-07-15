import '@/assets/styles/global.css';
import PageLoading from '@/components/page-loading';
import NProgressBar from '@/components/progress-bar';
import theme from '@/config/theme';
import { useAppSelector } from '@/hooks/store';
import { generateRoutes } from '@/router';
import asyncRoutes from '@/router/routes';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'antd-style';
import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

interface AppToken {
  headerHeight: number;
}

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends AppToken {}
}

const App: React.FC = () => {
  const { themeMode } = useAppSelector((state) => state.app);

  // 如需远程加载路由
  // const { routes: asyncRoutes } = useAppSelector(state => state.user)

  // 构造路由
  const routes = useMemo(() => {
    return generateRoutes(asyncRoutes);
  }, []);

  const router = createBrowserRouter(routes);

  return (
    <ConfigProvider theme={theme}>
      <ThemeProvider<AppToken>
        themeMode={themeMode}
        customToken={{
          headerHeight: 64,
        }}
        theme={(appearance) => ({
          components: {
            Layout: {
              headerHeight: 64,
              headerBg: '#09121a',
              headerColor: '#fff',
              siderBg: '#fff',
              bodyBg: appearance === 'dark' ? '#000000' : '#e4ebf1',
            },
          },
        })}
      >
        <NProgressBar />
        <RouterProvider router={router} fallbackElement={<PageLoading />} />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
