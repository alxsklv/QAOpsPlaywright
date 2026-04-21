import {Locator, Page} from '@playwright/test'

export class DashboardPage {

    page: Page;
    products: Locator;
    prouctsText: Locator; 
    cart: Locator; 
    item: Locator;


    constructor(page: Page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.prouctsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink='/dashboard/cart']");
        this.item = page.locator("h3:has-text('ZARA COAT 3')");
    }


    async searchProductAddToCart(productName: string) {

        const titles = await this.prouctsText.allTextContents();;  // this method needs previous call as it ned time to load all products
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                await this.products.nth(i).locator("text=Add To Cart").click();
                break;
            }
        } 
    }

    async navigateToCart() {
        await this.cart.click();
        await this.page.locator("div li").first().waitFor();  // needed because page is loaded after few secs
        const bool = await this.item.isVisible();
    }




}


module.exports = {DashboardPage}