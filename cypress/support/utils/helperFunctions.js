export function hasClass(element, className) {
    return element.should('have.class', className);
}

export function doesntHasClass(element, className) {
    return element.should('not.have.class', className);
}