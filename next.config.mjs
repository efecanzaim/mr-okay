/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // GitHub Pages için basePath ayarı - sadece production'da aktif
  basePath: isProd ? '/mr-okay' : '',
  assetPrefix: isProd ? '/mr-okay' : '',
  trailingSlash: true, // GitHub Pages için önerilir
  images: {
    unoptimized: true, // GitHub Pages için gerekli
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
