import { useAppSelector } from '@/hooks/store';

const useAccess = (): Record<string, boolean> => {
  const { roles } = useAppSelector((state) => state.user);

  return {
    admin: roles === 'admin',
  };
};

export default useAccess;
