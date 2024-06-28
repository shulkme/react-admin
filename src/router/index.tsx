// +---------------------------------
// | 路由器，支持本地和远程路由，支持组件或对象渲染
// | 约定：所有布局组件放置layouts目录，所有页面组件放置pages目录，加载组件放置同目录底下
// +---------------------------------

import PermissionRoute from '@/components/permission-route';
import type { RouteObjectType } from '@/router/types';
import { isArray, pick, trim } from 'lodash';
import React, { ComponentType, Suspense, lazy } from 'react';
import { Navigate, Route, RouteObject } from 'react-router-dom';
// import ProLayout from "@/layouts";
// import Welcome from "@/pages/dashboards/personal/welcome";
// import Ecommerce from "@/pages/dashboards/personal/ecommerce";
// import Signup from "@/pages/auth/signup";
// import Login from "@/pages/auth/login";
// import ExceptionNotFound from "@/pages/exception/404";
// import routes from "@/router/routes";

// 动态页面组件
const lazyPages = import.meta.glob([
  '../pages/**/index.tsx',
  '../layouts/**/index.tsx',
]) as Record<string, () => Promise<{ default: ComponentType }>>;

// 静态加载组件
const loadingPages = import.meta.glob(
  ['../pages/**/loading.tsx', '../layouts/**/loading.tsx'],
  {
    eager: true,
    import: 'default',
  },
) as Record<string, React.FunctionComponent>;

// 解析路由
function parserRoute(route: RouteObjectType): RouteObject {
  const component: RouteObject = pick(route, ['path', 'index', 'key']);
  if (route?.redirect) {
    // 重定向
    component.element = React.createElement(Navigate, {
      to: route.redirect,
    });
  } else if (route.component) {
    try {
      const filename = trim(
        route.component.replace(new RegExp('(index\\.tsx|\\.tsx)$'), ''),
        '/',
      );
      const indexKey = `../${[filename, 'index.tsx'].filter(Boolean).join('/')}`;
      const loadingKey = `../${[filename, 'loading.tsx'].filter(Boolean).join('/')}`;
      if (lazyPages[indexKey]) {
        const LazyComponent = lazy(lazyPages[indexKey]);
        const FallbackComponent = loadingPages[loadingKey];
        component.element = React.createElement(
          PermissionRoute, // HOC 充当路由守卫
          { access: route.access },
          React.createElement(
            Suspense,
            {
              fallback:
                FallbackComponent && React.createElement(FallbackComponent),
            },
            React.createElement(LazyComponent),
          ),
        );
      }
    } catch (e) {
      // console.log('route parser failed')
    }
  }
  return component;
}

// Mode 1: 使用组件渲染路由
export function renderRoutes(routes: RouteObjectType[]): React.ReactNode[] {
  return routes.map((route) => {
    const component = parserRoute(route);
    let children: React.ReactNode[] = [];
    if (isArray(route.children) && route.children.length) {
      children = renderRoutes(route.children);
    }
    return React.createElement(
      Route,
      {
        ...pick(component, ['index', 'element', 'path']),
      },
      children,
    );
  });
}

// Mode 2: 使用对象构造路由
export function generateRoutes(routes: RouteObjectType[]): RouteObject[] {
  return routes.map((route) => {
    const component: RouteObject = parserRoute(route);
    if (isArray(route.children) && route.children.length) {
      component.children = generateRoutes(route.children);
    }
    return component;
  });
}

// 不考虑远程路由，可以直接转换
// const router = createBrowserRouter(generateRoutes(routes))
// export default router

// 测试路由
// export const testRoutes: RouteObject[] = [
//   {
//     path: '/',
//     element: <ProLayout />,
//     children: [
//       {
//         path: 'dashboards',
//         children: [
//           {
//             path: 'personal',
//             children: [
//               {
//                 path: 'welcome',
//                 element: <Welcome />
//               },
//               {
//                 path: 'ecommerce',
//                 element: <Ecommerce />
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     path: '/signup',
//     element: <Signup />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '*',
//     element: <ExceptionNotFound />
//   }
// ]
// export const testRouter = createBrowserRouter(testRoutes)
