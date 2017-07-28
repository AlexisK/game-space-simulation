import { SimulationActor } from './simulation-actor.class';
import { Production } from './production.class';
import {config} from 'GAME/config';
import {removeFromList} from 'utils/helpers';

export class Ship extends SimulationActor {
    constructor(blueprint) {
        super();
        this.inventory = [];
        this.docked    = [];
        this.aiPackage = null;
        this.target    = null;
        this.blueprint = blueprint;
        this.dockedTo  = null;
        this.production = this.blueprint.production.map(bp => new Production(bp));
        this.production.forEach(production => production.ship = this);
        this.normalize();
    }

    normalize() {
        this.hasDock         = this.blueprint.dockSize > 0;
        this.hasDockingSpace = this.docked.length < this.blueprint.dockSize;
        this.isStation       = this.blueprint.speed === 0;
        this.followOffset = Math.max(this.blueprint.sizeX, this.blueprint.sizeY) / 2;
    }

    tick() {
        super.tick();
        this.docked.forEach(ship => ship.tick());
        this.production.forEach(production => production.tick());
    }

    moveTo(target, distance = this.blueprint.speed) {
        return super.moveTo(target, distance);
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
            ship._undock(this.sector);
            this.hasDockingSpace = this.docked.length < this.blueprint.dockSize;
        }
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