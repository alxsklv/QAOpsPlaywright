// @ts-check
import { defineConfig, devices } from '@playwright/test';


const config = ({
  testDir: './tests',
  retries: 2,
  workers: 1, //by defaut 5 workers for parallel execution are used. They run test files in paralel (but not tests inside the files)
  timeout: 30 * 1000, //30 s timeout to overwrite default 30 ms
  expect: {
    timeout: 5000
  },

  reporter: 'html',
  //example how to use multiple configs within one config file 
  //npx playwright test Assigment4.spec.js --config playwright.config1.js --project chrome. //without project param all projects will be executed
  projects: [
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'on',
        trace: 'retain-only-on-failure',
        ...devices['iPhone 11'],
      }
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'retain-only-on-failure',
        ...devices['Galaxy A55']
        //viewport: { width: 720, height: 720 }. //setting to test different screens resolution 
      }
    }

  ],

  use: {
    browserName: 'firefox',
    headless: true,
    screenshot: 'on',
    ignoreHttpsErrors: true, //bypass unsecure website without ssl sertificate
    permissions: ['geolocation'], //accept permission for geolocation 
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },

});

module.exports = config;
