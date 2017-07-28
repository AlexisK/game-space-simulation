import { ProductionBlueprint } from 'GAME/classes';
import {batteryWare} from '../wares';

export const batteryProductionBlueprint = new ProductionBlueprint({
    input: [],
    output: [[batteryWare, 1]],
    time: 2
});
