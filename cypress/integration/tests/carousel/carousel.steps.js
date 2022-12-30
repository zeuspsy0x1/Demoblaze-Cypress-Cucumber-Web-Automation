import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pages/homepage";
const homepage = new HomePage()

Given('User is on the demoblaze home page', () => {
    cy.visit('https://www.demoblaze.com/')
    }
)

Then('carousel element is shown on the home page', () => {
    homepage.getCarousel().should('be.visible')
    }
)

Then('There are 3 images in the carousel image container', () => {
    homepage.getCarouselItemsArr().children().should('have.length', 3)
    }
)

Then('The 3 carousel images should exist', () => {
    homepage.getCarouselImgObjectById(0).should('be.exist')
    homepage.getCarouselImgObjectById(1).should('be.exist')
    homepage.getCarouselImgObjectById(2).should('be.exist')
})

Given('User sees the first image of the carousel', () => {
    homepage.getFirstCarouselItem().should('be.visible');
  });

When('User clicks the previous arrow button', () => {
    homepage.clickPreviousButton();
    });

Then('User should see the third image of the carousel', () => {
    homepage.getLastCarouselItem().should('be.visible');
    });
