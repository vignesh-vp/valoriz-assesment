module.exports = {
    rewrites: async () => {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
      if (!API_BASE_URL) {
        console.error("NEXT_PUBLIC_API_BASE_URL is not set! Please configure your environment variables.");
        return []; // Return an empty array to prevent rewrites if the URL is missing
      }
  
      console.log(`Using API base URL: ${API_BASE_URL}`);
  
      return [
        {
          source: "/api/:path*",
          destination: `${API_BASE_URL}/:path*`, // Dynamic destination
        },
      ];
    },
  };
    