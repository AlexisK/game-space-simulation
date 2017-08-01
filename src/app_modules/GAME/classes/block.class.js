import { Actor } from './actor.class';
import { Production } from './production.class';
import {config} from 'GAME/config';
import {removeFromList} from 'utils/helpers';

export class Block extends Actor {
    constructor(ship, blueprint, data) {
        super();
        Object.assign(this, data);

        this.ship = ship;
        this.blueprint = blueprint;

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
        if ( this.hasDockingSpace ) {
            if ( this.getDistance(ship) <= config.dockingDistance ) {
                this.ship._requestDock(ship);
                this.docked.push(ship);
                this.hasDockingSpace = this.docked.length < this.blueprint.dockSize;
                ship._dockTo(this);
                return true;
            }
            return false;
        }
        ship.target = this.ship;
        return false;
    }


    requestUndock(ship) {
        if ( removeFromList(this.docked, ship) ) {
            this.hasDockingSpace = this.docked.length < this.blueprint.dockSize;
            this.ship._requestUndock(ship);
            ship._undock(this.ship.sector);
        }
    }
}