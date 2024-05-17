// @ts-check
const { defineConfig, devices } = require('@playwright/test');
/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 10 * 1000,

  // this will be timeout for the expect ondition
  expect: {
    timeout: 10000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true, //All test scripts from one file will run in serial mode, but different test files will run in parallel mode
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 3, //we can set retry mechanism on local and on gitHub actions 
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects:[
    {
      name:'chrome',
      use: {
      browserName: 'chromium',  // for safari browser user webkit , for firefox user firefox 
      trace: 'retain-on-failure', // retain on failure wil generate traces only for failed test scripts 
      headless: false,
      screenshot:'only-on-failure',
      viewport:{width:1920,height:1400},
      ignoreHTTPSErrors:true,
      video:'retain-on-failure',
      },
    },
    {
      name:'safari',
      use: {
      browserName: 'webkit',
      trace: 'retain-on-failure',
      headless: true,
      screenshot:'only-on-failure', //this will capture screenshot only when test fails 
      ignoreHTTPSErrors:true, //this will ignore the SSL certification error and proceed
      permissions:['geolocation'], // this will allow location popup which comes sometime to know the location

      },
    }
]
});

