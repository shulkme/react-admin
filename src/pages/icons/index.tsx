import PageContainer from '@/components/page-container';
import access from '@/hooks/access';
import useMenu from '@/hooks/menu';
import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';

const PackageIcon: React.FC = () => {
  const permissions = useMemo(() => {
    return Object.keys(access).filter((key) => access[key]);
  }, [JSON.stringify(access)]);

  const { menus, selectedKeys } = useMenu(
    [
      {
        key: 'components.icons.local',
        name: 'Local',
        path: '/icons/local',
      },
      {
        key: 'components.icons.package',
        name: 'Package',
        path: '/icons/package',
      },
      {
        key: 'components.icons.remote',
        name: 'Remote',
        path: '/icons/remote',
      },
    ],
    permissions,
  );

  return (
    <PageContainer
      title="Icons"
      description="Provide examples of using common icon libraries"
      tabs={menus}
      activeTabKeys={selectedKeys}
    >
      <Outlet />
    </PageContainer>
  );
};

export default PackageIcon;
