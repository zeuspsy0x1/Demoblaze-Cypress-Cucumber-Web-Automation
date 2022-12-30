import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Navigation from "../../../support/modals/navigation";
const navigation = new Navigation()
import Homepage from "../../../support/pages/homepage";
const homepage = new Homepage()



Given('User is on the demoblaze home page', () => {
    cy.fixture('generalData').then((generalData) => {
    cy.visit(generalData.url)
    }
)})


When('User clicks on the home navigation button', () => {
    navigation.clickHome()
    }
)

Then('carousel element is shown on the home page', () => {
    homepage.getCarousel().should('be.visible')
    }
)

When('User clicks on the contact navigation button', () => {
    navigation.clickContact()
    }
)

Then('a contact modal is opened', () => {
    navigation.getContactModal().should('be.visible')
    }
)

When('User clicks on the About Us navigation button', () => {
    navigation.clickAboutUs()
    }
)
Then('an About Us modal is opened', () => {
    navigation.getAboutUsVideoModal().should('be.visible')
    }
)

When('User clicks on the cart navigation button', () => {
    navigation.clickCart()
    }
)
Then('the user is navigated to the cart page', () => {
    cy.url().should('include', '/cart.html')
    }
)

When('Being redirected to /Cart.html should be like clicking the Cart navigation button, so', () => {
    //load the data from the fixture file
    cy.fixture('generalData').then((generalData) => {
    cy.request(
            {   method: 'GET',
                url: generalData.cartUrl,
            }
        ).then((response) =>
               expect(response.status).to.equal(200)
               )
               cy.url().should('include', 'cart.html')
    }  
)})

When('User clicks on the Log In navigation button', () => {
    navigation.clickLogin()
    }
)
Then('a Log In modal is opened', () => {
    navigation.getLoginModal().should('be.visible')
    }
)

When('User clicks on the Sign Up navigation button', () => {
    navigation.clickSignUp()
    }
)
Then('a Sign Up modal is opened', () => {
    navigation.getSignUpModal().should('be.visible')
    }
)
