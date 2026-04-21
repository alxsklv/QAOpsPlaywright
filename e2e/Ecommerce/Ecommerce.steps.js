const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');

Given('a login to Ecommerce application with {string} and {string}', async function (username, password) {
    //Handled in hooks
    /*const browser = await playwright.chromium.launch({. //Handled in hooks
            headless: false
        }); // to create browser page 
    
    const context = await browser.newContext(); 
    this.page = await context.newPage(); 
    
    await this.page.goto("https://rahulshettyacademy.com/client"); */

    await this.page.locator("#userEmail").fill(username);
    await this.page.locator("#userPassword").fill(password);
    await this.page.locator("#login").click();
});

When('Add {string} to Card', async function (productName) {
    await this.page.locator(".card-body b").last().waitFor(); //better approach to wait for an element instead waiting for entire network 
        const titles = await this.page.locator(".card-body b").allTextContents();  // this method needs previous call as it ned time to load all products
        console.log(titles);

        //adding Zara Coat 3 (2nd product)
        const products = this.page.locator(".card-body");
        const count = await this.page.locator(".card-body").count();
        for(let i=0; i<count; ++i) {
            if(await products.nth(i).locator("b").textContent() === productName){
                await products.nth(i).locator("text=Add To Cart").click(); 
                break;
            }
        }
        
});

Then('Cerify {string} is displayed in the Cart', async function (productName) {
    await this.page.locator("[routerlink='/dashboard/cart']").click();
    await this.page.locator("div li").first().waitFor();  // needed because page is loaded after few secs
        const bool = await this.page.locator("h3:has-text('ZARA COAT 3')").isVisible();
        expect(bool).toBeTruthy();
});

When('Enter valid details and Place the Order', async function () {
    await this.page.locator('button:has-text("Checkout")').click();

        await this.page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 }); //150ms delay between every btn entry 
        const dropdown = this.page.locator(".ta-results");
        await dropdown.waitFor(); 
        const optionsCount = await dropdown.locator("button").count();
        for(let i = 0; i < optionsCount; ++i)
        {
            const text = await dropdown.locator("button").nth(i).textContent();
            if(text === " India")
            {
                await dropdown.locator("button").nth(i).click();
                break; 
            }
        }
        const email = "test@job.com";

        expect(this.page.locator("label[type='text']")).toHaveText(email);
        await(this.page.locator(".actions .ng-star-inserted").click());
        await this.page.locator(".hero-primary").waitFor(); 
        expect(this.page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        this.orderId = await this.page.locator("label.ng-star-inserted").textContent();
        console.log(this.orderId);
});

Then('Verify order is present in order history', async function () {
    await this.page.locator("//button[@routerlink='/dashboard/myorders']").click();
        const rows = this.page.locator("tbody tr");
        await this.page.locator("tbody tr").first().waitFor();
        for(let i = 0; i<await rows.count(); ++i) {
            const rawOrderId = await rows.nth(i).locator("th").textContent();
            if(this.orderId.includes(rawOrderId)){
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }
        const detailsPageOrderId = await this.page.locator(".col-text").textContent();
        expect(this.orderId.includes(detailsPageOrderId)).toBeTruthy();
});