import {Actor} from './actor.class';

export class SimulationActor extends Actor {
    constructor() {
        super();
        this.actor = null;
        this.x = 0;
        this.y = 0;
    }
}
