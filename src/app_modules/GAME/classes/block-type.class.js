export class BlockType {
    constructor(params) {
        this.name = '';
        this.isWalkable = false;
        this.isWall = false;
        this.isFunctional = false;
        Object.assign(this, params);
    }
}
