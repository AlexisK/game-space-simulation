import {ShipBlueprint} from 'GAME/classes';
import {pShipType} from 'GAME/entities/ship-types';

export var p1ShipBlueprint = new ShipBlueprint({
    name: 'test ship 1',
    shipType: pShipType,
    cargo: 10,
    speed: 5,
    sizeX: 12,
    sizeY: 4
});
