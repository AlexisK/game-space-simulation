import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';
import {alloyProductionBlueprint} from 'GAME/entities/production-blueprints';

export var stAlloyFactory1ShipBlueprint = new ShipBlueprint({
    name: 'Alloy Melting Factory',
    shipType: stShipType,
    cargo: 80000,
    sizeX: 240,
    sizeY: 80,
    production: [alloyProductionBlueprint]
});
