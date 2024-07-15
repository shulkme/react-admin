import Icon from '@/components/icon';
import { AppType } from '@/pages/utility/apps';
import { Avatar, Button, Dropdown, List, Tooltip } from 'antd';
import { css, cx } from 'antd-style';
import type React from 'react';

const avatarClassName = cx(css`
  > img {
    object-fit: contain;
  }
`);

const PinButton: React.FC = () => {
  return (
    <Tooltip title="Fixed in the menu">
      <Button
        type="text"
        size="small"
        icon={<Icon name="pin" strokeWidth={1.5} />}
      />
    </Tooltip>
  );
};

const MoreButton: React.FC = () => {
  return (
    <Dropdown
      menu={{
        items: [
          {
            label: 'Open',
            key: 'open',
            icon: <Icon name="square-arrow-out-up-right" size={14} />,
          },
          {
            label: 'Help',
            key: 'help',
            icon: <Icon name="circle-help" size={14} />,
          },
          {
            label: 'Feedback',
            key: 'feedback',
            icon: <Icon name="square-pen" size={14} />,
          },
          {
            type: 'divider',
          },
          {
            label: 'Uninstall',
            key: 'uninstall',
            danger: true,
            icon: <Icon name="trash-2" size={14} />,
          },
        ],
      }}
    >
      <Button
        size="small"
        type="text"
        icon={<Icon name="ellipsis-vertical" strokeWidth={1.5} />}
      />
    </Dropdown>
  );
};

const AppItem: React.FC<{
  record: AppType;
}> = ({ record }) => {
  return (
    <List.Item actions={[<PinButton key="pin" />, <MoreButton key="more" />]}>
      <List.Item.Meta
        avatar={
          <Avatar
            shape="square"
            src={record.icon}
            className={avatarClassName}
          />
        }
        title={record.name}
        description={record.desc}
      />
    </List.Item>
  );
};

export default AppItem;
