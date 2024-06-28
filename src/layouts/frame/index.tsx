import { Layout } from 'antd';
import type React from 'react';
import { Outlet } from 'react-router-dom';

const FrameLayout: React.FC = () => {
  return (
    <Layout>
      <Layout.Content
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default FrameLayout;
