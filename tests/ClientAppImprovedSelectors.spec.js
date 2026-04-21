
const {test, expect} = require('@playwright/test');


test('Page Playwright test', async ({page})=>
    { 
        const email = "test@job.com"
        const productName = "ZARA COAT 3";
        const products = page.locator(".card-body");
        await page.goto("https://rahulshettyacademy.com/client");
        
        await page.getByPlaceholder("email@example.com").fill(email);
        await page.getByPlaceholder("enter your passsword").fill("Test123#");
        await page.getByRole("button", {name: "Login"}).click();

        //await page.waitForLoadState("networkidle");  //wait until all API calls are made, not best practice
        await page.locator(".card-body b").last().waitFor(); //better approach to wait for an element instead waiting for entire network 
        const titles = await page.locator(".card-body b").allTextContents();  // this method needs previous call as it ned time to load all products
        console.log(titles);

        //adding Zara Coat 3 (2nd product)
        await page.locator(".card-body").filter({hasText: productName}).getByRole("button", {name: "Add To Cart"}).click(); 

        /*const count = await products.count();
        for(let i=0; i<count; ++i) {
            if(await products.nth(i).locator("b").textContent() === productName){
                await products.nth(i).locator("text=Add To Cart").click(); 
                break;
            }
        } */
        
        await page.getByRole("listitem").getByRole("button", {name: "Cart"}).click(); 
        await page.locator("div li").first().waitFor();  // needed because page is loaded after few secs
        await expect(page.getByText(productName)).toBeVisible();

        await page.getByRole("button", {name: "Checkout"}).click();

        await page.getByPlaceholder("Select Country").pressSequentially("ind", { delay: 150 }); //150ms delay between every btn entry 
        
        await page.getByRole("button", {name: "India"}).nth(1).click();
        /*const dropdown = page.locator(".ta-results");
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
        } */

        expect(page.locator("label[type='text']")).toHaveText(email);
        
        await page.getByText("PLACE ORDER").click();
        await page.locator(".hero-primary").waitFor(); 
        expect(page.getByText("Thankyou for the order.")).toBeVisible();
        
        const orderId = await page.locator("label.ng-star-inserted").textContent();
        console.log(orderId);

        //await page.locator("//button[@routerlink='/dashboard/myorders']").click();
        await page.getByText("Orders History Page").click();

        
        /*const rows = page.locator("tbody tr");
        await page.locator("tbody tr").first().waitFor();
        for(let i = 0; i<await rows.count(); ++i) {
            const rawOrderId = await rows.nth(i).locator("th").textContent();
            if(orderId.includes(rawOrderId)){
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }*/
        await page.locator("tbody tr").first().waitFor();
       await page.locator("tr").filter({hasText: orderId}).getByRole("button", {name: "View"}).click(); 

       expect(page.getByText(orderId)).toBeVisible();
        
    });