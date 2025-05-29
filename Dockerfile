# Use official Node.js image
FROM node:slim

WORKDIR /app

# Copy only the dependency files first
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
