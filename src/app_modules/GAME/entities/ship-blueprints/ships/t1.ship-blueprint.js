import {ShipBlueprint} from 'GAME/classes';
import {tShipType} from 'GAME/entities/ship-types';
import * as blockBlueprints from 'GAME/entities/block-blueprints';

export var t1ShipBlueprint = new ShipBlueprint({
    name: 'Transport Heavy',
    shipType: tShipType,
    cargo: 500,
    speed: 0.5,
    dockSize: 5,
    blocks: [
        [blockBlueprints.HullMedFrontBlockBlueprint,2,0,0],
        [blockBlueprints.HullMedMiddleBlockBlueprint,0,0,0],
        [blockBlueprints.HullMedBackBlockBlueprint,-3,0,0],

        [blockBlueprints.CargoMedkBlockBlueprint,1,2,Math.PI/2],
        [blockBlueprints.CargoMedkBlockBlueprint,-1,2,Math.PI/2],
        [blockBlueprints.CargoMedkBlockBlueprint,-3,2,Math.PI/2],


        [blockBlueprints.CargoMedkBlockBlueprint,1,-2,-Math.PI/2],
        [blockBlueprints.CargoMedkBlockBlueprint,-1,-2,-Math.PI/2],
        [blockBlueprints.CargoMedkBlockBlueprint,-3,-2,-Math.PI/2],

        [blockBlueprints.Dock1BlockBlueprint,4,0,0],
    ]
});
