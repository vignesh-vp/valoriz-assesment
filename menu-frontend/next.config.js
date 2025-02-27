/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "/env.js", // ✅ Load API URL dynamically
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  