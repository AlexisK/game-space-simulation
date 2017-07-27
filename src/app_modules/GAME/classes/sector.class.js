import {Ship} from './ship.class';

export class Sector {
    constructor(blueprint) {
        this.blueprint = blueprint;
        this.actors = [];
    }

    init() {
        this.blueprint.ships.forEach(rules => {
            let newActor = new Ship(rules.actor);
            Object.assign(newActor, rules);
            this.actors.push(newActor);
        });
    }
}