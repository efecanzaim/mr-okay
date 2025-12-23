/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages için basePath ayarı
  // Eğer custom domain kullanmıyorsanız, repository adınızı buraya yazın (örn: '/mr-okay')
  // Eğer custom domain kullanıyorsanız, bu satırı yorum satırı yapın veya boş string bırakın
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
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
