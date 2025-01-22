import '@/assets/styles/global.css';
import PageLoading from '@/components/page-loading';
import NProgressBar from '@/components/progress-bar';
import { GlobalStyles } from '@/global';
import { generateRoutes } from '@/router';
import asyncRoutes from '@/router/routes';
import { ThemeProvider } from '@/proviers/theme';
import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

interface AppToken {
  headerHeight: number; // 导航栏高度
}

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends AppToken {}
}

const App: React.FC = () => {
  // 如需远程加载路由
  // const { routes: asyncRoutes } = useAppSelector(state => state.user)

  // 构造路由
  const routes = useMemo(() => {
    return generateRoutes(asyncRoutes);
  }, []);

  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <NProgressBar />
      <RouterProvider router={router} fallbackElement={<PageLoading />} />
    </ThemeProvider>
  );
};

export default App;
