let homepageSelectors = {
    carousel: '.carousel-inner',
    carouselItems: '.carousel-inner > .carousel-item',
    carouselItemsCount: 3
}

class HomePage {
    getCarousel() { return cy.get(homepageSelectors.carousel)}
    getCarouselItems() { return cy.get(homepageSelectors.carouselItems)}
}

export default HomePage;