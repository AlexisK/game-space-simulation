export class AiPackage {
    constructor(params) {
        this.worker = () => {};
        Object.assign(this, params);
    }

    run(ship) {
        this.worker(ship);
    }
}