const { After, Before, AfterStep, Status } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');

// Synchronous
Before(async function () {
  const browser = await playwright.chromium.launch({
    headless: false
  }); // to create browser page 

  const context = await browser.newContext();
  this.page = await context.newPage();

  await this.page.goto("https://rahulshettyacademy.com/client");
});

AfterStep(async function ({ result }) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED) {
    await this.page.screenshot({path: 'screenshot1.png'});
  }
});