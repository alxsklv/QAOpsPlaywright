// @ts-check
import { defineConfig, devices } from '@playwright/test';


const config = ({
  testDir: './tests',
  timeout: 30 *1000, //30 s timeout to overwrite default 30 ms
  expect: {
    timeout: 5000
  },

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless : true,
    screenshot: 'on',
    trace: 'retain-on-failure'
  },

});

module.exports = config;
