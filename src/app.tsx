import '@/assets/styles/global.css';
import PageLoading from '@/components/page-loading';
import theme from '@/config/theme';
import { generateRoutes } from '@/router';
import asyncRoutes from '@/router/routes';
import { ThemeProvider } from 'antd-style';
import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  // 如需远程加载路由
  // const { routes: asyncRoutes } = useAppSelector(state => state.user)

  // 构造路由
  const routes = useMemo(() => {
    return generateRoutes(asyncRoutes);
  }, [asyncRoutes]);

  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<PageLoading />} />
    </ThemeProvider>
  );
};

export default App;
