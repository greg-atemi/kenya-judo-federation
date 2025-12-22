# Use the official Node.js image for building the React app
FROM node:22.17.0 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use the official nginx image to serve the React app
FROM nginx:alpine AS runtime

# Copy the built React app from the previous stage to the nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom nginx configuration file (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]