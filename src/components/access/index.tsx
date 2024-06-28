import type React from 'react';

export interface AccessProps extends React.PropsWithChildren {
  accessible: boolean;
  fallback?: React.ReactNode;
}

const Access: React.FC<AccessProps> = ({ accessible, fallback, children }) => {
  return accessible ? children : fallback;
};

export default Access;
