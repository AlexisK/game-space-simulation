import { ProductionBlueprint } from 'GAME/classes';
import { oreWare, batteryWare, alloyWare } from '../wares';

export const alloyProductionBlueprint = new ProductionBlueprint({
    input: [[batteryWare, 1],[oreWare, 2]],
    output: [[alloyWare, 1]],
    time: 10
});
