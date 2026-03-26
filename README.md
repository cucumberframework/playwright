# Playwright Test Automation Framework

This repository contains Playwright test automation framework with comprehensive CI/CD support.

## Prerequisites

- Node.js 20.x
- npm

## Local Setup

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in required values
3. Install dependencies: `npm install`
4. Install Playwright browsers: `npm run install:browsers`
5. Run tests: `npm test`

## Available Scripts

- `npm test` - Run all tests
- `npm run test:headed` - Run tests in headed mode
- `npm run test:ui` - Run tests with Playwright UI
- `npm run test:debug` - Run tests in debug mode
- `npm run test:api` - Run API tests only
- `npm run test:ui-flows` - Run UI flow tests only
- `npm run test:smoke` - Run smoke tests (@smoke tagged)
- `npm run test:regression` - Run regression tests (@regression tagged)
- `npm run report` - Show Playwright HTML report
- `npm run allure:generate` - Generate Allure report
- `npm run allure:open` - Open Allure report
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## CI/CD Configuration

### Environment Variables

- `CI` - Set to `true` in CI environments
- `HEADLESS` - Set to `true` for headless mode (default: true in CI)
- `BROWSER` - Browser to use (chromium, firefox, webkit)
- `RETRIES` - Number of retries for failed tests
- `WORKERS` - Number of parallel workers
- `SKIP_AUTH_SETUP` - Skip authentication setup in CI

### Docker

Build and run tests in Docker:

```bash
docker build -t playwright-tests .
docker run playwright-tests
```

Or using docker-compose:

```bash
docker-compose up
```

### CI Platforms

The framework supports:
- GitHub Actions (`.github/workflows/playwright.yml`)
- Azure Pipelines (`azure-pipelines.yml`)

## Project Structure

```
├── tests/
│   ├── UIFlows/          # UI flow tests
│   ├── apiTesting/       # API tests
│   └── TestData/         # Test data files
├── pageObjects/          # Page Object Models
├── playwright-report/    # Playwright HTML reports
├── allure-report/        # Allure reports
├── allure-results/       # Allure test results
├── test-results/         # Test result files
├── .env.example          # Environment variables template
├── playwright.config.js  # Playwright configuration
├── global-setup.js       # Global test setup
└── package.json          # Dependencies and scripts
```

## Test Tagging

Tests are tagged for better organization:
- `@smoke` - Critical functionality tests
- `@regression` - Full regression test suite

## Reporting

- **Playwright HTML Report**: `npm run report`
- **Allure Report**: `npm run allure:generate && npm run allure:open`

## Browser Support

- Chromium (default)
- Firefox
- WebKit (Safari)

## Parallel Execution

- Local: Uses available CPU cores
- CI: 2 workers by default (configurable via WORKERS env var)