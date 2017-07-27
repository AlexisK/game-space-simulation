import {SimulationActor} from './simulation-actor.class';

export class Ship extends SimulationActor {
    constructor(blueprint) {
        super();
        this.blueprint = blueprint;
        this.aiPackage = null;
        this.target = null;
    }

    tick() {
        if ( this.target ) {
            this.angle = this.getAngle(this.target);
            let distance = this.getDistance(this.target);
            if ( distance < this.blueprint.speed * 2 ) {
                this.target = null;
            } else {
                Object.assign(this, this.calcCordsByTargetAndDistance(this.target, this.blueprint.speed));
            }
        }
    }
}