
const {test, expect} = require('@playwright/test');


test('Page Playwright test', async ({page})=>
    { 
        const email = "test@job.com"
        const productName = "ZARA COAT 3";
        const products = page.locator(".card-body");
        await page.goto("https://rahulshettyacademy.com/client");
        
        await page.locator("#userEmail").fill(email);
        await page.locator("#userPassword").fill("Test123#");
        await page.locator("#login").click();


        //await page.waitForLoadState("networkidle");  //wait until all API calls are made, not best practice
        await page.locator(".card-body b").last().waitFor(); //better approach to wait for an element instead waiting for entire network 
        const titles = await page.locator(".card-body b").allTextContents();  // this method needs previous call as it ned time to load all products
        console.log(titles);

        //adding Zara Coat 3 (2nd product)
        const count = await products.count();
        for(let i=0; i<count; ++i) {
            if(await products.nth(i).locator("b").textContent() === productName){
                await products.nth(i).locator("text=Add To Cart").click(); 
                break;
            }
        }
        
        await page.locator("[routerlink='/dashboard/cart']").click();
        await page.locator("div li").first().waitFor();  // needed because page is loaded after few secs
        const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
        expect(bool).toBeTruthy();

        await page.locator('button:has-text("Checkout")').click();

        await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 }); //150ms delay between every btn entry 
        const dropdown = page.locator(".ta-results");
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

        expect(page.locator("label[type='text']")).toHaveText(email);
        await(page.locator(".actions .ng-star-inserted").click());
        await page.locator(".hero-primary").waitFor(); 
        expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        const orderId = await page.locator("label.ng-star-inserted").textContent();
        console.log(orderId);

        await page.locator("//button[@routerlink='/dashboard/myorders']").click();
        const rows = page.locator("tbody tr");
        await page.locator("tbody tr").first().waitFor();
        for(let i = 0; i<await rows.count(); ++i) {
            const rawOrderId = await rows.nth(i).locator("th").textContent();
            if(orderId.includes(rawOrderId)){
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }

        const detailsPageOrderId = await page.locator(".col-text").textContent();
        expect(orderId.includes(detailsPageOrderId)).toBeTruthy();
        
    });