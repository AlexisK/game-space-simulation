export class ShipBlueprint {
    constructor(params) {
        this.name = null;
        this.shipType = null;
        this.cargo = 0;
        this.speed = 0;
        this.sizeX = 2;
        this.sizeY = 2;
        this.production = [];
        Object.assign(this, params);
    }
}
