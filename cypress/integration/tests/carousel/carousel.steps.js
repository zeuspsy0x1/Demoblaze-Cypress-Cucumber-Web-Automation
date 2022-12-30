import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/homepage";
import { hasClass } from "../../../support/utils/helperFunctions";
const homepage = new HomePage()

Given('I am on the home page', () => {
    cy.visit('https://www.demoblaze.com/')
    }
)

When('I am on the home page', () => {
    cy.visit('https://www.demoblaze.com/')
    }
)

Then('carousel element is shown on the home page', () => {
    homepage.getCarousel().should('be.visible')
    }
)
/* 
When('I click the next button', () => {
    homepage.clickNextButton()
    }
    
    When('I click the previous button', () => {
        homepage.clickPreviousButton()
        }
    )
) */

Then('There are 3 images in the carousel image container', () => {
    homepage.getCarouselItemsArr().children().should('have.length', 3)
    }
)

Then('The carousel images should exist', () => {
    homepage.getCarouselImgObjectById(0).should('be.exist')
    homepage.getCarouselImgObjectById(1).should('be.exist')
    homepage.getCarouselImgObjectById(2).should('be.exist')
})




