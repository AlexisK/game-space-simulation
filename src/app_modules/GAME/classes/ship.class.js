import { ActorAi } from './actor-ai.class';
import { Production } from './production.class';
import { config } from 'GAME/config';

export class Ship extends ActorAi {
    // INIT
    constructor(blueprint) {
        super();
        this.blueprint  = blueprint;
        this.production = this.blueprint.production.map(bp => new Production(bp));
        this.production.forEach(production => production.ship = this);
        this.calculateParams();
        this.normalize();
    }

    normalize() {
        super.normalize();
        this.isStation         = this.blueprint.speed === 0;
        this.followOffset      = Math.max(this.blueprint.sizeX, this.blueprint.sizeY) / 2;
        this.dockRequestOffset = this.followOffset + config.dockingRequestDistance;
    }


    // TICK
    tick() {
        super.tick();
        this.docked.forEach(ship => ship.tick());
        this.production.forEach(production => production.tick());
    }


    //
    moveTo(target, distance = this.blueprint.speed) {
        return super.moveTo(target, distance);
    }
}