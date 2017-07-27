import { Production } from 'GAME/classes';
import { alloyWare, batteryWare } from '../wares';
import { p1ShipBlueprint } from '../ship-blueprints';

export const ship_p1Production = new Production({
    input: [[batteryWare, 100],[alloyWare, 300]],
    output: [[p1ShipBlueprint,1]],
    time: 10
});
