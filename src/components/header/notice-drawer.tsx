import Icon from '@/components/icon';
import { useBoolean } from 'ahooks';
import { Badge, Button, Drawer } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const NoticeDrawer: React.FC = () => {
  const [open, { setFalse, setTrue }] = useBoolean();
  return (
    <>
      <Badge dot>
        <Button type="text" icon={<Icon name="bell" />} onClick={setTrue} />
      </Badge>
      <ThemeProvider themeMode="light">
        <Drawer
          title="Notifications"
          open={open}
          onClose={setFalse}
          extra={
            <Button
              icon={<Icon name="square-arrow-out-up-right" />}
              type="text"
            />
          }
          footer={<Button block>All Read</Button>}
        ></Drawer>
      </ThemeProvider>
    </>
  );
};

export default NoticeDrawer;
