import { Production } from 'GAME/classes';
import {batteryWare} from '../wares';

export const batteryProduction = new Production({
    input: [],
    output: [[batteryWare, 1]],
    time: 3
});
