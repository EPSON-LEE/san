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

## 环境变量配置

项目支持多环境配置，可以为开发和生产环境使用不同的环境变量。

### 环境文件优先级

系统会按以下优先级加载环境变量文件：

1. `.env.{NODE_ENV}` - 环境特定文件（如 `.env.production`、`.env.development`）
2. `.env.local` - 本地覆盖文件（通常不提交到版本控制）
3. `.env` - 默认环境文件

### 配置步骤

#### 开发环境配置

1. 复制开发环境模板：
```bash
cp .env.development .env.local
# 或直接使用
NODE_ENV=development pnpm dev
```

2. 开发环境特点：
   - 使用本地数据库
   - 详细的调试日志
   - 宽松的安全配置
   - 较高的请求限制

#### 生产环境配置

1. 复制生产环境模板：
```bash
cp .env.production .env
# 或设置环境变量
NODE_ENV=production pnpm deploy
```

2. 生产环境特点：
   - 使用 Docker 容器数据库
   - 简洁的日志输出
   - 严格的安全配置
   - 合理的请求限制

### 使用方法

#### 开发环境启动
```bash
# 使用开发环境配置
pnpm dev
# 或明确指定
NODE_ENV=development pnpm dev

# 使用生产环境配置进行开发
pnpm dev:prod
```

#### 生产环境部署
```bash
# 生产环境部署（默认）
pnpm deploy

# 开发环境部署
pnpm deploy:dev
```

### 环境变量文件说明

- `.env.development` - 开发环境专用配置
- `.env.production` - 生产环境专用配置
- `.env.local` - 本地覆盖配置（不会被提交）
- `.env.example` - 配置模板文件
```bash
# 应用环境
NODE_ENV=production

# 服务端口配置
BACKEND_PORT=4000
FRONTEND_PORT=80

# 数据库配置
MONGODB_VERSION=6.0
MONGODB_PORT=27017
MONGODB_USERNAME=admin
MONGODB_PASSWORD=your-secure-password
MONGODB_DATABASE=decode
DATABASE_URL=mongodb://mongodb:27017/decode

# API 配置
API_PREFIX=api
REACT_APP_API_URL=http://localhost:4000

# 日志配置
LOG_LEVEL=info

# JWT 配置
JWT_SECRET=your-jwt-secret-key

# 其他配置
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW_MS=900000
```

### 环境变量说明

- `NODE_ENV`: 应用运行环境 (development/production)
- `BACKEND_PORT`: 后端服务端口
- `FRONTEND_PORT`: 前端服务端口
- `MONGODB_*`: MongoDB 数据库相关配置
- `JWT_SECRET`: JWT 令牌加密密钥
- `API_PREFIX`: API 路径前缀
- `LOG_LEVEL`: 日志级别

**注意**: 生产环境中请务必修改默认密码和密钥！

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