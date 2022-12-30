Feature: The users should be able navigate between diferent elements on the navigation bar

Background: Background step for the navigation tests
    Given User is on the demoblaze home page

@NavigationTests @regression @smoke
Scenario: carousel element is shown after clicking on the home button
    When User clicks on the home navigation button
    Then carousel element is shown on the home page

@NavigationTests @regression @smoke
Scenario: the user should see a contact modal when navigating to the contact
    When User clicks on the contact navigation button
    Then a contact modal is opened

@NavigationTests @regression @smoke
Scenario: the user should see an about us modal when navigating to the About Us
    When User clicks on the About Us navigation button
    Then an About Us modal is opened
    
@NavigationTests @regression @smoke
Scenario: the user should navigate to the Cart page when clicking on the cart button
    When User clicks on the cart navigation button
    Then the user is navigated to the cart page
    And Being redirected to /Cart.html should be like clicking the Cart navigation button, so
    Then the user is navigated to the cart page

@NavigationTests @regression @smoke
Scenario: the user should see an about us modal when navigating to the About Us
    When User clicks on the About Us navigation button
    Then an About Us modal is opened
    
@NavigationTests @regression @smoke
Scenario: the user should see a Log In modal when navigating to the About Us
    When User clicks on the Log In navigation button
    Then a Log In modal is opened

@NavigationTests @regression @smoke
Scenario: the user should see a Sign Up modal when navigating to the About Us
    When User clicks on the Sign Up navigation button
    Then a Sign Up modal is opened
     
