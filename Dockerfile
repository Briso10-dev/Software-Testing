# Use Node.js LTS version
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy project files
COPY . .

# Generate Prisma client
RUN yarn generate

# Build TypeScript
RUN yarn build

# Expose port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
