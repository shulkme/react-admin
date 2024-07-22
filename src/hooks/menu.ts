import { IconName } from '@/components/icon';
import type { RouteObjectType } from '@/router/types';
import { flatMap, isArray, omit, pick, union } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type MenuObject = {
  key: string;
  path?: string;
  icon?: IconName;
  label?: string;
  type?: 'group';
  children?: MenuObject[];
};

// 路由转菜单
const route2menu = (
  routes?: RouteObjectType[],
  permissions?: string[],
): MenuObject[] => {
  return (routes || [])
    .filter(
      (route) =>
        !route.hideInMenu &&
        (!route.access || permissions?.includes(route.access)),
    )
    .map((route) => {
      const menu: MenuObject = {
        ...pick(route, ['type', 'key']),
        icon: (route?.icon || 'x') as IconName,
        path: route.fullPath || route.path,
        label: route?.name,
      };

      if (isArray(route.children) && route.children.length) {
        menu.children = route2menu(route.children, permissions);
        if (!menu.children.length) delete menu.children;
      }

      return menu;
    });
};

// 扁平菜单
const flattenMenus = (menus: MenuObject[]): Omit<MenuObject, 'children'>[] => {
  return flatMap(menus, (menu) => {
    if (menu.children && isArray(menu.children)) {
      return [omit(menu, ['children']), ...flattenMenus(menu.children)];
    } else {
      return menu;
    }
  });
};

const useMenu = (routes?: RouteObjectType[], permissions?: string[]) => {
  // 菜单映射
  const menuMap = useRef<Map<string, Set<string>>>(new Map());

  // 当前地址
  const { pathname } = useLocation();

  // 已选中的菜单keys
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  // 已展开的菜单keys
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  // 当前菜单
  const menus = useMemo(
    () => route2menu(routes, permissions),
    [routes, permissions],
  );

  // 更新菜单映射
  useEffect(() => {
    flattenMenus(menus).forEach((menu) => {
      if (menu.path) {
        const map = menuMap.current.get(menu.path);
        if (map) {
          map.add(menu.key);
        } else {
          menuMap.current.set(menu.path, new Set([menu.key]));
        }
      }
    });
  }, [menus]);

  // 菜单状态更新事件
  function updateMenuStatus() {
    const pathKeys = pathname.split('/');
    let newSelectedKeys: string[] = [];
    let newOpenKeys: string[] = [...openKeys];

    while (pathKeys.length) {
      const currentKey = pathKeys.join('/');

      const set = menuMap.current.get(currentKey);

      if (set) {
        const keys = Array.from(set);
        newSelectedKeys = union(newSelectedKeys, keys);
        newOpenKeys = union(newOpenKeys, keys);
      }
      pathKeys.pop();
    }

    setSelectedKeys(newSelectedKeys);
    setOpenKeys(newOpenKeys);
  }

  // 监听当前地址
  useEffect(() => {
    updateMenuStatus();
  }, [pathname]);

  return {
    menus,
    selectedKeys,
    setSelectedKeys,
    openKeys,
    setOpenKeys,
  };
};

export default useMenu;
