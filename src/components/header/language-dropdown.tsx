import Icon from '@/components/icon';
import { useAppSelector } from '@/hooks/store.ts';
import { Button, Dropdown, MenuProps } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const items: MenuProps['items'] = [
  {
    label: 'English',
    key: 'us',
    icon: <span>🇺🇸</span>,
  },
  {
    label: '日本語',
    key: 'ja',
    icon: <span>🇯🇵</span>,
  },
  {
    label: '繁体中文',
    key: 'zh_TW',
    icon: <span>🇭🇰</span>,
  },
  {
    label: '简体中文',
    key: 'zh_CN',
    icon: <span>🇨🇳</span>,
  },
];

const LanguageDropdown: React.FC = () => {
  const { themeMode } = useAppSelector((state) => state.app);
  return (
    <ThemeProvider themeMode={themeMode}>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
        placement="bottomRight"
      >
        <div>
          <ThemeProvider themeMode="dark">
            <Button type="text" icon={<Icon name="languages" />} />
          </ThemeProvider>
        </div>
      </Dropdown>
    </ThemeProvider>
  );
};

export default LanguageDropdown;
