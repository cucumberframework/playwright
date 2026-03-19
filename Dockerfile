FROM mcr.microsoft.com/playwright:v1.40.1-noble
WORKDIR /usr/src/apps
COPY package*.json ./
RUN npm install
RUN npx playwright install
COPY . .
CMD ["npx", "playwright", "test"]
