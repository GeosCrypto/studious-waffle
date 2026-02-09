# Studious Waffle - Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory for any environment-specific configuration:

```bash
# Optional: Add Google Analytics ID
NEXT_PUBLIC_GA_ID=your-ga-id

# Optional: Add other tracking IDs
NEXT_PUBLIC_TRACKING_ID=your-tracking-id
```

## Customization Checklist

- [ ] Update site name in `components/Header.js`
- [ ] Customize colors in `styles/globals.css`
- [ ] Add your products to `data/products.js`
- [ ] Set up Gumroad product URLs
- [ ] Update social media links in `components/Footer.js`
- [ ] Add your logo/favicon to `public/` directory
- [ ] Customize meta tags in each page
- [ ] Update contact information
- [ ] Test all product links
- [ ] Test mobile responsiveness
- [ ] Run build and verify output

## Tips

- Use high-quality product images (recommended: 800x600px)
- Keep product slugs URL-friendly (lowercase, hyphens)
- Test Gumroad links before going live
- Optimize images for web (use WebP when possible)
- Test on multiple devices and browsers
