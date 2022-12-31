let generalPagesLocators = {
    placeOrder: 'button:contains(Place Order)',
    purchaseSweetAlert: '.sweet-alert > h2'

}

class GeneralPages {
    getPlaceOrder() { return cy.get(generalPagesLocators.placeOrder)}
    getPurchaseSweetAlert() { return cy.get(generalPagesLocators.purchaseSweetAlert)}

   

    
    clickPlaceOrder() { return this.getPlaceOrder().click()}

    
}

export default GeneralPages; 