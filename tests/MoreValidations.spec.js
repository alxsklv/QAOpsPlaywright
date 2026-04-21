const { test, expect } = require('@playwright/test');

//test.describe.configure({mode: 'parallel'}); //if we need to run tests on same file in parallel 
//test.describe.configure({mode: 'serial'}); //fails next tests if previous one has failed (needed when tests depend on each other)

test('@Web Popup validations', async ({ page }) => {
    //Login 
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://google.com/");
    //await page.goBack();
    //await page.goForward(); 
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.locator("#confirmbtn").click();
    page.on('dialog', dialog => dialog.accept()); //listener to accept any popup dialogue
    await page.locator("#mousehover").hover();

    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();

    await expect(framesPage.locator(".text h2")).toContainText("13,522");
    //or 
    const text = await framesPage.locator(".text h2").textContent();
    expect(text.split(" ")[1]).toBe("13,522");


});


test('Screenshot and Visual comparison', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({path: 'partialScreenshot.png'})
    await page.locator("#hide-textbox").click();
    await page.screenshot({path: 'screenshot.png'})
    await expect(page.locator("#displayed-text")).toBeHidden();
});

test('Visual comparison', async ({ page }) => {
    await page.goto("https://www.rediff.com");
    expect(await page.screenshot()).toMatchSnapshot('landing.png'); //landing.png = existing screenshot 
});