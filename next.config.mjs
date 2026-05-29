/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Removed invalid compilerOptions and experimental.appDir
  // Next.js 14+ has appDir enabled by default.
};

export default nextConfig;
