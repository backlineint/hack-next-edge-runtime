/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: "experimental-edge", // 'node.js' (default) | experimental-edge
  },
};

module.exports = nextConfig;
