module.exports = {
    rewrites: async () => [
      {
        source: "/api/:path*",
        destination: "/proxy/api/:path*", // ✅ Use a static route at build time
      },
    ],
  };
  