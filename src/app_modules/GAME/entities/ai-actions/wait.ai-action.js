import {AiAction} from 'GAME/classes';

export const waitAiAction = new AiAction((self, ship, params) => {
    let time = params.time;
    if ( time ) {
        if ( typeof(time) === 'function' ) {
            time = time();
        }
        ship.executeAiOnce((finish) => {
            setTimeout(finish, time);
        });
    }
});