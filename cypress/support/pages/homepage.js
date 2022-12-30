let homepageLocators = {
    carousel: '.carousel-inner',
    carouselItemsCount: '.carousel-inner > .carousel-item',
    carouselItems: '.d-block',
    firstImageOfTheCarousel: '.carousel-item:first-child',
    lastImageOfTheCarousel: '.carousel-item:last-child',
    
    previousButton: '.carousel-control-prev',
    nextButton: '.carousel-control-next',
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
    
    clickNextButton() { return this.getNextButton().click()}
    clickPreviousButton() { return this.getPreviousButton().click()}
    







}

export default HomePage; 