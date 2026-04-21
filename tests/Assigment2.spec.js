const { test, expect } = require('@playwright/test');

const BASE_URL = "https://eventhub.rahulshettyacademy.com";
const USERNAME = "Alex2";
const PASSWORD = "Test12"
const EMAIL = "alex@test.com"
const fullName = "Test Test"
const PHONE = "12344556"

async function loginAndGoToBooking(page) {
    await page.goto(BASE_URL+ '/login');
    await page.getByLabel("Email").fill(USERNAME);
    await page.getByLabel("Password").fill(PASSWORD);
    await page.locator("#login-btn").click();
    await expect(page.getByText('Browse Events →')).toBeVisible();
}


test('Eligible for refund', async ({ page }) => {
    //Login 
    await loginAndGoToBooking(page);

    //Book first event with 1 ticket (default)
    await page.goto(BASE_URL + '/events');
    await page
        .getByTestId('event-card')
        .first()
        .getByTestId('book-now-btn')
        .click();
    await page.getByPlaceholder("Your full name").fill(fullName);
    await page.getByPlaceholder("you@email.com").fill(EMAIL);
    await page.getByLabel("Phone Number*").fill(PHONE);
    await page.locator("#confirm-booking").click();

    //Navigate to booking detail
    await page.getByText("View My Bookings").click();
    await expect(page).toHaveURL(BASE_URL + "/bookings");
    await page.getByText('View Details').first().click()
    await expect(page.getByText("Booking Information")).toBeVisible();

    //Validate booking ref
    const bookingRef = await page.locator("span.font-mono").first().innerText();
    const eventTitle = await page.locator("h1.text-2xl").innerText();
    expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0))

    //Check refund eligibility
    await page.locator("#check-refund-btn").click();
    const spinner = page.locator('#refund-spinner');
    await expect(spinner).toBeVisible({ timeout: 0 });
    await expect(spinner).toBeHidden({ timeout: 6000 });

    //Validate result
    const refundResult = page.locator("#refund-result");
    await expect(refundResult).toBeVisible();
    await expect(refundResult).toContainText('Eligible for refund.');
    await expect(refundResult).toContainText('Single-ticket bookings qualify for a full refund');   
});


test('Not Eligible for refund', async ({ page }) => {
    //Login 
    await loginAndGoToBooking(page);

    //Book first event with 3 tickets
    await page.goto(BASE_URL + '/events');
    await page
        .getByTestId('event-card')
        .first()
        .getByTestId('book-now-btn')
        .click();
    await page.getByRole('button', { name: '+' }).click();
    await page.getByRole('button', { name: '+' }).click();
    await page.getByPlaceholder("Your full name").fill(fullName);
    await page.getByPlaceholder("you@email.com").fill(EMAIL);
    await page.getByLabel("Phone Number*").fill(PHONE);
    await page.locator("#confirm-booking").click();

    //Navigate to booking detail
    await page.getByText("View My Bookings").click();
    await expect(page).toHaveURL(BASE_URL + "/bookings");
    await page.getByText('View Details').first().click()
    await expect(page.getByText("Booking Information")).toBeVisible();

    //Validate booking ref
    const bookingRef = await page.locator("span.font-mono").first().innerText();
    const eventTitle = await page.locator("h1.text-2xl").innerText();
    expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0))

    //Check refund eligibility
    await page.locator("#check-refund-btn").click();
    const spinner = page.locator('#refund-spinner');
    await expect(spinner).toBeVisible({ timeout: 0 });
    await expect(spinner).toBeHidden({ timeout: 6000 });

    //Validate result
    const refundResult = page.locator("#refund-result");
    await expect(refundResult).toBeVisible();
    await expect(refundResult).toContainText('Not eligible for refund');
    await expect(refundResult).toContainText('Group bookings (3 tickets) are non-refundable');  
});