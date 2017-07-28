import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';
import {batteryProduction} from 'GAME/entities/productions';

export var stSolar1ShipBlueprint = new ShipBlueprint({
    name: 'Solar Factory',
    shipType: stShipType,
    cargo: 10000,
    sizeX: 120,
    sizeY: 120,
    production: [batteryProduction]
});
