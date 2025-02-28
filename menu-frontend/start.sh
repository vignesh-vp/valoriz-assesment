#!/bin/sh

# Use the environment variable in your start script
echo "Starting Next.js app with API URL: ${NEXT_PUBLIC_API_BASE_URL}"

# Start the Next.js app, using the API URL dynamically from the environment
NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL} next start
