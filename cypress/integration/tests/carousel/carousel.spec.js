import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/homepage";
const homepage = new HomePage()

Given('I am on the home page', () => {
    cy.visit('https://www.demoblaze.com/')
    }
)

When('I am on the home page', () => {
    cy.visit('https://www.demoblaze.com/')
    }
)

Then('I should see the Carousel', () => {
    homepage.getCarousel().should('be.visible')
    homepage.getCarouselItems().children().should('have.length', 3)
    }
)



