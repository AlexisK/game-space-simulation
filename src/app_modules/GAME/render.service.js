function createActor(actor) {
    let element          = document.createElement('div');
    element.className    = 'ship '+actor.blueprint.shipType.code;

    element.body = document.createElement('div');
    element.body.className    = 'body';
    element.appendChild(element.body);

    element.style.width  = element.body.style.width  = actor.blueprint.sizeX + 'px';
    element.style.height = element.body.style.height = actor.blueprint.sizeY + 'px';

    return element;
}

export function render(stack, node) {
    let ships = stack.SECTOR.actors;

    node.style.width  = stack.SECTOR.blueprint.sizeX + 'px';
    node.style.height = stack.SECTOR.blueprint.sizeY + 'px';

    ships.forEach(ship => {
        if ( !ship.element ) {
            ship.element              = createActor(ship.actor);
            node.appendChild(ship.element);
        }
        ship.element.style.left   = ship.x + 'px';
        ship.element.style.bottom = ship.y + 'px';
    });
}
