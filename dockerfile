FROM node:24-alpine

WORKDIR /app

RUN npm install -g serve

COPY build build

EXPOSE 3000

# Define the command to run your React app
CMD ["serve", "/app/build/"]