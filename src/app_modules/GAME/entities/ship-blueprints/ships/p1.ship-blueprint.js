import {ShipBlueprint} from 'GAME/classes';
import {pShipType} from 'GAME/entities/ship-types';

export var p1ShipBlueprint = new ShipBlueprint({
    name: 'Ship',
    shipType: pShipType,
    cargo: 10,
    speed: 4,
    sizeX: 12,
    sizeY: 4
});
