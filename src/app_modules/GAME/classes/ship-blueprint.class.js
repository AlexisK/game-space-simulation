export class ShipBlueprint {
    constructor(params) {
        this.name       = null;
        this.shipType   = null;
        this.cargo      = 0;
        this.speed      = 0;
        this.sizeX      = 0;
        this.sizeY      = 0;
        this.dockSize   = 0;
        this.production = [];
        this.blocks     = [];
        Object.assign(this, params);
        this.calculateBoundaries();
    }

    calculateBoundaries() {
        let top    = 0;
        let right  = 0;
        let bottom = 0;
        let left   = 0;
        this.blocks.forEach(([bp, x, y, angle]) => {
            let x2 = bp.sizeX / 2;
            let y2 = bp.sizeY / 2;
            top    = Math.max(top, y + y2);
            right  = Math.max(right, x + x2);
            bottom = Math.min(bottom, y - y2);
            left   = Math.min(left, x - x2);
        });
        this.sizeX = right - left;
        this.sizeY = top - bottom;
    }

    generateImage() {
        let canvasElement = document.createElement('canvas');
        let ctx = canvasElement.getContext('2d');
    }
}
