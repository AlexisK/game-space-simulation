export class BlockBlueprint {
    constructor(params) {
        this.name       = null;
        this.cls        = '';
        this.cargo      = 0;
        this.sizeX      = 2;
        this.sizeY      = 2;
        this.dockSize   = 0;
        this.production = [];
        Object.assign(this, params);
    }
}
