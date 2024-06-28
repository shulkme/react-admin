import Icon from '@/components/icon';
import { Input } from 'antd';
import type React from 'react';

const SearchBar: React.FC = () => {
  return (
    <Input
      variant="filled"
      prefix={<Icon name="search" />}
      placeholder="Search..."
      style={{
        width: '100%',
      }}
    />
  );
};

export default SearchBar;
