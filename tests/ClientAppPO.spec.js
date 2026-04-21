
const {test, expect} = require('@playwright/test');
const {customtest} = require('../utils/test-base.js');

const {POManager} = require('../pageobjects/POManager')

const dateSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));


test('@Web Page Playwright test', async ({page})=>
    { 
        const poManager = new POManager(page);


        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(dateSet.username, dateSet.password);

        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductAddToCart(dateSet.productName);
        await dashboardPage.navigateToCart(); 


        
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

        expect(page.locator("label[type='text']")).toHaveText(dateSet.username);
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


    customtest('Client Login', async ({page, testDataForOrder})=>
    { 
        const poManager = new POManager(page);


        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductAddToCart(testDataForOrder.productName);
        await dashboardPage.navigateToCart(); 


        
        await page.locator("div li").first().waitFor();  // needed because page is loaded after few secs
        const bool = await page.locator(`h3:has-text("${testDataForOrder.productName}")`).isVisible();
        expect(bool).toBeTruthy();

        await page.locator('button:has-text("Checkout")').click();
});