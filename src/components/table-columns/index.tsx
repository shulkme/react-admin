import { Popover } from 'antd';
import type React from 'react';

const TableColumns: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Popover content={<></>} title="Columns" trigger="click" placement="bottomRight">
      {children}
    </Popover>
  );
};

export default TableColumns;
