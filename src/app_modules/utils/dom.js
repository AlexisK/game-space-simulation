export function cr(tag, cls, parent) {
    let element = document.createElement(tag);
    if ( cls ) {
        element.className = cls;
    }
    if ( parent ) {
        parent.appendChild(element);
    }
    return element;
}