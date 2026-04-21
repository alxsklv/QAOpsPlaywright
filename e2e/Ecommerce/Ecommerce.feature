Feature: Ecommerece validation
  
  Scenario: Placing the order
    Given a login to Ecommerce application with "test@job.com" and "Test123#"
    When Add "ZARA COAT 3" to Card 
    Then Cerify "ZARA COAT 3" is displayed in the Cart
    When Enter valid details and Place the Order 
    Then Verify order is present in order history 