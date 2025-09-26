#!/usr/bin/env node

/**
 * 项目部署脚本
 * 替代原有的 Shell 脚本，使用 JavaScript 实现部署逻辑
 */

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// 加载环境变量
function loadEnvironmentVariables() {
  const env = process.env.NODE_ENV || 'production';
  const envFiles = [
    path.join(rootDir, `.env.${env}`),      // .env.production 或 .env.development
    path.join(rootDir, '.env.local'),       // 本地覆盖文件
    path.join(rootDir, '.env')              // 默认文件
  ];

  let loaded = false;
  for (const envFile of envFiles) {
    if (fs.existsSync(envFile)) {
      dotenv.config({ path: envFile });
      console.log(`✓ 已加载环境变量文件: ${envFile}`);
      loaded = true;
      break;
    }
  }

  if (!loaded) {
    console.log('⚠ 未找到任何 .env 文件，使用默认配置');
  }
}

loadEnvironmentVariables();

// 颜色输出函数
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

// 日志函数
const log = {
  info: (msg) => console.log(`${colors.blue}[INFO]${colors.reset} ${msg}`),
  success: (msg) =>
    console.log(`${colors.green}[SUCCESS]${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}[WARNING]${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}[ERROR]${colors.reset} ${msg}`),
};

// 执行命令并打印输出
function runCommand(command, options = {}) {
  log.info(`执行命令: ${command}`);
  try {
    const result = execSync(command, {
      cwd: options.cwd || rootDir,
      encoding: "utf8",
      ...options,
    });
    console.log(result); // 打印标准输出
    return { success: true, output: result };
  } catch (error) {
    console.error(error.stderr || error.message); // 打印错误输出
    log.error(`命令执行失败: ${error.message}`);
    return { success: false, error };
  }
}

// 检查文件是否存在
function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

// 主函数
async function main() {
  try {
    // 1. 构建所有应用
    log.info("开始构建所有应用...");
    const buildResult = runCommand("pnpm build:all");
    if (!buildResult.success) {
      log.error("构建失败，部署终止");
      process.exit(1);
    }
    log.success("所有应用构建成功");

    // 2. 检查 Docker 是否可用
    log.info("检查 Docker 环境...");
    const dockerResult = runCommand("docker --version", { stdio: "pipe" });
    if (!dockerResult.success) {
      log.error("Docker 不可用，请确保已安装 Docker");
      process.exit(1);
    }
    log.success("Docker 环境正常");

    // 3. 检查部署配置文件
    const prodComposeFile = path.join(
      rootDir,
      "deployments",
      "docker-compose.prod.yml"
    );
    if (!checkFileExists(prodComposeFile)) {
      log.error(`生产环境配置文件不存在: ${prodComposeFile}`);
      process.exit(1);
    }
    log.success("部署配置文件检查通过");

    // 4. 执行部署
    log.info("开始部署应用...");
    const deployResult = runCommand(
      `docker-compose -f ${prodComposeFile} up -d --build`
    );
    if (!deployResult.success) {
      log.error("部署失败");
      process.exit(1);
    }

    // 5. 检查部署状态
    log.info("检查部署状态...");
    const statusResult = runCommand(`docker-compose -f ${prodComposeFile} ps`, {
      stdio: "pipe",
    });
    if (!statusResult.success) {
      log.warn("无法获取部署状态，请手动检查");
    } else {
      log.success("部署完成，服务已启动");
    }

    log.success("部署流程执行完毕");
  } catch (error) {
    log.error(`部署过程中发生错误: ${error.message}`);
    process.exit(1);
  }
}

// 执行主函数
main().catch((error) => {
  log.error(`未捕获的错误: ${error.message}`);
  process.exit(1);
});
