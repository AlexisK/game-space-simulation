import { removeFromList } from 'utils/helpers';
import { Ship } from './ship.class';
import { Block } from './block.class';

export class Sector {
    constructor(blueprint) {
        this.blueprint = blueprint;
        this.actors    = [];
        this.ships     = [];
        this.stations  = [];
        this.docks     = [];
        this.removed   = [];
    }

    init() {
        this.blueprint.ships.forEach(this.createShip.bind(this));
    }

    getTarget(target) {
        if ( target instanceof Block) {
            return {
                x: (Math.cos(-target.ship.angle) * target.x - Math.sin(-target.ship.angle) * target.y) + target.ship.x,
                y: (Math.cos(target.ship.angle) * target.y + Math.sin(target.ship.angle) * target.x) + target.ship.y
            };
        }
        return target;
    }

    tick () {
        this.removed.length = 0;
    }

    getActorsByType(type) {
        return this.actors.filter(act => act.blueprint.shipType === type);
    }

    createShip(rules) {
        let newActor = new Ship(rules.actor);
        Object.assign(newActor, rules);
        this.registerActor(newActor);

        return newActor;
    }

    registerActor(actor, target) {
        target = this.getTarget(target);
        actor._registerInSector(this);
        if ( target ) {
            actor.x = target.x;
            actor.y = target.y;
        }

        this.actors.push(actor);
        if ( actor.isStation ) {
            this.stations.push(actor);
        } else {
            this.ships.push(actor);
        }
        if ( actor.hasDock ) {
            this.docks.push(actor);
        }
    }

    unregisterActor(actor) {
        if ( removeFromList(this.actors, actor) ) {
            removeFromList(this.ships, actor);
            removeFromList(this.stations, actor);
            removeFromList(this.docks, actor);
            this.removed.push(actor);
            actor._unregisterInSector();
        }
    }
}