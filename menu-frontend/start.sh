#!/bin/sh

# Use the environment variable in your start script
echo "Starting Next.js app with API URL: ${NEXT_PUBLIC_API_BASE_URL}"

# Run the Next.js app using npm run start, which ensures the local binary is used
NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL} npm run start
