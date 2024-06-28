export interface RouteRaw {
  key: string;
  name?: string;
  icon?: string;
  hideInMenu?: boolean;
  access?: string;
  component?: string;
  path?: string; // 支持相对定位，路由嵌套
  fullPath?: string; // 用于菜单导航
}

export interface RouteWithChildren extends RouteRaw {
  index?: undefined;
  type?: 'group';
  children?: RouteObjectType[];
  redirect?: undefined;
}

export interface RouteWithoutChildren extends RouteRaw {
  index?: boolean;
  children?: undefined;
  type?: undefined;
  redirect?: string; // 重定向
}

export type RouteObjectType = RouteWithChildren | RouteWithoutChildren;
