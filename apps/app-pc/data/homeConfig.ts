// 首页配置数据
export interface ToolCategory {
  id: string
  icon: string
  title: string
  description: string
  link: string
}

export interface PopularTool {
  id: string
  name: string
  description: string
  icon: string
  gradient: string
  pricing: string
  pricingColor: string
  link: string
}

export interface NewsItem {
  id: string
  title: string
  description: string
  date: string
  borderColor: string
}

export interface HomeConfig {
  hero: {
    title: string
    subtitle: string
    searchPlaceholder: string
    primaryButton: {
      text: string
      icon: string
      link: string
    }
    secondaryButton: {
      text: string
      icon: string
      link: string
    }
  }
  categories: ToolCategory[]
  popularTools: {
    title: string
    tools: PopularTool[]
  }
  news: {
    title: string
    items: NewsItem[]
    moreButton: {
      text: string
      link: string
    }
  }
}

export const homeConfig: HomeConfig = {
  hero: {
    title: "AI 导航中心",
    subtitle: "发现最新最热门的AI工具，提升工作效率，探索人工智能的无限可能",
    searchPlaceholder: "搜索AI工具...",
    primaryButton: {
      text: "🔧 浏览工具",
      icon: "🔧",
      link: "/tools"
    },
    secondaryButton: {
      text: "📰 AI资讯",
      icon: "📰",
      link: "/news"
    }
  },
  categories: [
    {
      id: "chat",
      icon: "💬",
      title: "对话AI",
      description: "ChatGPT、Claude等智能对话助手",
      link: "/tools?category=chat"
    },
    {
      id: "art",
      icon: "🎨",
      title: "AI绘画",
      description: "Midjourney、DALL-E等创意工具",
      link: "/tools?category=art"
    },
    {
      id: "coding",
      icon: "💻",
      title: "编程助手",
      description: "GitHub Copilot、Cursor等开发工具",
      link: "/tools?category=coding"
    },
    {
      id: "writing",
      icon: "📝",
      title: "写作助手",
      description: "Jasper、Copy.ai等内容创作工具",
      link: "/tools?category=writing"
    }
  ],
  popularTools: {
    title: "🔥 热门AI工具",
    tools: [
      {
        id: "chatgpt",
        name: "ChatGPT",
        description: "OpenAI开发的强大对话AI，支持文本生成、代码编写、问题解答等",
        icon: "🤖",
        gradient: "from-green-400 to-blue-500",
        pricing: "免费试用",
        pricingColor: "bg-green-100 text-green-800",
        link: "https://chat.openai.com"
      },
      {
        id: "midjourney",
        name: "Midjourney",
        description: "顶级AI绘画工具，通过文字描述生成高质量艺术作品",
        icon: "🎨",
        gradient: "from-purple-400 to-pink-500",
        pricing: "付费",
        pricingColor: "bg-blue-100 text-blue-800",
        link: "https://midjourney.com"
      },
      {
        id: "github-copilot",
        name: "GitHub Copilot",
        description: "AI编程助手，实时代码建议和自动补全，提升开发效率",
        icon: "💻",
        gradient: "from-orange-400 to-red-500",
        pricing: "订阅制",
        pricingColor: "bg-yellow-100 text-yellow-800",
        link: "https://github.com/features/copilot"
      }
    ]
  },
  news: {
    title: "📰 最新AI资讯",
    items: [
      {
        id: "gpt4-turbo",
        title: "OpenAI发布GPT-4 Turbo新版本",
        description: "更快的响应速度，更低的成本，支持更长的上下文窗口...",
        date: "2024年1月15日",
        borderColor: "border-purple-500"
      },
      {
        id: "gemini-ultra",
        title: "Google推出Gemini Ultra模型",
        description: "在多项基准测试中超越GPT-4，多模态能力显著提升...",
        date: "2024年1月12日",
        borderColor: "border-blue-500"
      },
      {
        id: "sora-release",
        title: "AI绘画工具Sora震撼发布",
        description: "OpenAI最新视频生成模型，可创建长达60秒的高质量视频...",
        date: "2024年1月10日",
        borderColor: "border-green-500"
      },
      {
        id: "ai-coding-competition",
        title: "AI编程助手市场竞争加剧",
        description: "Cursor、Codeium等新兴工具挑战GitHub Copilot地位...",
        date: "2024年1月8日",
        borderColor: "border-orange-500"
      }
    ],
    moreButton: {
      text: "查看更多资讯",
      link: "/news"
    }
  }
}