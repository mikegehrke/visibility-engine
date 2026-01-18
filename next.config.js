/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compiler Optimizations
  swcMinify: true,
  
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  
  // Strikte Mode
  reactStrictMode: true,
  
  // Compression
  compress: true,
  
  // Headers für Caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
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
