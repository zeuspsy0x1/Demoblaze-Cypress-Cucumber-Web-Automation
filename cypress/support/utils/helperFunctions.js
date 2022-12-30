export function hasClass(element, className) {
    return element.classList.contains(className);
}

export function doesntHasClass(element, className) {
    return element.should('not.have.class', className);
}