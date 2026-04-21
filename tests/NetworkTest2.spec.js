
const { test, expect } = require('@playwright/test');


test('Security test request intercept', async ({ page }) => {

    const email = "test@job.com"
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Test123#");
    await page.locator("#login").click();
    await page.locator(".card-body b").last().waitFor();

    await page.locator("//button[@routerlink='/dashboard/myorders']").click();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=12345678" })
    )
    await page.locator('button').filter({ hasText: 'View' }).first().click();
    await expect(page.locator(".blink_me")).toContainText("not authorize");


})