import Icon from '@/components/icon';
import useStyles from '@/components/sidebar/styles';
import useAccess from '@/hooks/access';
import useMenu, { type MenuObject } from '@/hooks/menu';
import asyncRoutes from '@/router/routes';
import { ConfigProvider, Layout, Menu } from 'antd';
import type { ItemType } from 'antd/es/menu/interface';
import { isArray, pick } from 'lodash';
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

type MenuItemType = ItemType<{
  key: React.Key;
  path?: string;
  icon?: React.ReactNode;
  label?: string;
  children?: MenuItemType[];
}>;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { styles } = useStyles();
  const access = useAccess();

  // 构造菜单
  function generateMenus(menus: MenuObject[]): MenuItemType[] {
    function travel(menus: MenuObject[]) {
      return menus.map((menu) => {
        const row: MenuItemType = pick(menu, ['path', 'key', 'type', 'label']);
        // 避免动态渲染，推荐使用样式
        // row.label = menu?.type === 'group' && collapsed ? undefined : row.label
        row.icon = menu?.icon && <Icon name={menu.icon} />;
        if (isArray(menu.children) && menu.children.length) {
          row.children = travel(menu.children);
        }
        return row;
      });
    }
    return travel(menus);
  }

  // 权限点集合
  const permissions = useMemo(() => {
    return Object.keys(access).filter((key) => access[key]);
  }, [JSON.stringify(access)]);

  // 如需远程渲染菜单
  // const { routes: asyncRoutes } = useAppSelector((state) => state.user);

  // 菜单
  const { menus, selectedKeys, openKeys, setOpenKeys } = useMenu(
    // 菜单渲染部分截取，根据需要自行调整
    asyncRoutes.find((row) => row.path === '/')?.children,
    permissions,
  );

  // 菜单项
  const menuItems = useMemo(() => generateMenus(menus), [menus]);

  return (
    <>
      <Sider
        collapsed={collapsed}
        className={styles.ghost}
        breakpoint="lg"
        width={240}
        collapsedWidth={64}
      />
      <Sider
        collapsed={collapsed}
        className={styles.root}
        breakpoint="lg"
        width={240}
        collapsedWidth={64}
        onCollapse={(state) => setCollapsed(state)}
      >
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                iconSize: 18,
                itemBorderRadius: 0,
                itemMarginBlock: 0,
                itemMarginInline: 0,
                collapsedIconSize: 18,
                itemHeight: 46,
                iconMarginInlineEnd: 12,
                groupTitleFontSize: 12,
                padding: 24,
              },
            },
          }}
        >
          <Menu
            className={styles.menu}
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            mode="inline"
            inlineIndent={28}
            items={menuItems}
            _internalRenderMenuItem={(dom, props) => {
              const { elementRef, ...reset } = dom.props;
              return <Link to={props.path} ref={elementRef} {...reset} />;
            }}
            onOpenChange={(keys) => setOpenKeys(keys)}
          />
        </ConfigProvider>
      </Sider>
    </>
  );
};

export default Sidebar;
