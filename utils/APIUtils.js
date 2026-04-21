const { expect } = require('@playwright/test');

class APIUtils {

    constructor(apiContext, loginPayLoad) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }


    async getToken() {
        //Login API 
        //const apiContext = await request.newContext();
        const logingResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad
            })
        expect((logingResponse).ok()).toBeTruthy();
        const loginResponseJSON = await logingResponse.json();
        const token = loginResponseJSON.token;
        //console.log(token);
        return token;
    }

    async createOrder(orderPayLoad) {
        let response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayLoad,
                headers: {
                    'Authorization': response.token, 
                    'Content-Type': 'application/json'
                },
            })
        const orderResponseJSON = await orderResponse.json()
        const orderId = orderResponseJSON.orders[0];
        //console.log(orderId);
        response.orderId = orderId; 
        return response;

    }
}

module.exports = APIUtils;