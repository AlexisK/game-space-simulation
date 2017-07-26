export class Sector {
    constructor(params) {
        this.name = '';
        this.sizeX = 0;
        this.sizeY = 0;
        Object.assign(this, params);
    }
}