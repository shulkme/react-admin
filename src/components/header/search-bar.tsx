import Icon from '@/components/icon';
import { Input } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const SearchBar: React.FC = () => {
  return (
    <ThemeProvider themeMode="dark">
      <Input
        variant="filled"
        prefix={<Icon name="search" />}
        placeholder="Search..."
        style={{
          width: '100%',
        }}
      />
    </ThemeProvider>
  );
};

export default SearchBar;
