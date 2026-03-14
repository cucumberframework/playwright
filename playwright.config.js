
require('dotenv').config(); 
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
    //Main branch commit Pushed to main branch 
      
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
  ['line'],
  ['allure-playwright']
],
  globalSetup: require.resolve('./global-setup'),
   //./global-setup.js file will be executed before the test execution starts and it will set the environment variable for the storage state which we can use in our test cases to run the test cases with already logged in state
  use: {
    // Every test will use this saved auth state by default
    storageState: 'auth.json',
  },
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
      },
    },
  /*  {
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
    */
]
});

