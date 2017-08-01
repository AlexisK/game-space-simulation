import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';
import {alloyProductionBlueprint} from 'GAME/entities/production-blueprints';
import * as blockBlueprints from 'GAME/entities/block-blueprints';

export var stAlloyFactory1ShipBlueprint = new ShipBlueprint({
    name: 'Alloy Melting Factory',
    shipType: stShipType,
    cargo: 80000,
    production: [alloyProductionBlueprint],
    blocks: [
        [blockBlueprints.ProductionAlloy1BlockBlueprint,0,0,0],
        [blockBlueprints.Dock1BlockBlueprint, 0, -3, -Math.PI/2],
        [blockBlueprints.Dock1BlockBlueprint, 0, 3, Math.PI/2]
    ]
});
