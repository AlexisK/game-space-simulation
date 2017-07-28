import {ShipBlueprint} from 'GAME/classes';
import {fShipType} from 'GAME/entities/ship-types';

export var f1ShipBlueprint = new ShipBlueprint({
    name: 'Fighter',
    shipType: fShipType,
    cargo: 5,
    speed: 6,
    sizeX: 10,
    sizeY: 6
});
