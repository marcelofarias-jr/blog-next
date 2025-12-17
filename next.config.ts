import type { NextConfig } from 'next';

const nextConfig: NextConfig = {};
module.exports = {
  experimental: {
    serverActions: {
      bodySizeLimit: '30mb',
    },
  },
};
export default nextConfig;
