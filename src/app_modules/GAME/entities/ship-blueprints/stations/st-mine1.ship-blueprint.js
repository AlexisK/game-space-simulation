import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';
import {oreProduction} from 'GAME/entities/productions';

export var stMine1ShipBlueprint = new ShipBlueprint({
    name: 'Mine',
    shipType: stShipType,
    cargo: 40000,
    sizeX: 60,
    sizeY: 60,
    production: [oreProduction],
    dockSize: 10
});
