import {AiAction} from 'GAME/classes';

export const moveToAiAction = new AiAction((self, ship, params) => {
    let target = AiAction.getTarget(ship, params);
    if ( target ) {
        ship.target = target;
        ship.executeAi((finish) => {
            if ( ship.moveTo(ship.target, params['distance']) ) {
                finish();
            }
        });
    }
    return {target};
});