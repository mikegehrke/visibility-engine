/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone für Container-Deploy
  output: 'standalone',
  
  // Compiler Optimizations
  swcMinify: true,
  
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  
  // Strikte Mode
  reactStrictMode: true,
  
  // Bundle Optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Separate Dashboard Bundle
          dashboard: {
            test: /[\\/]app[\\/]dashboard[\\/]/,
            name: 'dashboard',
            priority: 10,
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
