/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['z-m-static.xx.fbcdn.net'],
  },
  onDemandEntries: {
    // Makes Next.js not throw errors for hydration mismatches
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // This function helps ignore specific console errors
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        default: false,
        vendors: false,
      };
    }

    return config;
  },
}

module.exports = nextConfig
