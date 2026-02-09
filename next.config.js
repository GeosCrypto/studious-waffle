/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'placehold.co'],
  },
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig
