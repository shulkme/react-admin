import type React from 'react';
import { Navigate } from 'react-router-dom';

const Index: React.FC = () => {
  // 如果不用，可用做重定向
  return <Navigate to="/pages/dashboards/blog" />;
};

export default Index;
