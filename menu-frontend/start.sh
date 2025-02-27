#!/bin/sh
# Inject API URL dynamically at runtime using envsubst

echo "Starting Next.js with API URL: $NEXT_PUBLIC_API_BASE_URL"

envsubst '$NEXT_PUBLIC_API_BASE_URL' < /app/.next/standalone/server.js > /app/.next/standalone/server_runtime.js

chmod +x /app/.next/standalone/server_runtime.js

# Run Next.js
exec node /app/.next/standalone/server_runtime.js
