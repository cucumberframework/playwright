FROM node:18.17.1
WORKDIR /usr/src/apps
COPY package*.json ./
RUN npm install
RUN npx playwright install --with-deps
COPY . .
CMD ["npx", "playwright", "test"]
