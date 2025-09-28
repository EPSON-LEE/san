my-company-monorepo/
│
├── apps/                          # 🚀 所有可部署的应用（不可发布到 npm）
│   │
│   ├── server/                    # 🖥️ 后端服务（Node.js/NestJS/Express）
│   │   ├── src/
│   │   ├── Dockerfile             # 专用于 server 的 Dockerfile
│   │   ├── package.json
│   │   └── ...
│   │
│   ├── h5/                        # 📱 移动端 H5（SSR 或 SPA）
│   │   ├── src/
│   │   ├── public/
│   │   ├── next.config.js         # 如果是 Next.js
│   │   ├── Dockerfile             # H5 专用 Dockerfile
│   │   └── package.json
│   │
│   └── admin/                      # 💻 管理后台（React SPA）
│       ├── src/
│       ├── public/
│       ├── vite.config.ts         # 如果是 Vite
│       ├── Dockerfile             # PC 专用 Dockerfile
│       └── package.json
│
├── packages/                      # 📦 可复用的库（可发布到私有 npm）
│   │
│   ├── shared/                    # 🔗 共享代码（类型、工具、常量）
│   │   ├── src/
│   │   │   ├── api/               # API 类型定义（前后端共享）
│   │   │   ├── utils/             # 通用工具函数
│   │   │   └── constants/         # 全局常量
│   │   ├── package.json           # name: "@my/shared"
│   │   └── tsconfig.json
│   │
│   ├── ui/                        # 🎨 共享 UI 组件库（React/Vue）
│   │   ├── src/components/
│   │   ├── package.json           # name: "@my/ui"
│   │   └── ...
│   │
│   └── config/                    # ⚙️ 共享配置（ESLint, TS, Babel）
│       ├── eslint.config.js
│       ├── tsconfig.base.json
│       └── package.json
│
├── deployments/                   # 🐳 部署相关配置（可选，也可放 apps/ 内）
│   ├── nginx.conf                 # 反向代理配置
│   └── docker-compose.yml         # 本地开发 + 轻量生产编排
│
├── scripts/                       # 🛠️ 共享脚本（构建、部署、工具）
│   ├── build-all.sh
│   └── deploy.sh
│
├── .github/                       # 🤖 CI/CD 配置（GitHub Actions）
│   └── workflows/
│       ├── ci.yml                 # 代码检查 + 测试
│       └── cd.yml                 # 构建 + 部署
│
├── pnpm-workspace.yaml            # ✅ pnpm 工作区定义
├── package.json                   # 根配置（private: true）
├── tsconfig.json                  # 全局 TS 配置（继承 config）
├── README.md
└── .gitignore