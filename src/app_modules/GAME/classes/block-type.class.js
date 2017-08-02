export class BlockType {
    constructor(params) {
        this.name = '';
        this.isWalkable = false;
        this.isWall = false;
        this.isFunctional = false;
        Object.assign(this, params);
        this.normalizeLevels();
    }

    normalizeLevels() {
        this.levels = {
            1: this.isWalkable, // floor
            3: this.isWall,     // wall
            5: true             // roof
        };
    }
}
