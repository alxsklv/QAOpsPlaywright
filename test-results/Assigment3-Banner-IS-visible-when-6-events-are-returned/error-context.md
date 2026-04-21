# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assigment3.spec.js >> Banner IS visible when 6 events are returned
- Location: tests/Assigment3.spec.js:41:1

# Error details

```
Error: expect: Property 'then' not found.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]:
          - text: Admin
          - img [ref=e17]
        - generic [ref=e19]:
          - generic "alexeysokolnikov@gmail.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e24]:
        - heading "Upcoming Events" [level=1] [ref=e25]
        - paragraph [ref=e26]: Find your next unforgettable experience
      - generic [ref=e28]:
        - textbox "Search events, venues…" [ref=e30]
        - combobox [ref=e32] [cursor=pointer]:
          - option "All Categories" [selected]
          - option "🎙 Conference"
          - option "🎵 Concert"
          - option "⚽ Sports"
          - option "🛠 Workshop"
          - option "🎉 Festival"
        - combobox [ref=e34] [cursor=pointer]:
          - option "All Cities" [selected]
          - option "Mumbai"
          - option "Bangalore"
          - option "Delhi"
          - option "Hyderabad"
          - option "Chennai"
          - option "Pune"
      - generic [ref=e35]:
        - img [ref=e36]
        - generic [ref=e38]:
          - text: Your sandbox holds up to
          - strong [ref=e39]: 9 bookings
          - text: and you can create up to
          - strong [ref=e40]: 6 custom events
          - text: . When either limit is reached, the oldest entry is automatically replaced.
      - generic [ref=e41]:
        - article [ref=e42]:
          - generic [ref=e43]:
            - img [ref=e45]
            - generic [ref=e48]: Conference
          - generic [ref=e49]:
            - link "Tech Summit 2025" [ref=e50] [cursor=pointer]:
              - /url: /events/1
              - heading "Tech Summit 2025" [level=3] [ref=e51]
            - generic [ref=e52]:
              - generic [ref=e53]:
                - img [ref=e54]
                - generic [ref=e56]: Sun, 1 Jun
              - generic [ref=e57]:
                - img [ref=e58]
                - generic [ref=e60]: HICC, Hyderabad
            - generic [ref=e61]:
              - generic [ref=e62]:
                - paragraph [ref=e63]: $999
                - generic [ref=e64]: 150 seats available
              - link "Book Now" [ref=e65] [cursor=pointer]:
                - /url: /events/1
        - article [ref=e66]:
          - generic [ref=e67]:
            - img [ref=e69]
            - generic [ref=e72]: Concert
          - generic [ref=e73]:
            - link "Rock Night Live" [ref=e74] [cursor=pointer]:
              - /url: /events/2
              - heading "Rock Night Live" [level=3] [ref=e75]
            - generic [ref=e76]:
              - generic [ref=e77]:
                - img [ref=e78]
                - generic [ref=e80]: Thu, 5 Jun
              - generic [ref=e81]:
                - img [ref=e82]
                - generic [ref=e84]: Palace Grounds, Bangalore
            - generic [ref=e85]:
              - generic [ref=e86]:
                - paragraph [ref=e87]: $1,500
                - generic [ref=e88]: 300 seats available
              - link "Book Now" [ref=e89] [cursor=pointer]:
                - /url: /events/2
        - article [ref=e90]:
          - generic [ref=e91]:
            - img [ref=e93]
            - generic [ref=e96]: Sports
          - generic [ref=e97]:
            - link "IPL Finals" [ref=e98] [cursor=pointer]:
              - /url: /events/3
              - heading "IPL Finals" [level=3] [ref=e99]
            - generic [ref=e100]:
              - generic [ref=e101]:
                - img [ref=e102]
                - generic [ref=e104]: Tue, 10 Jun
              - generic [ref=e105]:
                - img [ref=e106]
                - generic [ref=e108]: Chinnaswamy, Bangalore
            - generic [ref=e109]:
              - generic [ref=e110]:
                - paragraph [ref=e111]: $2,000
                - generic [ref=e112]: 50 seats available
              - link "Book Now" [ref=e113] [cursor=pointer]:
                - /url: /events/3
        - article [ref=e114]:
          - generic [ref=e115]:
            - img [ref=e117]
            - generic [ref=e120]: Workshop
          - generic [ref=e121]:
            - link "UX Design Workshop" [ref=e122] [cursor=pointer]:
              - /url: /events/4
              - heading "UX Design Workshop" [level=3] [ref=e123]
            - generic [ref=e124]:
              - generic [ref=e125]:
                - img [ref=e126]
                - generic [ref=e128]: Sun, 15 Jun
              - generic [ref=e129]:
                - img [ref=e130]
                - generic [ref=e132]: WeWork, Mumbai
            - generic [ref=e133]:
              - generic [ref=e134]:
                - paragraph [ref=e135]: $500
                - generic [ref=e136]: 20 seats available
              - link "Book Now" [ref=e137] [cursor=pointer]:
                - /url: /events/4
        - article [ref=e138]:
          - generic [ref=e139]:
            - img [ref=e141]
            - generic [ref=e144]: Festival
          - generic [ref=e145]:
            - link "Lollapalooza India" [ref=e146] [cursor=pointer]:
              - /url: /events/5
              - heading "Lollapalooza India" [level=3] [ref=e147]
            - generic [ref=e148]:
              - generic [ref=e149]:
                - img [ref=e150]
                - generic [ref=e152]: Fri, 20 Jun
              - generic [ref=e153]:
                - img [ref=e154]
                - generic [ref=e156]: Mahalaxmi Racecourse, Mumbai
            - generic [ref=e157]:
              - generic [ref=e158]:
                - paragraph [ref=e159]: $3,000
                - generic [ref=e160]: 2000 seats available
              - link "Book Now" [ref=e161] [cursor=pointer]:
                - /url: /events/5
        - article [ref=e162]:
          - generic [ref=e163]:
            - img [ref=e165]
            - generic [ref=e168]: Conference
          - generic [ref=e169]:
            - link "AI & ML Expo" [ref=e170] [cursor=pointer]:
              - /url: /events/6
              - heading "AI & ML Expo" [level=3] [ref=e171]
            - generic [ref=e172]:
              - generic [ref=e173]:
                - img [ref=e174]
                - generic [ref=e176]: Wed, 25 Jun
              - generic [ref=e177]:
                - img [ref=e178]
                - generic [ref=e180]: Bangalore International Exhibition Centre, Bangalore
            - generic [ref=e181]:
              - generic [ref=e182]:
                - paragraph [ref=e183]: $750
                - generic [ref=e184]: 180 seats available
              - link "Book Now" [ref=e185] [cursor=pointer]:
                - /url: /events/6
      - link "Add New Event" [ref=e187] [cursor=pointer]:
        - /url: /admin/events
        - button "Add New Event" [ref=e188]:
          - img [ref=e189]
          - text: Add New Event
  - contentinfo [ref=e191]:
    - generic [ref=e192]:
      - generic [ref=e193]:
        - generic [ref=e194]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e195]
          - paragraph [ref=e196]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e197]:
          - heading "Popular Courses" [level=3] [ref=e198]
          - list [ref=e199]:
            - listitem [ref=e200]:
              - link "Selenium WebDriver with Java" [ref=e201] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e202]:
              - link "Playwright with JavaScript" [ref=e203] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e204]:
              - link "RestAssured API Testing" [ref=e205] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e206]:
              - link "Cypress End-to-End Testing" [ref=e207] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e208]:
              - link "Appium Mobile Testing" [ref=e209] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e210]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e211]
          - paragraph [ref=e212]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e213] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e214]:
          - heading "EventHub Practice App" [level=3] [ref=e215]
          - list [ref=e216]:
            - listitem [ref=e217]:
              - link "Browse Events" [ref=e218] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e219]:
              - link "My Bookings" [ref=e220] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e221]:
              - link "Manage Events" [ref=e222] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e223]:
              - link "API Documentation" [ref=e224] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e225]:
        - paragraph [ref=e226]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e227]:
          - link "rahulshettyacademy.com →" [ref=e228] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e229] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e230]
```

