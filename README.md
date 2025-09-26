# Decode 项目

这是一个基于 pnpm 工作空间的 monorepo 项目，包含前端和后端应用。

## 目录结构

```
decode/
├── apps/                   # 应用程序目录
│   ├── h5/                 # 移动端 H5 应用
│   ├── pc/                 # PC 端 React 应用
│   └── server/             # 后端 NestJS 服务
├── packages/               # 共享包目录
│   ├── config/             # 共享配置
│   ├── shared/             # 共享代码
│   │   ├── src/
│   │   │   ├── api/        # API 相关代码
│   │   │   ├── constants/  # 常量定义
│   │   │   └── utils/      # 工具函数
│   └── ui/                 # 共享 UI 组件
│       └── src/
│           └── components/ # UI 组件
├── deployments/            # 部署相关配置
│   ├── docker-compose.yml  # 开发环境 Docker 配置
│   ├── docker-compose.prod.yml # 生产环境 Docker 配置
│   └── nginx.conf          # Nginx 配置
├── scripts/                # 脚本文件
│   ├── build-all.sh        # 构建所有应用
│   └── deploy.sh           # 部署脚本
└── .github/                # GitHub 相关配置
    └── workflows/          # GitHub Actions 工作流
        ├── ci.yml          # 持续集成配置
        └── cd.yml          # 持续部署配置
```

## 安装依赖

本项目使用 pnpm 作为包管理器。请确保已安装 Node.js (推荐 v18+) 和 pnpm。

1. 安装 pnpm (如果尚未安装):

```bash
npm install -g pnpm
```

2. 安装项目依赖:

```bash
# 在项目根目录执行
pnpm install
```

## 启动项目

### 开发环境

#### 方法一：启动所有服务

```bash
# 在项目根目录执行
pnpm dev
```

这将启动所有工作空间中的开发服务器。

#### 方法二：启动特定服务

```bash
# 启动后端服务
cd apps/server
pnpm dev

# 启动 PC 端前端
cd apps/pc
pnpm dev

# 启动移动端 H5
cd apps/h5
pnpm dev
```

#### 方法三：使用 Docker Compose

```bash
# 在项目根目录执行
docker-compose up
```

### 访问应用

- PC 端前端: http://localhost:5173
- 后端 API: http://localhost:4000
- MongoDB 数据库: mongodb://localhost:27018

## 构建项目

```bash
# 构建所有应用
pnpm build

# 构建特定应用
cd apps/pc
pnpm build
```

## 部署项目

### 使用 Docker Compose 部署

#### 开发环境

```bash
docker-compose -f deployments/docker-compose.yml up -d
```

#### 生产环境

```bash
docker-compose -f deployments/docker-compose.prod.yml up -d
```

### 使用脚本部署

```bash
# 构建所有应用
./scripts/build-all.sh

# 部署应用
./scripts/deploy.sh
```

## 项目结构说明

- **apps/**: 包含所有独立应用
  - **server/**: NestJS 后端服务
  - **pc/**: React PC 端应用
  - **h5/**: 移动端 H5 应用

- **packages/**: 包含所有共享代码包
  - **shared/**: 共享业务逻辑、API 和工具函数
  - **ui/**: 共享 UI 组件库
  - **config/**: 共享配置

- **deployments/**: 包含部署相关配置文件
  - **docker-compose.yml**: 开发环境 Docker 配置
  - **docker-compose.prod.yml**: 生产环境 Docker 配置
  - **nginx.conf**: Nginx 配置文件

- **scripts/**: 包含自动化脚本
  - **build-all.sh**: 构建所有应用的脚本
  - **deploy.sh**: 部署脚本

- **.github/workflows/**: GitHub Actions 工作流配置
  - **ci.yml**: 持续集成配置
  - **cd.yml**: 持续部署配置