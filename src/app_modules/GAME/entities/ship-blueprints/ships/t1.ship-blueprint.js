import {ShipBlueprint} from 'GAME/classes';
import {tShipType} from 'GAME/entities/ship-types';

export var t1ShipBlueprint = new ShipBlueprint({
    name: 'Transport Heavy',
    shipType: tShipType,
    cargo: 500,
    speed: 1,
    sizeX: 80,
    sizeY: 20,
    dockSize: 5
});
