const {test, expect} = require('@playwright/test');


test('Special locators', async ({page})=>
    { 
        //for radiobuttons, checkboxes and drop-downs 
        await page.goto("https://rahulshettyacademy.com/angularpractice/");
        await page.getByLabel("Check me out if you Love IceCreams!").click();  //check() could be also used
        await page.getByLabel("Employed").check();
        await page.getByLabel("Gender").selectOption("Female");

        await page.getByPlaceholder("Password").fill("Test123#");
        await page.getByRole("button", {name: "Submit" }).click();
        await page.getByText("The Form has been submitted successfully!").isVisible(); 
        await page.getByRole("link", {name: "Shop"}).click();

        await page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button").click();
    });