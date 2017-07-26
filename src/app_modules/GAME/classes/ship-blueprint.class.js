export class ShipBlueprint {
    constructor(params) {
        this.name = null;
        this.shipType = null;
        this.cargo = 0;
        Object.assign(this, params);
    }
}
