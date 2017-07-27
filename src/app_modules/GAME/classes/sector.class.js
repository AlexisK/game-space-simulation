import {Ship} from './ship.class';

export class Sector {
    constructor(blueprint) {
        this.blueprint = blueprint;
        this.actors = [];
    }

    init() {
        this.blueprint.ships.forEach(this.createShip.bind(this));
    }

    createShip(rules) {
        let newActor = new Ship(rules.actor);
        Object.assign(newActor, rules);
        newActor.sector = this;
        this.actors.push(newActor);
        return newActor;
    }
}