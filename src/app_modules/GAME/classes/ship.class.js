import { SimulationActor } from './simulation-actor.class';

export class Ship extends SimulationActor {
    constructor(blueprint) {
        super();
        this.docked    = [];
        this.aiPackage = null;
        this.target    = null;
        this.blueprint = blueprint;
        this.dockedTo = null;
        this.normalize();
    }

    normalize() {
        this.hasDock   = this.blueprint.dockSize > 0;
        this.isStation = this.blueprint.speed === 0;
    }

    requestDock(ship) {
        if ( this.docked.length < this.blueprint.dockSize ) {
            this.docked.push(ship);
            ship.dockedTo = this;
            return true;
        }
        return false;
    }

    requestUndock(ship) {
        let ind = this.docked.indexOf(ship);
    }
}