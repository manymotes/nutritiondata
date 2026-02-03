/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    // Note: For better Core Web Vitals with static export:
    // 1. Pre-optimize images before build using tools like sharp/imagemin
    // 2. Always use proper width/height attributes
    // 3. Use loading="lazy" for below-fold images
    // 4. Consider using a CDN with automatic image optimization (Cloudflare, Vercel, etc.)
  },
}

module.exports = nextConfig
