const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Sistema Jobb",
    image: "/logo-jobb-square.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Blog audiovisual",
    bio: "Sistema para produtoras de video, audio e agencias de eventos",
    email: "atendimento@sistemajobb.com.br",
    linkedin: "sistemajobb",
    github: "",
    instagram: "sistemajobb",
  },
  projects: [
    {
      name: ``,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Blog Sistema Jobb",
    description: "Notícias do audiovisual e blog oficial do Sistema Jobb, Gestão para produtoras do audiovisual e eventos",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://blog-lognextjs.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
