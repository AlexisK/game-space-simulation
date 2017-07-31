import {ShipBlueprint} from 'GAME/classes';
import {tShipType} from 'GAME/entities/ship-types';
import * as blockBlueprints from 'GAME/entities/block-blueprints';

export var t1ShipBlueprint = new ShipBlueprint({
    name: 'Transport Heavy',
    shipType: tShipType,
    cargo: 500,
    speed: 0.5,
    sizeX: 80,
    sizeY: 20,
    dockSize: 5,
    blocks: [
        [blockBlueprints.HullT1BlockBlueprint,0,0,0]
    ]
});
