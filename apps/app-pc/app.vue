<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-8">
      <!-- 头部区域 -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          欢迎使用 App PC
        </h1>
        <p class="text-lg text-gray-600 mb-6">
          基于 Nuxt 3 + UnoCSS 构建的现代化 Web 应用
        </p>
        <div class="flex justify-center gap-4">
          <button class="btn btn-primary">
            开始使用
          </button>
          <button class="btn btn-secondary">
            了解更多
          </button>
        </div>
      </div>
      
      <!-- 功能卡片区域 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-blue-500 text-2xl mb-4">🚀</div>
          <h3 class="text-xl font-semibold mb-2">快速开发</h3>
          <p class="text-gray-600">使用 Nuxt 3 和 UnoCSS 实现快速原型开发</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-green-500 text-2xl mb-4">⚡</div>
          <h3 class="text-xl font-semibold mb-2">高性能</h3>
          <p class="text-gray-600">原子化 CSS 和服务端渲染带来极致性能</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-purple-500 text-2xl mb-4">🎨</div>
          <h3 class="text-xl font-semibold mb-2">现代设计</h3>
          <p class="text-gray-600">响应式设计，支持多种设备和屏幕尺寸</p>
        </div>
      </div>

      <!-- UnoCSS 使用示例区域 -->
      <div class="mt-16 bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">UnoCSS 使用示例</h2>
        
        <!-- 颜色示例 -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">颜色系统</h3>
          <div class="flex flex-wrap gap-3">
            <div class="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center text-white text-sm">red-500</div>
            <div class="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm">blue-500</div>
            <div class="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center text-white text-sm">green-500</div>
            <div class="w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center text-white text-sm">purple-500</div>
            <div class="w-20 h-20 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-sm">yellow-500</div>
          </div>
        </div>

        <!-- 间距示例 -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">间距系统</h3>
          <div class="space-y-2">
            <div class="bg-blue-100 p-1 rounded">p-1 (0.25rem)</div>
            <div class="bg-blue-200 p-2 rounded">p-2 (0.5rem)</div>
            <div class="bg-blue-300 p-4 rounded">p-4 (1rem)</div>
            <div class="bg-blue-400 p-6 rounded text-white">p-6 (1.5rem)</div>
          </div>
        </div>

        <!-- 字体示例 -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">字体大小</h3>
          <div class="space-y-2">
            <p class="text-xs">text-xs: 超小字体</p>
            <p class="text-sm">text-sm: 小字体</p>
            <p class="text-base">text-base: 基础字体</p>
            <p class="text-lg">text-lg: 大字体</p>
            <p class="text-xl">text-xl: 超大字体</p>
            <p class="text-2xl">text-2xl: 2倍大字体</p>
          </div>
        </div>

        <!-- 布局示例 -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Flexbox 布局</h3>
          <div class="bg-gray-100 p-4 rounded-lg">
            <div class="flex justify-between items-center mb-4 bg-white p-3 rounded">
              <span>justify-between</span>
              <span>items-center</span>
            </div>
            <div class="flex justify-center items-center bg-white p-3 rounded">
              <span>居中对齐</span>
            </div>
          </div>
        </div>

        <!-- 响应式示例 -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">响应式网格</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-lg text-center">
              手机: 1列<br>平板: 2列<br>桌面: 3列<br>大屏: 4列
            </div>
            <div class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-lg text-center">
              响应式<br>网格布局
            </div>
            <div class="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg text-center">
              自动适应<br>屏幕大小
            </div>
            <div class="bg-gradient-to-r from-purple-500 to-violet-500 text-white p-4 rounded-lg text-center">
              UnoCSS<br>强大功能
            </div>
          </div>
        </div>

        <!-- 按钮示例 -->
        <div>
          <h3 class="text-xl font-semibold mb-4">按钮样式</h3>
          <div class="flex flex-wrap gap-4">
            <button class="btn btn-primary">主要按钮</button>
            <button class="btn btn-secondary">次要按钮</button>
            <button class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
              成功按钮
            </button>
            <button class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">
              危险按钮
            </button>
            <button class="px-4 py-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg transition-colors">
              边框按钮
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
