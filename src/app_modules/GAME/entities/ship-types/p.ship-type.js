import { ShipType } from 'GAME/classes';

export const pShipType = new ShipType({
    code   : 'P',
    name   : 'Personal',
    floors : 2,
    blocks : [100, 200, 300]
});