<template>
  <!-- 加载状态 -->
  <div v-if="pending" class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto mb-4"></div>
      <p class="text-xl text-gray-600">正在加载AI导航数据...</p>
    </div>
  </div>

  <!-- 错误状态 -->
  <div v-else-if="error" class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
    <div class="text-center">
      <div class="text-6xl mb-4">❌</div>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">加载失败</h2>
      <p class="text-gray-600 mb-6">无法获取首页配置数据，请稍后重试</p>
      <button 
        @click="refresh()" 
        class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl transition-colors"
      >
        重新加载
      </button>
      <button @click="testClientRequest" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4">
        测试客户端请求
      </button>
    </div>
  </div>

  <!-- 正常内容 -->
  <div v-else class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-8">
      <!-- 测试按钮 -->
      <div class="mb-8 text-center">
        <button @click="testClientRequest" class="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
          🧪 测试客户端API请求 (查看Network面板)
        </button>
      </div>

      <!-- 头部区域 -->
      <div class="text-center mb-12">
        <div class="mb-6">
          <h1 class="text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {{ config.hero.title }}
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {{ config.hero.subtitle }}
          </p>
        </div>
        
        <!-- 搜索框 -->
        <div class="max-w-2xl mx-auto mb-8">
          <div class="relative">
            <input 
              type="text" 
              :placeholder="config.hero.searchPlaceholder" 
              class="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none shadow-lg"
            >
            <button class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-xl transition-colors">
              搜索
            </button>
          </div>
        </div>

        <div class="flex justify-center gap-4">
          <NuxtLink :to="config.hero.primaryButton.link" class="btn btn-primary text-lg px-8 py-3">
            {{ config.hero.primaryButton.text }}
          </NuxtLink>
          <NuxtLink :to="config.hero.secondaryButton.link" class="btn btn-secondary text-lg px-8 py-3">
            {{ config.hero.secondaryButton.text }}
          </NuxtLink>
        </div>
      </div>
      
      <!-- AI工具分类区域 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div 
          v-for="category in config.categories" 
          :key="category.id"
          class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div class="text-4xl mb-4 text-center">{{ category.icon }}</div>
          <h3 class="text-xl font-bold mb-3 text-center">{{ category.title }}</h3>
          <p class="text-gray-600 text-center mb-4">{{ category.description }}</p>
          <div class="text-center">
            <NuxtLink :to="category.link" class="text-purple-500 hover:text-purple-600 font-medium">
              查看更多 →
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- 热门AI工具推荐 -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">{{ config.popularTools.title }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="tool in config.popularTools.tools" 
            :key="tool.id"
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div :class="`bg-gradient-to-r ${tool.gradient} h-32 flex items-center justify-center`">
              <div class="text-white text-4xl">{{ tool.icon }}</div>
            </div>
            <div class="p-6">
              <h4 class="text-xl font-bold mb-2">{{ tool.name }}</h4>
              <p class="text-gray-600 mb-4">{{ tool.description }}</p>
              <div class="flex justify-between items-center">
                <span :class="`${tool.pricingColor} px-3 py-1 rounded-full text-sm`">{{ tool.pricing }}</span>
                <a :href="tool.link" target="_blank" class="text-purple-500 hover:text-purple-600 font-medium">
                  访问 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 最新AI资讯 -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">{{ config.news.title }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="newsItem in config.news.items" 
            :key="newsItem.id"
            :class="`border-l-4 ${newsItem.borderColor} pl-4`"
          >
            <h4 class="text-lg font-semibold mb-2">{{ newsItem.title }}</h4>
            <p class="text-gray-600 mb-2">{{ newsItem.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500">{{ newsItem.date }}</span>
              <NuxtLink to="/news" class="text-purple-500 hover:text-purple-600 text-sm">
                阅读更多 →
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <NuxtLink :to="config.news.moreButton.link" class="btn btn-primary">
            {{ config.news.moreButton.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 从API接口获取首页配置数据
const { data: config, pending, error, refresh } = await useFetch('/api/home-config')

// 添加客户端请求按钮用于测试
const testClientRequest = async () => {
  console.log('🔄 发起客户端请求...')
  try {
    const response = await $fetch('/api/home-config')
    console.log('✅ 客户端请求成功:', response)
  } catch (err) {
    console.error('❌ 客户端请求失败:', err)
  }
}
</script>