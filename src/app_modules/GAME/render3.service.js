import {ImageGenerator} from 'GAME/classes';

var imageGenerator;

export function render(stack, node) {
    if ( !imageGenerator ) {
        imageGenerator = new ImageGenerator(stack.SECTOR.blueprint.sizeX, stack.SECTOR.blueprint.sizeY);
        node.appendChild(imageGenerator.canvasElement);
    }
    imageGenerator.clear();
    let ships = stack.SECTOR.actors;

    ships.forEach(ship => {
        imageGenerator.drawImage([ship.blueprint.imageUri, ship.x, ship.y, ship.angle]);
    });

}
