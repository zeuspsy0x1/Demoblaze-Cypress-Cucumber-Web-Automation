let generalPagesLocators = {
    placeOrder: 'button:contains(Place Order)',
    purchaseSweetAlert: '.sweet-alert > h2',
    cardBody: '#tbodyid',
    inputName: '#name',
    inputCountry: '#country',
    inputCity: '#city',
    inputCard: '#card',
    inputMonth: '#month',
    inputYear: '#year',
    purchaseBtn: 'button:contains(Purchase)',
}

class GeneralPages {
    getPlaceOrder() { return cy.get(generalPagesLocators.placeOrder)}
    getPurchaseSweetAlert() { return cy.get(generalPagesLocators.purchaseSweetAlert)}
    getCardBody() { return cy.get(generalPagesLocators.cardBody)}
    getInputName() { return cy.get(generalPagesLocators.inputName)}
    getInputCountry() { return cy.get(generalPagesLocators.inputCountry)}
    getInputCity() { return cy.get(generalPagesLocators.inputCity)}
    getInputCard() { return cy.get(generalPagesLocators.inputCard)}
    getInputMonth() { return cy.get(generalPagesLocators.inputMonth)}
    getInputYear() { return cy.get(generalPagesLocators.inputYear)}
    getPurchaseBtn() { return cy.get(generalPagesLocators.purchaseBtn)}

    clickPlaceOrder() { return this.getPlaceOrder().click()}    
}

export default GeneralPages; 