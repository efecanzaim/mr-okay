/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // GitHub Pages için basePath ayarı - environment'a göre değişir
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
  // Environment variable'ı client-side'da kullanabilmek için
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/mr-okay' : '',
  },
};

export default nextConfig;
