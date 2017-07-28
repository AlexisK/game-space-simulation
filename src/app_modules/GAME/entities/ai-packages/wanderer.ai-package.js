import { AiPackage } from 'GAME/classes';
import * as aiAction from 'GAME/entities/ai-actions';

export const wandererAiPackage = new AiPackage({
    actions : [
        [aiAction.moveToAiAction, {
            target : (self, ship, params) => {
                return {
                    x: parseInt(Math.random() * ship.sector.blueprint.sizeX),
                    y: parseInt(Math.random() * ship.sector.blueprint.sizeY)
                }
            }
        }]
    ]
});