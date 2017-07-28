import { AiPackage } from 'GAME/classes';
import * as aiAction from 'GAME/entities/ai-actions';
import {config} from 'GAME/config';

export const patrolAiPackage = new AiPackage({
    actions : [
        [aiAction.moveToAiAction, {
            target : (self, ship, params) => {
                let targets = ship.sector.actors;
                if ( !targets.length ) { return [ship]; }
                return targets[parseInt(Math.random() * targets.length)];
            },
            distance: config.followDistance
        }]
    ]
});