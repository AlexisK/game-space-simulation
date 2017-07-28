import { removeFromList } from 'utils/helpers';
import { Ship } from './ship.class';

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
        actor._registerInSector(this);
        if ( target ) {
            actor.x = target.x;
            actor.y = target.y;
        }

        this.actors.push(actor);
        if ( actor.isStation ) {
            this.stations.push(actor);
            if ( actor.hasDock ) {
                this.docks.push(actor);
            }
        } else {
            this.ships.push(actor);
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