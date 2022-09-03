# ==== CONFIGURE =====
FROM node:latest
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to development
ENV NODE_ENV development
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 5000
# Start the app
CMD [ "npm", "start"]