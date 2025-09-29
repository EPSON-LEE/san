# 数据库集成指南

## 概述

本文档说明如何在 Nuxt 3 项目中集成数据库，将静态数据转换为动态数据库驱动的应用。

## 数据库选择

### 1. PostgreSQL (推荐)
```bash
# 安装 PostgreSQL 客户端
pnpm add @prisma/client prisma
pnpm add pg @types/pg
```

### 2. MySQL
```bash
# 安装 MySQL 客户端
pnpm add @prisma/client prisma
pnpm add mysql2
```

### 3. SQLite (开发环境)
```bash
# SQLite 不需要额外安装
pnpm add @prisma/client prisma
```

## 设置步骤

### 1. 安装依赖
```bash
cd apps/app-pc
pnpm add @prisma/client prisma
```

### 2. 初始化 Prisma
```bash
npx prisma init
```

### 3. 配置数据库连接
复制 `.env.example` 到 `.env` 并配置数据库连接：
```env
DATABASE_URL="postgresql://username:password@localhost:5432/ai_navigation"
```

### 4. 生成数据库客户端
```bash
npx prisma generate
```

### 5. 运行数据库迁移
```bash
npx prisma db push
# 或者使用迁移
npx prisma migrate dev --name init
```

### 6. 填充初始数据
```bash
npx prisma db seed
```

## 文件结构

```
apps/app-pc/
├── prisma/
│   ├── schema.prisma          # 数据库模式定义
│   └── seed.ts               # 初始数据填充
├── server/
│   ├── api/
│   │   ├── home-config.get.ts        # 原始静态API
│   │   ├── home-config-db.get.ts     # 直接数据库查询
│   │   └── home-config-service.get.ts # 使用服务层
│   └── utils/
│       └── database.ts               # 数据库连接管理
└── .env                             # 环境变量
```

## API 实现方式

### 方式1：直接在API路由中查询数据库
```typescript
// server/api/home-config-db.get.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const data = await prisma.tool.findMany()
  return data
})
```

### 方式2：使用服务层（推荐）
```typescript
// server/utils/database.ts
export class DatabaseService {
  async getHomeConfig() {
    // 数据库查询逻辑
  }
}

// server/api/home-config-service.get.ts
import { dbService } from '~/server/utils/database'

export default defineEventHandler(async (event) => {
  return await dbService.getHomeConfig()
})
```

## 数据迁移

### 从静态数据迁移到数据库

1. **创建迁移脚本**
```typescript
// scripts/migrate-data.ts
import { dbService } from '../server/utils/database'
import { homeConfig } from '../data/homeConfig'

async function migrateData() {
  // 将 homeConfig 数据插入数据库
}
```

2. **运行迁移**
```bash
npx tsx scripts/migrate-data.ts
```

## 性能优化

### 1. 连接池管理
```typescript
// server/utils/database.ts
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})
```

### 2. 查询优化
```typescript
// 使用 include 和 select 优化查询
const tools = await prisma.tool.findMany({
  select: {
    id: true,
    name: true,
    description: true,
  },
  include: {
    category: true,
  }
})
```

### 3. 缓存策略
```typescript
// 使用 Redis 或内存缓存
import { LRUCache } from 'lru-cache'

const cache = new LRUCache({ max: 100, ttl: 1000 * 60 * 5 })

export default defineEventHandler(async (event) => {
  const cacheKey = 'home-config'
  let data = cache.get(cacheKey)
  
  if (!data) {
    data = await dbService.getHomeConfig()
    cache.set(cacheKey, data)
  }
  
  return data
})
```

## 错误处理

```typescript
export default defineEventHandler(async (event) => {
  try {
    const data = await dbService.getHomeConfig()
    return data
  } catch (error) {
    console.error('数据库查询失败:', error)
    
    // 返回默认数据或错误响应
    throw createError({
      statusCode: 500,
      statusMessage: '获取数据失败'
    })
  }
})
```

## 开发工具

### Prisma Studio
```bash
npx prisma studio
```
在浏览器中可视化管理数据库数据。

### 数据库迁移
```bash
# 创建迁移
npx prisma migrate dev --name add_new_field

# 重置数据库
npx prisma migrate reset

# 部署迁移
npx prisma migrate deploy
```

## 部署注意事项

1. **环境变量**：确保生产环境配置正确的 `DATABASE_URL`
2. **迁移**：部署前运行 `npx prisma migrate deploy`
3. **连接数**：配置合适的数据库连接池大小
4. **备份**：定期备份生产数据库

## 下一步

1. 根据需求选择合适的数据库
2. 配置数据库连接
3. 运行迁移创建表结构
4. 填充初始数据
5. 更新API路由使用数据库
6. 测试功能完整性