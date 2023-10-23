# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on (đảm bảo rằng cổng này khớp với cấu hình của ứng dụng NestJS)
EXPOSE 4000

# Define the command to run your NestJS application (đảm bảo rằng tên tệp khớp với tên tệp khởi động của ứng dụng NestJS)
CMD ["npm", "run", "start:dev"]
