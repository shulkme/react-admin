> \[!WARNING]
>
> 部分组件及页面尚未完成，不建议应用于生产环境

<div align="center">

<h1 >
    <span><img height="128" src="https://em-content.zobj.net/source/microsoft-teams/363/dolphin_1f42c.png" width="128"/></span><br>
    <span>React Admin</span>
</h1>

基于React开箱即用的企业级中后台框架

[![][react-shield]][react-link] [![][vite-shield]][vite-link] [![][typescript-shield]][typescript-link] [![][react-router-shield]][react-router-link] [![][ant-design-shield]][ant-design-link] [![][react-redux-shield]][react-redux-link] [![][lodash-shield]][lodash-link] [![][axios-shield]][axios-link]


<img height="auto" src="./public/screenshot.png" width="100%"/>

</div>


## ✨ 特性

- 丰富业务组件，除了基础的UI组件外，还提供常用的业务组件示例
- 海量页面模板，提供多种场景页面，如：页面、布局、应用等
- 高度可自定义，减少组件间耦合度，允许开发者自定义或重新封装组件
- 积极的技术栈，积极跟进主流技术栈，依赖快速更新，高效完成业务功能

## 🍭 使用

```shell
$ git clone https://github.com/shulkme/react-admin.git
$ cd react-admin
$ pnpm install
$ pnpm dev
```

## 🥳 文档

### 项目结构
项目结构基于常见的中后台开发框架，并以此为开发规范，该规范仅用于组织代码，非强制性要求，可根据需要调整结构。
```bash
├── public                  # 公开目录
│   └── faviocn.png         # Favicon
├── src
│   ├── apis                # 接口服务
│   ├── assets              # 本地静态资源
│   ├── components          # 通用组件
│   ├── config              # 全局配置
│   ├── hooks               # 通用钩子
│   ├── icons               # 本地图标
│   ├── layouts             # 通用布局
│   ├── mocks               # 模拟数据
│   ├── pages               # 页面组件
│   ├── router              # 路由管理
│   ├── stores              # 状态管理
│   ├── utils               # 通用工具
│   ├── app.tsx             # 根组件
│   ├── main.tsx            # 主应用
│   └── vite-env.d.ts       # 环境类型声明
├── .env
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### 路由
本项目基于[React Router V6](https://reactrouter.com/en/main)构建路由，通过路由表routes.ts配置动态生成路由，可满足大部分应用场景，当然，若只需简单路由，可重写router.tsx，并按照[React Router V6](https://reactrouter.com/en/main)文档构建路由器即可。

1. 路由约定：
   - `/pages/**/index.tsx` 页面组件
   - `/pages/**/loading.tsx` 页面占位组件
   - `/layouts/**/index.tsx` 布局组件
   - `/layouts/**/loading.tsx` 布局占位组件
2. 路由特性：
   - 支持远程路由，通过远程加载路由表动态生成路由
   - 支持权限路由，支持根据用户角色、权限组、私有菜单动态渲染路由
   - 支持动态组件，页面组件通过`React.lazy()`加载，且可以添加占位组件loading.tsx，类似next.js的[Routing](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)模式，对复杂页面，优化视觉过渡
3. 路由选项：
    
    | 选项         | 类型       | 必填 | 说明                |
    |------------|----------|----|-------------------|
    | key        | string   | 是  | 路由唯一标识            |
    | name       | string   | 否  | 页面名称或翻译key        |
    | icon       | string   | 否  | 图标名称              |
    | hideInMenu | boolean  | 否  | 是否在菜单中隐藏          |
    | access     | string   | 否  | 路由权限点             |
    | component  | string   | 否  | 路由组件路径            |
    | path       | string   | 否  | 路由地址，支持嵌套、动态、相对路由 |
    | fullPath   | string   | 否  | 完整路由地址，用于菜单导航     |
    | index      | boolean  | 否  | 缺省路由，默认显示当前路由     |
    | type       | 'group'  | 否  | 路由类型，目前用于菜单类型渲染   |
    | children   | Array    | 否  | 子路由               |
    | redirect   | string   | 否  | 重定向路由，自动跳转        |

### 配置
主要放置一些构建时配置，采用硬编码模式，例如Ant Design的主题配置 `theme.ts`

### 页面
约定：页面组件必须放在 `/src/pages/` 底下，可嵌套多级目录，但必须以 `index.tsx` 命名，如果需要加载反馈，则在同级目录底下添加 `loading.tsx` 文件，系统会自动加载，需要注意的时，页面组件都是懒加载，避免首屏加载耗时问题。

### 布局
约定：通用布局组件放在 `/src/layouts/` 目录中，本质上和页面组件类似，只不过布局组件通常需要包含 `<Outlet />` 组件用于路由嵌套，命名及其它用法和页面组件一致。

小技巧：对于私有布局组件，可直接使用页面组件，并添加 `<Outlet />` 组件用于嵌套页面，例如：采用Tabs切换的局部内容~

### 通用组件
封装通用组件用于减少页面间耦合，目前通用组件如下：

| 组件名             | 用途   |
|-----------------|------|
| Access          | 权限校验 |
| Header          | 顶部导航 |
| Icon            | 图标组件 |
| PageContainer   | 页面容器 |
| PageLoading     | 页面加载 |
| PermissionRoute | 权限路由 |
| ProgressBar     | 进度条  |
| Sidebar         | 侧边栏  |
| TableColumns    | 表格列项 |

### 图标库
图标库是最常见的组件，常见的应用程序中，图标用法有三种：

1. `动态图标库` 通过服务端获取图标，本地包含全部的图标组件，通过服务端指定图标加载，如：自定义菜单
2. `静态图标库` 本地图标文件，业务明确，图标引用随功能更新而更新
3. `复合图标库` 部分本地+不确定的远程图标

本项目采用 `复合图标库` 作为示例，本地图标库用于侧边栏菜单，动态图标库通常引用第三方图标库，项目使用 `lucide-react` 作为主要图标库。
封装了图标组件 `<Icon name="xxx"/>` ，动态加载本地图标目录 `/src/icons` 及第三方图标库，所有图标均为按需加载。


### 状态管理

基于 `Redux Toolkit`， 目前只有用户信息共享。


### 接口请求
项目基于 `axios` 封装带有队列控制的请求服务 `request`，防止重复请求，避免资源过载。

建议：通用接口放在 `/src/apis/` 目录，业务层接口放在 `/src/pages/**/service.ts` 。

示例：

```typescript
/**
 * 获取用户列表
 */
