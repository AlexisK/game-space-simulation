function createBlock(block) {
    let element       = document.createElement('div');
    element.className = 'block ' + block.blueprint.cls;

    element.style.width = block.blueprint.sizeX + 'px';
    element.style.height = block.blueprint.sizeY + 'px';
    element.style.left           = block.x - (block.blueprint.sizeX / 2) + 'px';
    element.style.bottom         = block.y - (block.blueprint.sizeY / 2) + 'px';
    element.style.transform = ['rotate(', 'rad)'].join(-block.angle);

    return element;
}

function createActor(actor) {
    let element       = document.createElement('div');
    element.className = 'ship ' + actor.blueprint.shipType.code;

    element.body           = document.createElement('div');
    element.body.className = 'body';
    element.appendChild(element.body);

    element.label             = document.createElement('div');
    element.label.className   = 'label';
    element.label.textContent = actor.blueprint.name;
    element.appendChild(element.label);

    actor.blocks.forEach(block => {
        let blockElement = createBlock(block);
        element.body.appendChild(blockElement);
    });

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
