import {Ship} from './ship.class';

export class Sector {
    constructor(blueprint) {
        this.blueprint = blueprint;
        this.actors = [];
        this.ships = [];
        this.stations = [];
        this.docks = [];
    }

    init() {
        this.blueprint.ships.forEach(this.createShip.bind(this));
    }

    getActorsByType(type) {
        return this.actors.filter(act => act.blueprint.shipType === type);
    }

    createShip(rules) {
        let newActor = new Ship(rules.actor);
        Object.assign(newActor, rules);
        newActor.sector = this;
        this.registerActor(newActor);

        return newActor;
    }

    registerActor(actor) {
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
}