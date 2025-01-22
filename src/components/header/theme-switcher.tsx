import { useThemeProvider } from '@/proviers/theme';
import { Button, Tooltip } from 'antd';

import Icon from '@/components/icon';
import { ThemeProvider } from 'antd-style';
import React, { useCallback } from 'react';

function enableTransitions() {
  return (
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  );
}

const ThemeSwitcher: React.FC = () => {
  const { setMode, mode } = useThemeProvider();

  const handleToggle = useCallback(
    async (e: React.MouseEvent) => {
      if (!enableTransitions()) {
        setMode(mode === 'dark' ? 'light' : 'dark');
        return;
      }
      const { clientX, clientY } = e;
      const isDark = mode === 'dark';
      const html = document.querySelector('html');

      if (html) {
        html.setAttribute('disabled-transition', '');
        const clipPath = [
          `circle(0px at ${clientX}px ${clientY}px)`,
          `circle(${Math.hypot(
            Math.max(clientX, window.innerWidth - clientX),
            Math.max(clientY, window.innerHeight - clientY),
          )}px at ${clientX}px ${clientY}px)`,
        ];

        await document.startViewTransition(async () => {
          setMode(isDark ? 'light' : 'dark');
        }).ready;

        const animation = document.documentElement.animate(
          { clipPath: isDark ? clipPath.reverse() : clipPath },
          {
            duration: 500,
            easing: 'ease-in',
            pseudoElement: `::view-transition-${isDark ? 'old' : 'new'}(root)`,
          },
        );

        animation.finished.then(() => {
          html.removeAttribute('disabled-transition');
        });
      }
    },
    [mode, setMode],
  );

  return (
    <ThemeProvider themeMode="dark">
      <Tooltip title={`Toggle ${mode === 'dark' ? 'light' : 'dark'} mode`}>
        <Button
          type="text"
          icon={<Icon name={mode === 'dark' ? 'sun' : 'moon'} />}
          onClick={handleToggle}
        />
      </Tooltip>
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
