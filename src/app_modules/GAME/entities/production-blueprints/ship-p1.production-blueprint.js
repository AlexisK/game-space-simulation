import { ProductionBlueprint } from 'GAME/classes';
import { alloyWare, batteryWare } from '../wares';
import { p1ShipBlueprint } from '../ship-blueprints';

export const ship_p1ProductionBlueprint = new ProductionBlueprint({
    input: [[batteryWare, 100],[alloyWare, 300]],
    output: [[p1ShipBlueprint,1]],
    time: 120
});
