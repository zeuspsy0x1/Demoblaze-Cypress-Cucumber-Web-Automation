import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import Homepage from "../../../support/pages/homepage";
const homepage = new Homepage()
import Navigation from "../../../support/modalsForPageStructure/navigation";
const navigation = new Navigation()
import GeneralPages from "../../../support/pages/generalPages";
const generalPages = new GeneralPages()


Given('User is on the demoblaze home page', () => {
    cy.fixture('generalData').then((generalData) => {
    cy.visit(generalData.url)
    }
)})

Then('categories element is visible', () => {
    homepage.getCategories().should('be.visible')
    }
)

When('User clicks on the laptops category', () => {
    homepage.clickLaptopCategory()
    }
)

Then('user can only see laptops as products', () => {
    homepage.getLaptopCategories().each((element) => {
        cy.wrap(element).should('contain', 'Laptop')
        })}
)
When('User clicks on the phones category', () => {
    homepage.clickPhoneCategory()
    }
)
Then('user can only see phones as products', () => {
    homepage.getPhonesCategories().each((element) => {
        cy.wrap(element).should('contain', 'Phone')
        })}
)
When('User clicks on the monitors category', () => {
    homepage.clickMonitorCategory()
    }
)
Then('user can only see monitors as products', () => {
    homepage.getMonitorCategories().each((element) => {
        cy.wrap(element).should('contain', 'Monitor')
        })}
)

When('User clicks on the product Sony vaio i5', () => {
    homepage.clickSonyVaioI5()
    }
)

Then('user is redirected to a product page', () => {
    cy.url().should('include', 'prod')
    }
)

When('User clicks on the add to cart button', () => {
    homepage.getAddToCartBtn().should('be.visible').click()
    }
)

Then('The product is added to the cart', () => {
    navigation.getCart().should('be.visible')
    navigation.clickCart()
    cy.get('#tbodyid').should('contain', 'Sony vaio i5')
    }
)

When('The user clicks delete from the cart', () => {
    cy.get('#tbodyid').find('a').click()
    }
)

Then('The product is deleted from the it', () => {
    cy.get('#tbodyid').should('not.contain', 'Sony vaio i5')
    }
)

And('User tries to buy the product', () => {
    navigation.clickCart()
    generalPages.getPlaceOrder().should('be.visible').click()
    cy.get('#name').type('Test')
    cy.get('#country').type('Test')
    cy.get('#city').type('Test')
    cy.get('#card').type('1234567890123456')
    cy.get('#month').type('12')
    cy.get('#year').type('2021')
    cy.get('button').contains('Purchase').click()
    }
)

Then('The purchase should be successful',() => {
    generalPages.getPurchaseSweetAlert().should('be.visible')
})

