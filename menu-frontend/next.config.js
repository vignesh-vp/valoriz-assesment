/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone", // ✅ Required for standalone mode
    
    // Use rewrites to dynamically map API requests at runtime
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: process.env.NEXT_PUBLIC_API_URL
            ? `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`
            : "http://127.0.0.1:32002/api/:path*", // Fallback URL if the env variable is not set
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  