FROM mcr.microsoft.com/playwright:v1.53.1-noble

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install Playwright browsers
RUN npx playwright install --with-deps

# Copy source code
COPY . .

# Create directory for test results
RUN mkdir -p test-results playwright-report allure-results allure-report

# Run tests
CMD ["npm", "test"]
