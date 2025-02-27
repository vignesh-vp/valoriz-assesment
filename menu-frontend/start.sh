#!/bin/sh

# Print the API URL to verify it's being set correctly
echo "Starting Next.js with API URL: $NEXT_PUBLIC_API_BASE_URL"

# Start the Next.js app (standalone mode)
node /app/.next/standalone/server.js
