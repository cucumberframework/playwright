// @ts-check
const { defineConfig, devices } = require('@playwright/test');
/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,

  // this will be timeout for the expect ondition
  expect: {
    timeout: 10000,
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects:[
    {
      name:'chrome',
        use: {
      // for safari browser user webkit , for firefox user firefox 
      browserName: 'chromium',
      // retain on failure wil generate traces only for failed test scripts 
      trace: 'retain-on-failure',
      headless: false,
      screenshot: 'on',
      viewport:{width:1920,height:1400},
      },
    },
    {
      name:'safari',
        use: {
      browserName: 'webkit',
      trace: 'retain-on-failure',
      headless: true,
      screenshot:'only-on-failure',
      },
    }
]
});

