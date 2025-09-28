# App PC

PC Web Application built with Nuxt 3.

## 项目简介

这是一个基于 Nuxt 3 构建的 PC 端 Web 应用，支持服务端渲染 (SSR) 和现代化的开发体验。

## 技术栈

- **Nuxt 3**: Vue.js 的全栈框架
- **Vue 3**: 渐进式 JavaScript 框架
- **TypeScript**: 类型安全的 JavaScript 超集
- **Vite**: 现代前端构建工具
- **ESLint**: 代码质量检查工具

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

启动开发服务器：

```bash
# pnpm
pnpm run dev
```

开发服务器将在以下地址启动：
- **默认地址**: `http://localhost:3000`
- **如果端口被占用**: 系统会自动选择可用端口（如 `http://localhost:3001`）

### 开发功能

- ✅ 热重载 (Hot Reload)
- ✅ TypeScript 支持
- ✅ ESLint 代码检查
- ✅ Nuxt DevTools (按 `Shift + Alt + D` 打开)
- ✅ 自动导入组件和工具函数

## 项目结构

```
app-pc/
├── assets/           # 静态资源 (CSS, 图片等)
├── components/       # Vue 组件 (自动导入)
├── layouts/          # 布局组件
├── pages/            # 页面路由 (基于文件的路由)
├── plugins/          # 插件
├── middleware/       # 中间件
├── server/           # 服务端 API 路由
├── public/           # 静态文件 (直接访问)
├── nuxt.config.ts    # Nuxt 配置文件
├── app.vue           # 根组件
└── package.json      # 项目依赖
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

## 部署

项目支持多种部署方式：

- **静态生成**: `pnpm run generate`
- **服务端渲染**: `pnpm run build` + `pnpm run preview`
- **Docker 部署**: 可配置 Dockerfile 进行容器化部署

## 开发指南

### 添加新页面

在 `pages/` 目录下创建 `.vue` 文件：

```bash
# 创建 about 页面
touch pages/about.vue
```

### 添加组件

在 `components/` 目录下创建组件，会自动导入：

```bash
# 创建 Header 组件
touch components/Header.vue
```

### API 路由

在 `server/api/` 目录下创建 API 端点：

```bash
# 创建用户 API
touch server/api/users.get.ts
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.