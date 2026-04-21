import {Locator, Page} from '@playwright/test'


export class LoginPage {

signInButton: Locator;
page: Page;
userName: Locator;
password: Locator;
singleCart: Locator;


    constructor(page: Page) 
    {
        this.page = page;
        this.signInButton = page.locator("#login");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.singleCart = page.locator(".card-body b");
    }

    async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username: string, password: string) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle'); 
    }
}

module.exports = {LoginPage}