import { getProfile } from '@/apis/user';
import Header from '@/components/header';
import PageLoading from '@/components/page-loading';
import Sidebar from '@/components/sidebar';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { LOGIN_ROUTE } from '@/router/routes';
import { setUserInfo } from '@/stores/slices/user';
import { Layout } from 'antd';
import { ThemeProvider } from 'antd-style';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProLayout: React.FC = () => {
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  // 请求用户数据
  function fetchUserData() {
    dispatch(
      setUserInfo({
        loading: true,
      }),
    );
    getProfile()
      .then((data) => {
        dispatch(
          setUserInfo({
            ...data.data,
            loading: false,
          }),
        );
      })
      .catch(() => {
        navigate(LOGIN_ROUTE);
      });
  }

  // 授权初始化
  useEffect(() => {
    fetchUserData();
  }, []);

  // 加载状态
  if (loading) return <PageLoading />;

  return (
    <ThemeProvider
      theme={{
        components: {
          Layout: {
            headerBg: '#09121a',
            headerColor: '#fff',
            siderBg: '#fff',
          },
        },
      }}
    >
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Header />
        <Layout hasSider>
          <Sidebar />
          <Layout.Content
            style={{
              padding: 32,
            }}
          >
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default ProLayout;
