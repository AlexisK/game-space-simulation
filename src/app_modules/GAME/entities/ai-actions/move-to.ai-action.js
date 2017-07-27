import {AiAction} from 'GAME/classes';

export const moveToAiAction = new AiAction((self, ship, params) => {
    let target = params.target || ship.target;
    if ( target ) {
        if ( typeof(target) === 'function' ) {
            target = target(self, ship, params);
        }
        ship.executeAi((finish) => {
            ship.target = target;
            ship.angle = ship.getAngle(ship.target);
            let distance = ship.getDistance(ship.target);
            if ( distance < ship.blueprint.speed * 2 ) {
                finish();
            } else {
                Object.assign(ship, ship.calcCordsByTargetAndDistance(ship.target, ship.blueprint.speed));
            }
        });
    }
    return {target};
});