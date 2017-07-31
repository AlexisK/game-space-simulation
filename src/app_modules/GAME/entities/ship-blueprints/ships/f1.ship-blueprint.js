import {ShipBlueprint} from 'GAME/classes';
import {fShipType} from 'GAME/entities/ship-types';
import * as blockBlueprints from 'GAME/entities/block-blueprints';

export var f1ShipBlueprint = new ShipBlueprint({
    name: 'Fighter',
    shipType: fShipType,
    cargo: 5,
    speed: 8,
    blocks: [
        [blockBlueprints.HullF1BlockBlueprint,0,0,0]
    ]
});
