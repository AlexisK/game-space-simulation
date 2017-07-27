import { Sector, Ship } from 'GAME/classes';
import { s0_0SectorBlueprint } from './entities/sector-blueprints';
import * as shipBlueprints from './entities/ship-blueprints';
import * as aiPackages from './entities/ai-packages';

function tick(stack) {
    stack.SECTOR.actors.forEach(actor => {
        actor.tick();
    });
    stack.onTick(stack);
}

export const mainScenario = function () {
    var stack = {
        SECTOR : new Sector(s0_0SectorBlueprint),
        onTick : () => {}
    };
    stack.SECTOR.init();

    let ships = [];

    for (let i = 0; i < 200; i++) {
        let newShip = stack.SECTOR.createShip({
            actor : shipBlueprints.p1ShipBlueprint,
            x     : parseInt(Math.random() * stack.SECTOR.blueprint.sizeX),
            y     : parseInt(Math.random() * stack.SECTOR.blueprint.sizeY)
        });
        newShip.aiPackage = aiPackages.traderAiPackage;
        ships.push(newShip);
    }

    let int = setInterval(() => {
        tick(stack);
    }, 15);
    //setTimeout(() => clearInterval(int), 100);
    return stack;
};
