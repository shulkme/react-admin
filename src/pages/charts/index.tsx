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
        key: 'components.icons.antv',
        name: 'AntV',
        path: '/charts/antv',
      },
      {
        key: 'components.icons.recharts',
        name: 'Recharts',
        path: '/charts/recharts',
      },
      {
        key: 'components.icons.echarts',
        name: 'Echarts',
        path: '/charts/echarts',
      },
      {
        key: 'components.icons.apexcharts',
        name: 'ApexCharts',
        path: '/charts/apexcharts',
      },
    ],
    permissions,
  );

  return (
    <PageContainer
      title="Charts"
      description="Provide examples of using common icon libraries"
      tabs={menus}
      activeTabKeys={selectedKeys}
    >
      <Outlet />
    </PageContainer>
  );
};

export default PackageIcon;
