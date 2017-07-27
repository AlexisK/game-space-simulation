export class AiPackage {
    constructor(params) {
        this.actions = [];
        Object.assign(this, params);
    }

    run(ship) {
        if ( !ship.isExecutingAi ) {
            if ( this.actions.length === 0 ) {
                return;
            }
            if ( ship.aiActionIndex >= this.actions.length ) {
                ship.aiActionIndex = 0;
            }
            let actionRules = this.actions[ship.aiActionIndex];
            Object.assign(ship.aiStack, actionRules[0].run(ship, actionRules[1]));
            ship.aiActionIndex += 1;
        }
    }
}