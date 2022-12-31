var navigationLocators = {
    home: 'a:contains("Home")',
    contact: 'a:contains("Contact")',
    aboutUs: 'a:contains("About us")',
    cart: 'a:contains("Cart")',
    login: 'a:contains("Log in")',
    signUp: 'a:contains("Sign up")',
    contactModal: '#exampleModal',
    loginModal: '#login2',
    signUpModal: '#signin2',
    aboutUsvideoModal: '#videoModal',    
}

class Navigation{

    getHome() { return cy.get(navigationLocators.home) }
    getContact() { return cy.get(navigationLocators.contact) }
    getAboutUs() { return cy.get(navigationLocators.aboutUs) }
    getCart() { return cy.get(navigationLocators.cart) }
    getLogin() { return cy.get(navigationLocators.login) }
    getSignUp() { return cy.get(navigationLocators.signUp) }
    getContactModal() { return cy.get(navigationLocators.contactModal) }
    getAboutUsVideoModal() { return cy.get(navigationLocators.aboutUsvideoModal) }
    getLoginModal() { return cy.get(navigationLocators.loginModal) }
    getSignUpModal() { return cy.get(navigationLocators.signUpModal) }


    clickHome() { return this.getHome().click() }
    clickContact() { return this.getContact().click() }
    clickAboutUs() { return this.getAboutUs().click() }
    clickCart() { return this.getCart().click() }
    clickLogin() { return this.getLogin().click() }
    clickSignUp() { return this.getSignUp().click() }


}
export default Navigation; 