export class SectorBlueprint {
    constructor(params) {
        this.name = '';
        this.sizeX = 0;
        this.sizeY = 0;
        this.ships = [];
        Object.assign(this, params);
    }
}
