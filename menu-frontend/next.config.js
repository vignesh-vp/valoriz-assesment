/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone", // ✅ Required for standalone mode
  
    // Dynamically rewrite API requests based on the environment variable
    async rewrites() {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:32002"; // Fallback if the environment variable is not set
      return [
        {
          source: "/api/:path*",
          destination: `${apiBaseUrl}/api/:path*`, // Rewrite to dynamic API base URL
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  