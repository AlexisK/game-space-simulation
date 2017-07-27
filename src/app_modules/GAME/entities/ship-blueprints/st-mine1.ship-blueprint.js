import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';
import {oreProduction} from 'GAME/entities/productions';

export var stMine1ShipBlueprint = new ShipBlueprint({
    name: 'Mine',
    shipType: stShipType,
    cargo: 40000,
    sizeX: 30,
    sizeY: 30,
    production: [oreProduction]
});