# Test source

```ts
  1   | const { test, expect} = require('@playwright/test');
  2   | 
  3   | 
  4   | const baseURL = "https://eventhub.rahulshettyacademy.com";
  5   | const userEmail = "alexeysokolnikov@gmail.com";
  6   | const password = "ZBa36ddGTKw@dVN";
  7   | 
  8   | const SIX_EVENTS_RESPONSE = {
  9   |   data: [
  10  |     { id: 1, title: 'Tech Summit 2025', category: 'Conference', eventDate: '2025-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999', totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false },
  11  |     { id: 2, title: 'Rock Night Live',  category: 'Concert',    eventDate: '2025-06-05T18:00:00.000Z', venue: 'Palace Grounds', city: 'Bangalore', price: '1500', totalSeats: 500, availableSeats: 300, imageUrl: null, isStatic: false },
  12  |     { id: 3, title: 'IPL Finals',       category: 'Sports',     eventDate: '2025-06-10T19:30:00.000Z', venue: 'Chinnaswamy', city: 'Bangalore', price: '2000', totalSeats: 800, availableSeats: 50, imageUrl: null, isStatic: false },
  13  |     { id: 4, title: 'UX Design Workshop', category: 'Workshop', eventDate: '2025-06-15T09:00:00.000Z', venue: 'WeWork', city: 'Mumbai', price: '500', totalSeats: 50, availableSeats: 20, imageUrl: null, isStatic: false },
  14  |     { id: 5, title: 'Lollapalooza India', category: 'Festival', eventDate: '2025-06-20T12:00:00.000Z', venue: 'Mahalaxmi Racecourse', city: 'Mumbai', price: '3000', totalSeats: 5000, availableSeats: 2000, imageUrl: null, isStatic: false },
  15  |     { id: 6, title: 'AI & ML Expo',    category: 'Conference',  eventDate: '2025-06-25T10:00:00.000Z', venue: 'Bangalore International Exhibition Centre', city: 'Bangalore', price: '750', totalSeats: 300, availableSeats: 180, imageUrl: null, isStatic: false },
  16  |   ],
  17  |   pagination: { page: 1, totalPages: 1, total: 6, limit: 12 },
  18  | };
  19  | 
  20  | const FOUR_EVENTS_RESPONSE = {
  21  |   data: [
  22  |     { id: 1, title: 'Tech Summit 2025', category: 'Conference', eventDate: '2025-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999', totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false },
  23  |     { id: 2, title: 'Rock Night Live',  category: 'Concert',    eventDate: '2025-06-05T18:00:00.000Z', venue: 'Palace Grounds', city: 'Bangalore', price: '1500', totalSeats: 500, availableSeats: 300, imageUrl: null, isStatic: false },
  24  |     { id: 3, title: 'IPL Finals',       category: 'Sports',     eventDate: '2025-06-10T19:30:00.000Z', venue: 'Chinnaswamy', city: 'Bangalore', price: '2000', totalSeats: 800, availableSeats: 50, imageUrl: null, isStatic: false },
  25  |     { id: 4, title: 'UX Design Workshop', category: 'Workshop', eventDate: '2025-06-15T09:00:00.000Z', venue: 'WeWork', city: 'Mumbai', price: '500', totalSeats: 50, availableSeats: 20, imageUrl: null, isStatic: false },
  26  |   ],
  27  |   pagination: { page: 1, totalPages: 1, total: 4, limit: 12 },
  28  | };
  29  | 
  30  | 
  31  | async function loginAndGoToEvents(page){
  32  |     await page.goto(baseURL);
  33  |     await page.locator('#email').fill(userEmail);
  34  |     await page.locator('#password').fill(password);
  35  |     await page.locator('#login-btn').click();
  36  |     await page.waitForLoadState("networkidle");
  37  |     await page.goto(`${baseURL}/events`);
  38  | }
  39  | 
  40  | 
  41  | test('Banner IS visible when 6 events are returned', async ({ page }) => {
  42  |     
  43  |     //intercept response and send it with fake data
  44  |     await page.route("**/api/events**",
  45  |         async route => {
  46  | 
  47  |             const response = await page.request.fetch(route.request());
  48  |             let body = JSON.stringify(SIX_EVENTS_RESPONSE);
  49  | 
  50  |             route.fulfill(
  51  |                 {
  52  |                     response,
  53  |                     body,
  54  |                     status: 200,
  55  |                     contentType: 'application/json',
  56  |                 }
  57  |             );
  58  | 
  59  | 
  60  |         }
  61  |     )
  62  | 
  63  |     await loginAndGoToEvents(page);
  64  | 
  65  |     const allCards = page.locator("[data-testid='event-card']");
  66  |     
  67  |     await expect(allCards.first()).toBeVisible(); 
  68  |     await expect(allCards).toHaveCount(6);
  69  | 
  70  |     //verify Banner
  71  |     const banner = page.locator("text=/sandbox holds up to/i");
> 72  |     await expect(banner.isVisible());
      |           ^ Error: expect: Property 'then' not found.
  73  |     await expect(banner).toContainText("9 bookings");
  74  |     
  75  | });
  76  | 
  77  | test('Banner is NOT visible when 4 events are returned', async ({ page }) => {
  78  |     
  79  |     //intercept response and send it with fake data
  80  |     await page.route("**/api/events**",
  81  |         async route => {
  82  | 
  83  |             const response = await page.request.fetch(route.request());
  84  |             let body = JSON.stringify(FOUR_EVENTS_RESPONSE);
  85  | 
  86  |             route.fulfill(
  87  |                 {
  88  |                     response,
  89  |                     body,
  90  |                     status: 200,
  91  |                     contentType: 'application/json',
  92  |                 }
  93  |             );
  94  | 
  95  | 
  96  |         }
  97  |     )
  98  | 
  99  |     await loginAndGoToEvents(page);
  100 | 
  101 |     const allCards = page.locator("[data-testid='event-card']");
  102 |     
  103 |     await expect(allCards.first()).toBeVisible(); 
  104 |     await expect(allCards).toHaveCount(4);
  105 | 
  106 |     const banner = page.locator("text=/sandbox holds up to/i");
  107 |     await expect(banner).not.toBeVisible();
  108 | });
```