/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com', 'localhost'], // Add any other domains you use for images
  },
  // Ensure App Router is enabled (default in Next.js 14+)
  // pageExtensions: ['tsx', 'ts'], // Explicitly define page extensions if needed, but usually not required for App Router
};

export default nextConfig;
