export class AiAction {
    constructor(worker) {
        this.worker = worker;
    }

    run(ship, params = {}) {
        return this.worker(this, ship, params);
    }
}