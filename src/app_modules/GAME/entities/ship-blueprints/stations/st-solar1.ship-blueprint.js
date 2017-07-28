import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';
import {batteryProductionBlueprint} from 'GAME/entities/production-blueprints';

export var stSolar1ShipBlueprint = new ShipBlueprint({
    name: 'Solar Factory',
    shipType: stShipType,
    cargo: 10000,
    sizeX: 120,
    sizeY: 120,
    production: [batteryProductionBlueprint]
});
