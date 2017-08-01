import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';
import {oreProductionBlueprint} from 'GAME/entities/production-blueprints';
import * as blockBlueprints from 'GAME/entities/block-blueprints';

export var stMine1ShipBlueprint = new ShipBlueprint({
    name: 'Mine',
    shipType: stShipType,
    cargo: 40000,
    production: [oreProductionBlueprint],
    dockSize: 10,
    blocks: [
        [blockBlueprints.ProductionOre1BlockBlueprint,0,0,0],
        [blockBlueprints.Dock1BlockBlueprint,-100,0,Math.PI]
    ]
});
