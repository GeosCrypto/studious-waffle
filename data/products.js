// Product data structure
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
  }
];

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const categories = [
  "All Products",
  "Digital Tools",
  "Developer Tools",
  "Digital Art",
  "Productivity",
  "AI Tools",
  "Design Systems"
];
