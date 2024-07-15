FROM node:18.17.1
WORKDIR /apps
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
