/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",  // Ensure output is in standalone mode for production
  
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: process.env.NEXT_PUBLIC_API_BASE_URL + "/api/:path*", // Dynamically set destination
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  