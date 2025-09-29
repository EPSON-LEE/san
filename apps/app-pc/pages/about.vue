<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
    <div class="container mx-auto px-4 py-8">
      <!-- 导航栏 -->
      <nav class="mb-8">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors">
            打包工具
          </NuxtLink>
          <div class="flex gap-4">
            <NuxtLink to="/" class="px-4 py-2 text-gray-600 hover:text-green-600 transition-colors">
              首页
            </NuxtLink>
            <NuxtLink to="/docs" class="px-4 py-2 text-gray-600 hover:text-green-600 transition-colors">
              文档
            </NuxtLink>
          </div>
        </div>
      </nav>

      <!-- 关于内容 -->
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-gray-800 mb-4">
            关于我们
          </h1>
          <p class="text-xl text-gray-600">
            了解我们的技术栈和开发理念
          </p>
        </div>

        <!-- 技术栈介绍 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white rounded-xl shadow-lg p-8">
            <div class="text-green-500 text-4xl mb-4">⚡</div>
            <h3 class="text-2xl font-bold mb-4">Nuxt 3</h3>
            <p class="text-gray-600 mb-4">
              基于 Vue 3 的全栈框架，提供服务端渲染、静态生成等强大功能。
            </p>
            <ul class="text-gray-600 space-y-2">
              <li>• 自动路由生成</li>
              <li>• 服务端渲染 (SSR)</li>
              <li>• 静态站点生成 (SSG)</li>
              <li>• 自动代码分割</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-8">
            <div class="text-blue-500 text-4xl mb-4">🎨</div>
            <h3 class="text-2xl font-bold mb-4">UnoCSS</h3>
            <p class="text-gray-600 mb-4">
              即时按需的原子化 CSS 引擎，比 Tailwind CSS 快 200 倍。
            </p>
            <ul class="text-gray-600 space-y-2">
              <li>• 按需生成 CSS</li>
              <li>• 零运行时开销</li>
              <li>• 高度可定制</li>
              <li>• 丰富的预设</li>
            </ul>
          </div>
        </div>

        <!-- 特性介绍 -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 class="text-3xl font-bold text-center mb-8">核心特性</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-purple-500 text-3xl mb-4">🚀</div>
              <h4 class="text-xl font-semibold mb-2">快速开发</h4>
              <p class="text-gray-600">热重载、自动导入、TypeScript 支持</p>
            </div>
            <div class="text-center">
              <div class="text-orange-500 text-3xl mb-4">📱</div>
              <h4 class="text-xl font-semibold mb-2">响应式设计</h4>
              <p class="text-gray-600">移动优先，适配各种设备屏幕</p>
            </div>
            <div class="text-center">
              <div class="text-red-500 text-3xl mb-4">⚡</div>
              <h4 class="text-xl font-semibold mb-2">高性能</h4>
              <p class="text-gray-600">优化的构建产物，极致的加载速度</p>
            </div>
          </div>
        </div>

        <!-- 团队信息 -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-3xl font-bold text-center mb-8">开发团队</h2>
          <div class="text-center">
            <p class="text-lg text-gray-600 mb-6">
              我们是一支专注于现代 Web 开发技术的团队，致力于构建高质量的用户体验。
            </p>
            <div class="flex justify-center gap-4">
              <NuxtLink to="/" class="btn btn-primary">
                返回首页
              </NuxtLink>
              <NuxtLink to="/docs" class="btn btn-secondary">
                查看文档
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>