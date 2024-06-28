import { Layout, Spin } from 'antd';
import React from 'react';

const PageLoading: React.FC = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Layout.Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Spin size="large" />
      </Layout.Content>
    </Layout>
  );
};

export default PageLoading;
