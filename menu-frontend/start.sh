#!/bin/sh
echo "Starting Next.js with API URL: $NEXT_PUBLIC_API_BASE_URL"

# Replace API URL in env.js dynamically
envsubst '$NEXT_PUBLIC_API_BASE_URL' < /app/public/env.js > /app/public/env-runtime.js

# Start Next.js
exec node server.js
