FROM node:20-noble
WORKDIR /usr/src/apps
COPY package*.json ./
RUN apt-get update && apt-get install -y \
    libasound2t64 \
    && rm -rf /var/lib/apt/lists/*
RUN npm install
RUN npx playwright install --with-deps
COPY . .
CMD ["npx", "playwright", "test"]
