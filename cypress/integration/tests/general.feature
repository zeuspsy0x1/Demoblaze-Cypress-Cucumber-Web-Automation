Feature: The users should be able to see and interact with the general main elements on the webpage

Background: Background name
    Given User is on the demoblaze home page

@generalTests @regression
Scenario: Categories is shown on the home page
    Then categories element is visible

@generalTests @regression
Scenario: When user clicks Laptops in categories, the user can see only laptops as products
    When User clicks on the laptops category
    Then user can only see laptops as products

@generalTests @regression
Scenario: When user clicks Laptops in categories, the user can see only laptops as products
    When User clicks on the phones category
    Then user can only see phones as products

@generalTests @regression
Scenario: When user clicks Laptops in categories, the user can see only laptops as products
    When User clicks on the monitors category
    Then user can only see monitors as products

@generalTests @regression
Scenario: When user clicks on a product, the page should should navigate to a product url
    Given User clicks on the laptops category
    When User clicks on the product Sony vaio i5
    Then user is redirected to a product page

@generalTests @regression
Scenario: When user is on a product detail page, the user should be able to add it to the cart
    Given User clicks on the laptops category
    And User clicks on the product Sony vaio i5
    When User clicks on the add to cart button
    Then The product is added to the cart

@generalTests @regression
Scenario: When user is on the cart page and has a product on the cart, the user should be able to delete it
    Given User clicks on the laptops category
    And User clicks on the product Sony vaio i5
    And User clicks on the add to cart button
    And The product is added to the cart
    When The user clicks delete from the cart
    Then The product is deleted from it

    @generalTests @regression
Scenario: When user is on the cart and has a product on it, the user should be able to place an order and buy it
    Given User clicks on the laptops category
    And User clicks on the product Sony vaio i5
    And User clicks on the add to cart button
    And User tries to buy the product
    Then The purchase should be successful