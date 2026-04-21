const {test, expect} = require('@playwright/test');


test('Booking Flow', async ({page})=>
    { 
        //Login 
        await page.goto("https://eventhub.rahulshettyacademy.com");
        await page.getByPlaceholder("you@email.com").fill("test@test.com");
        await page.getByLabel("Password").fill("Test123#");
        await page.locator("#login-btn").click();
        await expect(page.getByText("Browse Events")).toBeVisible(); 

        //Create a new event 
        await page.goto("https://eventhub.rahulshettyacademy.com/admin/events");
        const eventTitle = `Test Event ${Date.now()}`;
        await page.locator("#event-title-input").fill(eventTitle);
        await page.locator("#admin-event-form textarea").fill("My Event Description");
        await page.getByLabel("City").fill("Amsterdam");
        await page.getByLabel("Venue").fill("Bijmer Arena");

        function futureDateValue() {
            const date = new Date();
            date.setDate(date.getDate() + 1);
            return date.toISOString().slice(0, 16);
        }
        await page.getByLabel("Event Date & Time").fill(futureDateValue());
        await page.getByLabel("Price ($)").fill("200");
        await page.getByLabel("Total Seats").fill("50");
        await page.locator("#add-event-btn").click();
        await expect(page.getByText("Event created!")).toBeVisible();

        //Find the event card and capture seats
        await page.goto("https://eventhub.rahulshettyacademy.com/events");
        const allCards = page.locator("[data-testid='event-card']");
        await expect(allCards.first()).toBeVisible();
        const myCard = allCards.filter({ hasText: eventTitle });
        await expect(myCard).toBeVisible({timeout: 5000});
        const seatText = await myCard.locator(':has-text("seat")').textContent();
        const seatsBeforeBooking = parseInt(seatText);

        //Start booking
        await myCard.locator("[data-testid='book-now-btn']").click(); 

        //Fill booking form
        await expect(page.locator("#ticket-count")).toHaveText("1");
        await page.getByLabel("Full Name").fill("Test Tester");
        await page.locator("#customer-email").fill("test@test.com");
        await page.getByPlaceholder("+91 98765 43210").fill("123456");
        await page.locator(".confirm-booking-btn").click();

        //Verify booking confirmation
        const bookingReference = page.locator(".booking-ref").first();
        await expect(bookingReference).toBeVisible();
        const bookingRef = (await bookingReference.innerText()).trim();

        //Verify in My Bookings
        await page.getByRole("link", {name: "View My Bookings"}).click();
        await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings");
        const allBookingCards = page.locator("#booking-card");
        await expect(allBookingCards.first()).toBeVisible(); 
        const referenceCard = allBookingCards.filter({
            has: page.locator(".booking-ref", { hasText: bookingRef })
          });
        await expect(referenceCard).toBeVisible();
        await expect(referenceCard).toContainText(eventTitle);

        //Verify seat reduction
        await page.goto("https://eventhub.rahulshettyacademy.com/events");
        await expect(allCards.first()).toBeVisible();
        await expect(allCards.filter({hasText: eventTitle})).toBeVisible();
        const seatsAfterBooking = parseInt(await myCard.locator(':has-text("seat")').textContent());
        expect(seatsAfterBooking).toEqual(seatsBeforeBooking-1);
    });