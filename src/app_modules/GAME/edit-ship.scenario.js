import {config} from 'GAME/config';
import { Sector, Block } from 'GAME/classes';
import { sShipEditorSectorBlueprint } from './entities/sector-blueprints';
import { dummyShipBlueprint } from './entities/ship-blueprints';
import * as blockBlueprints from './entities/block-blueprints';

function tick(stack) {
    stack.SECTOR.tick();
    stack.onTick(stack);
}

export const editShipScenario = function () {
    var stack = {
        SECTOR : new Sector(sShipEditorSectorBlueprint),
        SHIPBLUEPRINT: {},
        onTick : () => {}
    };
    stack.SHIPBLUEPRINT.__proto__ = dummyShipBlueprint;
    stack.SHIPBLUEPRINT.blocks = dummyShipBlueprint.blocks.slice();
    stack.SECTOR.init();

    stack.SHIP = stack.SECTOR.createShip({
        actor: stack.SHIPBLUEPRINT,
        x: stack.SECTOR.blueprint.sizeX/2,
        y: stack.SECTOR.blueprint.sizeY/2
    });

    stack.addBlock = (params) => {
        stack.SHIPBLUEPRINT.blocks.push(params);
        stack.SHIPBLUEPRINT.calculateBoundaries();
        stack.SHIPBLUEPRINT.createImage();
        stack.SHIP.recalculateBlocks();
        if ( stack.SHIP.element ) {
            stack.SHIP.element.parentNode.removeChild(stack.SHIP.element);
            delete stack.SHIP.element;
        }
    };

    let int = setInterval(() => {
        tick(stack);
    }, config.tickTimeframe);
    //setTimeout(() => clearInterval(int), 100);
    return stack;
};
