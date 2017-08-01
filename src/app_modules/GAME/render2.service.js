import * as Dom from 'utils/dom';

function createActor(actor) {
    let element       = Dom.cr('div', 'ship ' + actor.blueprint.shipType.code);

    element.body           = Dom.cr('img', 'body', element);
    actor.blueprint.getImageData
        .then(({uri}) => element.body.src = uri);

    element.label             = Dom.cr('div', 'label', element);
    element.label.textContent = actor.blueprint.name;

    element.body.style.width = actor.blueprint.sizeX + 'px';
    element.body.style.height = actor.blueprint.sizeY + 'px';
    element.body.style.left = -actor.blueprint.sizeX/2 + 'px';
    element.body.style.top = -actor.blueprint.sizeY/2 + 'px';

    return element;
}

export function render(stack, node) {
    let ships = stack.SECTOR.actors;

    node.style.width  = stack.SECTOR.blueprint.sizeX + 'px';
    node.style.height = stack.SECTOR.blueprint.sizeY + 'px';

    ships.forEach(ship => {
        if ( !ship.element ) {
            ship.element = createActor(ship);
            node.appendChild(ship.element);
        }
        ship.element.style.left           = ship.x + 'px';
        ship.element.style.bottom         = ship.y + 'px';
        ship.element.body.style.transform = ['rotate(', 'rad)'].join(-ship.angle);
    });

    stack.SECTOR.removed.forEach(ship => {
        if ( ship.element ) {
            node.removeChild(ship.element);
            delete ship.element;
        }
    })
}
