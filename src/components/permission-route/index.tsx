import useAccess from '@/hooks/access';
import ExceptionForbidden from '@/pages/exception/403';
import type React from 'react';

const PermissionRoute: React.FC<
  React.PropsWithChildren<{
    access?: string;
  }>
> = ({ access, children }) => {
  const auth = useAccess();
  if (access && !auth?.[access]) {
    return <ExceptionForbidden />;
  }
  return children;
};

export default PermissionRoute;
