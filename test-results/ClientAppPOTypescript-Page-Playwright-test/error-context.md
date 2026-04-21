# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPOTypescript.spec.ts >> Page Playwright test
- Location: tests/ClientAppPOTypescript.spec.ts:15:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div li').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1  | import {Locator, Page} from '@playwright/test'
  2  | 
  3  | export class DashboardPage {
  4  | 
  5  |     page: Page;
  6  |     products: Locator;
  7  |     prouctsText: Locator; 
  8  |     cart: Locator; 
  9  |     item: Locator;
  10 | 
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page;
  14 |         this.products = page.locator(".card-body");
  15 |         this.prouctsText = page.locator(".card-body b");
  16 |         this.cart = page.locator("[routerlink='/dashboard/cart']");
  17 |         this.item = page.locator("h3:has-text('ZARA COAT 3')");
  18 |     }
  19 | 
  20 | 
  21 |     async searchProductAddToCart(productName: string) {
  22 | 
  23 |         const titles = await this.prouctsText.allTextContents();;  // this method needs previous call as it ned time to load all products
  24 |         const count = await this.products.count();
  25 |         for (let i = 0; i < count; ++i) {
  26 |             if (await this.products.nth(i).locator("b").textContent() === productName) {
  27 |                 await this.products.nth(i).locator("text=Add To Cart").click();
  28 |                 break;
  29 |             }
  30 |         } 
  31 |     }
  32 | 
  33 |     async navigateToCart() {
  34 |         await this.cart.click();
> 35 |         await this.page.locator("div li").first().waitFor();  // needed because page is loaded after few secs
     |                                                   ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  36 |         const bool = await this.item.isVisible();
  37 |     }
  38 | 
  39 | 
  40 | 
  41 | 
  42 | }
  43 | 
  44 | 
  45 | module.exports = {DashboardPage}
```