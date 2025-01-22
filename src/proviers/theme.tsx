import { darkConfig, lightConfig } from '@/config/theme';
import { useLocalStorageState } from 'ahooks';
import { ThemeProvider as AntdThemeProvider, StyleProvider } from 'antd-style';
import React, { createContext, useContext, useLayoutEffect } from 'react';

type Mode = 'dark' | 'light' | 'auto';

type ThemeProviderContext = {
  mode?: Mode;
  setMode: (mode: Mode) => void;
};

const ThemeProviderContext = createContext<ThemeProviderContext | undefined>(
  undefined,
);

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [mode, setMode] = useLocalStorageState<Mode>('themeMode', {
    defaultValue: 'auto',
    listenStorageChange: true,
  });

  useLayoutEffect(() => {
    const html = document.querySelector('html')
    if (html && mode) {
      html.setAttribute('class', mode);
    }
  }, [mode])

  return (
    <ThemeProviderContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      <StyleProvider speedy>
        <AntdThemeProvider
          customToken={{
            headerHeight: 48, // 导航栏高度
          }}
          defaultThemeMode="auto"
          themeMode={mode}
          theme={mode === 'dark' ? darkConfig : lightConfig}
        >
          {children}
        </AntdThemeProvider>
      </StyleProvider>
    </ThemeProviderContext.Provider>
  );
};

export const useThemeProvider = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useThemeProvider must be used within a ThemeProvider');
  }
  return context;
};
