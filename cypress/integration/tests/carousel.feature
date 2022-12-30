Feature: The users should be able to see and interact with the main carousel elements on the homepage

Background: Background name
    Given User is on the demoblaze home page

@carouselTests @homepage @regression
Scenario: carousel element is shown on the home page
    Then carousel element is shown on the home page

@carouselTests @homepage @regression
Scenario: carousel images container is shown on the homepage
    Then There are 3 images in the carousel image container

@carouselTests @homepage @regression
Scenario: carousel images should exist
    Then The 3 carousel images should exist

@carouselTests @homepage @regression @smoke
Scenario: while seeing the first image clicking the previous button should make the third image appear
    Given User sees the first image of the carousel
    When User clicks the previous arrow button
    Then User should see the third image of the carousel
