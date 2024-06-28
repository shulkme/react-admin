import Icon from '@/components/icon';
import { useAppSelector } from '@/hooks/store.ts';
import { Avatar, Dropdown, Spin, type MenuProps } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const items: MenuProps['items'] = [
  {
    key: 'todo',
    label: 'Todos',
    icon: <Icon name="circle-check-big" size={16} />,
  },
  {
    key: 'project',
    label: 'Projects',
    icon: <Icon name="square-kanban" size={16} />,
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: <Icon name="user" size={16} />,
  },
  {
    key: 'security',
    label: 'Settings',
    icon: <Icon name="shield" size={16} />,
  },
  {
    type: 'divider',
  },
  {
    key: 'role',
    label: 'Switch Role',
    icon: <Icon name="venetian-mask" size={16} />,
  },
  {
    key: 'logout',
    label: 'Logout',
    icon: <Icon name="log-out" size={16} />,
  },
];

const AvatarDropdown: React.FC = () => {
  const { avatar, loading } = useAppSelector((state) => state.user);

  return (
    <ThemeProvider themeMode="light">
      <Dropdown
        placement="bottomRight"
        trigger={['click']}
        menu={{
          items,
        }}
        overlayStyle={{
          minWidth: 200,
        }}
      >
        <div>
          <ThemeProvider themeMode="dark">
            {loading ? (
              <Spin />
            ) : (
              <Avatar
                src={avatar}
                shape="square"
                style={{ cursor: 'pointer' }}
              />
            )}
          </ThemeProvider>
        </div>
      </Dropdown>
    </ThemeProvider>
  );
};

export default AvatarDropdown;
