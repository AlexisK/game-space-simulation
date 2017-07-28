import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';
import {oreProductionBlueprint} from 'GAME/entities/production-blueprints';

export var stMine1ShipBlueprint = new ShipBlueprint({
    name: 'Mine',
    shipType: stShipType,
    cargo: 40000,
    sizeX: 60,
    sizeY: 60,
    production: [oreProductionBlueprint],
    dockSize: 10
});
