import { ProductionBlueprint } from 'GAME/classes';
import { oreWare, batteryWare } from '../wares';

export const oreProductionBlueprint = new ProductionBlueprint({
    input: [[batteryWare, 3]],
    output: [[oreWare, 2]],
    time: 5
});
