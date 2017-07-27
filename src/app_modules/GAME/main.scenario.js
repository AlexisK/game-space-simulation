import {Sector} from 'GAME/classes';
import {s0_0SectorBlueprint} from './entities/sector-blueprints';

function tick(stack) {
    stack.onTick(stack);
}

export const mainScenario = function() {
    var stack = {
        SECTOR: new Sector(s0_0SectorBlueprint),
        onTick: () => {}
    };
    stack.SECTOR.init();

    setInterval(() => tick(stack), 100);
    return stack;
};
