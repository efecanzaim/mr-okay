/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages için basePath ayarı
  // Repository adınız efecanzaim/mr-okay olduğu için basePath /mr-okay olmalı
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/mr-okay',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/mr-okay',
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
