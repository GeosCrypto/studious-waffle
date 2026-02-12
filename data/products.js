Copilot said: You're absolutely right - I apologize for
You're absolutely right - I apologize for the confusion. Let me give you the COMPLETE, CORRECT code right here to copy and paste:

✅ COPY THIS COMPLETE CODE
Go to: https://github.com/GeosCrypto/studious-waffle/edit/main/data/products.js

Delete everything and paste this:

JavaScript
// Product data structure - Expanded Catalog with 38 Premium Digital Products
export const products = [
  {
    id: 1,
    name: "Digital Creativity Bundle",
    slug: "digital-creativity-bundle",
    description: "Complete toolkit for digital creators including design templates, icon sets, and productivity tools.",
    longDescription: "Unlock your creative potential with our comprehensive Digital Creativity Bundle. This package includes over 500 premium design templates, 1000+ vector icons, productivity presets for popular creative software, and exclusive tutorials to help you master your craft. Perfect for designers, content creators, and digital artists looking to streamline their workflow and produce stunning results.",
    price: 49.99,
    gumroadUrl: "https://gumroad.com/l/digital-creativity-bundle",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    category: "Digital Tools",
    featured: true,
    bestSeller: true,
    tags: ["design", "templates", "icons", "productivity"]
  },
  {
    id: 2,
    name: "Code Snippets Library Pro",
    slug: "code-snippets-library-pro",
    description: "1000+ ready-to-use code snippets for web developers across multiple frameworks and languages.",
    longDescription: "Supercharge your development workflow with our curated collection of production-ready code snippets. Includes React, Vue, Angular components, Node.js utilities, CSS animations, and JavaScript helpers. Each snippet is documented, tested, and optimized for performance. Save hours of development time and focus on building amazing products.",
    price: 39.99,
    gumroadUrl: "https://gumroad.com/l/code-snippets-pro",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    category: "Developer Tools",
    featured: true,
    bestSeller: true,
    tags: ["code", "development", "snippets", "framework"]
  },
  {
    id: 3,
    name: "Tech Wallpaper Collection",
    slug: "tech-wallpaper-collection",
    description: "50 stunning 4K wallpapers featuring abstract tech, cyberpunk aesthetics, and futuristic designs.",
    longDescription: "Transform your desktop with our carefully crafted collection of tech-inspired wallpapers. Each image is available in 4K resolution and optimized for multiple aspect ratios. Featuring abstract circuits, neon cityscapes, minimalist tech patterns, and futuristic landscapes. Perfect for developers, gamers, and tech enthusiasts who want their screens to reflect their passion.",
    price: 19.99,
    gumroadUrl: "https://gumroad.com/l/tech-wallpapers",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    category: "Digital Art",
    featured: true,
    tags: ["wallpapers", "4k", "tech", "design"]
  },
  {
    id: 4,
    name: "Productivity Notion Templates",
    slug: "productivity-notion-templates",
    description: "Complete Notion workspace setup with templates for projects, goals, habits, and personal knowledge.",
    longDescription: "Organize your life and work with our comprehensive Notion template collection. Includes project management dashboards, goal tracking systems, habit builders, content calendars, reading lists, and personal CRM. Each template is fully customizable and comes with video tutorials showing you how to make the most of your new productivity system.",
    price: 29.99,
    gumroadUrl: "https://gumroad.com/l/notion-productivity",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    category: "Productivity",
    featured: false,
    tags: ["notion", "templates", "productivity", "organization"]
  },
  {
    id: 5,
    name: "AI Prompt Engineering Guide",
    slug: "ai-prompt-engineering-guide",
    description: "Master AI tools with 200+ proven prompts and strategies for ChatGPT, Midjourney, and more.",
    longDescription: "Learn the art and science of prompt engineering with our comprehensive guide. Includes 200+ tested prompts for content creation, coding assistance, image generation, and business automation. Features advanced techniques, real-world examples, and a framework for creating your own effective prompts. Stay ahead in the AI revolution.",
    price: 34.99,
    gumroadUrl: "https://gumroad.com/l/ai-prompts-guide",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: "AI Tools",
    featured: true,
    bestSeller: true,
    tags: ["ai", "chatgpt", "prompts", "guide"]
  },
  {
    id: 6,
    name: "Minimalist UI Kit",
    slug: "minimalist-ui-kit",
    description: "Clean, modern UI components for web and mobile apps with Figma and React code included.",
    longDescription: "Build beautiful interfaces faster with our minimalist UI kit. Includes 100+ components designed in Figma with matching React code. Features buttons, forms, cards, navigation, modals, and more. Dark mode support, accessibility-ready, and fully responsive. Perfect for SaaS products, portfolios, and modern web applications.",
    price: 44.99,
    gumroadUrl: "https://gumroad.com/l/minimalist-ui-kit",
    image: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=800&h=600&fit=crop",
    category: "Design Systems",
    featured: false,
    tags: ["ui", "components", "figma", "react"]
  },
  {
    id: 7,
    name: "Premium Icon Pack Collection",
    slug: "premium-icon-pack-collection",
    description: "5000+ vector icons across 20+ styles including line, solid, duotone. Perfect for web, mobile, and design projects.",
    longDescription: "Transform your designs with our massive icon collection. Get instant access to 5000+ professionally crafted icons in 20+ distinct styles. Every icon comes in multiple formats and is fully customizable.",
    price: 34.99,
    gumroadUrl: "https://gumroad.com/l/premium-icon-pack",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    category: "Digital Tools",
    featured: true,
    isNew: true,
    tags: ["icons", "svg", "design", "vector"]
  },
  {
    id: 8,
    name: "Social Media Template Mega Pack",
    slug: "social-media-template-mega-pack",
    description: "500+ professionally designed templates for Instagram, Facebook, LinkedIn, Twitter, and TikTok.",
    longDescription: "Stop wasting hours designing social media posts. Our mega pack includes 500+ professionally designed templates that get results.",
    price: 39.99,
    gumroadUrl: "https://gumroad.com/l/social-media-templates",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    category: "Digital Tools",
    featured: true,
    bestSeller: true,
    isNew: true,
    tags: ["social media", "templates", "instagram", "marketing"]
  },
  {
    id: 9,
    name: "Brand Identity Kit",
    slug: "brand-identity-kit",
    description: "Complete branding system with logo templates, color palettes, typography, and brand guidelines.",
    longDescription: "Build a memorable brand without hiring expensive designers. This comprehensive kit includes everything you need.",
    price: 59.99,
    gumroadUrl: "https://gumroad.com/l/brand-identity-kit",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    category: "Digital Tools",
    featured: false,
    tags: ["branding", "logo", "identity", "design"]
  },
  {
    id: 10,
    name: "Typography Collection Pro",
    slug: "typography-collection-pro",
    description: "50 premium font families with commercial licenses.",
    longDescription: "Elevate your designs with our exclusive typography collection. 50 professionally crafted font families you won't find on Google Fonts.",
    price: 79.99,
    gumroadUrl: "https://gumroad.com/l/typography-collection",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop",
    category: "Digital Tools",
    featured: false,
    tags: ["fonts", "typography", "design", "commercial"]
  },
  {
    id: 11,
    name: "3D Asset Library",
    slug: "3d-asset-library",
    description: "300+ high-quality 3D models, textures, and materials for Blender and Cinema 4D.",
    longDescription: "Bring your creative visions to life with our extensive 3D asset library.",
    price: 69.99,
    gumroadUrl: "https://gumroad.com/l/3d-asset-library",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    category: "Digital Tools",
    featured: false,
    isNew: true,
    tags: ["3d", "blender", "models", "rendering"]
  },
  {
    id: 12,
    name: "Illustration Mega Pack",
    slug: "illustration-mega-pack",
    description: "800+ vector illustrations across 10+ styles.",
    longDescription: "Never search for stock illustrations again. This mega pack contains 800+ unique vector illustrations.",
    price: 49.99,
    gumroadUrl: "https://gumroad.com/l/illustration-mega-pack",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop",
    category: "Digital Art",
    featured: false,
    tags: ["illustrations", "vector", "svg", "design"]
  },
  {
    id: 13,
    name: "Animation Presets Collection",
    slug: "animation-presets-collection",
    description: "500+ professional animation presets for After Effects and Premiere Pro.",
    longDescription: "Add professional motion graphics to your videos in seconds.",
    price: 54.99,
    gumroadUrl: "https://gumroad.com/l/animation-presets",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    category: "Digital Tools",
    featured: false,
    tags: ["animation", "after effects", "video", "motion graphics"]
  },
  {
    id: 14,
    name: "Stock Photo Bundle - Tech Edition",
    slug: "stock-photo-bundle-tech",
    description: "1000+ royalty-free 4K photos featuring tech, workspace, and business themes.",
    longDescription: "Build professional projects with our curated tech photo collection.",
    price: 44.99,
    gumroadUrl: "https://gumroad.com/l/stock-photo-tech",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    category: "Digital Art",
    featured: false,
    tags: ["photos", "stock", "tech", "business"]
  },
  {
    id: 15,
    name: "Full-Stack Boilerplate Collection",
    slug: "full-stack-boilerplate-collection",
    description: "Production-ready starter templates for Next.js, React, Node.js, Django, and Laravel.",
    longDescription: "Stop building the same features over and over. Our boilerplate collection gives you battle-tested starter projects.",
    price: 89.99,
    gumroadUrl: "https://gumroad.com/l/fullstack-boilerplate",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    category: "Developer Tools",
    featured: true,
    bestSeller: true,
    isNew: true,
    tags: ["boilerplate", "nextjs", "react", "fullstack"]
  },
  {
    id: 16,
    name: "API Integration Templates",
    slug: "api-integration-templates",
    description: "Ready-to-use code for integrating Stripe, Twilio, SendGrid, AWS, and 20+ popular APIs.",
    longDescription: "Integrate third-party services in minutes, not hours.",
    price: 44.99,
    gumroadUrl: "https://gumroad.com/l/api-integration-templates",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    category: "Developer Tools",
    featured: false,
    tags: ["api", "integration", "stripe", "development"]
  },
  {
    id: 17,
    name: "Testing & DevOps Toolkit",
    slug: "testing-devops-toolkit",
    description: "Complete CI/CD setup with GitHub Actions, Docker configs, testing frameworks, and deployment scripts.",
    longDescription: "Build bulletproof deployment pipelines with our DevOps toolkit.",
    price: 39.99,
    gumroadUrl: "https://gumroad.com/l/testing-devops-toolkit",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
    category: "Developer Tools",
    featured: false,
    tags: ["devops", "cicd", "testing", "docker"]
  },
  {
    id: 18,
    name: "Database Schema Library",
    slug: "database-schema-library",
    description: "Production-ready database schemas for common use cases: e-commerce, SaaS, social networks, CRM.",
    longDescription: "Don't reinvent the wheel when designing databases.",
    price: 29.99,
    gumroadUrl: "https://gumroad.com/l/database-schema-library",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop",
    category: "Developer Tools",
    featured: false,
    tags: ["database", "sql", "schema", "postgresql"]
  },
  {
    id: 19,
    name: "Chrome Extensions Starter Kit",
    slug: "chrome-extensions-starter-kit",
    description: "Complete boilerplates for building Chrome extensions with React, Vanilla JS, and TypeScript.",
    longDescription: "Build powerful Chrome extensions without the setup headache.",
    price: 34.99,
    gumroadUrl: "https://gumroad.com/l/chrome-extensions-kit",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
    category: "Developer Tools",
    featured: false,
    tags: ["chrome", "extensions", "javascript", "browser"]
  },
  {
    id: 20,
    name: "React Component Library Premium",
    slug: "react-component-library-premium",
    description: "200+ production-ready React components with TypeScript.",
    longDescription: "Build React apps faster with our comprehensive component library.",
    price: 64.99,
    gumroadUrl: "https://gumroad.com/l/react-component-library",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop",
    category: "Developer Tools",
    featured: true,
    isNew: true,
    tags: ["react", "components", "typescript", "library"]
  },
  {
    id: 21,
    name: "Video Intro Templates",
    slug: "video-intro-templates",
    description: "100+ customizable video intros for YouTube, social media, and presentations.",
    longDescription: "Hook viewers from the first second with professional video intros.",
    price: 39.99,
    gumroadUrl: "https://gumroad.com/l/video-intro-templates",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    category: "Digital Art",
    featured: false,
    tags: ["video", "intro", "youtube", "after effects"]
  },
  {
    id: 22,
    name: "Sound Effects Pack - UI Edition",
    slug: "sound-effects-pack-ui",
    description: "500+ UI sound effects for apps, websites, and games.",
    longDescription: "Add satisfying audio feedback to your digital products.",
    price: 29.99,
    gumroadUrl: "https://gumroad.com/l/sound-effects-ui",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
    category: "Digital Art",
    featured: false,
    tags: ["sound", "audio", "ui", "effects"]
  },
  {
    id: 23,
    name: "Animated Graphics Bundle",
    slug: "animated-graphics-bundle",
    description: "300+ Lottie animations, GIFs, and motion graphics for websites and apps.",
    longDescription: "Bring your interfaces to life with beautiful animations.",
    price: 44.99,
    gumroadUrl: "https://gumroad.com/l/animated-graphics",
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&h=600&fit=crop",
    category: "Digital Art",
    featured: false,
    isNew: true,
    tags: ["animation", "lottie", "motion", "graphics"]
  },
  {
    id: 24,
    name: "Complete Airtable Workspace",
    slug: "complete-airtable-workspace",
    description: "Pre-built Airtable bases for project management, CRM, content calendar, and inventory.",
    longDescription: "Organize your entire business with Airtable.",
    price: 34.99,
    gumroadUrl: "https://gumroad.com/l/airtable-workspace",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    category: "Productivity",
    featured: false,
    tags: ["airtable", "productivity", "crm", "organization"]
  },
  {
    id: 25,
    name: "Goal Setting & Habit Tracker",
    slug: "goal-setting-habit-tracker",
    description: "Comprehensive digital planner for setting goals, tracking habits, and achieving success.",
    longDescription: "Transform your life with our proven goal-setting system.",
    price: 19.99,
    gumroadUrl: "https://gumroad.com/l/goal-habit-tracker",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    category: "Productivity",
    featured: true,
    isNew: true,
    tags: ["goals", "habits", "productivity", "planner"]
  },
  {
    id: 26,
    name: "Content Creator Planner",
    slug: "content-creator-planner",
    description: "Complete content planning system with editorial calendar, analytics tracker, and idea vault.",
    longDescription: "Never run out of content ideas again.",
    price: 29.99,
    gumroadUrl: "https://gumroad.com/l/content-creator-planner",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    category: "Productivity",
    featured: false,
    tags: ["content", "planner", "social media", "calendar"]
  },
  {
    id: 27,
    name: "Finance & Budget Templates",
    slug: "finance-budget-templates",
    description: "Personal and business finance trackers for Excel and Google Sheets.",
    longDescription: "Take control of your finances with professional templates.",
    price: 24.99,
    gumroadUrl: "https://gumroad.com/l/finance-budget-templates",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    category: "Productivity",
    featured: false,
    tags: ["finance", "budget", "excel", "money"]
  },
  {
    id: 28,
    name: "ChatGPT Automation Workflows",
    slug: "chatgpt-automation-workflows",
    description: "100+ automation templates using ChatGPT API for email responses, content generation, and more.",
    longDescription: "Automate your workflow with AI-powered templates.",
    price: 44.99,
    gumroadUrl: "https://gumroad.com/l/chatgpt-automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: "AI Tools",
    featured: true,
    bestSeller: true,
    isNew: true,
    tags: ["chatgpt", "automation", "ai", "workflows"]
  },
  {
    id: 29,
    name: "AI Image Generation Masterclass",
    slug: "ai-image-generation-masterclass",
    description: "Complete course on Midjourney, DALL-E, and Stable Diffusion.",
    longDescription: "Master AI image generation and unlock your creative potential.",
    price: 59.99,
    gumroadUrl: "https://gumroad.com/l/ai-image-masterclass",
    image: "https://images.unsplash.com/photo-1686191128892-c15baf4b85dd?w=800&h=600&fit=crop",
    category: "AI Tools",
    featured: false,
    tags: ["ai", "midjourney", "dalle", "image generation"]
  },
  {
    id: 30,
    name: "No-Code AI App Builder Kit",
    slug: "no-code-ai-app-builder-kit",
    description: "Build AI-powered apps without coding.",
    longDescription: "Launch AI-powered applications without writing code.",
    price: 54.99,
    gumroadUrl: "https://gumroad.com/l/nocode-ai-builder",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    category: "AI Tools",
    featured: false,
    tags: ["nocode", "ai", "apps", "bubble"]
  },
  {
    id: 31,
    name: "Web3 Development Complete Course",
    slug: "web3-development-course",
    description: "Learn blockchain development, smart contracts, and dApps.",
    longDescription: "Break into the Web3 industry with this comprehensive developer course.",
    price: 79.99,
    gumroadUrl: "https://gumroad.com/l/web3-development-course",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    category: "Courses",
    featured: true,
    isNew: true,
    tags: ["web3", "blockchain", "solidity", "course"]
  },
  {
    id: 32,
    name: "Freelance Business Starter Kit",
    slug: "freelance-starter-kit",
    description: "Everything you need to launch a successful freelance business.",
    longDescription: "Launch and grow your freelance business with confidence.",
    price: 49.99,
    gumroadUrl: "https://gumroad.com/l/freelance-starter-kit",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    category: "Business",
    featured: false,
    tags: ["freelance", "business", "contracts", "templates"]
  },
  {
    id: 33,
    name: "SEO & Marketing Playbook",
    slug: "seo-marketing-playbook",
    description: "Complete digital marketing guide with SEO strategies and growth tactics.",
    longDescription: "Drive organic traffic and grow your online presence.",
    price: 44.99,
    gumroadUrl: "https://gumroad.com/l/seo-marketing-playbook",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Marketing",
    featured: false,
    tags: ["seo", "marketing", "growth", "content"]
  },
  {
    id: 34,
    name: "SaaS Metrics Dashboard",
    slug: "saas-metrics-dashboard",
    description: "Track MRR, churn, CAC, LTV, and all key SaaS metrics.",
    longDescription: "Understand your SaaS business with this professional metrics dashboard.",
    price: 34.99,
    gumroadUrl: "https://gumroad.com/l/saas-metrics-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "Business",
    featured: false,
    tags: ["saas", "metrics", "analytics", "dashboard"]
  },
  {
    id: 35,
    name: "Creator's Complete Bundle",
    slug: "creators-complete-bundle",
    description: "Everything a content creator needs. 5 premium products at 50% off.",
    longDescription: "The ultimate toolkit for content creators. Save $139 when you buy the bundle.",
    price: 149.99,
    gumroadUrl: "https://gumroad.com/l/creators-bundle",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    category: "Bundles",
    featured: true,
    bestSeller: true,
    discount: 139,
    tags: ["bundle", "creator", "content", "save"]
  },
  {
    id: 36,
    name: "Developer's Pro Bundle",
    slug: "developers-pro-bundle",
    description: "Complete development toolkit. 5 essential tools for $199 (Save $180).",
    longDescription: "Everything developers need to build and ship faster. Save $180.",
    price: 199.99,
    gumroadUrl: "https://gumroad.com/l/developers-bundle",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    category: "Bundles",
    featured: true,
    bestSeller: true,
    discount: 180,
    tags: ["bundle", "developer", "code", "save"]
  },
  {
    id: 37,
    name: "Designer's Ultimate Bundle",
    slug: "designers-ultimate-bundle",
    description: "Professional design assets for every project. 6 premium products for $179 (Save $160).",
    longDescription: "The complete designer's arsenal. Save $160 on this comprehensive collection.",
    price: 179.99,
    gumroadUrl: "https://gumroad.com/l/designers-bundle",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    category: "Bundles",
    featured: true,
    discount: 160,
    tags: ["bundle", "design", "assets", "save"]
  },
  {
    id: 38,
    name: "Business Growth Bundle",
    slug: "business-growth-bundle",
    description: "Everything you need to start, run, and grow a profitable online business. 5 essential resources for $159 (Save $140).",
    longDescription: "Launch and scale your business with confidence. Save $140.",
    price: 159.99,
    gumroadUrl: "https://gumroad.com/l/business-bundle",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    category: "Bundles",
    featured: true,
    discount: 140,
    tags: ["bundle", "business", "growth", "save"]
  }
];

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category) => {
  if (category === "All Products") {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getBundles = () => {
  return products.filter(product => product.category === 'Bundles');
};

export const getNewProducts = () => {
  return products.filter(product => product.isNew === true);
};

export const getBestSellers = () => {
  return products.filter(product => product.bestSeller === true);
};

export const getRelatedProducts = (productId, limit = 3) => {
  const product = products.find(p => p.id === productId);
  if (!product) return [];
  return products.filter(p => p.id !== productId && p.category === product.category).slice(0, limit);
};

export const categories = [
  "All Products",
  "Digital Tools",
  "Developer Tools",
  "Digital Art",
  "Productivity",
  "AI Tools",
  "Design Systems",
  "Bundles",
  "Courses",
  "Business",
  "Marketing"
];
Then commit with message: "Restore complete 38-product catalog"

This is the FULL working code - copy ALL of it! 🚀

