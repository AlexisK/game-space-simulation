export class Production {
    constructor(params) {
        this.input = [];
        this.output = [];
        this.time = 1;
        Object.assign(this, params);
    }
}