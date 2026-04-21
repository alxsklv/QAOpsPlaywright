const { test, expect, request } = require('@playwright/test');
const APIUtils = require('../utils/APIUtils');

const loginPayLoad = { userEmail: "test@job.com", userPassword: "Test123#" }
const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] }
let token;
let orderId;

let response;
test.beforeAll(async () => {
    const apiContext = await request.newContext(); 
    const apiUtils = new APIUtils(apiContext, loginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad); 
});



test('Log In with API test', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);


    //const email = "test@job.com"
    //await page.goto("https://rahulshettyacademy.com/client");
    //await page.locator("#userEmail").fill(email);
    //await page.locator("#userPassword").fill("Test123#");
    //await page.locator("#login").click();
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");




    await page.locator("//button[@routerlink='/dashboard/myorders']").click();
    const rows = page.locator("tbody tr");
    await page.locator("tbody tr").first().waitFor();
    for (let i = 0; i < await rows.count(); ++i) {
        const rawOrderId = await rows.nth(i).locator("th").textContent();
        if (response.orderId.includes(rawOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

    const detailsPageOrderId = await page.locator(".col-text").textContent();
    expect(response.orderId.includes(detailsPageOrderId)).toBeTruthy();

});