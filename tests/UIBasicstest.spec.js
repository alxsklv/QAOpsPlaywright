
const {test, expect} = require('@playwright/test');

test('@Web Browser Context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator("input#username");
    const passwordField = page.locator("[type='password']");
    const sighnInBtn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await sighnInBtn.click();
    //locator will wait automatically until this elemnt appears 
   console.log(await page.locator("[style*='block']").textContent()); //just to get proper tx of the message
   await expect(page.locator("[style*='block']")).toContainText("Incorrect");

   await userName.fill("");
   await userName.fill("rahulshettyacademy");

   await passwordField.fill("");
   await passwordField.fill("Learning@830$3mK2");


   await sighnInBtn.click();

   await cardTitles.nth(0).textContent();  //return first elements if multiple are returned
   await cardTitles.first().textContent(); //alternative way but works to return firt element only 

   const allTitles = await cardTitles.allTextContents(); //this method does not have autowait but previous one has 
   console.log(allTitles);

});

test('UI Controls', async ({page})=>
    { 
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const userName = page.locator("input#username");
        const passwordField = page.locator("[type='password']");
        const sighnInBtn = page.locator("#signInBtn");

        const dropDown = page.locator("select.form-control");
        const documentLink =page.locator("[href*='/documents-request']")

        await dropDown.selectOption("consult");
        await page.locator("#usertype").last().click();
        await page.locator("#okayBtn").click();
        await expect(page.locator("#usertype").last()).toBeChecked();
        //or
        //page.locator("#usertype").last().isChecked() //but for dbugging. Assertions are better 
        await page.locator("#terms").click();   
        await expect(page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();
        expect(await page.locator("#terms").isChecked()).toBeFalsy(); //workaround to check if element is unchecked
        
        await expect(documentLink).toHaveAttribute("class", "blinkingText");



        

        //await page.pause(); //for debug 


        //await userName.fill("rahulshetty");
        //await page.locator("[type='password']").fill("learning");
        //await sighnInBtn.click();

    });

    test('Multiple Pages manipulation', async ({browser})=>
        { 
            const context = await browser.newContext(); //eeded to manipulate with multiple tabs and pages
            const page = await context.newPage();
            await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

            const userName = page.locator("input#username");
            const passwordField = page.locator("[type='password']");
            const documentLink = page.locator("[href*='documents-request']")

            //Next two steps should be run in paralel - Promise.all() should be used - promises should be put into array 
            const [newPage] = await Promise.all(
            [
                context.waitForEvent('page'), //listens if any new page is opened in the session, should be async to work.
                documentLink.click(),
            ])

            const text = await newPage.locator(".im-para.red").textContent(); //textContent() returns value that was defined in DOM 
            console.log(text);

            const arrayText = text.split("@");
            const domain = arrayText[1].split(" ")[0]; 
            console.log(domain);

            await userName.fill(domain);
            console.log(await userName.inputValue());  //inputValue() to get progrmmatically entered values

             
        });