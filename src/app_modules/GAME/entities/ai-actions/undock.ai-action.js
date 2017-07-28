import {AiAction} from 'GAME/classes';

export const undockAiAction = new AiAction((self, ship, params) => {
    ship.executeAiOnce((finish) => {
        ship.undock();
        finish();
    });
});