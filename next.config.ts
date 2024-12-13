import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ['en', 'fr'], // Add more locales as needed
    defaultLocale: 'en',
  },
};

export default nextConfig;



