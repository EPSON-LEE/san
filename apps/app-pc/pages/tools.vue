<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
    <div class="container mx-auto px-4 py-8">
      <!-- 导航栏 -->
      <nav class="mb-8">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
            🤖 AI导航中心
          </NuxtLink>
          <div class="flex gap-4">
            <NuxtLink to="/" class="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors">
              首页
            </NuxtLink>
            <NuxtLink to="/news" class="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors">
              AI资讯
            </NuxtLink>
          </div>
        </div>
      </nav>

      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          AI工具大全
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          精选最优质的AI工具，按分类整理，助你找到最适合的AI助手
        </p>
      </div>

      <!-- 分类筛选 -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button class="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors">
          全部
        </button>
        <button class="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors border">
          💬 对话AI
        </button>
        <button class="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors border">
          🎨 AI绘画
        </button>
        <button class="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors border">
          💻 编程助手
        </button>
        <button class="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors border">
          📝 写作助手
        </button>
        <button class="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors border">
          🎵 音频处理
        </button>
        <button class="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors border">
          🎬 视频制作
        </button>
      </div>

      <!-- 对话AI工具 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          💬 对话AI工具
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="bg-gradient-to-r from-green-400 to-blue-500 h-20 flex items-center justify-center">
              <div class="text-white text-2xl">🤖</div>
            </div>
            <div class="p-4">
              <h4 class="text-lg font-bold mb-2">ChatGPT</h4>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">强大对话AI，支持文本生成、代码编写等</p>
              <div class="flex justify-between items-center mb-3">
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">免费试用</span>
                <div class="flex items-center text-yellow-500">
                  <span class="text-xs mr-1">4.8</span>
                  <div class="text-xs">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <a href="https://chat.openai.com" target="_blank" class="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm">
                立即使用
              </a>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="bg-gradient-to-r from-blue-400 to-purple-500 h-20 flex items-center justify-center">
              <div class="text-white text-2xl">🧠</div>
            </div>
            <div class="p-4">
              <h4 class="text-lg font-bold mb-2">Claude</h4>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">擅长长文本处理和复杂推理任务</p>
              <div class="flex justify-between items-center mb-3">
                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">付费</span>
                <div class="flex items-center text-yellow-500">
                  <span class="text-xs mr-1">4.7</span>
                  <div class="text-xs">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <a href="https://claude.ai" target="_blank" class="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm">
                立即使用
              </a>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="bg-gradient-to-r from-red-400 to-pink-500 h-20 flex items-center justify-center">
              <div class="text-white text-2xl">💎</div>
            </div>
            <div class="p-4">
              <h4 class="text-lg font-bold mb-2">Gemini</h4>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">多模态AI模型，支持文本、图像、代码</p>
              <div class="flex justify-between items-center mb-3">
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">免费</span>
                <div class="flex items-center text-yellow-500">
                  <span class="text-xs mr-1">4.6</span>
                  <div class="text-xs">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <a href="https://gemini.google.com" target="_blank" class="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm">
                立即使用
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- AI绘画工具 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          🎨 AI绘画工具
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="bg-gradient-to-r from-purple-400 to-pink-500 h-20 flex items-center justify-center">
              <div class="text-white text-2xl">🎨</div>
            </div>
            <div class="p-4">
              <h4 class="text-lg font-bold mb-2">Midjourney</h4>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">顶级AI绘画工具，生成高质量艺术作品</p>
              <div class="flex justify-between items-center mb-3">
                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">付费</span>
                <div class="flex items-center text-yellow-500">
                  <span class="text-xs mr-1">4.9</span>
                  <div class="text-xs">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <a href="https://midjourney.com" target="_blank" class="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm">
                立即使用
              </a>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="bg-gradient-to-r from-orange-400 to-red-500 h-20 flex items-center justify-center">
              <div class="text-white text-2xl">🖼️</div>
            </div>
            <div class="p-4">
              <h4 class="text-lg font-bold mb-2">DALL-E 3</h4>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">OpenAI图像生成模型，与ChatGPT集成</p>
              <div class="flex justify-between items-center mb-3">
                <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">订阅制</span>
                <div class="flex items-center text-yellow-500">
                  <span class="text-xs mr-1">4.7</span>
                  <div class="text-xs">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <a href="https://openai.com/dall-e-3" target="_blank" class="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm">
                立即使用
              </a>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="bg-gradient-to-r from-teal-400 to-blue-500 h-20 flex items-center justify-center">
              <div class="text-white text-2xl">🌟</div>
            </div>
            <div class="p-4">
              <h4 class="text-lg font-bold mb-2">Stable Diffusion</h4>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">开源AI绘画模型，支持本地部署</p>
              <div class="flex justify-between items-center mb-3">
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">开源免费</span>
                <div class="flex items-center text-yellow-500">
                  <span class="text-xs mr-1">4.5</span>
                  <div class="text-xs">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <a href="https://stability.ai" target="_blank" class="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm">
                立即使用
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 编程助手工具 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          💻 编程助手工具
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="bg-gradient-to-r from-gray-700 to-gray-900 h-20 flex items-center justify-center">
              <div class="text-white text-2xl">💻</div>
            </div>
            <div class="p-4">
              <h4 class="text-lg font-bold mb-2">GitHub Copilot</h4>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">AI编程助手，实时代码建议和补全</p>
              <div class="flex justify-between items-center mb-3">
                <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">订阅制</span>
                <div class="flex items-center text-yellow-500">
                  <span class="text-xs mr-1">4.6</span>
                  <div class="text-xs">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <a href="https://github.com/features/copilot" target="_blank" class="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm">
                立即使用
              </a>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-20 flex items-center justify-center">
              <div class="text-white text-2xl">⚡</div>
            </div>
            <div class="p-4">
              <h4 class="text-lg font-bold mb-2">Cursor</h4>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">AI驱动代码编辑器，自然语言编程</p>
              <div class="flex justify-between items-center mb-3">
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">免费试用</span>
                <div class="flex items-center text-yellow-500">
                  <span class="text-xs mr-1">4.8</span>
                  <div class="text-xs">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <a href="https://cursor.sh" target="_blank" class="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm">
                立即使用
              </a>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div class="bg-gradient-to-r from-green-400 to-teal-500 h-20 flex items-center justify-center">
              <div class="text-white text-2xl">🚀</div>
            </div>
            <div class="p-4">
              <h4 class="text-lg font-bold mb-2">Codeium</h4>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">免费AI编程助手，多语言IDE集成</p>
              <div class="flex justify-between items-center mb-3">
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">免费</span>
                <div class="flex items-center text-yellow-500">
                  <span class="text-xs mr-1">4.4</span>
                  <div class="text-xs">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <a href="https://codeium.com" target="_blank" class="block w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm">
                立即使用
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 返回首页 -->
      <div class="text-center">
        <NuxtLink to="/" class="btn btn-primary text-lg px-8 py-3">
          返回首页
        </NuxtLink>
      </div>
    </div>
  </div>
</template>