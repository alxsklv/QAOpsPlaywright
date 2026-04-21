# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assigment2.spec.js >> Not Eligible for refund
- Location: tests/Assigment2.spec.js:60:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Browse Events →')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Browse Events →')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - generic [ref=e6]: RSA
          - generic [ref=e7]: Rahul Shetty Academy
        - generic [ref=e8]:
          - generic [ref=e13]: eventhub.app
          - img "EventHub app preview" [ref=e14]
        - list [ref=e16]:
          - listitem [ref=e17]:
            - generic [ref=e18]: ⚡
            - generic [ref=e19]: Live REST APIs — test real endpoints, not mocks
          - listitem [ref=e20]:
            - generic [ref=e21]: 🔒
            - generic [ref=e22]: Isolated sandbox — your data, your tests, no conflicts
          - listitem [ref=e23]:
            - generic [ref=e24]: 🎫
            - generic [ref=e25]: Auth, CRUD, bookings — flows you'll face on the job
          - listitem [ref=e26]:
            - generic [ref=e27]: 🤖
            - generic [ref=e28]: Built for Selenium, Playwright, RestAssured & more
      - generic [ref=e30]:
        - paragraph [ref=e31]: 50,000+
        - paragraph [ref=e32]: QA engineers trained worldwide
    - generic [ref=e34]:
      - generic [ref=e35]:
        - 'heading "The #1 QA Practice Hub for Automation Engineers" [level=2] [ref=e36]':
          - text: "The #1 QA Practice Hub"
          - text: for Automation Engineers
        - paragraph [ref=e37]: EventHub is a production-grade practice app designed so you can sharpen your testing skills on real-world scenarios — before your next interview or project.
      - link "API Documentation (Swagger)" [ref=e38] [cursor=pointer]:
        - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - img [ref=e39]
        - text: API Documentation (Swagger)
      - generic [ref=e41]:
        - generic [ref=e42]:
          - img [ref=e44]
          - heading "Sign in to EventHub" [level=1] [ref=e46]
          - paragraph [ref=e47]: Enter your credentials to continue
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: Email
            - textbox "Email" [ref=e51]:
              - /placeholder: you@email.com
              - text: Alex
            - paragraph [ref=e52]: Enter a valid email
          - generic [ref=e53]:
            - generic [ref=e54]: Password
            - textbox "Password" [ref=e55]:
              - /placeholder: ••••••
              - text: Test1
            - paragraph [ref=e56]: Password must be at least 6 characters
          - button "Sign In" [active] [ref=e57] [cursor=pointer]
        - paragraph [ref=e58]:
          - text: Don't have an account?
          - link "Register" [ref=e59] [cursor=pointer]:
            - /url: /register
      - paragraph [ref=e60]:
        - text: A practice environment by
        - link "RahulShettyAcademy.com" [ref=e61] [cursor=pointer]:
          - /url: https://rahulshettyacademy.com
        - text: — used by QA engineers worldwide to master automation testing.
  - alert [ref=e62]
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | const BASE_URL = "https://eventhub.rahulshettyacademy.com";
  4   | const USERNAME = "Alex";
  5   | const PASSWORD = "Test1"
  6   | const EMAIL = "alex@test.com"
  7   | const fullName = "Test Test"
  8   | const PHONE = "12344556"
  9   | 
  10  | async function loginAndGoToBooking(page) {
  11  |     await page.goto(BASE_URL+ '/login');
  12  |     await page.getByLabel("Email").fill(USERNAME);
  13  |     await page.getByLabel("Password").fill(PASSWORD);
  14  |     await page.locator("#login-btn").click();
> 15  |     await expect(page.getByText('Browse Events →')).toBeVisible();
      |                                                     ^ Error: expect(locator).toBeVisible() failed
  16  | }
  17  | 
  18  | 
  19  | test('Eligible for refund', async ({ page }) => {
  20  |     //Login 
  21  |     await loginAndGoToBooking(page);
  22  | 
  23  |     //Book first event with 1 ticket (default)
  24  |     await page.goto(BASE_URL + '/events');
  25  |     await page
  26  |         .getByTestId('event-card')
  27  |         .first()
  28  |         .getByTestId('book-now-btn')
  29  |         .click();
  30  |     await page.getByPlaceholder("Your full name").fill(fullName);
  31  |     await page.getByPlaceholder("you@email.com").fill(EMAIL);
  32  |     await page.getByLabel("Phone Number*").fill(PHONE);
  33  |     await page.locator("#confirm-booking").click();
  34  | 
  35  |     //Navigate to booking detail
  36  |     await page.getByText("View My Bookings").click();
  37  |     await expect(page).toHaveURL(BASE_URL + "/bookings");
  38  |     await page.getByText('View Details').first().click()
  39  |     await expect(page.getByText("Booking Information")).toBeVisible();
  40  | 
  41  |     //Validate booking ref
  42  |     const bookingRef = await page.locator("span.font-mono").first().innerText();
  43  |     const eventTitle = await page.locator("h1.text-2xl").innerText();
  44  |     expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0))
  45  | 
  46  |     //Check refund eligibility
  47  |     await page.locator("#check-refund-btn").click();
  48  |     const spinner = page.locator('#refund-spinner');
  49  |     await expect(spinner).toBeVisible({ timeout: 0 });
  50  |     await expect(spinner).toBeHidden({ timeout: 6000 });
  51  | 
  52  |     //Validate result
  53  |     const refundResult = page.locator("#refund-result");
  54  |     await expect(refundResult).toBeVisible();
  55  |     await expect(refundResult).toContainText('Eligible for refund.');
  56  |     await expect(refundResult).toContainText('Single-ticket bookings qualify for a full refund');   
  57  | });
  58  | 
  59  | 
  60  | test('Not Eligible for refund', async ({ page }) => {
  61  |     //Login 
  62  |     await loginAndGoToBooking(page);
  63  | 
  64  |     //Book first event with 3 tickets
  65  |     await page.goto(BASE_URL + '/events');
  66  |     await page
  67  |         .getByTestId('event-card')
  68  |         .first()
  69  |         .getByTestId('book-now-btn')
  70  |         .click();
  71  |     await page.getByRole('button', { name: '+' }).click();
  72  |     await page.getByRole('button', { name: '+' }).click();
  73  |     await page.getByPlaceholder("Your full name").fill(fullName);
  74  |     await page.getByPlaceholder("you@email.com").fill(EMAIL);
  75  |     await page.getByLabel("Phone Number*").fill(PHONE);
  76  |     await page.locator("#confirm-booking").click();
  77  | 
  78  |     //Navigate to booking detail
  79  |     await page.getByText("View My Bookings").click();
  80  |     await expect(page).toHaveURL(BASE_URL + "/bookings");
  81  |     await page.getByText('View Details').first().click()
  82  |     await expect(page.getByText("Booking Information")).toBeVisible();
  83  | 
  84  |     //Validate booking ref
  85  |     const bookingRef = await page.locator("span.font-mono").first().innerText();
  86  |     const eventTitle = await page.locator("h1.text-2xl").innerText();
  87  |     expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0))
  88  | 
  89  |     //Check refund eligibility
  90  |     await page.locator("#check-refund-btn").click();
  91  |     const spinner = page.locator('#refund-spinner');
  92  |     await expect(spinner).toBeVisible({ timeout: 0 });
  93  |     await expect(spinner).toBeHidden({ timeout: 6000 });
  94  | 
  95  |     //Validate result
  96  |     const refundResult = page.locator("#refund-result");
  97  |     await expect(refundResult).toBeVisible();
  98  |     await expect(refundResult).toContainText('Not eligible for refund');
  99  |     await expect(refundResult).toContainText('Group bookings (3 tickets) are non-refundable');  
  100 | });
```