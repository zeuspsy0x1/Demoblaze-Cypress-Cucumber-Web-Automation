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
    generalPages.getCardBody().should('contain', 'Sony vaio i5')
    }
)

When('The user clicks delete from the cart', () => {
    generalPages.getCardBody().find('a').click()
    }
)

Then('The product is deleted from it', () => {
    generalPages.getCardBody().should('not.contain', 'Sony vaio i5')
    }
)

And('User tries to buy the product', () => {
    navigation.clickCart()
    generalPages.getPlaceOrder().should('be.visible').click()
    generalPages.getInputName().type('Test')
    generalPages.getInputCountry().type('Test')
    generalPages.getInputCity().type('Test')
    generalPages.getInputCard().type('1234567890123456')
    generalPages.getInputMonth().type('12')
    generalPages.getInputYear().type('2021')
    generalPages.getPurchaseBtn().click()
    }
)

Then('The purchase should be successful',() => {
    generalPages.getPurchaseSweetAlert().should('be.visible')
})



