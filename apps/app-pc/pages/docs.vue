<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
    <div class="container mx-auto px-4 py-8">
      <!-- 导航栏 -->
      <nav class="mb-8">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
            打包工具
          </NuxtLink>
          <div class="flex gap-4">
            <NuxtLink to="/" class="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors">
              首页
            </NuxtLink>
            <NuxtLink to="/about" class="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors">
              关于
            </NuxtLink>
          </div>
        </div>
      </nav>

      <!-- 文档内容 -->
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-gray-800 mb-4">
            开发文档
          </h1>
          <p class="text-xl text-gray-600">
            快速上手指南和 API 参考
          </p>
        </div>

        <!-- 快速开始 -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 class="text-3xl font-bold mb-6 text-purple-600">🚀 快速开始</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-3">1. 安装依赖</h3>
              <div class="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                <code>pnpm install</code>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">2. 启动开发服务器</h3>
              <div class="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                <code>pnpm dev</code>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">3. 构建生产版本</h3>
              <div class="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                <code>pnpm build</code>
              </div>
            </div>
          </div>
        </div>

        <!-- UnoCSS 使用指南 -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 class="text-3xl font-bold mb-6 text-blue-600">🎨 UnoCSS 使用指南</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-3">基础语法</h3>
              <p class="text-gray-600 mb-3">UnoCSS 使用原子化 CSS 类名，每个类名对应一个 CSS 属性：</p>
              <div class="bg-gray-100 rounded-lg p-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>间距：</strong><br>
                    <code>p-4</code> → padding: 1rem<br>
                    <code>m-2</code> → margin: 0.5rem<br>
                    <code>px-6</code> → padding-left/right: 1.5rem
                  </div>
                  <div>
                    <strong>颜色：</strong><br>
                    <code>text-blue-500</code> → color: #3b82f6<br>
                    <code>bg-red-100</code> → background: #fee2e2<br>
                    <code>border-green-300</code> → border-color: #86efac
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">响应式设计</h3>
              <p class="text-gray-600 mb-3">使用断点前缀实现响应式布局：</p>
              <div class="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                <code>grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">自定义快捷方式</h3>
              <p class="text-gray-600 mb-3">在 <code>uno.config.ts</code> 中定义的快捷方式：</p>
              <div class="bg-gray-100 rounded-lg p-4 font-mono text-sm space-y-1">
                <div><code>btn</code> → 基础按钮样式</div>
                <div><code>btn-primary</code> → 主要按钮样式</div>
                <div><code>btn-secondary</code> → 次要按钮样式</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 路由系统 -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 class="text-3xl font-bold mb-6 text-green-600">🛣️ 路由系统</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-3">文件系统路由</h3>
              <p class="text-gray-600 mb-3">Nuxt 3 基于文件系统自动生成路由：</p>
              <div class="bg-gray-100 rounded-lg p-4 font-mono text-sm space-y-1">
                <div><code>pages/index.vue</code> → <code>/</code></div>
                <div><code>pages/about.vue</code> → <code>/about</code></div>
                <div><code>pages/docs.vue</code> → <code>/docs</code></div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">导航组件</h3>
              <p class="text-gray-600 mb-3">使用 <code>NuxtLink</code> 组件进行页面跳转：</p>
              <div class="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                <code>&lt;NuxtLink to="/about"&gt;关于我们&lt;/NuxtLink&gt;</code>
              </div>
            </div>
          </div>
        </div>

        <!-- API 参考 -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-3xl font-bold mb-6 text-orange-600">📚 常用 API</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold mb-3">Nuxt 组件</h3>
              <ul class="space-y-2 text-gray-600">
                <li><code>NuxtLink</code> - 路由链接</li>
                <li><code>NuxtPage</code> - 页面容器</li>
                <li><code>NuxtLayout</code> - 布局组件</li>
                <li><code>Head</code> - 页面头部</li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-3">UnoCSS 工具类</h3>
              <ul class="space-y-2 text-gray-600">
                <li><code>flex</code> - Flexbox 布局</li>
                <li><code>grid</code> - Grid 布局</li>
                <li><code>text-*</code> - 文本样式</li>
                <li><code>bg-*</code> - 背景样式</li>
              </ul>
            </div>
          </div>

          <div class="mt-8 text-center">
            <div class="flex justify-center gap-4">
              <NuxtLink to="/" class="btn btn-primary">
                返回首页
              </NuxtLink>
              <NuxtLink to="/about" class="btn btn-secondary">
                了解更多
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>