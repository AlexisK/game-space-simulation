import { AiPackage } from 'GAME/classes';
import { moveToAiAction, waitAiAction } from 'GAME/entities/ai-actions';
import { stShipType } from 'GAME/entities/ship-types';

export const traderAiPackage = new AiPackage({
    actions : [
        [moveToAiAction, {
            target : (self, ship, params) => {
                let targets = ship.sector.docks;
                if ( !targets.length ) { return [ship]; }
                return targets[parseInt(Math.random() * targets.length)];
            }
        }],
        [waitAiAction, {
            time : () => parseInt(Math.random() * 4) + 1000
        }]
    ]
});