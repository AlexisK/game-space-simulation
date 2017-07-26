export class ShipType {

    constructor(params) {
        this.code = 'NONE';
        this.name = '';
        this.floors = 1;
        this.blocks = [1];
        this.canUseWeapons = false;
        this.canHavePoliceLicense = false;

        Object.assign(this, params);
    }
}