import {AiAction} from 'GAME/classes';

export const moveToAiAction = new AiAction((self, ship, params) => {
    let target = params.target || ship.target;
    if ( target ) {
        if ( typeof(target) === 'function' ) {
            target = target(self, ship, params);
        }
        ship.target = target;
        ship.executeAi((finish) => {
            if ( ship.moveTo(ship.target) ) {
                finish();
            }
        });
    }
    return {target};
});