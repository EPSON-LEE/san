FROM node:18-alpine

WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 只复制 package.json 文件
COPY package.json ./

# 安装依赖
RUN pnpm install

# 复制源代码（不包括 node_modules）
COPY . .

# 暴露端口
EXPOSE 4000

# 启动开发服务器
CMD ["pnpm", "run", "start:dev"]