export function getUsers(params?: PageParams): Promise<PageResult<UserRecord>> {
  return request.get('/users', {
    params,
  });
}
```

### 国际化
并非所有的后台应用都需要国际化，添加国际化功能比去掉要来的容易一些，因此，本项目只有在示例页面及全局组件应用国际化，其它页面可以参考示例页面自行实现。

1. 添加国际化 `待完善`
   
2. 移除国际化 `待完善`

### Mock

项目基于Axios实现接口服务，在本地开发中，使用 [Axios Mock Adapter](https://github.com/ctimmerm/axios-mock-adapter) 拦截和模拟请求，具体使用方式参考 [官方文档](https://github.com/ctimmerm/axios-mock-adapter) 。

> Q: 为什么不使用mock.js ？
> 
> A: mock.js已经不再维护，而且不支持HTTP条件请求，如异常请求、响应格式化等，若简单的数据模拟也是不错的选择

## 🌈 依赖

> \[!TIP]
>
> 框架包含必要依赖和可选依赖，根据需要，自行删减依赖


### 必要

| Name             | Version | Document                                                    |
|------------------|---------|-------------------------------------------------------------|
| react            | 18.2.0  | [React](https://react.dev/)                                 |
| vite             | 5.2.0   | [Vite](https://cn.vitejs.dev/)                              |
| typescript       | 5.2.2   | [TypeScript](https://www.typescriptlang.org/zh/)            |
| react-router-dom | 6.23.1  | [React Router](https://reactrouter.com/en/main)             |
| antd             | 5.17.4  | [Ant Design](https://ant-design.antgroup.com/index-cn)      |
| axios            | 1.7.2   | [Axios](https://axios-http.com/zh/)                         |
| react-redux      | 9.1.2   | [React Redux](https://cn.redux.js.org/)                     |
| antd-style       | 3.6.2   | [Antd Style](https://ant-design.github.io/antd-style/zh-CN) |
| ahooks           | 3.8.0   | [AHooks](https://ahooks.js.org/zh-CN/)                      |
| lodash           | 4.17.21 | [Lodash](https://www.lodashjs.com/)                         |


### 可选

| Name               | Version | Document                                                             | Use        |
|--------------------|---------|----------------------------------------------------------------------|------------|
| axios-mock-adapter | 1.22.0  | [Axios Mock Adapter](https://github.com/ctimmerm/axios-mock-adapter) | 用于本地模拟接口请求 |
| lucide-react       | 0.379.0 | [Lucide](https://lucide.dev/)                                        | 主要图标库      |
| dnd-kit            | 6.1.0   | [dnd kit](https://dndkit.com/)                                       | 用于拖拽排序     |
| @antv/larkmap      | 2.2.4   | [LarkMap](https://larkmap.antv.antgroup.com/)                        | 地图图表       |
| @ant-design/plots  | 1.4.17  | [AntV](https://ant-design-charts.antgroup.com/)                      | 常用图表       |


## 🖥 浏览器兼容性


| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| --- | --- |---------------------------------------------------------------------------------------------------------------------------------------------------------| --- |
| Edge | 最近 2 个版本 | 最近 2 个版本                                                                                                                      | 最近 2 个版本 |

<br/>

## 👻 许可

[MIT协议](LICENSE)


[react-link]: https://react.dev/
[react-shield]: https://img.shields.io/badge/-React-05A5D1?style=flat-square&logo=react&logoColor=white&labelColor=black

[ant-design-link]: https://ant.design
[ant-design-shield]: https://img.shields.io/badge/-Ant%20Design-1677ff?labelColor=black&logo=antdesign&logoColor=white&style=flat-square

[typescript-link]: https://www.typescriptlang.org/zh/
[typescript-shield]: https://img.shields.io/badge/-Typescript-007ACC?style=flat-square&logo=typescript&logoColor=white&labelColor=black

[vite-link]: https://cn.vitejs.dev/
[vite-shield]: https://img.shields.io/badge/-Vite-FFC21A?style=flat-square&logo=vite&logoColor=white&labelColor=black

[react-router-link]: https://reactrouter.com/en/main
[react-router-shield]: https://img.shields.io/badge/-Router-F54250?style=flat-square&logo=react-router&logoColor=white&labelColor=black

[react-redux-link]: https://cn.redux.js.org/
[react-redux-shield]: https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white&labelColor=black

[axios-link]: https://axios-http.com/zh/
[axios-shield]: https://img.shields.io/badge/-Axios-671DDF?style=flat-square&logo=axios&logoColor=white&labelColor=black

[lodash-link]: https://www.lodashjs.com/
[lodash-shield]: https://img.shields.io/badge/-Lodash-3491FE?style=flat-square&logo=lodash&logoColor=white&labelColor=black
