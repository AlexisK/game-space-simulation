import {config} from 'GAME/config';
import { Sector } from 'GAME/classes';
import { s0_0SectorBlueprint } from './entities/sector-blueprints';
import * as shipBlueprints from './entities/ship-blueprints';
import * as aiPackages from './entities/ai-packages';

function tick(stack) {
    stack.SECTOR.tick();
    stack.SECTOR.actors.forEach(actor => {
        actor.tick();
    });
    stack.onTick(stack);
}

function createAmountOfShips(stack, type, ai, amount) {
    for (let i = 0; i < amount; i++) {
        let newShip = stack.SECTOR.createShip({
            actor : type,
            x     : parseInt(Math.random() * stack.SECTOR.blueprint.sizeX),
            y     : parseInt(Math.random() * stack.SECTOR.blueprint.sizeY)
        });
        newShip.aiPackage = ai;
        stack.ships.push(newShip);
    }
}

export const mainScenario = function () {
    var stack = {
        SECTOR : new Sector(s0_0SectorBlueprint),
        ships: [],
        onTick : () => {}
    };
    stack.SECTOR.init();

    createAmountOfShips(stack, shipBlueprints.t1ShipBlueprint, aiPackages.wandererAiPackage, 2);
    createAmountOfShips(stack, shipBlueprints.f1ShipBlueprint, aiPackages.patrolAiPackage, 3);
    createAmountOfShips(stack, shipBlueprints.p1ShipBlueprint, aiPackages.traderAiPackage, 30);

    let int = setInterval(() => {
        tick(stack);
    }, config.tickTimeframe);
    //setTimeout(() => clearInterval(int), 3000);
    return stack;
};
