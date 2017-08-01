import {ShipBlueprint} from 'GAME/classes';
import {fShipType} from 'GAME/entities/ship-types';

export var dummyShipBlueprint = new ShipBlueprint({
    name: 'Dummy',
    shipType: fShipType,
    blocks: []
});
