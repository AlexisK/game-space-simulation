import {AiAction} from 'GAME/classes';

export const dockToAiAction = new AiAction((self, ship, params) => {
    let target = AiAction.getTarget(ship, params);
    if ( target ) {
        ship.target = target;
        ship.executeAiOnce((finish) => {
            ship.dockTo(target);
            finish();
        });
    }
    return {target};
});