const base = require('@playwright/test');


exports.customtest = base.test.extend(
    {
        testDataForOrder: {
            username: "test@job.com",
            password: "Test123#",
            productName: "ZARA COAT 3"
        }
    }
)