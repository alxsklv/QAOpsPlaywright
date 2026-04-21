# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assigment1.spec.js >> Booking Flow
- Location: tests/Assigment1.spec.js:4:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Browse Events')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Browse Events')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
              - text: test@test.com
          - generic [ref=e52]:
            - generic [ref=e53]: Password
            - textbox "Password" [ref=e54]:
              - /placeholder: ••••••
              - text: Test123#
          - button "Sign In" [ref=e55] [cursor=pointer]
        - paragraph [ref=e56]:
          - text: Don't have an account?
          - link "Register" [ref=e57] [cursor=pointer]:
            - /url: /register
      - paragraph [ref=e58]:
        - text: A practice environment by
        - link "RahulShettyAcademy.com" [ref=e59] [cursor=pointer]:
          - /url: https://rahulshettyacademy.com
        - text: — used by QA engineers worldwide to master automation testing.
  - alert [ref=e60]
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | 
  3  | 
  4  | test('Booking Flow', async ({page})=>
  5  |     { 
  6  |         //Login 
  7  |         await page.goto("https://eventhub.rahulshettyacademy.com");
  8  |         await page.getByPlaceholder("you@email.com").fill("test@test.com");
  9  |         await page.getByLabel("Password").fill("Test123#");
  10 |         await page.locator("#login-btn").click();
> 11 |         await expect(page.getByText("Browse Events")).toBeVisible(); 
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  12 | 
  13 |         //Create a new event 
  14 |         await page.goto("https://eventhub.rahulshettyacademy.com/admin/events");
  15 |         const eventTitle = `Test Event ${Date.now()}`;
  16 |         await page.locator("#event-title-input").fill(eventTitle);
  17 |         await page.locator("#admin-event-form textarea").fill("My Event Description");
  18 |         await page.getByLabel("City").fill("Amsterdam");
  19 |         await page.getByLabel("Venue").fill("Bijmer Arena");
  20 | 
  21 |         function futureDateValue() {
  22 |             const date = new Date();
  23 |             date.setDate(date.getDate() + 1);
  24 |             return date.toISOString().slice(0, 16);
  25 |         }
  26 |         await page.getByLabel("Event Date & Time").fill(futureDateValue());
  27 |         await page.getByLabel("Price ($)").fill("200");
  28 |         await page.getByLabel("Total Seats").fill("50");
  29 |         await page.locator("#add-event-btn").click();
  30 |         await expect(page.getByText("Event created!")).toBeVisible();
  31 | 
  32 |         //Find the event card and capture seats
  33 |         await page.goto("https://eventhub.rahulshettyacademy.com/events");
  34 |         const allCards = page.locator("[data-testid='event-card']");
  35 |         await expect(allCards.first()).toBeVisible();
  36 |         const myCard = allCards.filter({ hasText: eventTitle });
  37 |         await expect(myCard).toBeVisible({timeout: 5000});
  38 |         const seatText = await myCard.locator(':has-text("seat")').textContent();
  39 |         const seatsBeforeBooking = parseInt(seatText);
  40 | 
  41 |         //Start booking
  42 |         await myCard.locator("[data-testid='book-now-btn']").click(); 
  43 | 
  44 |         //Fill booking form
  45 |         await expect(page.locator("#ticket-count")).toHaveText("1");
  46 |         await page.getByLabel("Full Name").fill("Test Tester");
  47 |         await page.locator("#customer-email").fill("test@test.com");
  48 |         await page.getByPlaceholder("+91 98765 43210").fill("123456");
  49 |         await page.locator(".confirm-booking-btn").click();
  50 | 
  51 |         //Verify booking confirmation
  52 |         const bookingReference = page.locator(".booking-ref").first();
  53 |         await expect(bookingReference).toBeVisible();
  54 |         const bookingRef = (await bookingReference.innerText()).trim();
  55 | 
  56 |         //Verify in My Bookings
  57 |         await page.getByRole("link", {name: "View My Bookings"}).click();
  58 |         await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings");
  59 |         const allBookingCards = page.locator("#booking-card");
  60 |         await expect(allBookingCards.first()).toBeVisible(); 
  61 |         const referenceCard = allBookingCards.filter({
  62 |             has: page.locator(".booking-ref", { hasText: bookingRef })
  63 |           });
  64 |         await expect(referenceCard).toBeVisible();
  65 |         await expect(referenceCard).toContainText(eventTitle);
  66 | 
  67 |         //Verify seat reduction
  68 |         await page.goto("https://eventhub.rahulshettyacademy.com/events");
  69 |         await expect(allCards.first()).toBeVisible();
  70 |         await expect(allCards.filter({hasText: eventTitle})).toBeVisible();
  71 |         const seatsAfterBooking = parseInt(await myCard.locator(':has-text("seat")').textContent());
  72 |         expect(seatsAfterBooking).toEqual(seatsBeforeBooking-1);
  73 |     });
```