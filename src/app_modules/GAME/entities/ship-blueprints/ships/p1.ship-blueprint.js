import {ShipBlueprint} from 'GAME/classes';
import {pShipType} from 'GAME/entities/ship-types';
import * as blockBlueprints from 'GAME/entities/block-blueprints';

export var p1ShipBlueprint = new ShipBlueprint({
    name: 'Ship',
    shipType: pShipType,
    cargo: 10,
    speed: 6,
    blocks: [
        [blockBlueprints.HullP1BlockBlueprint,0,0,0]
    ]
});
