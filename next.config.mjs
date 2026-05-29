/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Example domain, add your image domains here
  },
  // Add other configurations as needed
};

export default nextConfig;
