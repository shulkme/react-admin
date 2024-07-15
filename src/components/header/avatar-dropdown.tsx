import Icon from '@/components/icon';
import { useAppSelector } from '@/hooks/store.ts';
import { Avatar, Dropdown, Spin, type MenuProps } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
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
    key: 'github',
    label: 'Github',
    icon: <Icon name="github" size={16} />,
  },
  {
    key: 'documents',
    label: 'Documents',
    icon: <Icon name="book-marked" size={16} />,
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

  const navigate = useNavigate();

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'logout':
        navigate('/login');
        break;
      case 'github':
      case 'documents':
        window.open('https://github.com/shulkme/react-admin');
        break;
    }
  };

  return (
    <ThemeProvider themeMode="light">
      <Dropdown
        placement="bottomRight"
        trigger={['click']}
        menu={{
          items,
          onClick: onMenuClick,
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
