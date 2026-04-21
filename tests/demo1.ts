import { Locator, Page } from "@playwright/test";

let message1: string = "Hello";
message1 = "bye";

let age1: number = 20
console.log(age1);
let isActive: boolean = false;

let numbers1: number[] = [1, 2, 3]

let data: any = "some data"; // ifyou are not sure about data type
data = 42;

function add(a: number, b: number): number {
    return a + b;
}

add(3, 4);

let user: { name: string, age: number } = { name: "Bob", age: 34 };

class LoginPage {

    page: Page;
    signInButton: Locator;

    constructor(page: any) {
        this.page = page;
        this.signInButton = page.locator("#login");
        //this.userName = page.locator("#userEmail");
        //this.password = page.locator("#userPassword");
        //this.singleCart = page.locator(".card-body b");
    }

}

module.exports = { LoginPage }

