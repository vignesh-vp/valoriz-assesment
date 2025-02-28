#!/bin/sh

# Print the environment variable for debugging purposes
echo "Starting Next.js app with API URL: ${NEXT_PUBLIC_API_BASE_URL}"

# Use envsubst to substitute the environment variable in the configuration file
envsubst < /app/config.template.js > /app/config.js

# Now, run the Next.js app using the environment variable
NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL} npm run start
