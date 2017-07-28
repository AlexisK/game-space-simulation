import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';
import {alloyProduction} from 'GAME/entities/productions';

export var stAlloyFactory1ShipBlueprint = new ShipBlueprint({
    name: 'Alloy Melting Factory',
    shipType: stShipType,
    cargo: 80000,
    sizeX: 240,
    sizeY: 80,
    production: [alloyProduction]
});
