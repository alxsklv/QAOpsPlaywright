const { test, expect, request } = require('@playwright/test');

const BASE_URL = "https://eventhub.rahulshettyacademy.com";
const API_URL = "https://api.eventhub.rahulshettyacademy.com/api";

const GMAIL_USER = { email: "alexeysokolnikov@gmail.com", password: "ZBa36ddGTKw@dVN" };
const YAHOO_USER = { email: "test_as@yahoo.com", password: "Test123#" };

async function loginAs(page, user) {
    await page.goto(BASE_URL);
    await page.locator('#email').fill(user.email);
    await page.locator('#password').fill(user.password);
    await page.locator('#login-btn').click();
    await page.waitForLoadState("networkidle");
}


test('Log In with API test', async ({ page }) => {

    //Login as Yahoo user via API
    const apiContext = await request.newContext();
    const logingResponse = await apiContext.post(`${API_URL}/auth/login`,
        {
            data: { "email": YAHOO_USER.email, "password": YAHOO_USER.password }
        })
    expect((logingResponse).ok()).toBeTruthy();
    const loginResponseJSON = await logingResponse.json();
    const tokenYahoo = loginResponseJSON.token;

    //Fetch events via API to get a valid event ID
    const eventIDResponse = await apiContext.get(`${API_URL}/events`,
        {
            headers: {
                'Authorization': `Bearer ${tokenYahoo}`,
                'Content-Type': 'application/json'
            },
        })
    expect((eventIDResponse).ok()).toBeTruthy();
    const eventIDResponseJSON = await eventIDResponse.json();
    const firstEventID = eventIDResponseJSON.data[0].id;

    //Create a booking via API as Yahoo user
    const createBookingResponse = await apiContext.post(`${API_URL}/bookings`,
        {
            headers: {
                'Authorization': `Bearer ${tokenYahoo}`
            },
            data: {
                'eventId': firstEventID,
                'customerName': 'Alex Yahoo',
                'customerEmail': YAHOO_USER.email,
                'customerPhone': 3123456789,
                'quantity': 1,
            }
        })
    expect((createBookingResponse).ok()).toBeTruthy();
    const createBookingResponseJSON = await createBookingResponse.json();
    const yahooBookingId = createBookingResponseJSON.data.id;

    // Login as Gmail user via browser UI
    await loginAs(page, GMAIL_USER);

    //Navigate to Yahoo's booking URL as Gmail user
    await page.goto(`${BASE_URL}/bookings/${yahooBookingId}`, { waitUntil: 'networkidle' });

    //Validate Access Denied
    await expect(page.getByText("Access Denied")).toBeVisible();
    await expect(page.getByText("You are not authorized to view this booking")).toBeVisible();

})