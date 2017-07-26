import { Production } from 'GAME/classes';
import { oreWare, batteryWare } from '../wares';

export const oreProduction = new Production({
    input: [[batteryWare, 3]],
    output: [[oreWare, 2]],
    time: 10
});
