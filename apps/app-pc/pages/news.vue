<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
            <NuxtLink to="/tools" class="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors">
              AI工具
            </NuxtLink>
          </div>
        </div>
      </nav>

      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          AI资讯中心
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          最新的AI行业动态、技术突破和产品发布，让你紧跟AI发展前沿
        </p>
      </div>

      <!-- 热门资讯 -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800 flex items-center">
          🔥 热门资讯
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="bg-gradient-to-r from-red-400 to-pink-500 h-48 flex items-center justify-center">
              <div class="text-white text-6xl">🚀</div>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm mr-3">重大突破</span>
                <span class="text-gray-500 text-sm">2024年1月15日</span>
              </div>
              <h3 class="text-2xl font-bold mb-3">GPT-5即将发布，多模态能力大幅提升</h3>
              <p class="text-gray-600 mb-4">OpenAI宣布GPT-5将在今年发布，新模型在推理能力、多模态理解和代码生成方面都有显著改进...</p>
              <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">阅读全文 →</a>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="bg-gradient-to-r from-blue-400 to-cyan-500 h-48 flex items-center justify-center">
              <div class="text-white text-6xl">🎨</div>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-3">产品更新</span>
                <span class="text-gray-500 text-sm">2024年1月12日</span>
              </div>
              <h3 class="text-2xl font-bold mb-3">Midjourney V6发布，图像质量再创新高</h3>
              <p class="text-gray-600 mb-4">Midjourney发布V6版本，在图像细节、文字渲染和风格一致性方面都有重大改进...</p>
              <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">阅读全文 →</a>
            </div>
          </div>
        </div>
      </div>

      <!-- 最新资讯列表 -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800 flex items-center">
          📰 最新资讯
        </h2>
        <div class="space-y-6">
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="bg-gradient-to-r from-green-400 to-teal-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                <div class="text-white text-2xl">💡</div>
              </div>
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-3">技术创新</span>
                  <span class="text-gray-500 text-sm">2024年1月10日</span>
                </div>
                <h3 class="text-xl font-bold mb-2">Google发布Gemini Ultra，挑战GPT-4</h3>
                <p class="text-gray-600 mb-3">Google最新发布的Gemini Ultra在多项基准测试中超越GPT-4，特别是在数学推理和代码生成方面表现出色...</p>
                <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">阅读全文 →</a>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="bg-gradient-to-r from-purple-400 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                <div class="text-white text-2xl">🏢</div>
              </div>
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-3">行业动态</span>
                  <span class="text-gray-500 text-sm">2024年1月8日</span>
                </div>
                <h3 class="text-xl font-bold mb-2">微软投资100亿美元扩展AI基础设施</h3>
                <p class="text-gray-600 mb-3">微软宣布将在未来三年投资100亿美元用于AI基础设施建设，包括数据中心和GPU集群的扩展...</p>
                <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">阅读全文 →</a>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="bg-gradient-to-r from-orange-400 to-red-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                <div class="text-white text-2xl">🎯</div>
              </div>
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm mr-3">应用案例</span>
                  <span class="text-gray-500 text-sm">2024年1月5日</span>
                </div>
                <h3 class="text-xl font-bold mb-2">AI在医疗诊断领域取得重大突破</h3>
                <p class="text-gray-600 mb-3">最新研究显示，AI在癌症早期诊断方面的准确率已达到95%，超过了人类专家的平均水平...</p>
                <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">阅读全文 →</a>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="bg-gradient-to-r from-indigo-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                <div class="text-white text-2xl">⚖️</div>
              </div>
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-3">政策法规</span>
                  <span class="text-gray-500 text-sm">2024年1月3日</span>
                </div>
                <h3 class="text-xl font-bold mb-2">欧盟AI法案正式生效，全球AI监管进入新阶段</h3>
                <p class="text-gray-600 mb-3">欧盟AI法案正式生效，对高风险AI系统提出严格要求，预计将影响全球AI产业发展格局...</p>
                <a href="#" class="text-purple-600 hover:text-purple-800 font-medium">阅读全文 →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- AI趋势分析 -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-800 flex items-center">
          📊 AI趋势分析
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="text-center mb-6">
              <div class="text-4xl mb-4">📈</div>
              <h3 class="text-2xl font-bold mb-2">市场规模</h3>
              <p class="text-gray-600">全球AI市场预计2024年将达到</p>
              <div class="text-4xl font-bold text-purple-600 mt-2">$1.8万亿</div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="text-center mb-6">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="text-2xl font-bold mb-2">增长率</h3>
              <p class="text-gray-600">AI行业年复合增长率</p>
              <div class="text-4xl font-bold text-blue-600 mt-2">37.3%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 订阅资讯 -->
      <div class="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-8 text-center text-white mb-16">
        <h2 class="text-3xl font-bold mb-4">订阅AI资讯</h2>
        <p class="text-xl mb-6">第一时间获取最新的AI行业动态和技术突破</p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="输入您的邮箱地址" 
            class="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          >
          <button class="px-6 py-3 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            立即订阅
          </button>
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