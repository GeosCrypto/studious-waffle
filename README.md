# Studious Waffle 🧇

> Your go-to online store for creative, tech-inspired products that combine style and smart functionality.

A complete, production-ready e-commerce platform built with Next.js, featuring Gumroad payment integration, mobile-responsive design, and SEO optimization.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![React](https://img.shields.io/badge/React-18.2-blue)

## ✨ Features

- ✅ **Full E-commerce Website** - Homepage, product pages, and checkout flow
- ✅ **Gumroad Payment Integration** - Seamless, secure transactions
- ✅ **Product Management System** - Easy-to-manage product catalog
- ✅ **GitHub Actions** - Automated deployment and CI/CD
- ✅ **Landing Page Templates** - Ready-to-use launch and promo pages
- ✅ **Complete Documentation** - Comprehensive setup and customization guide
- ✅ **Mobile Responsive Design** - Looks great on all devices
- ✅ **SEO Optimized** - Built-in SEO best practices

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/GeosCrypto/studious-waffle.git
cd studious-waffle

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Or export static site
npm run export
```

## 📁 Project Structure

```
studious-waffle/
├── components/          # Reusable React components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   └── ProductCard.js  # Product display card
├── pages/              # Next.js pages (routes)
│   ├── index.js        # Homepage
│   ├── products.js     # Product listing
│   ├── products/[slug].js  # Individual product pages
│   ├── launch.js       # Launch page template
│   ├── cart.js         # Shopping cart
│   ├── about.js        # About page
│   └── docs.js         # Documentation
├── data/               # Data and content
│   └── products.js     # Product catalog
├── styles/             # CSS modules and global styles
├── public/             # Static assets
└── .github/workflows/  # GitHub Actions
```

## 🛠️ Customization

### Adding Products

Edit `data/products.js` to add or modify products:

```javascript
{
  id: 1,
  name: "Your Product Name",
  slug: "your-product-slug",
  description: "Short description",
  longDescription: "Detailed description...",
  price: 29.99,
  gumroadUrl: "https://gumroad.com/l/your-product",
  image: "https://example.com/image.jpg",
  category: "Your Category",
  featured: true,
  tags: ["tag1", "tag2"]
}
```

### Customizing Branding

1. **Logo & Site Name**: Edit `components/Header.js`
2. **Colors**: Update CSS variables in `styles/globals.css`
3. **Footer Content**: Modify `components/Footer.js`
4. **SEO Meta Tags**: Update `Head` components in each page

### Setting Up Gumroad

1. Create products on [Gumroad](https://gumroad.com)
2. Copy your product URLs
3. Add them to the `gumroadUrl` field in `data/products.js`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/GeosCrypto/studious-waffle)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. Build: `npm run export`
2. Deploy the `out` folder to Netlify
3. Or connect your Git repository for automatic deploys

### GitHub Pages

The repository includes a GitHub Actions workflow for automatic deployment to GitHub Pages. Enable GitHub Pages in your repository settings.

## 📱 Mobile Responsive

The site is built with a mobile-first approach and looks great on:
- 📱 Mobile phones (320px+)
- 📲 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🔍 SEO Features

- Meta tags and descriptions on all pages
- Open Graph tags for social media sharing
- Twitter Card support
- Semantic HTML structure
- Fast page loads with Next.js optimization
- Clean, crawlable URLs
- Sitemap generation ready

## 📚 Documentation

Visit the `/docs` page on your site for complete documentation, or check out:
- [Setup Guide](pages/docs.js#installation)
- [Customization Guide](pages/docs.js#customization)
- [Product Management](pages/docs.js#products)
- [Gumroad Integration](pages/docs.js#gumroad)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Payments powered by [Gumroad](https://gumroad.com)
- Deployed with [Vercel](https://vercel.com) / [Netlify](https://netlify.com)

## 📧 Support

For support, email support@studiouswaffle.com or open an issue on GitHub.

---

Made with ❤️ by [GeosCrypto](https://github.com/GeosCrypto)
