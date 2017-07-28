export class AiAction {

    static getTarget(ship, params) {
        let target = params.target || ship.aiStack.target || ship.target;
        if ( target ) {
            if ( typeof(target) === 'function' ) {
                target = target(self, ship, params);
            }
        }
        return target;
    }

    constructor(worker) {
        this.worker = worker;
    }

    run(ship, params = {}) {
        return this.worker(this, ship, params);
    }
}