import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';
import {alloyProductionBlueprint} from 'GAME/entities/production-blueprints';
import * as blockBlueprints from 'GAME/entities/block-blueprints';

export var stAlloyFactory1ShipBlueprint = new ShipBlueprint({
    name: 'Alloy Melting Factory',
    shipType: stShipType,
    cargo: 80000,
    sizeX: 240,
    sizeY: 80,
    production: [alloyProductionBlueprint],
    blocks: [
        [blockBlueprints.ProductionAlloy1BlockBlueprint,0,0,0],
        [blockBlueprints.Dock1BlockBlueprint, 0, -40, 0],
        [blockBlueprints.Dock1BlockBlueprint, 0, 40, 0]
    ]
});
