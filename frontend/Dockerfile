# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the app
RUN npm run build

# Expose the Vite port
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev", "--", "--host"]
