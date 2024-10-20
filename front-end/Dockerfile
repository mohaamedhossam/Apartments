# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port Next.js runs on
EXPOSE 3001

# Start the Next.js development server
CMD ["npm", "run", "dev"]
