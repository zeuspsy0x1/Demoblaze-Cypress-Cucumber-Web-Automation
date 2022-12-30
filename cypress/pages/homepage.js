var homepageSelectors = {
    carousel: '.carousel-inner',
    carouselItemsCount: '.carousel-inner > .carousel-item',
    carouselItems: '.d-block',
    nextButton: '.carousel-control-next',
    previousButton: '.carousel-control-prev',
}

class HomePage {
    getCarousel() { return cy.get(homepageSelectors.carousel)}
    //getCarouselItems() { return cy.get(homepageSelectors.carouselItems)}
    getNextButton() { return cy.get(homepageSelectors.nextButton)}
    getPreviousButton() { return cy.get(homepageSelectors.previousButton)}
    getCarouselItemsCount() { return cy.get(homepageSelectors.carouselItemsCount)}
    

    getcarouselItem(index) {
        return cy.get(homepageSelectors.carouselItems).eq(index);
    }

    getCarouselItemsArr() {
        return this.getCarouselItemsCount()
    }

    getCarouselImgObjectById(index){
        return this.getcarouselItem(index)
    }   






    /* clickNextButton() { return this.getNextButton().click()}
    clickPreviousButton() { return this.getPreviousButton().click()} */

}

export default HomePage; 