import { Production } from './production.class';
import {config} from 'GAME/config';
import {removeFromList} from 'utils/helpers';

export class Block {
    constructor(ship, blueprint, data) {
        this.ship = ship;
        this.blueprint = blueprint;

        this.x = 0;
        this.y = 0;
        this.angle = 0;
        Object.assign(this, data);

        this.inventory = [];
        this.docked    = [];
        this.production = this.blueprint.production.map(bp => new Production(bp));
        this.production.forEach(production => production.ship = this.ship);

        this.normalize();
    }

    normalize() {
        this.hasDock         = this.blueprint.dockSize > 0;
        this.hasDockingSpace = this.docked.length < this.blueprint.dockSize;
    }

    requestDock(ship) {
        if ( this.hasDockingSpace && this.ship.getDistance(ship) <= config.dockingDistance ) {
            this.docked.push(ship);
            ship._dockTo(this);
            this.hasDockingSpace = this.docked.length < this.blueprint.dockSize;
            return true;
        }
        return false;
    }


    requestUndock(ship) {
        if ( removeFromList(this.docked, ship) ) {
            this.ship.requestUndock(ship);
            ship._undock(this.ship.sector);
            this.hasDockingSpace = this.docked.length < this.blueprint.dockSize;
        }
    }
}