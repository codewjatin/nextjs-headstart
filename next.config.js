/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'og-image.vercel.app',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
