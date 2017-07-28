import { ShipType } from 'GAME/classes';

export const fShipType = new ShipType({
    code   : 'F',
    name   : 'Fighter',
    floors : 2,
    blocks : [100, 200, 300],
    canUseWeapons: true,
    canHavePoliceLicense: true
});