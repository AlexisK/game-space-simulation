export class Ware {
    constructor(params) {
        this.name = '';
        this.price = 0;
        Object.assign(this, params);
    }
}