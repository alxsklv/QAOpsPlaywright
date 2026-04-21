# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppImprovedSelectors.spec.js >> Page Playwright test
- Location: tests/ClientAppImprovedSelectors.spec.js:5:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('tr').filter({ hasText: ' | 69e76ffef86ba51a65796456 | ' }).getByRole('button', { name: 'View' })

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
    - heading "Your Orders" [level=1] [ref=e26]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row "Order Id Product Image Name Price Ordered Date View Delete" [ref=e29]:
          - columnheader "Order Id" [ref=e30]
          - columnheader "Product Image" [ref=e31]
          - columnheader "Name" [ref=e32]
          - columnheader "Price" [ref=e33]
          - columnheader "Ordered Date" [ref=e34]
          - columnheader "View" [ref=e35]
          - columnheader "Delete" [ref=e36]
      - rowgroup [ref=e37]:
        - row "69e76ffef86ba51a65796456 ZARA COAT 3 $ 11500 Tue Apr 21 View Delete" [ref=e38]:
          - rowheader "69e76ffef86ba51a65796456" [ref=e39]
          - cell [ref=e40]:
            - img [ref=e41]
          - cell "ZARA COAT 3" [ref=e42]
          - cell "$ 11500" [ref=e43]
          - cell "Tue Apr 21" [ref=e44]
          - cell "View" [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell "Delete" [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row "69e76ff9f86ba51a65796415 ZARA COAT 3 $ 11500 Tue Apr 21 View Delete" [ref=e49]:
          - rowheader "69e76ff9f86ba51a65796415" [ref=e50]
          - cell [ref=e51]:
            - img [ref=e52]
          - cell "ZARA COAT 3" [ref=e53]
          - cell "$ 11500" [ref=e54]
          - cell "Tue Apr 21" [ref=e55]
          - cell "View" [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell "Delete" [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row "69e76e9cf86ba51a65795eaf ZARA COAT 3 $ 11500 Tue Apr 21 View Delete" [ref=e60]:
          - rowheader "69e76e9cf86ba51a65795eaf" [ref=e61]
          - cell [ref=e62]:
            - img [ref=e63]
          - cell "ZARA COAT 3" [ref=e64]
          - cell "$ 11500" [ref=e65]
          - cell "Tue Apr 21" [ref=e66]
          - cell "View" [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell "Delete" [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
        - row "69e76e8ef86ba51a65795e46 ZARA COAT 3 $ 11500 Tue Apr 21 View Delete" [ref=e71]:
          - rowheader "69e76e8ef86ba51a65795e46" [ref=e72]
          - cell [ref=e73]:
            - img [ref=e74]
          - cell "ZARA COAT 3" [ref=e75]
          - cell "$ 11500" [ref=e76]
          - cell "Tue Apr 21" [ref=e77]
          - cell "View" [ref=e78]:
            - button "View" [ref=e79] [cursor=pointer]
          - cell "Delete" [ref=e80]:
            - button "Delete" [ref=e81] [cursor=pointer]
        - row "69e76e86f86ba51a65795e12 ZARA COAT 3 $ 11500 Tue Apr 21 View Delete" [ref=e82]:
          - rowheader "69e76e86f86ba51a65795e12" [ref=e83]
          - cell [ref=e84]:
            - img [ref=e85]
          - cell "ZARA COAT 3" [ref=e86]
          - cell "$ 11500" [ref=e87]
          - cell "Tue Apr 21" [ref=e88]
          - cell "View" [ref=e89]:
            - button "View" [ref=e90] [cursor=pointer]
          - cell "Delete" [ref=e91]:
            - button "Delete" [ref=e92] [cursor=pointer]
        - row "69e76e7ef86ba51a65795dc7 ZARA COAT 3 $ 11500 Tue Apr 21 View Delete" [ref=e93]:
          - rowheader "69e76e7ef86ba51a65795dc7" [ref=e94]
          - cell [ref=e95]:
            - img [ref=e96]
          - cell "ZARA COAT 3" [ref=e97]
          - cell "$ 11500" [ref=e98]
          - cell "Tue Apr 21" [ref=e99]
          - cell "View" [ref=e100]:
            - button "View" [ref=e101] [cursor=pointer]
          - cell "Delete" [ref=e102]:
            - button "Delete" [ref=e103] [cursor=pointer]
        - row "69e76e7df86ba51a65795db8 ZARA COAT 3 $ 11500 Tue Apr 21 View Delete" [ref=e104]:
          - rowheader "69e76e7df86ba51a65795db8" [ref=e105]
          - cell [ref=e106]:
            - img [ref=e107]
          - cell "ZARA COAT 3" [ref=e108]
          - cell "$ 11500" [ref=e109]
          - cell "Tue Apr 21" [ref=e110]
          - cell "View" [ref=e111]:
            - button "View" [ref=e112] [cursor=pointer]
          - cell "Delete" [ref=e113]:
            - button "Delete" [ref=e114] [cursor=pointer]
    - generic [ref=e115]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e117]:
    - button "Go Back to Shop" [ref=e118] [cursor=pointer]
    - button "Go Back to Cart" [ref=e119] [cursor=pointer]
```

# Test source

```ts
  1  | 
  2  | const {test, expect} = require('@playwright/test');
  3  | 
  4  | 
  5  | test('Page Playwright test', async ({page})=>
  6  |     { 
  7  |         const email = "test@job.com"
  8  |         const productName = "ZARA COAT 3";
  9  |         const products = page.locator(".card-body");
  10 |         await page.goto("https://rahulshettyacademy.com/client");
  11 |         
  12 |         await page.getByPlaceholder("email@example.com").fill(email);
  13 |         await page.getByPlaceholder("enter your passsword").fill("Test123#");
  14 |         await page.getByRole("button", {name: "Login"}).click();
  15 | 
  16 |         //await page.waitForLoadState("networkidle");  //wait until all API calls are made, not best practice
  17 |         await page.locator(".card-body b").last().waitFor(); //better approach to wait for an element instead waiting for entire network 
  18 |         const titles = await page.locator(".card-body b").allTextContents();  // this method needs previous call as it ned time to load all products
  19 |         console.log(titles);
  20 | 
  21 |         //adding Zara Coat 3 (2nd product)
  22 |         await page.locator(".card-body").filter({hasText: productName}).getByRole("button", {name: "Add To Cart"}).click(); 
  23 | 
  24 |         /*const count = await products.count();
  25 |         for(let i=0; i<count; ++i) {
  26 |             if(await products.nth(i).locator("b").textContent() === productName){
  27 |                 await products.nth(i).locator("text=Add To Cart").click(); 
  28 |                 break;
  29 |             }
  30 |         } */
  31 |         
  32 |         await page.getByRole("listitem").getByRole("button", {name: "Cart"}).click(); 
  33 |         await page.locator("div li").first().waitFor();  // needed because page is loaded after few secs
  34 |         await expect(page.getByText(productName)).toBeVisible();
  35 | 
  36 |         await page.getByRole("button", {name: "Checkout"}).click();
  37 | 
  38 |         await page.getByPlaceholder("Select Country").pressSequentially("ind", { delay: 150 }); //150ms delay between every btn entry 
  39 |         
  40 |         await page.getByRole("button", {name: "India"}).nth(1).click();
  41 |         /*const dropdown = page.locator(".ta-results");
  42 |         await dropdown.waitFor(); 
  43 |         const optionsCount = await dropdown.locator("button").count();
  44 |         for(let i = 0; i < optionsCount; ++i)
  45 |         {
  46 |             const text = await dropdown.locator("button").nth(i).textContent();
  47 |             if(text === " India")
  48 |             {
  49 |                 await dropdown.locator("button").nth(i).click();
  50 |                 break; 
  51 |             }
  52 |         } */
  53 | 
  54 |         expect(page.locator("label[type='text']")).toHaveText(email);
  55 |         
  56 |         await page.getByText("PLACE ORDER").click();
  57 |         await page.locator(".hero-primary").waitFor(); 
  58 |         expect(page.getByText("Thankyou for the order.")).toBeVisible();
  59 |         
  60 |         const orderId = await page.locator("label.ng-star-inserted").textContent();
  61 |         console.log(orderId);
  62 | 
  63 |         //await page.locator("//button[@routerlink='/dashboard/myorders']").click();
  64 |         await page.getByText("Orders History Page").click();
  65 | 
  66 |         
  67 |         /*const rows = page.locator("tbody tr");
  68 |         await page.locator("tbody tr").first().waitFor();
  69 |         for(let i = 0; i<await rows.count(); ++i) {
  70 |             const rawOrderId = await rows.nth(i).locator("th").textContent();
  71 |             if(orderId.includes(rawOrderId)){
  72 |                 await rows.nth(i).locator("button").first().click();
  73 |                 break;
  74 |             }
  75 |         }*/
  76 |         await page.locator("tbody tr").first().waitFor();
> 77 |        await page.locator("tr").filter({hasText: orderId}).getByRole("button", {name: "View"}).click(); 
     |                                                                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  78 | 
  79 |        expect(page.getByText(orderId)).toBeVisible();
  80 |         
  81 |     });
```