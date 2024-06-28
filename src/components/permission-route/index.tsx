import useAccess from '@/hooks/access';
import type React from 'react';
import { Navigate } from 'react-router-dom';

const PermissionRoute: React.FC<
  React.PropsWithChildren<{
    access?: string;
  }>
> = ({ access, children }) => {
  const auth = useAccess();
  if (access && !auth?.[access]) {
    return <Navigate to="/forbidden" />;
  }
  return children;
};

export default PermissionRoute;
