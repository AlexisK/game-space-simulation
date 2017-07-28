import { SimulationActor } from './simulation-actor.class';
import {config} from 'GAME/config';
import {removeFromList} from 'utils/helpers';

export class Ship extends SimulationActor {
    constructor(blueprint) {
        super();
        this.docked    = [];
        this.aiPackage = null;
        this.target    = null;
        this.blueprint = blueprint;
        this.dockedTo  = null;
        this.normalize();
    }

    normalize() {
        this.hasDock         = this.blueprint.dockSize > 0;
        this.hasDockingSpace = this.docked.length < this.blueprint.dockSize;
        this.isStation       = this.blueprint.speed === 0;
    }

    requestDock(ship) {
        if ( this.hasDockingSpace && this.getDistance(ship) <= config.dockingDistance ) {
            this.docked.push(ship);
            ship._dockTo(this);
            this.hasDockingSpace = this.docked.length < this.blueprint.dockSize;
            return true;
        }
        return false;
    }

    requestUndock(ship) {
        if ( removeFromList(this.docked, ship) ) {
            ship._undock(this.sector)
        }
    }

    moveTo(target) {
        this.angle   = this.getAngle(this.target);
        let distance = this.getDistance(this.target);
        if ( distance < this.blueprint.speed ) {
            return true;
        }
        Object.assign(this, this.calcCordsByTargetAndDistance(this.target, this.blueprint.speed));
        return false;
    }

    dockTo(target) {
        if ( this.dockedTo ) {
            this.dockedTo.requestUndock(this);
        }
        return target.requestDock(this);
    }

    _dockTo(target) {
        if ( this.sector ) {
            this.sector.unregisterActor(this);
        }
        this.dockedTo = target;
    }

    undock() {
        if ( this.dockedTo ) {
            this.dockedTo.requestUndock(this);
        }
    }

    _undock(sector) {
        sector.registerActor(this, this.dockedTo);
        this.dockedTo = null;
    }
}