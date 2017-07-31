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
        [blockBlueprints.HullMedFrontBlockBlueprint,38,0,0],
        [blockBlueprints.HullMedMiddleBlockBlueprint,0,0,0],
        [blockBlueprints.HullMedBackBlockBlueprint,-50,0,0],

        [blockBlueprints.CargoMedkBlockBlueprint,14,26,Math.PI/2],
        [blockBlueprints.CargoMedkBlockBlueprint,-13,26,Math.PI/2],
        [blockBlueprints.CargoMedkBlockBlueprint,-40,26,Math.PI/2],


        [blockBlueprints.CargoMedkBlockBlueprint,14,-26,-Math.PI/2],
        [blockBlueprints.CargoMedkBlockBlueprint,-13,-26,-Math.PI/2],
        [blockBlueprints.CargoMedkBlockBlueprint,-40,-26,-Math.PI/2],

        [blockBlueprints.Dock1BlockBlueprint,55,0,0],
    ]
});
