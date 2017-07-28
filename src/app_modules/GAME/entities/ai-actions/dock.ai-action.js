import {AiAction} from 'GAME/classes';
import {config} from 'GAME/config';

export const dockToAiAction = new AiAction((self, ship, params) => {
    let target = AiAction.getTarget(ship, params);
    if ( target ) {
        ship.target = target;
        ship.executeAi((finish) => {
            if ( target.hasDockingSpace ) {
                ship.moveTo(target);
                if ( ship.dockTo(target) ) {
                    finish();
                }
            } else {
                ship.moveTo(target, config.followDistance + target.followOffset);
            }
        });
    }
    return {target};
});