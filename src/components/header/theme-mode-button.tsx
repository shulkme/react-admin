import Icon from '@/components/icon';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { appActions } from '@/stores/slices/app';
import { Button, Tooltip } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const ThemeModeButton: React.FC = () => {
  const { themeMode } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const onClick = () => {
    if (themeMode === 'dark') {
      dispatch(appActions.setThemeMode('light'));
    } else {
      dispatch(appActions.setThemeMode('dark'));
    }
  };

  return (
    <ThemeProvider themeMode="dark">
      <Tooltip title={`Toggle ${themeMode === 'dark' ? 'light' : 'dark'} mode`}>
        <Button
          type="text"
          icon={<Icon name={themeMode === 'dark' ? 'sun' : 'moon'} />}
          onClick={onClick}
        />
      </Tooltip>
    </ThemeProvider>
  );
};

export default ThemeModeButton;
