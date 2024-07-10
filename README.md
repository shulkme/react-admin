<div align="center">

<h1 >
    <span><img height="128" src="https://em-content.zobj.net/source/microsoft-teams/363/dolphin_1f42c.png" width="128"/></span><br>
    <span>React Admin</span>
</h1>

基于React开箱即用的企业级中后台框架

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
本项目基于常见的中后台开发框架，并以此为开发规范，该规范仅用于组织代码，并发强制性要求，可根据需要调整结构。
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
本项目基于[React Router V6](https://reactrouter.com/en/main)实现路由功能，为实现复杂的业务需求，基于路由表routes.ts动态生成路由，若只需简单路由，可重写router.tsx，并按照[React Router V6](https://reactrouter.com/en/main)文档构建路由器。

路由约定：

- `/pages/**/index.tsx` 页面组件
- `/pages/**/loading.tsx` 页面占位组件
- `/layouts/**/index.tsx` 布局组件
- `/layouts/**/loading.tsx` 布局占位组件

路由特性：

- 支持远程路由，通过远程加载路由表动态生成路由
- 支持权限路由，支持根据用户角色、权限组、私有菜单动态渲染路由
- 支持动态组件，页面组件通过`React.load()`加载，且可以添加占位组件loading.tsx，类似next.js的[Routing](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)

路由选项：

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
### 布局
### 页面
### 组件
### 图标
### 状态管理
### 请求
### 国际化
### Mock


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


## ❤️ 赞助

暂无

## 👻 许可

[MIT协议](LICENSE)
