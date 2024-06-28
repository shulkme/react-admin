// +---------------------------------
// | 本地路由表
// +---------------------------------

import type { RouteObjectType } from '@/router/types';

export const DEFAULT_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const SIGNUP_ROUTE = '/signup';

const routes: RouteObjectType[] = [
  {
    path: DEFAULT_ROUTE,
    key: 'root',
    name: 'Root',
    component: '/layouts',
    children: [
      {
        key: 'index',
        index: true,
        name: 'Home',
        fullPath: '/',
        hideInMenu: true,
        redirect: '/pages/dashboards/blog',
      },
      {
        key: 'pages',
        type: 'group',
        name: 'Pages',
        path: 'pages',
        children: [
          {
            name: 'Dashboards',
            key: 'pages.dashboards',
            icon: 'waterfall-flow-tones',
            path: 'dashboards',
            children: [
              {
                index: true,
                key: 'pages.dashboards.blog',
                name: 'Blog',
                path: 'blog',
                fullPath: '/pages/dashboards/blog',
                component: '/pages/pages/dashboards/blog',
                // access: 'pages.dashboards.welcome',
              },
              {
                key: 'pages.dashboards.fashion',
                name: 'Fashion',
                path: 'fashion',
                fullPath: '/pages/dashboards/fashion',
                component: '/pages/pages/dashboards/fashion',
              },
              {
                key: 'pages.dashboards.ecommerce',
                name: 'Ecommerce',
                path: 'ecommerce',
                fullPath: '/pages/dashboards/ecommerce',
                component: '/pages/pages/dashboards/ecommerce',
              },
              {
                key: 'pages.dashboards.team',
                name: 'Team',
                path: 'team',
                fullPath: '/pages/dashboards/team',
                component: '/pages/pages/dashboards/team',
              },
              {
                key: 'pages.dashboards.project',
                name: 'Project',
                path: 'project',
                fullPath: '/pages/dashboards/project',
                component: '/pages/pages/dashboards/project',
              },
              {
                key: 'pages.dashboards.todo',
                name: 'Todo',
                path: 'todo',
                fullPath: '/pages/dashboards/todo',
                component: '/pages/pages/dashboards/todo',
              },
              {
                key: 'pages.dashboards.crypto',
                name: 'Crypto',
                path: 'crypto',
                fullPath: '/pages/dashboards/crypto',
                component: '/pages/pages/dashboards/crypto',
              },
            ],
          },
          {
            name: 'Authorisation',
            key: 'pages.authorisation',
            icon: 'shield-lock-tones',
            children: [
              {
                key: 'login',
                name: 'Login',
                fullPath: '/login',
              },
              {
                key: 'signup',
                name: 'Signup',
                fullPath: '/signup',
              },
              {
                key: 'forgot-password',
                name: 'Forgot Password',
                fullPath: '/forgot-password',
              },
              {
                key: 'roles',
                name: 'Roles',
                fullPath: '/roles',
              },
              {
                key: 'permissions',
                name: 'Permissions',
                fullPath: '/permissions',
              },
              {
                key: 'organization',
                name: 'Organization',
                fullPath: '/organization',
              },
            ],
          },
          {
            name: 'Settings',
            key: 'pages.settings',
            icon: 'gear-2-tones',
            path: 'settings',
            fullPath: '/pages/settings',
          },
          {
            name: 'Profile',
            key: 'pages.profile',
            icon: 'contacts-tones',
            path: 'profile',
            fullPath: '/pages/profile',
          },
          {
            name: 'Utility',
            key: 'pages.utility',
            icon: 'apps-tones',
            path: 'utility',
            fullPath: '/pages/utility',
          },
        ],
      },
      {
        key: 'layouts',
        type: 'group',
        name: 'Layouts',
        path: 'layouts',
        children: [
          {
            name: 'Table',
            key: 'layouts.table',
            icon: 'table-chart-2-tones',
            path: 'table',
            children: [
              {
                name: 'Basic',
                key: 'layouts.table.basic',
                path: 'basic',
                fullPath: '/layouts/table/basic',
                component: '/pages/layouts/table/basic',
              },
              {
                name: 'Group',
                key: 'layouts.table.group',
                path: 'group',
                fullPath: '/layouts/table/group',
                component: '/pages/layouts/table/group',
              },
              {
                name: 'Drag',
                key: 'layouts.table.drag',
                path: 'drag',
                fullPath: '/layouts/table/drag',
                component: '/pages/layouts/table/drag',
              },
              {
                name: 'Filter',
                key: 'layouts.table.filter',
                path: 'filter',
                fullPath: '/layouts/table/filter',
                component: '/pages/layouts/table/filter',
              },
            ],
          },
          {
            name: 'List',
            key: 'layouts.list',
            icon: 'list-view-tones',
            path: 'list',
            fullPath: '/layouts/list',
          },
          {
            name: 'Flex',
            key: 'layouts.flex',
            icon: 'column-tones',
            path: 'flex',
            fullPath: '/layouts/flex',
          },
          {
            name: 'Grid',
            key: 'layouts.grid',
            icon: 'grid-tones',
            path: 'grid',
            children: [
              {
                key: 'layouts.grid.posts',
                name: 'Posts',
                path: 'posts',
                fullPath: '/layouts/grid/posts',
                component: '/pages/layouts/grid/posts',
              },
              {
                key: 'layouts.grid.users',
                name: 'Users',
                path: 'users',
                fullPath: '/layouts/grid/users',
                component: '/pages/layouts/grid/users',
              },
              {
                key: 'layouts.grid.tasks',
                name: 'Tasks',
                path: 'tasks',
                fullPath: '/layouts/grid/tasks',
                component: '/pages/layouts/grid/tasks',
              },
              {
                key: 'layouts.grid.groups',
                name: 'Groups',
                path: 'groups',
                fullPath: '/layouts/grid/groups',
                component: '/pages/layouts/grid/groups',
              },
            ],
          },
        ],
      },
      {
        key: 'apps',
        type: 'group',
        name: 'Apps',
        path: 'apps',
        children: [
          {
            name: 'Ecommerce',
            key: 'apps.ecommerce',
            icon: 'cart-tones',
            path: 'ecommerce',
            children: [
              {
                key: 'apps.ecommerce.products',
                name: 'Products',
                path: 'products',
                fullPath: '/apps/ecommerce/products',
                component: '/pages/apps/ecommerce/products',
              },
              {
                key: 'apps.ecommerce.orders',
                name: 'Orders',
                path: 'orders',
                fullPath: '/apps/ecommerce/orders',
                component: '/pages/apps/ecommerce/orders',
              },
              {
                key: 'apps.ecommerce.customers',
                name: 'Customers',
                path: 'customers',
                fullPath: '/apps/ecommerce/customers',
                component: '/pages/apps/ecommerce/customers',
              },
              {
                key: 'apps.ecommerce.shops',
                name: 'Shops',
                path: 'shops',
                fullPath: '/apps/ecommerce/shops',
                component: '/pages/apps/ecommerce/shops',
              },
              {
                key: 'apps.ecommerce.checkout',
                name: 'Checkout',
                path: 'checkout',
                fullPath: '/apps/ecommerce/checkout',
                component: '/pages/apps/ecommerce/checkout',
              },
            ],
          },
          {
            name: 'Email',
            key: 'apps.email',
            icon: 'mail-tones',
            path: 'email',
            fullPath: '/apps/email',
          },
          {
            name: 'Chat',
            key: 'apps.chat',
            icon: 'message-circle-2-tones',
            path: 'chat',
            fullPath: '/apps/chat',
          },
          {
            name: 'Projects',
            key: 'apps.projects',
            icon: 'box-tones',
            path: 'projects',
            fullPath: '/apps/projects',
          },
          {
            name: 'Tasks',
            key: 'apps.tasks',
            icon: 'document-check-tones',
            path: 'tasks',
            fullPath: '/apps/tasks',
          },
          {
            name: 'Crypto',
            key: 'apps.crypto',
            icon: 'wallet-tones',
            path: 'crypto',
            fullPath: '/apps/crypto',
          },
          {
            name: 'Invoices',
            key: 'apps.invoices',
            icon: 'seal-tones',
            path: 'invoices',
            fullPath: '/apps/invoices',
          },
          {
            name: 'Medias',
            key: 'apps.medias',
            icon: 'file-box-tones',
            path: 'medias',
            fullPath: '/apps/medias',
          },
        ],
      },
      {
        key: 'components',
        type: 'group',
        name: 'Components',
        path: 'components',
        children: [
          {
            name: 'Forms',
            key: 'components.forms',
            icon: 'switch-button-tones',
            path: 'forms',
            fullPath: '/components/forms',
          },
          {
            name: 'Charts',
            key: 'components.charts',
            icon: 'ranking-tones',
            path: 'charts',
            fullPath: '/components/charts',
          },
          {
            name: 'Icons',
            key: 'components.icons',
            icon: 'apps-3-tones',
            path: 'icons',
            fullPath: '/components/icons',
          },
          {
            name: 'Editors',
            key: 'components.editors',
            icon: 'pen-tones',
            path: 'editors',
            fullPath: '/components/editors',
          },
        ],
      },
    ],
  },
  {
    key: 'auth',
    component: '/layouts/auth',
    children: [
      {
        path: LOGIN_ROUTE,
        key: 'login',
        component: '/pages/auth/login',
      },
      {
        path: SIGNUP_ROUTE,
        key: 'signup',
        component: '/pages/auth/signup',
      },
    ],
  },
  {
    path: '*',
    key: 'not-found',
    component: '/pages/exception/404',
  },
];

export default routes;
