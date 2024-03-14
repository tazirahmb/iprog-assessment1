/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jmjglobalwinpex.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'lasallefood.id',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;
