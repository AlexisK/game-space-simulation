import { ShipBlueprint } from 'GAME/classes';
import { stShipType } from 'GAME/entities/ship-types';
import { batteryProductionBlueprint } from 'GAME/entities/production-blueprints';
import * as blockBlueprints from 'GAME/entities/block-blueprints';

export var stSolar1ShipBlueprint = new ShipBlueprint({
    name       : 'Solar Factory',
    shipType   : stShipType,
    cargo      : 10000,
    production : [batteryProductionBlueprint],
    blocks     : [
        [blockBlueprints.ProductionSolar1BlockBlueprint, 0, 0, 0],
        [blockBlueprints.Dock1BlockBlueprint, -120, 0, Math.PI],
        [blockBlueprints.Dock1BlockBlueprint, 120, 0, 0]
    ]
});
