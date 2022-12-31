let homepageLocators = {
    carousel: '.carousel-inner',
    carouselItemsCount: '.carousel-inner > .carousel-item',
    carouselItems: '.d-block',
    firstImageOfTheCarousel: '.carousel-item:first-child',
    lastImageOfTheCarousel: '.carousel-item:last-child',
    previousButton: '.carousel-control-prev',
    nextButton: '.carousel-control-next',
    categories: '#cat',
    laptopCategory: 'a:contains(Laptops)',
    listedLaptops: '.card-title',
    phonesCategory: 'a:contains(Phones)',
    listedPhones: '.card-title',
    monitorCategory: 'a:contains(Monitors)',
    listedLaptops: '.card-title',
    sonyVaioI5: 'a:contains(Sony vaio i5)',
    addToCartBtn: 'a:contains(Add to cart)'

}

class HomePage {
    getCarousel() { return cy.get(homepageLocators.carousel)}
    getNextButton() { return cy.get(homepageLocators.nextButton)}
    getPreviousButton() { return cy.get(homepageLocators.previousButton)}
    getCarouselItemsCount() { return cy.get(homepageLocators.carouselItemsCount)}
    getCarouselItem(index) { return cy.get(homepageLocators.carouselItems).eq(index) }
    getCarouselItemsArr() { return this.getCarouselItemsCount()}
    getCarouselImgObjectById(index){ return this.getCarouselItem(index) }
    getFirstCarouselItem() { return cy.get(homepageLocators.firstImageOfTheCarousel) }
    getLastCarouselItem() { return cy.get(homepageLocators.lastImageOfTheCarousel) }
    getCategories() { return cy.get(homepageLocators.categories)}
    getLaptopCategories() { return cy.get(homepageLocators.laptopCategory)}
    getPhonesCategories() { return cy.get(homepageLocators.phonesCategory)}
    getMonitorCategories() { return cy.get(homepageLocators.monitorCategory)}
    getAddToCartBtn() { return cy.get(homepageLocators.addToCartBtn)}

    
    clickNextButton() { return this.getNextButton().click()}
    clickPreviousButton() { return this.getPreviousButton().click()}
    clickLaptopCategory() { return cy.get(homepageLocators.laptopCategory).click()}
    clickPhoneCategory() { return cy.get(homepageLocators.phonesCategory).click()}
    clickMonitorCategory() { return cy.get(homepageLocators.monitorCategory).click()}
    clickSonyVaioI5() { return cy.get(homepageLocators.sonyVaioI5).click()}
    clickAddToCartBtn() { return cy.get(homepageLocators.addToCartBtn).click()}
}

export default HomePage; 