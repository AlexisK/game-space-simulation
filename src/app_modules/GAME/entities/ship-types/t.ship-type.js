import { ShipType } from 'GAME/classes';

export const tShipType = new ShipType({
    code   : 'T',
    name   : 'Transport',
    floors : 2,
    blocks : [500, 1000, 2000]
});