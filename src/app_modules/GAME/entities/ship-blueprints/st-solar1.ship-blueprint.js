import {ShipBlueprint} from 'GAME/classes';
import {stShipType} from 'GAME/entities/ship-types';

export var stSolar1ShipBlueprint = new ShipBlueprint({
    name: 'Solar Factory',
    shipType: stShipType,
    cargo: 10000,
    sizeX: 60,
    sizeY: 60
});
