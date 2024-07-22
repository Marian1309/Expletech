/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.allo.ua',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
