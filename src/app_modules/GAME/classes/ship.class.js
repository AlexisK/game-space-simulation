import {SimulationActor} from './simulation-actor.class';

export class Ship extends SimulationActor {
    constructor(blueprint) {
        super();
        this.blueprint = blueprint;
    }
}