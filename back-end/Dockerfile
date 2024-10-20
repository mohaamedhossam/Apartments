# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the app dependencies and seed the data
RUN npm install

# Copy the rest of the application source code

COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
