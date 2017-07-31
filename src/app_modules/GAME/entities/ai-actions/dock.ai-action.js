import {AiAction} from 'GAME/classes';
import {config} from 'GAME/config';

export const dockToAiAction = new AiAction((self, ship, params) => {
    let target = AiAction.getTarget(ship, params);
    if ( target ) {
        ship.target = target;
        ship.executeAi((finish) => {
            if ( ship.target.hasDockingSpace ) {
                ship.moveTo(ship.target);
                if ( ship.dockTo(ship.target) ) {
                    finish();
                }
            } else {
                ship.moveTo(ship.target, config.followDistance + target.followOffset);
            }
        });
    }
    return {target};
});